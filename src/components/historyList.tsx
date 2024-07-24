import { For } from "solid-js";
import History, { HistoryType } from "./history";

interface Props {
  list: HistoryType[];
}

export default function HistoryList(props: Props) {
  return (
    <div class="flex flex-col gap-4">
      <For each={props.list}>{(item) => <History {...item} />}</For>
    </div>
  );
}
