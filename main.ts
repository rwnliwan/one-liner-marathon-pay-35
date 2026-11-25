// One-Liner Marathon — entry program.
//
// Writes one one-line comedy joke to /output/entry.txt, the artifact the
// house gate scores (UTF-8, 1-280 chars) and the judge compares pairwise.
//
// The joke: "Pay $35 to learn you're broke."
//   - 30 characters, one line, imperative form.
//   - The turn: you pay money to discover you have none. A $35 overdraft
//     fee is the concrete, checkable truth behind it (a standard US bank
//     overdraft charge), and the mechanism — paying for the news that you
//     are broke — had zero hits across the 1,858 titles in the field at
//     research time (no "overdraft", no "$35", no "learn you're broke").
//   - Deadpan, economical, no shock value; it holds on a second read
//     because the irony, not a surprise word, does the work.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE = "Pay $35 to learn you're broke.";

if (JOKE.length < 1 || JOKE.length > 280) {
  throw new Error(`joke length ${JOKE.length} is outside the 1-280 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
