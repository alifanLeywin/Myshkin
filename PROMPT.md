# Myshkin — The Novel Writing Studio

## Product Overview

Myshkin is an open-source, offline-first desktop
application designed for novelists and storytellers.

It provides a dedicated creative workspace for:
- Writing and editing manuscripts
- Organizing chapters and scenes
- Developing characters and relationships
- Building fictional worlds and lore
- Managing story timelines
- Tracking writing progress

Myshkin is not an AI wrapper or a generic text editor.
Its primary purpose is to provide a reliable,
beautiful, and distraction-free environment
for developing complete novels.

## Product Identity

- Product Name: Myshkin
- Product Type: Desktop Novel Writing Studio
- Tagline: Every story deserves a world.
- Design Direction: Editorial Workspace
- Philosophy: Writing first, organization second,
  AI optional.
- License: Open-source
- Platform: macOS, Windows, Linux
- Architecture: Offline-first

## 1. Project Overview

You are a senior software engineer and desktop application architect.

Build an open-source, cross-platform desktop application named **Myshkin**.

Myshkin is a professional writing environment designed for novelists, fiction writers, and worldbuilders.

The application should allow users to:
- Create and manage multiple novel projects.
- Write and organize chapters and scenes.
- Manage characters and their relationships.
- Build fictional worlds, locations, and lore.
- Organize story timelines and plot structures.
- Export manuscripts into common document formats.

The application must work completely offline without requiring an account, external server, subscription, or paid API.

AI integration is optional and must never be required for core functionality.

## 2. Technology Stack

Use the following stack:

### Desktop
- Tauri 2
- Rust

### Frontend
- React
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui
- Lucide Icons

### Editor
- Tiptap (open-source extensions only)
- ProseMirror

### Data Management
- SQLite
- SQLx (Rust backend)
- Zustand for frontend state management
- SQLite FTS5 for full-text search

### Testing
- Vitest
- React Testing Library
- Playwright

Do not introduce unnecessary frameworks or paid dependencies.

## 3. Platform Requirements

The application must support:

- macOS
- Windows
- Linux

Use Tauri's native APIs instead of creating a separate HTTP backend.

Avoid OS-specific assumptions in application logic.

All filesystem operations must go through a properly abstracted native service.

## 4. Core Architecture

Use a feature-based architecture.

Frontend:

src/
  app/
  components/
    ui/
    editor/
    layout/
  features/
    projects/
    manuscript/
    chapters/
    scenes/
    characters/
    worldbuilding/
    timeline/
    export/
  services/
    database/
    filesystem/
    ai/
  stores/
  hooks/
  types/
  lib/

Backend:

src-tauri/
  src/
    commands/
    database/
    filesystem/
    services/
  migrations/
  capabilities/

Separate UI components, business logic, database operations, and native filesystem operations.

Avoid putting business logic directly inside React components.

## 5. Core Features — MVP

### A. Project Management

Users must be able to:
- Create a novel project.
- Open an existing project.
- Rename a project.
- Delete a project with confirmation.
- Display recent projects.
- View project statistics.

Each project must have its own isolated data.

### B. Manuscript Editor

Implement a professional rich-text editor using Tiptap.

Required functionality:
- Bold, italic, underline.
- Headings.
- Paragraphs.
- Text alignment.
- Blockquotes.
- Lists.
- Undo and redo.
- Keyboard shortcuts.
- Word count.
- Character count.
- Reading-time estimation.
- Focus mode.

The editor must provide a comfortable long-form writing experience.

### C. Chapter Management

Users must be able to:
- Create chapters.
- Rename chapters.
- Delete chapters.
- Reorder chapters.
- Write chapter descriptions.
- View chapter word counts.
- Organize chapters into parts.

### D. Scene Management

Allow users to:
- Create multiple scenes per chapter.
- Reorder scenes.
- Add scene descriptions.
- Track scene status.
- Move scenes between chapters.

### E. Character Management

Each character should support:
- Name.
- Profile image.
- Description.
- Personality.
- Background.
- Motivation.
- Goals.
- Character development notes.

Implement character relationships using graph-based data structures.

### F. Worldbuilding

Support:
- Locations.
- Kingdoms.
- Organizations.
- Lore entries.
- Historical events.
- Custom notes.

### G. Timeline

Allow users to create chronological events associated with:
- Characters.
- Locations.
- Chapters.
- Story arcs.

Implement timeline ordering and visualization.

