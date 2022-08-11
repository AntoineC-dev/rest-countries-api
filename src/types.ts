export type ThemeMode = "light" | "dark";

export interface ThemeStore {
  mode: ThemeMode;
  prefersColorScheme: boolean;
}
export type LocalStorageKey = "theme";
