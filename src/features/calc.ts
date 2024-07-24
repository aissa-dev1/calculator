import { createStore } from "solid-js/store";
import { HistoryType } from "../components/history";
import { OperandTextKey } from "./types";

interface Store {
  total: number;
  firstOperandText: string;
  operator: string | null;
  secondOperandText: string;
  position: string;
  historyList: HistoryType[];
}

export class CalcStore {
  private readonly _current = createStore<Store>({
    total: 0,
    firstOperandText: "0",
    operator: null,
    secondOperandText: "",
    position: "first",
    historyList: JSON.parse(localStorage.getItem("history-list")!) || [],
  });

  addToOperandText(key: string) {
    if (!this.current.operator) {
      this.setStore("position", "first");
      this.handlePosition(key);
      return;
    }

    this.setStore("position", "second");
    this.handlePosition(key);
  }

  handlePosition(key: string) {
    if (this.current.position === "first") {
      this.handleFirstPosition(key);
      return;
    }

    this.handleSecondPosition(key);
  }

  setOperator(operator: string | null) {
    if (this.current.operator) {
      this.total();
    }

    this.setStore("operator", operator);
  }

  validExpression(): boolean {
    return Boolean(this.current.operator);
  }

  total() {
    if (!this.validExpression()) return;

    const firstOperand = parseFloat(this.current.firstOperandText);
    const secondOperand = parseFloat(this.current.secondOperandText);

    if (isNaN(firstOperand) || isNaN(secondOperand)) return;

    this.totalSwitch(firstOperand, secondOperand);
    this.addToHistoryList({
      firstOperandText: this.current.firstOperandText,
      operator: this.current.operator as string,
      secondOperandText: this.current.secondOperandText,
      total: this.current.total,
    });
    const totalText = this.current.total.toString();
    this.clearEverything();
    this.setStore("firstOperandText", totalText);
  }

  result(): string {
    return this.current.position === "first"
      ? this.current.firstOperandText
      : this.current.secondOperandText;
  }

  expression(): string {
    return `${this.current.firstOperandText}${this.current.operator}${this.current.secondOperandText}`;
  }

  clearEverything() {
    this.setStore("firstOperandText", "0");
    this.setStore("secondOperandText", "");
    this.setStore("operator", null);
    this.setStore("position", "first");
    this.setStore("total", 0);
  }

  clear() {
    if (this.current.position === "first") {
      this.setStore("firstOperandText", "0");
      return;
    }

    this.setStore("secondOperandText", "0");
  }

  removeFromOperandText() {
    if (this.current.position === "first") {
      this.handleRemoveFromOperandTextPosition(
        this.current.firstOperandText,
        "firstOperandText"
      );
      return;
    }

    this.handleRemoveFromOperandTextPosition(
      this.current.secondOperandText,
      "secondOperandText"
    );
  }

  changeOperandTextSign() {
    if (this.current.position === "first") {
      this.handleChangeOperandTextSignPosition(
        this.current.firstOperandText,
        "firstOperandText"
      );
      return;
    }

    this.handleChangeOperandTextSignPosition(
      this.current.secondOperandText,
      "secondOperandText"
    );
  }

  copyFromHistory(value: string) {
    this.setStore("firstOperandText", value);
  }

  clearHistoryList() {
    this.setStore("historyList", []);
    localStorage.setItem(
      "history-list",
      JSON.stringify(this.current.historyList)
    );
  }

  private handleFirstPosition(key: string) {
    this.handleOperandTextPosition(
      this.current.firstOperandText,
      key,
      "firstOperandText"
    );
  }

  private handleSecondPosition(key: string) {
    this.handleOperandTextPosition(
      this.current.secondOperandText,
      key,
      "secondOperandText"
    );
  }

  private handleOperandTextPosition(
    operandText: string,
    key: string,
    otkey: OperandTextKey
  ) {
    if (operandText === "0" && key !== ".") {
      this.setStore(otkey, key);
      return;
    }
    if (operandText.startsWith("-") && operandText[1] === "0" && key !== ".") {
      this.setStore(otkey, `-${key}`);
      return;
    }
    if (operandText.endsWith(".") && key === ".") {
      return;
    }

    this.setStore(otkey, `${operandText}${key}`);
  }

  private totalSwitch(firstOperand: number, secondOperand: number) {
    switch (this.current.operator) {
      case "+":
        this.setStore("total", firstOperand + secondOperand);
        break;

      case "-":
        this.setStore("total", firstOperand - secondOperand);
        break;

      case "*":
        this.setStore("total", firstOperand * secondOperand);
        break;

      case "/":
        this.setStore("total", firstOperand / secondOperand);
        break;
    }
  }

  private handleRemoveFromOperandTextPosition(
    operandText: string,
    otkey: OperandTextKey
  ) {
    if (operandText.length <= 1) {
      this.setStore(otkey, "0");
      return;
    }

    this.setStore(otkey, operandText.slice(0, -1));
  }

  private handleChangeOperandTextSignPosition(
    operandText: string,
    otkey: OperandTextKey
  ) {
    if (operandText.startsWith("-")) {
      this.setStore(otkey, operandText.slice(1));
      return;
    }

    this.setStore(otkey, `-${operandText}`);
  }

  private addToHistoryList(item: HistoryType) {
    this.setStore("historyList", [item, ...this.current.historyList]);
    localStorage.setItem(
      "history-list",
      JSON.stringify(this.current.historyList)
    );
  }

  private setStore<K extends keyof Store>(key: K, value: Store[K]) {
    this._current[1](key, value);
  }

  get current(): Store {
    return this._current[0];
  }
}
