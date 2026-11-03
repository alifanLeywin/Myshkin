# Myshkin — Architecture

**Product:** Myshkin — The Novel Writing Studio  
**Tagline:** Every story deserves a world.  
**Architecture:** Offline-first desktop application  
**Platforms:** macOS, Windows, Linux

---

## 1. Architectural Philosophy

Myshkin is designed around five principles:

1. **Local-first:** Core functionality must work without an internet connection.
2. **Data integrity:** Manuscripts and project data must be protected against accidental loss or corruption.
3. **Separation of concerns:** UI, business logic, persistence, and native operations must remain independent.
4. **Cross-platform:** Platform-specific functionality must be abstracted behind shared interfaces.
5. **Writing-first:** The architecture must prioritize a reliable and responsive writing experience.

AI is an optional extension, never a required dependency.

## 2. Technology Stack

### Desktop Runtime
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
- Tiptap
- ProseMirror

### State Management
- Zustand

### Database
- SQLite
- SQLx
- SQLite FTS5 for full-text search

### Testing
- Vitest
- React Testing Library
- Playwright
- Rust unit and integration tests

### Build and Distribution
- GitHub Actions
- Tauri bundler

Avoid introducing additional frameworks or services without a clear architectural reason.

## 3. High-Level Architecture

Myshkin uses a layered desktop architecture.

```text
┌──────────────────────────────────────┐
│              React UI                │
│  Components / Pages / Features       │
├──────────────────────────────────────┤
│          Application Layer           │
│       Zustand / Business Logic       │
├──────────────────────────────────────┤
│          Tauri IPC Boundary          │
├──────────────────────────────────────┤
│             Rust Core                │
│ Commands / Services / Validation     │
├──────────────────────────────────────┤
│          Persistence Layer           │
│          SQLx / SQLite               │
├──────────────────────────────────────┤
│          Local Filesystem            │
│       Assets / Backups / Exports     │
└──────────────────────────────────────┘
```

The frontend must never access SQLite or native filesystem operations directly.

All privileged operations must go through explicitly defined Tauri commands.

## 4. Frontend Architecture

Use a feature-oriented structure.

```text
src/
├── app/
│   ├── layouts/
│   ├── providers/
│   └── routes/
├── components/
│   ├── ui/
│   ├── editor/
│   ├── sidebar/
│   └── dialogs/
├── features/
│   ├── projects/
│   ├── manuscript/
│   ├── chapters/
│   ├── scenes/
│   ├── characters/
│   ├── worldbuilding/
│   ├── timeline/
│   ├── search/
│   ├── export/
│   └── settings/
├── services/
│   ├── database/
│   ├── filesystem/
│   └── ai/
├── stores/
├── hooks/
├── types/
└── lib/
```

Responsibilities:

- `app/`: Application initialization, layouts, and routing.
- `components/`: Reusable interface components.
- `features/`: Domain-specific functionality.
- `services/`: Frontend service abstractions and IPC clients.
- `stores/`: Shared application state.
- `hooks/`: Reusable React hooks.
- `types/`: Shared TypeScript types.
- `lib/`: Small utilities and helpers.

Keep domain logic out of presentation components.

## 5. Rust Backend Architecture

```text
src-tauri/
├── src/
│   ├── commands/
│   ├── database/
│   ├── models/
│   ├── services/
│   ├── filesystem/
│   ├── errors/
│   └── lib.rs
├── migrations/
├── capabilities/
└── tauri.conf.json
```

Responsibilities:

- `commands/`: Tauri IPC entry points.
- `database/`: SQLite connections and repositories.
- `models/`: Backend domain models.
- `services/`: Business operations.
- `filesystem/`: Safe local file operations.
- `errors/`: Centralized error handling.
- `migrations/`: Version-controlled database migrations.

Commands should remain thin. Complex operations belong in services.

## 6. Data Architecture

SQLite is the primary structured data store.

Suggested entities:

- Project
- Chapter
- Scene
- Character
- CharacterRelationship
- Location
- LoreEntry
- TimelineEvent
- Tag
- Asset
- DocumentSnapshot

Use stable identifiers and explicit relationships.

### Manuscript Storage

Tiptap JSON is the primary manuscript representation.

Markdown is supported for import and export.

Do not use Markdown as the only internal manuscript format.

