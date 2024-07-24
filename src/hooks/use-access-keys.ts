import { createEffect, on } from "solid-js";
import { useKeyboardKyes } from "./use-keyboard-kyes";
import { store } from "../store";

export default function useAccessKeys() {
  const { keys, has } = useKeyboardKyes();

  createEffect(
    on(keys, () => {
      if (has("escape")) {
        store.ui.toggleSidebar();
      }
      if (has("h")) {
        store.ui.toggleHistory();
      }
    })
  );
}
