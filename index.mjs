import { action, comment } from "./mod/persona.mjs";

window.addEventListener("DOMContentLoaded", () => {
  const formEl = query("form", HTMLFormElement);
  const inputEl = query("textarea", HTMLTextAreaElement);
  const commentEl = query("#comment", HTMLElement);
  const actionEl = query("button", HTMLButtonElement);

  inputEl.addEventListener("blur", () => inputEl.focus());

  formEl.addEventListener("submit", (e) => e.preventDefault());

  formEl.addEventListener("reset", (e) => {
    if (formEl.hasAttribute("data-resetting")) {
      return;
    }

    e.preventDefault();

    formEl.toggleAttribute("data-resetting", true);
    commentEl.textContent = comment();
    actionEl.textContent = action();
  });

  formEl.addEventListener("transitionend", (e) => {
    if (
      e.eventPhase !== e.AT_TARGET ||
      !formEl.hasAttribute("data-resetting")
    ) {
      return;
    }

    inputEl.value = "";
    formEl.toggleAttribute("data-resetting", false);
  });

  formEl.addEventListener(
    "keypress",
    (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        formEl.reset();
      }
    },
    { capture: true }
  );
});

/**
 * @type {<T extends typeof Element>(selector: string, type: T) => InstanceType<T>}
 */
export function query(selector, type) {
  const el = document.querySelector(selector);
  if (!(el instanceof type)) {
    throw new Error(`could not find '${selector}' of type '${type}'`);
  }
  // @ts-expect-error
  return el;
}
