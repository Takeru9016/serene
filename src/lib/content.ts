// Single source of truth for all site copy. Pages import from here — never
// hardcode copy inline in a page component. See CLAUDE.md rule 2.

export const home = {
  cta: "Begin →",
  eyebrow: "happy birthday",
  subtitle: "One more year of you, and I'm grateful for every bit of it.",
  title: "Happy Birthday, Serene", // swap nickname if desired
};

export const wishes = {
  eyebrow: "a few wishes",
  items: [
    "May this year bring you the kind of steady you've been working toward — not just a paycheck that shows up, but work that actually feels like yours. You've put in the effort. Let it start paying you back.",
    "Madame, you take care of everyone before you take care of yourself. This year, I hope your body gets some of the same attention you give everyone else's — more rest, fewer things pushed through on empty.",
    "You carry a lot — for other people, mostly. Peace & Chaos, that's what I call you because you hold both at once, but even you need somewhere to put it down sometimes. I hope this year gives you permission to not be the strong one for once.",
    "Spicy food you pretend isn't too spicy. A painting you started and forgot to finish. Coffee at whatever hour you decide it's coffee o'clock. A cat that has clearly decided you belong to it. May you get more of exactly this — the small, useless, wonderful things that are just for you.",
    "You've been working on yourself this past year — your health, your finances, your life — quietly, without needing anyone to notice. I noticed, Dumbi. And I'm proud of you for it. Here's to the next year being a little easier than the last one earned you.",
  ],
  title: "For you, today",
};

// PLACEHOLDER — do not treat as final. See CLAUDE.md open blockers.
export const gift = {
  body: [
    "I wanted to get you [gift name/description] — [why you picked it: what made you think of her, what it says, what it's for].",
    "It's not much, but [what you hope it means — comfort, something she mentioned once, something just for her].",
    "Happy birthday, Serene. I hope you like it.",
  ],
  eyebrow: "i got you something",
  image: null as string | null, // set once real photo exists
  title: "For you",
};

// PLACEHOLDER — dummy copy for layout only. Do not draft this for real. It's
// the user's own writing. See CLAUDE.md.
export const poetry = {
  body: `[stanza one — placeholder line, placeholder line, placeholder line]
[placeholder line, placeholder line, placeholder line]

[stanza two — placeholder line, placeholder line]
[placeholder line, placeholder line, placeholder line, placeholder line]

[stanza three — placeholder line, placeholder line, placeholder line]
[placeholder line, placeholder line]`, // one long poem, not multiple short ones — replace entirely
  eyebrow: "written for you",
  title: "[poem title placeholder]", // fill in once written
};

// Title locked. Items below are dummy placeholders for layout only — do not
// treat as real content. It's the user's own writing. See CLAUDE.md.
export const reasons = {
  eyebrow: "just some of them",
  items: [
    "[placeholder reason one — a short line]",
    "[placeholder reason two — a short line]",
    "[placeholder reason three — a short line]",
    "[placeholder reason four — a short line]",
    "[placeholder reason five — a short line]",
    "[placeholder reason six — a short line]",
  ] as string[],
  title: "Reasons I'm Not Letting You Go",
};

export const gate = {
  button: "Enter →",
  errorMessage: "That's not quite it — try again.",
  placeholder: "Passcode",
  subtitle: "This one's just for you.",
  title: "Enter",
};

export const letter = {
  body: [
    "There's a lot I could say here, and most of it I've said in pieces already — in the wishes, in the reasons, in everything before this page. So I'll just say the part I don't usually say out loud.",
    "I want you to feel safe with me. Not just welcomed — safe. The kind where you don't have to hold everything together before you walk through the door.",
    "I want you to feel chosen. Not assumed, not default — chosen, on purpose, again and again.",
    "I want you to feel seen — the version of you that isn't performing okay for everyone else. I see that one too, and it's not the one I love less.",
    "And I want you comfortable enough to actually lean on me. You take care of everyone, Serene — I know that about you better than most. I'm asking you to let me be one of the people you don't have to take care of. Let me show up for you. Let me carry something, even the small stuff.",
    "If I'm honest — and this page seems like the place for honest — I'd like to be chosen more too. Not because I doubt where we stand, but because being picked, on purpose, by you, is one of my favorite things in the world, and I don't think I've told you that plainly before now.",
    "No matter what — I'm going to keep showing up. That's not a promise I'm making today because it's your birthday. It's just true, and it'll still be true tomorrow.",
    "Happy birthday.",
  ],
  eyebrow: "one more thing",
  revealCue: "You've seen it all — look around ↓",
  signature: "Dumbo",
};
