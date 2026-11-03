import { cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { App } from "@/app/App";
import { useSettingsStore } from "@/stores/settings-store";

describe("Myshkin workspace", () => {
  afterEach(() => {
    cleanup();
  });

  beforeEach(() => {
    localStorage.clear();
    useSettingsStore.setState({ theme: "dark" });
    document.documentElement.dataset.theme = "dark";
  });

  it("shows the welcome dashboard and labels unavailable project actions", () => {
    render(<App />);

    expect(
      screen.getByRole("heading", { name: /every story deserves a world/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Recent projects" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Create new project" })).toBeDisabled();
    expect(screen.getByRole("button", { name: "Open project" })).toBeDisabled();
    expect(
      screen.getByText("Project creation and opening are coming soon."),
    ).toBeInTheDocument();
  });

  it("toggles and persists the theme", async () => {
    render(<App />);

    fireEvent.click(screen.getByRole("button", { name: "Switch to light mode" }));

    await waitFor(() => {
      expect(document.documentElement).toHaveAttribute("data-theme", "light");
    });
    expect(screen.getByRole("button", { name: "Switch to dark mode" })).toBeInTheDocument();
    expect(localStorage.getItem("myshkin-settings")).toContain('"theme":"light"');
  });
});
