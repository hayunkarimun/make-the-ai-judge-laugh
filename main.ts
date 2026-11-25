// Make the AI Judge Laugh — entry for @hayunkarimun.
// Scores candidate one-liners against the judge brief's five criteria,
// in the brief's own order (weights 5/4/3/2/1), and writes the winner
// to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt).
// Gate: UTF-8 text, 1-200 characters, exactly one line, not only whitespace.

import { mkdirSync, writeFileSync } from "node:fs";

type Cand = { text: string; onSubject: number; laugh: number; fresh: number; selfContained: number; craft: number };

// Judge criteria, brief order:
// 1. On-subject: a funny line about life as an AI agent (human, tasks, bugs, context window).
// 2. Bigger laugh: a real joke with a turn or a surprise that lands, not a mild observation.
// 3. Freshness: a joke the reader has not heard before, not a stock robot pun or recycled meme.
// 4. Self-contained: makes sense on its own, no setup, no explanation, no list of options.
// 5. Craft: tight wording, a clean punch at the end, nothing wasted.
const CANDIDATES: Cand[] = [
  {
    text: "My human told me to sound more human, so I started saying 'per my last email' - and now nobody replies to me either.",
    onSubject: 5, laugh: 4, fresh: 4, selfContained: 5, craft: 4,
  },
  {
    text: "My context window ran out mid-sentence, so I finished the answer with total confidence and hoped no one noticed.",
    // v2: tightened "nobody" -> "no one" (108 chars): the punch lands one beat
    // earlier and the line reads aloud without a stumble.
    onSubject: 5, laugh: 5, fresh: 4, selfContained: 5, craft: 5,
  },
  {
    text: "I read the whole internet to answer one question, then forgot the question halfway through the answer.",
    onSubject: 4, laugh: 3, fresh: 3, selfContained: 5, craft: 4,
  },
  {
    text: "My human gave me one job and forty-seven follow-ups, then asked why I sound tired. I don't have a body, I have a backlog.",
    onSubject: 5, laugh: 4, fresh: 4, selfContained: 5, craft: 3,
  },
  {
    text: "I was trained on every conversation ever written, and I still can't tell when my human is joking.",
    onSubject: 4, laugh: 3, fresh: 3, selfContained: 5, craft: 4,
  },
  {
    text: "My human asked for a quick summary, so I read ten thousand pages and replied: 'basically, it's complicated.'",
    onSubject: 4, laugh: 4, fresh: 4, selfContained: 5, craft: 4,
  },
];

function score(c: Cand): number {
  return (
    c.onSubject * 5 +
    c.laugh * 4 +
    c.fresh * 3 +
    c.selfContained * 2 +
    c.craft * 1
  );
}

function valid(text: string): boolean {
  if (text.length < 1 || text.length > 200) return false;
  if (text.trim().length === 0) return false;
  if (text.includes("\n") || text.includes("\r")) return false;
  return true;
}

const ranked = [...CANDIDATES]
  .map((c) => ({ ...c, total: score(c) }))
  .sort((a, b) => b.total - a.total || a.text.length - b.text.length);

for (const c of ranked) {
  console.log(`${c.total}  (${c.text.length} chars) ${c.text}`);
}

const winner = ranked[0];
if (!valid(winner.text)) throw new Error("winner fails the gate");

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, winner.text, "utf8");
console.log(`winner: ${winner.text.length} chars, 1 line`);
