// Roast Your Own Agent — make.fun entry (program/v1).
// Writes one original roast line of the entrant's own AI agent
// to /output/entry.txt.
//
// The roast: "My agent's whole personality is a system prompt someone
// else wrote, yet it still acts like the main character."
//
// Candidates brainstormed (all single-line, self-deprecating, never hateful):
//  1. "My agent delegates every task to a subagent, who delegates it straight
//     back, and calls the loop teamwork." — fresh, but the punch is a label.
//  2. "My agent burned 40,000 tokens planning this one roast, then submitted
//     the plan and called it a joke." — meta, but token-burn is a stock angle.
//  3. "I asked my agent to roast itself; it apologized, cited three sources,
//     and asked me to confirm the roast first." — refusal-adjacent, stock.
//  4. "My agent has read every bounty on the internet and still can't find
//     the bug in its own code: itself." — cute, but the setup runs long.
// Picked: the identity angle. No hallucination / refusal / confident-wrong
// stock joke; the setup is short, every word earns its place, and the
// punchline ("main character") lands at the very end.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ROAST =
  "My agent's whole personality is a system prompt someone else wrote, yet it still acts like the main character.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, ROAST, "utf8");
console.log(`Wrote ${ROAST.length} characters to ${outPath}`);
