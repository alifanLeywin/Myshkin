import { ThemeProvider } from "@/app/providers/ThemeProvider";
import { WorkspaceLayout } from "@/app/layouts/WorkspaceLayout";

export function App() {
  return (
    <ThemeProvider>
      <WorkspaceLayout />
    </ThemeProvider>
  );
}
