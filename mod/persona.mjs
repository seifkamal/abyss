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

/** @type {<I>(arr: I[]) => I} */
function rand(arr) {
  return arr[Math.floor(Math.random() * (arr.length - 1))];
}
