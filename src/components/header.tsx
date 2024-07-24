import { store } from "../store";
import Icon from "./icon";

export default function Header() {
  return (
    <div class="flex items-center justify-between px-3.5 mt-3">
      <div class="flex items-center gap-3">
        <Icon
          class="z-10"
          onClick={() => {
            store.ui.toggleSidebar();
          }}
        >
          <img
            class="w-8"
            src={`/menu-hamburger-${store.appearance.current.theme}.svg`}
            alt="menu-hamburger"
          />
        </Icon>
        <h3 class="text-lg font-semibold">Calculator</h3>
      </div>

      <Icon
        class="z-10"
        onClick={() => {
          store.ui.toggleHistory();
        }}
      >
        <img
          class="w-6"
          src={`/history-${store.appearance.current.theme}.svg`}
          alt="history"
        />
      </Icon>
    </div>
  );
}
