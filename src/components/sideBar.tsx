import { ParentProps } from "solid-js";
import { store } from "../store";
import Checkbox from "./checkbox";
import KeyboardSupportBadge from "./keyboardSupportBadge";

function FixedTop() {
  return <div class="h-14 w-full" />;
}

function SectionTitle({ children }: ParentProps) {
  return <h3 class="text-xl font-bold">{children}</h3>;
}

function AppearanceSection() {
  return (
    <div class="flex flex-col gap-2">
      <SectionTitle>Appearance</SectionTitle>
      <div class="flex items-center justify-between">
        <p>Dark mode</p>
        <Checkbox
          checked={store.appearance.current.theme === "dark"}
          onValueChange={() => {
            store.appearance.toggleTheme();
          }}
        />
      </div>
    </div>
  );
}

function AboutSection() {
  return (
    <div class="flex flex-col gap-2">
      <SectionTitle>About</SectionTitle>
      <p class="text-sm font-semibold">
        Calculator @2024 project by @Microsoft code by @Aissa.
      </p>
      <p class="text-sm font-semibold">
        Check out the project on{" "}
        <a
          class="text-accent-color dark:text-accent-color-dark"
          href="https://github.com/"
          target="_blank"
        >
          Github
        </a>
      </p>
    </div>
  );
}

export default function SideBar() {
  return (
    <div
      class="absolute left-0 top-0 w-full h-full"
      classList={{
        "pointer-events-none": !store.ui.current.sidebarActive,
        "bg-black/25": store.ui.current.sidebarActive,
      }}
      onClick={() => {
        store.ui.toggleSidebar();
      }}
    >
      <div
        class="absolute left-0 top-0 h-full w-3/4 px-4 bg-calc-bg dark:bg-calc-bg-dark rounded-md rounded-l-none duration-300"
        classList={{
          "opacity-0 -translate-x-full": !store.ui.current.sidebarActive,
          "opacity-100 translate-x-0": store.ui.current.sidebarActive,
        }}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <FixedTop />
        <div class="flex flex-col gap-4">
          <AppearanceSection />
          <KeyboardSupportBadge />
          <AboutSection />
        </div>
      </div>
    </div>
  );
}
