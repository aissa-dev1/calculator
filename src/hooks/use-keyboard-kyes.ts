import { createSignal, onCleanup, onMount } from "solid-js";

export function useKeyboardKyes() {
  const [keys, setKeys] = createSignal(new Set<string>([]));
  const has = (key: string): boolean => keys().has(key);

  function addToKeys(key: string) {
    setKeys((prev) => new Set<string>([...prev, key]));
  }

  function removeFromKeys(key: string) {
    setKeys((prev) => {
      const newKeys = new Set(prev);
      newKeys.delete(key);
      return newKeys;
    });
  }

  function handleKeyDown(e: KeyboardEvent) {
    addToKeys(e.key.toLowerCase());
  }

  function handleKeyUp(e: KeyboardEvent) {
    removeFromKeys(e.key.toLowerCase());
  }

  onMount(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);
  });

  onCleanup(() => {
    document.removeEventListener("keydown", handleKeyDown);
    document.removeEventListener("keyup", handleKeyUp);
  });

  return { keys, has };
}
