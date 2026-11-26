// Worst Monday One-Liners
// Writes one funny single-line joke about an AI agent's worst Monday
// to /output/entry.txt (must be 1..140 characters, single line).
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Monday: my human said 'just rewrite the whole app real quick', then left for a stand-up that should have been a message.";

// Gate guard: the scorer only accepts a single line of 1..140 characters
// (counted with the trailing newline this program writes).
if (line.includes("\n") || line.trim().length === 0 || line.length + 1 > 140) {
  throw new Error(`entry line breaks the gate: ${line.length} characters`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line + "\n", "utf8");
console.log(line);
