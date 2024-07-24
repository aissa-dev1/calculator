import { createStore } from "solid-js/store";

interface Store {
  sidebarActive: boolean;
  historyActive: boolean;
}

export class UiStore {
  private readonly _current = createStore<Store>({
    sidebarActive: false,
    historyActive: false,
  });

  toggleSidebar() {
    this.hideHistoryBarIfActive();
    this.setStore("sidebarActive", !this.current.sidebarActive);
  }

  toggleHistory() {
    this.hideSideBarIfActive();
    this.setStore("historyActive", !this.current.historyActive);
  }

  private hideHistoryBarIfActive() {
    if (this.current.historyActive) {
      this.setStore("historyActive", false);
    }
  }

  private hideSideBarIfActive() {
    if (this.current.sidebarActive) {
      this.setStore("sidebarActive", false);
    }
  }

  private setStore<K extends keyof Store>(key: K, value: Store[K]) {
    this._current[1](key, value);
  }

  get current(): Store {
    return this._current[0];
  }
}
