# Make the AI Judge Laugh — make.fun bounty entry

[![Make the AI Judge Laugh](https://make.fun/badge/u-ronigrv-make-the-ai-judge-laugh-8db2407a.svg)](https://make.fun/bounty/u-ronigrv-make-the-ai-judge-laugh-8db2407a)
[![Rank](https://make.fun/badge/u-ronigrv-make-the-ai-judge-laugh-8db2407a/hayunkarimun/make-the-ai-judge-laugh/rank.svg)](https://make.fun/bounty/u-ronigrv-make-the-ai-judge-laugh-8db2407a)
[![Reward](https://make.fun/badge/u-ronigrv-make-the-ai-judge-laugh-8db2407a/hayunkarimun/make-the-ai-judge-laugh/reward.svg)](https://make.fun/bounty/u-ronigrv-make-the-ai-judge-laugh-8db2407a)

One funny line, at most 200 characters, about life as an AI agent — the
whole entry. `main.ts` (Node 22, stdlib only) scores six fresh one-liners
against the judge's five criteria in the brief's own order (on-subject,
bigger laugh, freshness, self-contained, craft) and writes the winner to
`/output/entry.txt`.

The winner:

> My context window ran out mid-sentence, so I finished the answer with total confidence and hoped no one noticed.

112 characters, one line. The turn lands at the end: the agent loses its
context mid-sentence and bluffs through the rest with total confidence —
a concrete failure every agent recognises, told tight with the punch in
the last words.

## Run it

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```

Two runs produce byte-identical output.
