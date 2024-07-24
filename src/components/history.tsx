import { store } from "../store";

export type HistoryType = {
  firstOperandText: string;
  operator: string;
  secondOperandText: string;
  total: number;
};

export default function History({
  firstOperandText,
  operator,
  secondOperandText,
  total,
}: HistoryType) {
  return (
    <div
      class="flex flex-col items-end gap-2 hover:bg-key-bg dark:hover:bg-key-bg-dark p-4 rounded-md cursor-pointer"
      onClick={() => {
        store.calc.copyFromHistory(total.toString());
        store.ui.toggleHistory();
      }}
    >
      <div class="flex items-center gap-3">
        <p>{firstOperandText}</p>
        <p>{operator}</p>
        <p>{secondOperandText} =</p>
      </div>
      <p>{total}</p>
    </div>
  );
}
