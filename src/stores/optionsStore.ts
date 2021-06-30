import { writable } from "svelte/store";

export const bShowOptionsOverlay = writable(false);
export function toggleShowOptionsOverlay() {
  bShowOptionsOverlay.update(_value => !_value);
  console.log('awdawda');
}