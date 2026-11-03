import { ArrowUpRight, Feather } from "lucide-react";
import { ProjectActions } from "@/features/projects/components/ProjectActions";
import { RecentProjects } from "@/features/projects/components/RecentProjects";

export function DashboardPage() {
  return (
    <div className="dashboard-page">
      <section className="welcome-panel" aria-labelledby="welcome-heading">
        <div className="welcome-copy">
          <p className="eyebrow">A workspace for the worlds within</p>
          <h1 id="welcome-heading">
            Every story
            <br />
            deserves a <em>world.</em>
          </h1>
          <p className="welcome-description">
            A quieter place to gather your thoughts, find your words, and follow a
            story wherever it leads.
          </p>
          <ProjectActions />
        </div>
        <div className="welcome-illustration" aria-hidden="true">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="sun-disc" />
          <Feather className="hero-feather" size={118} strokeWidth={0.75} />
          <span className="floating-mark mark-one">✳</span>
          <span className="floating-mark mark-two">·</span>
          <span className="floating-mark mark-three">✧</span>
        </div>
        <span className="panel-index">01 / BEGIN</span>
      </section>

      <RecentProjects />

      <section className="small-print" aria-label="Privacy promise">
        <span className="privacy-dot" />
        <p>
          Your writing stays yours. Myshkin is built to work offline, on your
          device.
        </p>
        <ArrowUpRight size={14} aria-hidden="true" />
      </section>
    </div>
  );
}
