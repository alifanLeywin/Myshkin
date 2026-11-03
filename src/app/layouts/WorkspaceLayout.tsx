import {
  BookOpen,
  BookText,
  ChevronDown,
  CircleHelp,
  Command,
  Feather,
  FolderPlus,
  Globe2,
  LayoutDashboard,
  Library,
  Search,
  Settings2,
  Users,
} from "lucide-react";
import { DashboardPage } from "@/features/dashboard/DashboardPage";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const navigation = [
  { label: "Overview", icon: LayoutDashboard, active: true },
  { label: "Manuscript", icon: BookText, active: false },
  { label: "Characters", icon: Users, active: false },
  { label: "World & lore", icon: Globe2, active: false },
];

export function WorkspaceLayout() {
  return (
    <div className="workspace">
      <aside className="sidebar" aria-label="Main navigation">
        <a className="brand-lockup" href="#" aria-label="Myshkin home">
          <span className="brand-mark" aria-hidden="true">
            <Feather size={17} strokeWidth={1.5} />
          </span>
          <span className="brand-name">Myshkin</span>
        </a>

        <button className="project-switcher" type="button" disabled>
          <span className="switcher-icon">
            <BookOpen size={15} />
          </span>
          <span className="switcher-copy">
            <span className="switcher-label">Your workspace</span>
            <span className="switcher-title">All projects</span>
          </span>
          <ChevronDown size={14} className="switcher-chevron" />
        </button>

        <div className="sidebar-section">
          <p className="sidebar-label">Workspace</p>
          <nav className="nav-list" aria-label="Workspace pages">
            {navigation.map(({ label, icon: Icon, active }) => (
              <button
                className={`nav-item${active ? " active" : ""}`}
                key={label}
                type="button"
                aria-current={active ? "page" : undefined}
                disabled={!active}
                title={active ? undefined : `${label} is coming soon`}
              >
                <Icon size={16} strokeWidth={1.7} aria-hidden="true" />
                <span>{label}</span>
                {!active && <span className="nav-soon">SOON</span>}
              </button>
            ))}
          </nav>
        </div>

        <div className="sidebar-section library-section">
          <p className="sidebar-label">Your library</p>
          <button className="nav-item library-empty" type="button" disabled>
            <Library size={16} strokeWidth={1.7} aria-hidden="true" />
            <span>No projects yet</span>
          </button>
          <Button
            className="sidebar-create"
            variant="ghost"
            icon={<FolderPlus size={15} aria-hidden="true" />}
            disabled
            title="Project creation is planned for a future phase."
          >
            New project
          </Button>
        </div>

        <div className="sidebar-bottom">
          <div className="offline-badge">
            <span className="privacy-dot" />
            <span>Private by nature</span>
          </div>
          <button className="sidebar-foot-link" type="button" disabled>
            <CircleHelp size={15} aria-hidden="true" />
            <span>Help &amp; guides</span>
          </button>
          <button className="sidebar-foot-link" type="button" disabled>
            <Settings2 size={15} aria-hidden="true" />
            <span>Settings</span>
          </button>
          <div className="sidebar-version">
            <span>MYSHKIN</span>
            <span>0.1.0 · PREVIEW</span>
          </div>
        </div>
      </aside>

      <main className="main-column">
        <header className="topbar">
          <div className="breadcrumb">
            <span>Workspace</span>
            <span className="breadcrumb-divider">/</span>
            <span className="breadcrumb-current">Overview</span>
          </div>
          <div className="topbar-actions">
            <Button className="search-button" variant="ghost" disabled>
              <Search size={15} aria-hidden="true" />
              <span>Search</span>
              <kbd>
                <Command size={10} aria-hidden="true" /> K
              </kbd>
            </Button>
            <span className="topbar-separator" />
            <ThemeToggle />
            <span className="avatar" aria-label="Myshkin workspace">
              M
            </span>
          </div>
        </header>

        <div className="page-scroll">
          <DashboardPage />
          <footer className="statusbar">
            <span>
              <span className="status-dot" />
              No open document
            </span>
            <span>MADE FOR THE LONG STORY</span>
          </footer>
        </div>
      </main>

      <aside className="context-panel" aria-label="Writing inspiration">
        <div className="context-heading">
          <span className="context-kicker">A note for today</span>
          <span className="context-rule" />
        </div>
        <div className="quote-mark" aria-hidden="true">
          “
        </div>
        <blockquote>
          A story begins as a small light in a room of possibilities.
        </blockquote>
        <p className="quote-attribution">A WRITER’S NOTE</p>
        <div className="context-divider" />
        <div className="context-bottom">
          <span className="context-caption">A GENTLE REMINDER</span>
          <p>Begin anywhere. The first page is only a door.</p>
          <Feather size={17} strokeWidth={1.4} aria-hidden="true" />
        </div>
        <div className="context-edition">THE WRITER’S DESK · VOL. 01</div>
      </aside>
    </div>
  );
}
