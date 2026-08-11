import assert from "node:assert/strict";
import { mkdtemp, mkdir, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import test from "node:test";

import {
  buildStatusSnapshot,
  readCollection,
  renderStatusMarkdown,
  updateStatus,
} from "./status.mjs";

const health = {
  state: "paused",
  dispatch: "paused",
  publishing: false,
};
const progress = {
  counts: { queued: 0, running: 0, published: 2, blocked: 1, total: 3 },
  terminal: 3,
  completionPercent: 100,
  updatedAt: "2026-08-10T22:14:07.509Z",
  lastCompletedAt: "2026-08-10T22:14:07.509Z",
};

test("builds an aligned snapshot without reviving the local supervisor", async () => {
  const root = await fixture();
  const collection = await readCollection(root);
  const snapshot = buildStatusSnapshot({
    collection,
    rolloutHealth: health,
    rolloutProgress: progress,
    acceptedManifest: { domains: ["example.com"] },
    domainSitemapXml: sitemap("example.com", "older.example"),
    snapshotAt: "2026-08-11T10:00:00.000Z",
  });

  assert.equal(snapshot.collection.publicGuides, 2);
  assert.equal(snapshot.collection.cloudAcceptedInMirror, 1);
  assert.equal(snapshot.collection.retainedPreCloudflare, 1);
  assert.deepEqual(snapshot.reconciliation.sitemapOnly, []);
  assert.deepEqual(snapshot.reconciliation.mirrorOnly, []);
  assert.equal(snapshot.localSupervisor.state, "retired");
  assert.match(renderStatusMarkdown(snapshot), /Cloudflare Workflows owns rollout execution/);
});

test("reports sitemap and mirror drift by exact domain", async () => {
  const root = await fixture();
  const snapshot = buildStatusSnapshot({
    collection: await readCollection(root),
    rolloutHealth: health,
    rolloutProgress: progress,
    acceptedManifest: { domains: ["example.com"] },
    domainSitemapXml: sitemap("example.com", "thin.example"),
    snapshotAt: "2026-08-11T10:00:00.000Z",
  });

  assert.deepEqual(snapshot.reconciliation.sitemapOnly, ["thin.example"]);
  assert.deepEqual(snapshot.reconciliation.mirrorOnly, ["older.example"]);
  assert.equal(snapshot.reconciliation.aligned, false);
});

test("writes a deterministic public snapshot", async () => {
  const root = await fixture();
  const input = {
    root,
    rolloutHealth: health,
    rolloutProgress: progress,
    acceptedManifest: { domains: ["example.com"] },
    domainSitemapXml: sitemap("example.com", "older.example"),
    snapshotAt: "2026-08-11T10:00:00.000Z",
  };
  await updateStatus(input);
  const first = await Promise.all([
    import("node:fs/promises").then(({ readFile }) => readFile(join(root, "status/index.json"), "utf8")),
    import("node:fs/promises").then(({ readFile }) => readFile(join(root, "status/STATUS.md"), "utf8")),
    import("node:fs/promises").then(({ readFile }) => readFile(join(root, "status/supervisor.json"), "utf8")),
  ]);
  await updateStatus({ ...input, snapshotAt: "2026-08-12T10:00:00.000Z" });
  const second = await Promise.all([
    import("node:fs/promises").then(({ readFile }) => readFile(join(root, "status/index.json"), "utf8")),
    import("node:fs/promises").then(({ readFile }) => readFile(join(root, "status/STATUS.md"), "utf8")),
    import("node:fs/promises").then(({ readFile }) => readFile(join(root, "status/supervisor.json"), "utf8")),
  ]);
  assert.deepEqual(second, first);
});

test("fails when README coverage does not match the guide tree", async () => {
  const root = await fixture({ omitSecondReadmeEntry: true });
  await assert.rejects(
    () => updateStatus({
      root,
      rolloutHealth: health,
      rolloutProgress: progress,
      acceptedManifest: { domains: ["example.com"] },
      domainSitemapXml: sitemap("example.com", "older.example"),
      snapshotAt: "2026-08-11T10:00:00.000Z",
    }),
    /README index does not match/,
  );
});

async function fixture({ omitSecondReadmeEntry = false } = {}) {
  const root = await mkdtemp(join(tmpdir(), "design-md-status-"));
  await mkdir(join(root, "design-md"), { recursive: true });
  await writeFile(join(root, "design-md/example.com.md"), "# Example\n");
  await writeFile(join(root, "design-md/older.example.md"), "# Older\n");
  const entries = [readmeEntry("example.com")];
  if (!omitSecondReadmeEntry) entries.push(readmeEntry("older.example"));
  await writeFile(join(root, "README.md"), entries.join("\n\n"));
  return root;
}

function readmeEntry(domain) {
  return [
    `### ${domain}`,
    "",
    `[![How ${domain} is designed](https://pin.fontofweb.com/1?format=jpg)](design-md/${domain}.md)`,
    "",
    `[Open guide](design-md/${domain}.md)`,
  ].join("\n");
}

function sitemap(...domains) {
  return `<urlset>${domains.map((domain) => (
    `<url><loc>https://design.withfudge.com/share/${domain}-design</loc></url>`
  )).join("")}</urlset>`;
}
