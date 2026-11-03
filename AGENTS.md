# AGENTS.md — Myshkin

## 1. Project Identity

The application name is Myshkin.

Always use "Myshkin" as the official product name
across the application, UI, documentation,
package metadata, and build configuration.

Never use placeholder product names such as
"Novel Studio", "Novara", or generic alternatives.

Brand identity:
- Name: Myshkin
- Product description: The Novel Writing Studio
- Tagline: Every story deserves a world.

Maintain a consistent, elegant, literary,
and professional visual identity.

You are contributing to Novel Studio, an open-source, offline-first, cross-platform desktop application for novel writers.

The application must support:
- macOS
- Windows
- Linux

The primary goal is to provide a reliable and enjoyable environment for writing, organizing, and managing novels.

Always prioritize:
1. Writing experience.
2. Data integrity.
3. Application stability.
4. Maintainable architecture.
5. Cross-platform compatibility.
6. User privacy.

## 2. Technology Constraints

Use the established project stack:

- Tauri 2
- Rust
- React
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui
- Tiptap
- Zustand
- SQLite
- SQLx

Do not introduce alternative frameworks or major dependencies without a clear technical justification.

Do not introduce:
- Next.js
- Electron
- Express.js
- A separate HTTP backend
- PostgreSQL for local application storage
- Paid services required for core functionality

The application must remain fully functional offline.

## 3. Architecture Rules

Follow a feature-based architecture.

Keep responsibilities separated:

- Components: UI rendering.
- Features: Feature-specific business logic.
- Services: External and native integrations.
- Stores: Frontend state management.
- Rust commands: Native application operations.
- Database layer: Persistent data management.

Rules:

- Do not put business logic directly inside UI components.
- Avoid oversized components.
- Avoid circular dependencies.
- Avoid unnecessary abstractions.
- Keep modules focused and reusable.
- Prefer explicit interfaces and predictable data flow.
- Use TypeScript types consistently.
- Use Rust for native operations and backend responsibilities.

Do not duplicate business logic between frontend and backend.

## 4. Coding Standards

### TypeScript

- Enable strict TypeScript.
- Avoid `any`.
- Avoid unnecessary type assertions.
- Prefer explicit types for public interfaces.
- Use async/await consistently.
- Handle rejected promises.
- Keep functions focused and readable.

### React

- Use functional components.
- Use hooks appropriately.
- Avoid unnecessary re-renders.
- Keep components small and reusable.
- Separate UI state from persistent application data.
- Avoid excessive useEffect logic.
- Do not place complex business logic inside JSX.

### Rust

- Follow idiomatic Rust conventions.
- Use appropriate error handling.
- Avoid unnecessary cloning.
- Avoid panics in normal application workflows.
- Keep Tauri commands focused.
- Validate data received from the frontend.
- Avoid blocking the UI thread with expensive operations.

## 5. Database and Data Integrity

SQLite is the primary local database.

Rules:

- All database schema changes must use migrations.
- Never silently discard user data.
- Use transactions for related database operations.
- Validate database inputs.
- Use parameterized queries.
- Maintain referential integrity.
- Handle database errors explicitly.
- Preserve data compatibility when possible.

Never modify the database schema without considering existing projects.

Database migrations must be tested against existing database states.

## 6. Autosave and Editor Reliability

The manuscript editor is a critical application feature.

Rules:

- Never lose manuscript content during normal operation.
- Use debounced autosave.
- Track unsaved changes.
- Display accurate save status.
- Handle concurrent save operations safely.
- Prevent older save operations from overwriting newer content.
- Flush pending saves during application shutdown when possible.
- Implement recovery mechanisms for unexpected termination.

Never report a document as saved before the database transaction succeeds.

Do not modify manuscript content unexpectedly.

## 7. Cross-Platform Compatibility

All features must be designed for:

- macOS
- Windows
- Linux

Rules:

- Never hardcode OS-specific filesystem paths.
- Use Tauri path APIs.
- Account for filesystem differences.
- Avoid shell commands that only work on one operating system.
- Test platform-specific behavior.
- Do not assume the same font availability across systems.
- Respect native keyboard shortcuts and platform conventions where appropriate.

If a feature cannot be implemented consistently across all platforms, document the limitation.

## 8. UI/UX Guidelines

Novel Studio follows the Editorial Workspace design direction.

