import { AppearanceStore } from "./features/appearance";
import { CalcStore } from "./features/calc";
import { UiStore } from "./features/ui";

class Store {
  readonly ui = new UiStore();
  readonly appearance = new AppearanceStore();
  readonly calc = new CalcStore();
}

export const store = new Store();
