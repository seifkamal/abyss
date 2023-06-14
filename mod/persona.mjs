export function action() {
  return rand([
    "Part Ways",
    "Throw Away",
    "Forgive",
    "Forget",
    "Absolve",
    "Bid Farewell",
    "Say Goodbye",
    "Release Into The Void",
    "Purge",
    "Take It Away",
    "Delete",
    "Destroy",
    "Let Go",
  ]);
}

export function comment() {
  return rand([
    "I hear ya",
    "I see",
    "That's it",
    "Let it out",
    "I'm with ya",
    "I understand",
    "Totally",
    "I so get you",
    "Keep going",
    "What else?",
    "And?",
    "It's in the past now",
    "Leave it with me",
    "Good Riddance",
  ]);
}

export function commentEmpty() {
  return rand([
    "You must have something to say..",
    "Speaking up isn't always easy.",
    "It's ok if you need time.",
    "Silence can be quite loud.",
    "...",
    "You'll think of something.",
    "You can come back later",
  ]);
}

/** @type {<I>(arr: I[]) => I} */
function rand(arr) {
  return arr[Math.floor(Math.random() * (arr.length - 1))];
}
