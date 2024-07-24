import { createStore } from "solid-js/store";
import { Theme } from "./types";

interface Store {
  theme: Theme;
}

export class AppearanceStore {
  private readonly _current = createStore<Store>({
    theme: (localStorage.getItem("theme") as Theme) || "dark",
  });

  constructor() {
    this.handleThemeChange();
  }

  toggleTheme() {
    this.setStore("theme", this.current.theme === "dark" ? "light" : "dark");
    localStorage.setItem("theme", this.current.theme);
    this.handleThemeChange();
  }

  private handleThemeChange() {
    if (this.current.theme === "light") document.body.classList.remove("dark");
    else document.body.classList.add("dark");
  }

  private setStore<K extends keyof Store>(key: K, value: Store[K]) {
    this._current[1](key, value);
  }

  get current(): Store {
    return this._current[0];
  }
}
