import { writable } from "svelte/store";
import type { ThemeStore } from "$lib/types";
import { getInitialTheme, persistData } from "$lib/helpers";

export const theme = writable<ThemeStore>(getInitialTheme("light"));
theme.subscribe((data) => persistData<ThemeStore>({ data, key: "theme" }));

export const toggleTheme = () =>
  theme.update((prev) => ({ prefersColorScheme: false, mode: prev.mode === "dark" ? "light" : "dark" }));
