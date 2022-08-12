import { browser } from "$app/env";
import type { LocalStorageKey, ThemeMode, ThemeStore } from "$lib/types";

export const getInitialData = <T>({ defaultValue, key }: { defaultValue: T; key: LocalStorageKey }) => {
  if (!browser) return defaultValue;
  const json = window.localStorage.getItem(key);
  return json === null ? defaultValue : (JSON.parse(json) as T);
};

export const persistData = <T>({ data, key }: { data: T; key: LocalStorageKey }) => {
  if (!browser) return;
  window.localStorage.setItem(key, JSON.stringify(data));
};

const getPreferedColorScheme = (): ThemeMode => {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

export const getInitialTheme = (defaultValue: ThemeMode): ThemeStore => {
  if (!browser) return { mode: defaultValue, prefersColorScheme: true };
  const json = window.localStorage.getItem("theme");

  if (json === null) return { mode: getPreferedColorScheme(), prefersColorScheme: true };

  const storedTheme = JSON.parse(json) as ThemeStore;
  const mode = storedTheme.prefersColorScheme ? getPreferedColorScheme() : storedTheme.mode;
  return { ...storedTheme, mode };
};
