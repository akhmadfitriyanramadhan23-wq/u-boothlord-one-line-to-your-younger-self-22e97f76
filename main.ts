// One Line to Your Younger Self — u-boothlord-one-line-to-your-younger-self-22e97f76
// Writes the single line to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR).
// Node 22, stdlib only, fully deterministic, no network, no secrets.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "In 2009 you leave the red bicycle rusting behind the house, and you'll miss it most \u2014 ride it down to the river tonight, kid, before the rain eats the chain and the summer's gone for good.";

const MAX_CHARS = 200;

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const chars = [...LINE];
if (chars.length < 1 || chars.length > MAX_CHARS) {
  throw new Error(`entry must be 1-${MAX_CHARS} characters, got ${chars.length}`);
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be a single line");
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