### Asset Storage

Store binary assets in the local filesystem.

Examples:
- Cover images
- Character illustrations
- Reference images
- Other project attachments

Store asset metadata and references in SQLite.

### Database Rules

- Use SQLx and parameterized queries.
- Use migrations for schema changes.
- Use transactions for multi-step writes.
- Enforce referential integrity.
- Never silently discard manuscript data.
- Design backup and recovery mechanisms.

## 7. Application Communication

Frontend and backend communicate through Tauri IPC.

Example flow:

```text
User Action
    ↓
React Component
    ↓
Feature Service
    ↓
Tauri Command
    ↓
Rust Service
    ↓
SQLite / Filesystem
    ↓
Result or Error
    ↓
Frontend State Update
```

Do not introduce an HTTP server or separate backend service for normal application functionality.

## 8. Editor and Autosave Architecture

The manuscript editor is one of the most critical components.

Use Tiptap for rich-text editing.

### Save Lifecycle

1. User modifies manuscript content.
2. Editor state updates.
3. Document is marked as dirty.
4. Autosave is scheduled after a short debounce period.
5. Frontend sends the latest document state through IPC.
6. Rust persists the document using SQLite transactions.
7. Frontend marks the document as saved only after successful persistence.

### Reliability Requirements

- Prevent stale writes from overwriting newer content.
- Handle save failures explicitly.
- Track pending writes.
- Flush pending saves when possible during application shutdown.
- Provide recovery mechanisms for interrupted sessions.
- Never display a successful save status before persistence succeeds.

## 9. Search Architecture

Use SQLite FTS5 for manuscript and project-wide full-text search.

Search should support:
- Chapter titles
- Scene titles
- Manuscript content
- Character names
- Worldbuilding entries

Search indexing must remain consistent with the underlying database.

## 10. Story Organization

Myshkin organizes stories into interconnected domains.

### Manuscript
Contains chapters and scenes.

### Characters
Contains character profiles, attributes, and relationships.

### Worldbuilding
Contains locations, lore, cultures, and other fictional-world information.

### Timeline
Contains chronological story events.

### Relationships
Connects characters, locations, and story elements.

Keep these domains independently manageable while allowing references between them.

## 11. AI Integration

AI is optional.

Use a provider abstraction to support different AI backends.

Initial potential providers:
- Ollama for local models.
- OpenAI-compatible APIs for optional external models.

Requirements:

- Core writing functionality must work without AI.
- Never transmit manuscript content without explicit user consent.
- API credentials must not be hardcoded.
- AI providers must be replaceable without rewriting the editor.
- Clearly distinguish AI-generated content from original manuscript content.

## 12. Import and Export

Support a modular import/export architecture.

Planned formats:
- Markdown
- PDF
- EPUB
- DOCX

Each format should have its own serialization and export implementation.

Preserve manuscript structure and metadata whenever possible.

## 13. Security and Privacy

- Default to offline operation.
- No mandatory accounts.
- No mandatory cloud services.
- No telemetry without explicit consent.
- Restrict Tauri capabilities to required operations.
- Validate imported files.
- Avoid arbitrary shell execution.
- Protect user data and local credentials.

## 14. Cross-Platform Compatibility

Support:
- macOS
- Windows
- Linux

Use Tauri and Rust abstractions for platform-dependent functionality.

Avoid hardcoded filesystem paths and operating-system-specific assumptions.

Test packaging and functionality independently on each target platform.

## 15. Testing Strategy

Prioritize testing critical data operations.

### Frontend
- Component tests
- Feature tests
- State management tests

### Backend
- Database tests
- Migration tests
- Command tests
- Filesystem tests

### Integration
- Project creation and opening
- Chapter and scene management
- Manuscript editing
- Autosave and recovery
- Search indexing
- Import and export
- Backup and restoration

## 16. Architectural Decision Rules

Before introducing a new dependency or changing architecture:

1. Identify the actual problem.
2. Check whether existing components can solve it.
3. Evaluate maintenance and licensing.
4. Consider offline and cross-platform compatibility.
5. Consider performance and application size.
6. Document significant architectural changes.

Avoid premature abstraction and unnecessary complexity.

---

**Core Architectural Principle:**

Build Myshkin as reliable writing software with a strong data foundation, not merely an impressive-looking editor.