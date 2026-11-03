import { useEffect, type ReactNode } from "react";
import { useSettingsStore } from "@/stores/settings-store";

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const theme = useSettingsStore((state) => state.theme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute(
      "content",
      theme === "dark" ? "#171715" : "#f7f5f0",
    );
  }, [theme]);

  return children;
}
