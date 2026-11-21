// Entry for make.fun "The joke about the demo": writes one one-line joke to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const joke =
  "The demo crashed live on stage, and my coding agent told the stack trace, \"You're absolutely right!\"";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");
