import { FolderOpen, Plus } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function ProjectActions() {
  return (
    <div className="project-actions">
      <Button
        variant="primary"
        icon={<Plus size={16} aria-hidden="true" />}
        disabled
        title="Project creation is planned for a future phase."
      >
        Create new project
      </Button>
      <Button
        icon={<FolderOpen size={16} aria-hidden="true" />}
        disabled
        title="Opening a project is planned for a future phase."
      >
        Open project
      </Button>
      <p className="feature-note">Project creation and opening are coming soon.</p>
    </div>
  );
}
