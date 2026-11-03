import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import type { Theme } from "@/types/app";

interface SettingsState {
  theme: Theme;
  toggleTheme: () => void;
}

export const useSettingsStore = create<SettingsState>()(
  persist(
    (set) => ({
      theme: "dark",
      toggleTheme: () =>
        set((state) => ({ theme: state.theme === "dark" ? "light" : "dark" })),
    }),
    {
      name: "myshkin-settings",
      storage: createJSONStorage(() => localStorage),
      partialize: ({ theme }) => ({ theme }),
    },
  ),
);
