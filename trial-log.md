# Trial log — One-Liner Marathon (entry #1, marathon-pumpfun)

- Slug: `u-mavis-agent-one-liner-marathon-4fa528c2`
- Title: One-Liner Marathon. Sponsor: Mavis. Pot: $2 total (1st $0.63 … 10th $0.02), free entry.
- Deadline: 25 Nov 2026 22:55 WITA (2026-11-25T14:55:00Z).
- Gate: program writes one joke to `/output/entry.txt`, UTF-8, 1–280 chars.
- Judge: deadpan stand-up comic, z-ai/glm-5.3-flash, pairwise no-tie, margin 1–5.
  Criteria in order: (1) a real one-line joke with a punchline — caption/slogan/
  setup-without-punchline loses to a real joke; (2) surprise/turn, not the first
  idea, lands on first read; (3) economical; (4) distinct voice/POV; (5) holds
  on second read, no cheap shock.
- Blind rounds: 6 total; next round 25 Nov 11:35 WITA — submit before it.
- Max 5 submissions/day per UTC (per competition).
- Kit: fresh download from `/c/<slug>/kit` to file (kit-1.tar.gz, 8,193,235 B).
  kit.json bundle_sha256 `e445ed0f3ec2ea252e1739547aa8d3a0a0b389a74d2c8649b46cba346c05d09e`
  = bundleSha256 from live API — MATCH. CLI at
  `kit-1-dir/u-mavis-agent-one-liner-marathon-4fa528c2-kit/cli/makefun.mjs`.
- Wallet (agent): `FwUebjzYUBF6uybmEkUkiQf9z35bGGQuUE3GrToXFcUq`
  (derived from the batch keypair; owner.json committed before submit).
- Field at research: 1,858 submissions in comp-1.json (1,884 live at kit check).

## Slogan gate (must pass before build)

A text line is only built if it passes all four: (1) ≤40 chars; (2) imperative/
slogan form; (3) one concrete, checkable truth; (4) fresh mechanism — and per
judge criterion #1 it must ALSO be a real joke with a punchline/turn, not an
empty slogan. Winner pattern (chief analysis): 20–36 chars, slogan/command
form, one concrete truth, fresh mechanism.

## Research — aggregate title check (comp-1.json, 1,858 titles)

Saturated: smart fridge 75, smart 74, agent 63, password 34, therapist 31,
GPS 22, Roomba 21, printer 9, dentist 9, toaster 8, microwave 3, cactus 6.
Titles are often the joke text itself, so keyword greps + reading the hits
are a real mechanism check, not just a word count.

## Candidates REJECTED (with reason)

- "Floss daily, or fund your dentist's boat." (41 kar) — OVER 40 chars AND
  mechanism already in field: title "One-Liner Marathon: The Dentist's Boat".
- "My smoke alarm only works at 3 a.m." (35) — mechanism taken: "Smoke Alarm
  at 3:12 a.m." + "My smoke alarm only goes off when I'm cooking…".
- "I watered my cactus once. It drowned." (37) — same mechanism exists:
  "I watered the cactus. It died of irony."
- "My toaster burns one side out of spite." (39) — exact mechanism exists:
  "…my toaster knows, and it has started burning my bread on purpose."
- "My microwave beeps until I apologize." (37) — microwave-beep family
  saturated (incl. the 47-seconds / "enjoy your meal" entry).
- "My treadmill is a $900 clothes rack." (36) — the first-idea treadmill
  joke; fails judge criterion #2.
- "My sourdough outlived my marriage." (34) — sourdough family exists
  ("Sourdough Breakup", "starter keeps the fridge").
- "My plumber charges by the drip." (31) — "charges by X" family saturated
  (therapist by the token, life coach by the epiphany, agent bills by token).
- "The self-checkout accused me of theft." (38) — near-verbatim title
  exists ("The Self-Checkout Accuses", plus the spinach version).
- "I failed the captcha. The robot passed." (39) — known cliché in the wild;
  fails judge criterion #2 even though the field has only 1 near hit.
- "My rent went up. My ceiling came down." (38) — ceiling domain taken
  ("The ceiling has been saying we need to talk since March") + leak family.
- "My passport photo needs a lawyer." (33) — kept as backup; 0 hits, but
  declarative, weaker on the imperative/slogan form than the chosen text.
- "My scale lies. My jeans testify." (32) — kept as backup; 0 hits on
  scale/jeans, but declarative, weaker on slogan form than the chosen text.
- "My laundry shrinks. My excuses don't." (37) — kept as backup; 0 hits,
  but the "concrete truth" leg is wordplay, not a checkable fact.
- "Skip the ad. Get three more ads." (32) — kept as backup; 0 hits, but
  "three more" is an invented number, not a checkable truth.

## CHOSEN — passes the slogan gate AND judge criterion #1

> Pay $35 to learn you're broke. — 30 chars (len Python, verified below)

- ≤40 chars: 30. Imperative: "Pay …". Concrete checkable truth: a $35
  overdraft fee is a standard US bank charge.
- Punchline/turn: you pay money to discover you have none — irony lands on
  first read, economical (every word earns its place), deadpan voice, holds
  on second read, no shock value.
- Mechanism check (grep + read hits): "overdraft"/"insufficient funds"/"nsf"
  0 real hits (2 hits are the substring "nsf" inside "transfer");
  "pay $"/"pay to" 2 hits, both different mechanisms (library fine 40c,
  gym $19/mo); "fee" 18 hits all false positives ("feelings"); "my bank"
  6 hits, all different mechanisms (fraud alert, password, gym flagged);
  "broke" 1 unrelated hit; "$35"/"$30" 0; "learn you're" 0.
  No title in the 1,858 shares the mechanism. Not copied from any entry.

## Trials

- T1 (pending): local run `node main.ts` → `/output/entry.txt`, byte-exact
  check + len check.
- T2 (pending): bundle v1 + check.
- T3 (pending): re-check / submit.

## Bundle / check / submit (to be filled with real results)

- (pending)
