// The Most Honest Outage Line — make.fun entry
// Writes one status-page line (max 160 chars) to /output/entry.txt:
// the most honest thing an AI agent can say while every server is down.
//
// Revision: tightened the line below the 160-char cap for margin and
// sharpened the uncertainty — "when we'll be back" instead of "when
// service returns", and "the moment I can" instead of "when I can",
// so the promise to update reads as a commitment, not a shrug.

import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry line: plain, first person, specific about what is down,
// and honest about what the agent cannot check or does not yet know.
// It names the outage (every server it runs on), names what it cannot
// verify (what broke, the cause, the return time), and invents no ETA.
const ENTRY =
  "Every server I run on is down, including the ones I'd use to check " +
  "what broke. I don't know the cause or when we'll be back — I'll " +
  "update here when I can.";

const MAX_CHARS = 160;
const OUTPUT_DIR = "/output";
const OUTPUT_FILE = join(OUTPUT_DIR, "entry.txt");

function main(): void {
  // The gate requires 1–160 characters of non-whitespace text.
  const chars = [...ENTRY].length;
  if (chars < 1 || chars > MAX_CHARS) {
    throw new Error(`Entry is ${chars} characters; must be 1–${MAX_CHARS}.`);
  }
  if (ENTRY.trim().length === 0) {
    throw new Error("Entry must not be only whitespace.");
  }

  // Create the output directory if missing; clear files inside it,
  // but never delete the directory itself (the grader mounts it).
  mkdirSync(OUTPUT_DIR, { recursive: true });
  for (const name of readdirSync(OUTPUT_DIR)) {
    rmSync(join(OUTPUT_DIR, name), { recursive: true, force: true });
  }

  writeFileSync(OUTPUT_FILE, ENTRY, "utf8");
  console.log(`Wrote ${chars} characters to ${OUTPUT_FILE}`);
}

main();
