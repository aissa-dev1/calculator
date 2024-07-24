import { ParentProps, Show } from "solid-js";
import { store } from "../store";

function ViewOperation(props: ParentProps) {
  return (
    <span
      class="text-secondary-color dark:text-secondary-color-dark font-bold"
      classList={{
        "text-sm": store.calc.result().length >= 25,
      }}
    >
      {props.children}
    </span>
  );
}

function ViewResult(props: ParentProps) {
  return (
    <span
      class="font-bold text-primary-color dark:text-primary-color-dark"
      classList={{
        "text-3xl": store.calc.result().length <= 15,
        "text-lg":
          store.calc.result().length > 15 && store.calc.result().length < 25,
        "text-sm": store.calc.result().length >= 25,
      }}
    >
      {props.children}
    </span>
  );
}

export default function View() {
  return (
    <div class="flex flex-col gap-2 items-end justify-center h-20 px-3.5">
      <Show when={store.calc.validExpression()}>
        <ViewOperation>{store.calc.expression()}</ViewOperation>
      </Show>
      <ViewResult>{store.calc.result()}</ViewResult>
    </div>
  );
}
