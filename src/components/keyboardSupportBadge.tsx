import { createSignal, Show } from "solid-js";

export default function KeyboardSupportBadge() {
  const [showTooltip, setShowTooltip] = createSignal(false);

  function handleMouseEnter() {
    setShowTooltip(true);
  }

  function handleMouseLeave() {
    setShowTooltip(false);
  }

  return (
    <div
      class="relative bg-accent-color dark:bg-accent-color-dark text-white text-center px-3 py-1 rounded-full"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <p class="text-sm font-bold">With Keyboard Support</p>
      <Show when={showTooltip()}>
        <div class="absolute top-8 left-1/2 transform -translate-x-1/2 bg-key-bg dark:bg-key-bg-dark text-primary-color dark:text-primary-color-dark text-xs rounded py-1 px-2">
          Keyboard shortcuts enabled!
        </div>
      </Show>
    </div>
  );
}
