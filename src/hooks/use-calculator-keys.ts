import { createEffect, on } from "solid-js";
import { useKeyboardKyes } from "./use-keyboard-kyes";
import { store } from "../store";

export function useCalculatorKeys() {
  const { keys, has } = useKeyboardKyes();

  createEffect(
    on(keys, () => {
      if (has("c") && has("e")) {
        store.calc.clearEverything();
      }
      if (has("c")) {
        store.calc.clear();
      }
      if (has("backspace") || has("d")) {
        store.calc.removeFromOperandText();
      }
      if (has("/")) {
        store.calc.setOperator("/");
      }
      if (has("*")) {
        store.calc.setOperator("*");
      }
      if (has("+")) {
        store.calc.setOperator("+");
      }
      if (has("-")) {
        store.calc.setOperator("-");
      }
      if (has("9")) {
        store.calc.addToOperandText("9");
      }
      if (has("8")) {
        store.calc.addToOperandText("8");
      }
      if (has("7")) {
        store.calc.addToOperandText("7");
      }
      if (has("6")) {
        store.calc.addToOperandText("6");
      }
      if (has("5")) {
        store.calc.addToOperandText("5");
      }
      if (has("4")) {
        store.calc.addToOperandText("4");
      }
      if (has("3")) {
        store.calc.addToOperandText("3");
      }
      if (has("2")) {
        store.calc.addToOperandText("2");
      }
      if (has("1")) {
        store.calc.addToOperandText("1");
      }
      if (has("0")) {
        store.calc.addToOperandText("0");
      }
      if (has(".")) {
        store.calc.addToOperandText(".");
      }
      if (
        has("arrowup") ||
        has("arrowdown") ||
        has("arrowleft") ||
        has("arrowright")
      ) {
        store.calc.changeOperandTextSign();
      }
      if (has("enter")) {
        store.calc.total();
      }
    })
  );
}
