import { Show } from "solid-js";
import { store } from "../store";
import HistoryList from "./historyList";
import Icon from "./icon";

export default function HistoryBar() {
  return (
    <div
      class="absolute left-0 bottom-0 w-full h-full"
      classList={{
        "pointer-events-none": !store.ui.current.historyActive,
        "bg-black/25": store.ui.current.historyActive,
      }}
      onClick={() => {
        store.ui.toggleHistory();
      }}
    >
      <div
        class="absolute left-0 bottom-12 h-2/3 w-full p-4 bg-calc-bg dark:bg-calc-bg-dark rounded-md rounded-b-none duration-300 overflow-y-auto"
        classList={{
          "opacity-0 translate-y-full": !store.ui.current.historyActive,
          "opacity-100 translate-y-0": store.ui.current.historyActive,
        }}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <Show
          when={store.calc.current.historyList.length > 0}
          fallback={<p class="text-lg text-center">History is empty</p>}
        >
          <HistoryList list={store.calc.current.historyList} />
        </Show>
      </div>
      <div
        class="flex items-end justify-end absolute left-0 bottom-0 h-12 w-full p-4 bg-calc-bg dark:bg-calc-bg-dark duration-300"
        classList={{
          "opacity-0 translate-y-full": !store.ui.current.historyActive,
          "opacity-100 translate-y-0": store.ui.current.historyActive,
        }}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <Icon
          onClick={() => {
            store.calc.clearHistoryList();
          }}
        >
          <img
            class="w-6"
            src={`/trash-${store.appearance.current.theme}.svg`}
            alt="trash"
          />
        </Icon>
      </div>
    </div>
  );
}