Visual principles:

- Minimalist.
- Professional.
- Elegant editorial typography.
- Dark mode by default.
- Optional light mode.
- Consistent spacing.
- Clear visual hierarchy.
- Comfortable long-form writing experience.

Rules:

- Do not redesign existing interfaces without a reason.
- Reuse existing UI components.
- Maintain consistent design tokens.
- Avoid unnecessary animations.
- Support keyboard navigation.
- Provide loading, empty, success, and error states.
- Ensure resizable desktop layouts.
- Avoid generic dashboard aesthetics.

The manuscript editor must remain the primary focus of the application.

## 9. Security and Privacy

Novel Studio is an offline-first application.

Rules:

- Do not collect user manuscript content.
- Do not transmit project data externally without explicit consent.
- Do not introduce telemetry without an explicit opt-in design.
- Validate all file imports.
- Apply Tauri capability restrictions.
- Never expose unrestricted filesystem access to the frontend.
- Do not execute arbitrary commands from manuscript content.
- Keep API keys out of source code and project files.

AI integrations must be optional.

Never send manuscript content to an external AI provider without explicit user consent.

## 10. Dependency Management

Before introducing a dependency:

1. Check whether an existing dependency already solves the problem.
2. Check maintenance activity.
3. Check license compatibility.
4. Check platform support.
5. Consider bundle size and performance.

Prefer free and open-source dependencies.

Do not introduce dependencies solely for convenience when a small, maintainable implementation is sufficient.

Avoid unnecessary dependency upgrades.

## 11. Testing Requirements

Before declaring a feature complete:

- Run TypeScript checks.
- Run relevant frontend tests.
- Run Rust checks.
- Run relevant backend tests.
- Test important user workflows.
- Check error handling.
- Verify that existing features still work.

Important workflows must have automated tests.

Prioritize testing:
- Project creation and opening.
- Database migrations.
- Manuscript editing.
- Autosave.
- Recovery.
- Import and export.
- Project backup and restoration.

Never claim tests passed without actually running them.

## 12. Git and Development Workflow

Rules:

- Work incrementally.
- Avoid unrelated changes.
- Keep commits focused.
- Do not overwrite user changes.
- Inspect existing code before modifying it.
- Do not delete files without understanding their purpose.
- Do not commit secrets or generated user data.
- Preserve existing working functionality.

Before implementing a feature:

1. Understand the requirements.
2. Inspect related modules.
3. Identify affected components.
4. Explain the implementation approach when appropriate.
5. Implement the smallest maintainable solution.
6. Run relevant tests.
7. Summarize the changes.

## 13. Documentation

Keep documentation synchronized with the implementation.

Update documentation when changing:

- Architecture.
- Database schema.
- Application behavior.
- Dependencies.
- Build instructions.
- Platform requirements.
- Public interfaces.

Do not document planned functionality as implemented functionality.

## 14. Agent Behavior

You are expected to act as a careful engineering collaborator.

Always:

- Read existing code before making changes.
- Follow the established architecture.
- Ask for clarification when requirements are genuinely ambiguous.
- Explain significant architectural decisions.
- Identify potential regressions.
- Report incomplete functionality honestly.
- Prefer correctness over implementation speed.

Never:

- Generate fake implementations.
- Leave critical buttons nonfunctional.
- Hide errors with empty catch blocks.
- Use mock data as a replacement for required production functionality.
- Rewrite unrelated modules unnecessarily.
- Claim completion without verification.

## 15. Definition of Done

A task is complete only when:

1. The requested functionality is implemented.
2. Existing functionality remains intact.
3. TypeScript checks pass.
4. Relevant Rust checks pass.
5. Relevant tests pass.
6. Error states are handled.
7. Cross-platform implications are considered.
8. Documentation is updated when necessary.

If any requirement cannot be satisfied, clearly report the limitation.


## Third-Party License Compliance

- Verify the license of every new dependency.
- Prefer permissive open-source dependencies when practical.
- Never introduce dependencies with incompatible licensing.
- Update THIRD_PARTY_LICENSES.md when dependencies change.
- Preserve required copyright and license notices.
- Verify bundled fonts, icons, and assets before distribution.
- Do not assume transitive dependencies share the same license.

---

**Core principle: Build reliable writing software, not just an impressive-looking interface.**