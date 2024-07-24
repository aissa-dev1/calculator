import { store } from "../store";
import Key from "./key";

export default function KeysBox() {
  return (
    <div class="grid grid-cols-4 gap-2">
      <Key
        onClick={() => {
          store.calc.clearEverything();
        }}
      >
        CE
      </Key>
      <Key
        onClick={() => {
          store.calc.clear();
        }}
      >
        C
      </Key>
      <Key
        class="flex items-center justify-center"
        onClick={() => {
          store.calc.removeFromOperandText();
        }}
      >
        <img
          class="w-5"
          src={`/delete-${store.appearance.current.theme}.svg`}
          alt="delete"
        />
      </Key>
      <Key
        onClick={() => {
          store.calc.setOperator("/");
        }}
      >
        /
      </Key>
      <Key
        onClick={() => {
          store.calc.addToOperandText("7");
        }}
      >
        7
      </Key>
      <Key
        onClick={() => {
          store.calc.addToOperandText("8");
        }}
      >
        8
      </Key>
      <Key
        onClick={() => {
          store.calc.addToOperandText("9");
        }}
      >
        9
      </Key>
      <Key
        onClick={() => {
          store.calc.setOperator("*");
        }}
      >
        *
      </Key>
      <Key
        onClick={() => {
          store.calc.addToOperandText("4");
        }}
      >
        4
      </Key>
      <Key
        onClick={() => {
          store.calc.addToOperandText("5");
        }}
      >
        5
      </Key>
      <Key
        onClick={() => {
          store.calc.addToOperandText("6");
        }}
      >
        6
      </Key>
      <Key
        onClick={() => {
          store.calc.setOperator("-");
        }}
      >
        -
      </Key>
      <Key
        onClick={() => {
          store.calc.addToOperandText("1");
        }}
      >
        1
      </Key>
      <Key
        onClick={() => {
          store.calc.addToOperandText("2");
        }}
      >
        2
      </Key>
      <Key
        onClick={() => {
          store.calc.addToOperandText("3");
        }}
      >
        3
      </Key>
      <Key
        onClick={() => {
          store.calc.setOperator("+");
        }}
      >
        +
      </Key>
      <Key
        onClick={() => {
          store.calc.changeOperandTextSign();
        }}
      >
        <span>+</span>
        <span>/</span>
        <span>-</span>
      </Key>
      <Key
        onClick={() => {
          store.calc.addToOperandText("0");
        }}
      >
        0
      </Key>
      <Key
        onClick={() => {
          store.calc.addToOperandText(".");
        }}
      >
        .
      </Key>
      <Key
        variant="accent"
        onClick={() => {
          store.calc.total();
        }}
      >
        =
      </Key>
    </div>
  );
}
