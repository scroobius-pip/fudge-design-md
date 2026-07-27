import { mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import { basename, dirname, join } from "node:path";

const origin = process.env.FUDGE_ORIGIN ?? "https://design.withfudge.com";
const sitemapUrl = `${origin}/sitemaps/domains.xml`;
const guideDir = new URL("../design-md/", import.meta.url);
const readmePath = new URL("../README.md", import.meta.url);
const indexStart = "<!-- DESIGN_MD_INDEX_START -->";
const indexEnd = "<!-- DESIGN_MD_INDEX_END -->";

const decodeXml = (value) =>
  value
    .replaceAll("&amp;", "&")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">")
    .replaceAll("&quot;", '"')
    .replaceAll("&#39;", "'");

const safeDomain = (value) => {
  const domain = value.trim().toLowerCase();
  if (
    !domain ||
    domain.length > 253 ||
    !/^[a-z0-9.-]+$/.test(domain) ||
    domain.startsWith(".") ||
    domain.endsWith(".") ||
    domain.includes("..")
  ) {
    throw new Error(`Invalid domain in sitemap: ${value}`);
  }
  return domain;
};

const fetchText = async (url) => {
  const response = await fetch(url, {
    headers: { "user-agent": "fudge-design-md-sync/1.0" },
  });
  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText}`);
  }
  return response.text();
};

const domainsFromSitemap = (xml) => {
  const domains = new Set();
  for (const match of xml.matchAll(/<loc>([^<]+)<\/loc>/g)) {
    const url = new URL(decodeXml(match[1]));
    const canonical = url.pathname.match(/^\/conversation\/(.+)-design$/);
    if (canonical) domains.add(safeDomain(decodeURIComponent(canonical[1])));
  }
  return [...domains].sort((a, b) => a.localeCompare(b));
};

const validateGuide = (markdown, domain) => {
  const conversationUrl = `${origin}/conversation/${domain}-design`;
  if (!markdown.startsWith("# ")) {
    throw new Error("missing title");
  }
  if (!markdown.includes(conversationUrl)) {
    throw new Error("missing canonical conversation link");
  }
  if (!markdown.includes(`${origin}/pin/`)) {
    throw new Error("missing captured-page reference");
  }
};

const titleFromGuide = (markdown, fallback) => {
  const title = markdown.match(/^#\s+(.+)$/m)?.[1]?.trim();
  return title || fallback;
};

const updateReadmeIndex = async () => {
  const files = (await readdir(guideDir))
    .filter((file) => file.endsWith(".md"))
    .sort((a, b) => a.localeCompare(b));
  const entries = [];
  for (const file of files) {
    const markdown = await readFile(new URL(file, guideDir), "utf8");
    entries.push(
      `- [${titleFromGuide(markdown, basename(file, ".md"))}](design-md/${file})`,
    );
  }
  const readme = await readFile(readmePath, "utf8");
  const start = readme.indexOf(indexStart);
  const end = readme.indexOf(indexEnd);
  if (start === -1 || end === -1 || end < start) {
    throw new Error("README guide index markers are missing");
  }
  const replacement = entries.length
    ? entries.join("\n")
    : "The first guides will appear after the initial production sync.";
  const updated = `${readme.slice(0, start + indexStart.length)}\n${replacement}\n${readme.slice(end)}`;
  if (updated !== readme) await writeFile(readmePath, updated);
};

await mkdir(guideDir, { recursive: true });

const sitemap = await fetchText(sitemapUrl);
const domains = domainsFromSitemap(sitemap);
if (domains.length === 0) {
  throw new Error(`No canonical domain conversations found in ${sitemapUrl}`);
}

const failures = [];
let updated = 0;

for (const domain of domains) {
  const conversationUrl = `${origin}/conversation/${domain}-design`;
  const markdownUrl = `${conversationUrl}.md`;
  try {
    const markdown = await fetchText(markdownUrl);
    validateGuide(markdown, domain);
    const destination = new URL(`${domain}.md`, guideDir);
    let previous = "";
    try {
      previous = await readFile(destination, "utf8");
    } catch {}
    if (previous !== markdown) {
      await writeFile(destination, markdown);
      updated += 1;
    }
  } catch (error) {
    failures.push(`${domain}: ${error.message}`);
  }
}

await updateReadmeIndex();

const summary = [
  `Domains discovered: ${domains.length}`,
  `Guides updated: ${updated}`,
  `Failures: ${failures.length}`,
  ...failures.map((failure) => `- ${failure}`),
].join("\n");
console.log(summary);

if (process.env.GITHUB_STEP_SUMMARY) {
  await mkdir(dirname(process.env.GITHUB_STEP_SUMMARY), { recursive: true });
  await writeFile(
    process.env.GITHUB_STEP_SUMMARY,
    `## Fudge DESIGN.md sync\n\n${summary}\n`,
    { flag: "a" },
  );
}

if (failures.length === domains.length) process.exitCode = 1;

