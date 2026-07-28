import {
  mkdir,
  readFile,
  readdir,
  rm,
  writeFile,
} from "node:fs/promises";
import { basename } from "node:path";

const origin = process.env.FUDGE_ORIGIN ?? "https://design.withfudge.com";
const backfill = process.env.FUDGE_BACKFILL === "1";
const guideDir = new URL("../design-md/", import.meta.url);
const readmePath = new URL("../README.md", import.meta.url);
const indexStart = "<!-- DESIGN_MD_INDEX_START -->";
const indexEnd = "<!-- DESIGN_MD_INDEX_END -->";

await mkdir(guideDir, { recursive: true });

let targets;
if (backfill) {
  const sitemap = await fetchText(`${origin}/sitemaps/shares.xml`);
  targets = designSharesFromSitemap(sitemap);
  if (targets.length === 0) {
    throw new Error("No accepted domain DESIGN.md shares found");
  }
} else {
  const domain = safeDomain(process.env.FUDGE_DOMAIN ?? "");
  const shareKey = process.env.FUDGE_SHARE_KEY?.trim() ?? "";
  const expectedShareKey = `${domain}-design`;
  if (shareKey !== expectedShareKey) {
    throw new Error(
      `Expected share key ${expectedShareKey}, received ${shareKey}`,
    );
  }
  targets = [{ domain, shareKey }];
}

const acceptedDomains = new Set();
const failures = [];
let updated = 0;
let cursor = 0;

await Promise.all(
  Array.from({ length: Math.min(8, targets.length) }, async () => {
    while (cursor < targets.length) {
      const target = targets[cursor];
      cursor += 1;
      await syncTarget(target);
    }
  }),
);

let removed = 0;
if (backfill) {
  for (const file of await readdir(guideDir)) {
    if (!file.endsWith(".md")) continue;
    if (acceptedDomains.has(basename(file, ".md"))) continue;
    await rm(new URL(file, guideDir));
    removed += 1;
  }
}

await updateReadmeIndex();

console.log([
  `Guides requested: ${targets.length}`,
  `Guides accepted: ${acceptedDomains.size}`,
  `Guides updated: ${updated}`,
  `Failed drafts removed: ${removed}`,
  `Failures: ${failures.length}`,
  ...failures.map((failure) => `- ${failure}`),
].join("\n"));

if (failures.length > 0) process.exitCode = 1;

async function syncTarget({ domain, shareKey }) {
  const markdownUrl = `${origin}/share/${encodeURIComponent(shareKey)}.md`;
  const destination = new URL(`${domain}.md`, guideDir);
  try {
    const markdown = await fetchText(markdownUrl);
    readGuide(markdown, domain, shareKey);
    let previous = "";
    try {
      previous = await readFile(destination, "utf8");
    } catch {}
    if (previous !== markdown) {
      await writeFile(destination, markdown);
      updated += 1;
    }
    acceptedDomains.add(domain);
  } catch (error) {
    try {
      const previous = await readFile(destination, "utf8");
      readGuide(previous, domain, shareKey);
      acceptedDomains.add(domain);
    } catch {
      failures.push(`${domain}: ${error.message}`);
    }
  }
}

async function fetchText(url) {
  const response = await fetch(url, {
    headers: { "user-agent": "fudge-design-md-publisher/2.0" },
  });
  if (!response.ok) {
    throw new Error(`Could not fetch ${url}: ${response.status}`);
  }
  return response.text();
}

function designSharesFromSitemap(xml) {
  const shares = new Map();
  for (const match of xml.matchAll(/<loc>([^<]+)<\/loc>/g)) {
    const url = new URL(match[1].replaceAll("&amp;", "&"));
    const route = url.pathname.match(/^\/share\/([^/]+)-design$/);
    if (!route) continue;
    const domain = safeDomain(decodeURIComponent(route[1]));
    shares.set(domain, `${domain}-design`);
  }
  return [...shares.entries()]
    .map(([domain, shareKey]) => ({ domain, shareKey }))
    .sort((a, b) => a.domain.localeCompare(b.domain));
}

function safeDomain(value) {
  const normalized = value.trim().toLowerCase();
  if (
    !normalized.includes(".")
    || normalized.length > 253
    || !normalized.split(".").every((label) =>
      /^[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(label)
    )
  ) {
    throw new Error(`Invalid domain: ${value}`);
  }
  return normalized;
}

function readGuide(markdown, expectedDomain, expectedKey) {
  const title = markdown.match(/^#\s+(.+)$/m)?.[1]?.trim();
  const liveUrl = `${origin}/share/${expectedKey}`;
  const images = [
    ...markdown.matchAll(/\[!\[([^\]]*)\]\(([^)]+)\)\]\(([^)]+)\)/g),
  ];
  const character = sectionParagraph(markdown, "Design character");

  if (!title) throw new Error("Guide is missing its title");
  if (!markdown.includes(`](${liveUrl})`)) {
    throw new Error("Guide is missing its canonical Fudge conversation");
  }
  if (!character) throw new Error("Guide is missing its design character");
  if (images.length < 2 || images.length > 8) {
    throw new Error("Guide must contain two to eight linked representative images");
  }
  if (!images.every((match) => match[3].startsWith(`${origin}/share/`))) {
    throw new Error("Every representative image must link to a Fudge share");
  }

  return {
    domain: expectedDomain,
    title,
    character,
    imageUrl: images[0][2],
    liveUrl,
  };
}

function sectionParagraph(markdown, heading) {
  const lines = markdown.split(/\r?\n/);
  const start = lines.findIndex((line) =>
    line.trim().toLowerCase() === `## ${heading.toLowerCase()}`
  );
  if (start === -1) return "";
  const section = [];
  for (const line of lines.slice(start + 1)) {
    if (line.startsWith("## ")) break;
    section.push(line);
  }
  return section.join("\n")
    .split(/\n\s*\n/)
    .map((part) => part.replace(/\s+/g, " ").trim())
    .find((part) => part && !part.startsWith("#")) ?? "";
}

async function updateReadmeIndex() {
  const files = (await readdir(guideDir))
    .filter((file) => file.endsWith(".md"))
    .sort((a, b) => a.localeCompare(b));
  const entries = [];

  for (const file of files) {
    const candidate = await readFile(new URL(file, guideDir), "utf8");
    const candidateDomain = basename(file, ".md");
    try {
      const accepted = readGuide(
        candidate,
        candidateDomain,
        `${candidateDomain}-design`,
      );
      entries.push([
        `### ${accepted.domain}`,
        "",
        `[![${accepted.title}](${accepted.imageUrl})](design-md/${file})`,
        "",
        accepted.character,
        "",
        `[Open guide](design-md/${file}) · [View the Fudge conversation](${accepted.liveUrl})`,
      ].join("\n"));
    } catch {
      // Old thin drafts remain in the repository but are not listed as accepted guides.
    }
  }

  const readme = await readFile(readmePath, "utf8");
  const start = readme.indexOf(indexStart);
  const end = readme.indexOf(indexEnd);
  if (start === -1 || end === -1 || end < start) {
    throw new Error("README guide index markers are missing");
  }
  const replacement = entries.length
    ? entries.join("\n\n")
    : "The first accepted guide will appear here.";
  const updated = `${readme.slice(0, start + indexStart.length)}\n${replacement}\n${readme.slice(end)}`;
  if (updated !== readme) await writeFile(readmePath, updated);
}