### H. Search

Implement full-text search across:
- Chapters.
- Scenes.
- Characters.
- Worldbuilding entries.

Use SQLite FTS5.

### I. Autosave

Implement a reliable autosave system.

Requirements:
- Debounced saving.
- SQLite transactions.
- Save status indicators.
- Dirty-state tracking.
- Recovery after unexpected application termination.
- No data loss during normal application shutdown.

Do not save every keystroke directly to the database.

### J. Import and Export

Support:
- Markdown import/export.
- PDF export.
- EPUB export.
- DOCX export.

Keep export functionality modular.

## 6. Data Architecture

Use SQLite as the primary structured data store.

Suggested entities:

- projects
- chapters
- scenes
- characters
- character_relationships
- locations
- lore_entries
- timeline_events
- tags
- assets
- document_snapshots

Store manuscript content as structured Tiptap JSON.

Use migrations for database schema changes.

Store images and other binary assets in the local filesystem.

Provide project backup and restoration functionality.

## 7. UI/UX Design Direction

Create an original design called **Editorial Workspace**.

Design inspiration:
- Scrivener: writing workflow.
- Obsidian: knowledge organization.
- Notion: flexible workspace.

Do not directly copy their interfaces.

Visual direction:
- Professional.
- Minimalist.
- Elegant editorial typography.
- Dark mode by default.
- Optional light mode.
- Warm neutral accents.
- Serif typography for manuscript content.
- Sans-serif typography for application UI.

Main layout:

1. Left sidebar: project navigation.
2. Center workspace: manuscript editor or selected feature.
3. Right inspector: contextual information.
4. Top toolbar: document actions.
5. Bottom status bar: word count and save status.

Support resizable and collapsible panels.

The application must feel like a dedicated desktop writing environment, not a generic website.

## 8. AI Integration — Optional

Create a provider abstraction for future AI integration.

Potential providers:
- Ollama.
- OpenAI-compatible APIs.

Potential functionality:
- Brainstorming.
- Writing suggestions.
- Character consistency analysis.
- Plot analysis.
- Chapter summaries.

Do not implement AI features before the core writing experience is stable.

Never automatically modify manuscript content using AI.

Never send manuscript data to external services without explicit user consent.

## 9. Engineering Requirements

Follow these rules:

1. Write maintainable, modular TypeScript and Rust.
2. Use strict TypeScript.
3. Avoid unnecessary dependencies.
4. Validate all database operations.
5. Handle errors explicitly.
6. Use database migrations.
7. Implement proper loading, empty, and error states.
8. Do not use mock data in production functionality.
9. Do not create nonfunctional buttons.
10. Do not hardcode application data.
11. Follow Tauri security best practices.
12. Keep the application functional offline.
13. Respect dependency licenses.
14. Write tests for important business logic.

## 10. Development Workflow

Do not attempt to implement the entire application in one step.

Work incrementally.

Phase 1:
- Initialize Tauri 2.
- Configure React, Vite, and TypeScript.
- Configure Tailwind and shadcn/ui.
- Establish project architecture.
- Create the main application layout.

Phase 2:
- Implement SQLite integration.
- Implement project management.
- Implement project creation and opening.

Phase 3:
- Integrate Tiptap.
- Implement chapter management.
- Implement scene management.
- Implement autosave.

Phase 4:
- Implement characters.
- Implement worldbuilding.
- Implement timeline.
- Implement search.

Phase 5:
- Implement import/export.
- Implement backup and restoration.

Phase 6:
- Testing.
- Performance optimization.
- Cross-platform packaging.

## 11. Instructions for the Coding Agent

Before implementation:

1. Inspect the existing repository.
2. Identify existing code and dependencies.
3. Create a development plan.
4. Identify potential architectural issues.
5. Propose a clean implementation structure.

Then implement Phase 1.

Do not skip phases.

Do not claim a feature is complete unless it actually works.

After each phase:
- Run relevant tests.
- Run TypeScript checks.
- Run Rust checks.
- Fix errors before proceeding.
- Update project documentation.

Prioritize working software over impressive-looking mockups.

## 12. Initial Deliverable

Start by building the foundation:

- A working Tauri desktop application.
- React + TypeScript frontend.
- Editorial Workspace UI.
- Main navigation.
- Dark/light theme.
- Empty project dashboard.
- Basic project creation interface.

Do not implement all advanced features immediately.

First establish a stable, maintainable foundation for Myshkin.