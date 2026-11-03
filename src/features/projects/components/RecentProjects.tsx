import { BookOpen, Sparkles } from "lucide-react";

export function RecentProjects() {
  return (
    <section className="recent-section" aria-labelledby="recent-heading">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Your library</p>
          <h2 id="recent-heading">Recent projects</h2>
        </div>
        <span className="section-count">0 projects</span>
      </div>
      <div className="empty-projects">
        <div className="empty-art" aria-hidden="true">
          <BookOpen size={24} strokeWidth={1.4} />
          <Sparkles className="empty-sparkle" size={13} strokeWidth={1.6} />
        </div>
        <h3>A little room for a big story.</h3>
        <p>Your novels will find a home here when project creation is ready.</p>
      </div>
    </section>
  );
}
