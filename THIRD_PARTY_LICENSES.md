# Third-Party Licenses

This document contains the licenses and attributions for third-party software, libraries, frameworks, fonts, icons, and other assets used by Myshkin.

Myshkin's own source code is distributed under the GNU General Public License v3.0 (GPL-3.0).

Third-party components remain subject to their respective licenses.

---

## 1. Frontend Dependencies

| Component | Purpose | License | Source |
|-----------|---------|---------|--------|
| React | UI library | MIT | https://github.com/facebook/react |
| React DOM | DOM renderer | MIT | https://github.com/facebook/react |
| Vite | Frontend build tool | MIT | https://github.com/vitejs/vite |
| Vite React plugin | React integration | MIT | https://github.com/vitejs/vite-plugin-react |
| TypeScript | Programming language | Apache-2.0 | https://github.com/microsoft/TypeScript |
| Tailwind CSS and Vite plugin | CSS framework and integration | MIT | https://github.com/tailwindlabs/tailwindcss |
| Zustand | State management | MIT | https://github.com/pmndrs/zustand |
| Lucide React | Icon library | ISC | https://github.com/lucide-icons/lucide |
| Tauri JavaScript API and CLI | Desktop IPC and build tooling | MIT / Apache-2.0 | https://github.com/tauri-apps/tauri |
| clsx | Conditional class names | MIT | https://github.com/lukeed/clsx |
| tailwind-merge | Tailwind class conflict resolution | MIT | https://github.com/dcastil/tailwind-merge |
| Vitest | Frontend test runner | MIT | https://github.com/vitest-dev/vitest |
| React Testing Library | UI testing utilities | MIT | https://github.com/testing-library/react-testing-library |
| jest-dom | DOM test matchers | MIT | https://github.com/testing-library/jest-dom |
| jsdom | DOM test environment | MIT | https://github.com/jsdom/jsdom |
| Node.js type definitions | TypeScript tooling | MIT | https://github.com/DefinitelyTyped/DefinitelyTyped |
| React type definitions | TypeScript tooling | MIT | https://github.com/DefinitelyTyped/DefinitelyTyped |

## 2. Desktop and Backend Dependencies

| Component | Purpose | License | Source |
|-----------|---------|---------|--------|
| Tauri | Desktop application framework | MIT / Apache-2.0 | https://github.com/tauri-apps/tauri |
| tauri-build | Rust build-time integration | MIT / Apache-2.0 | https://github.com/tauri-apps/tauri |
| Rust | Backend programming language | MIT / Apache-2.0 | https://github.com/rust-lang/rust |
| Serde | Rust serialization framework | MIT / Apache-2.0 | https://github.com/serde-rs/serde |

SQLite and SQLx are planned but are not dependencies in this foundation phase.

## 3. Fonts and Visual Assets

List all fonts, icons, illustrations, images, and other external assets used by Myshkin.

| Asset | Creator | License | Source |
|-------|---------|---------|--------|
| Myshkin desktop icon | Myshkin contributors | GPL-3.0-only | `src-tauri/icons/myshkin.svg` |
| Fonts | System providers | Platform/system licenses | No font files are bundled; the UI uses system font fallbacks. |

Do not include assets without verifying their licensing and redistribution permissions.

## 4. Development Dependencies

Development-only dependencies should also be documented when relevant.

Examples:
- Testing frameworks
- Build tools
- Linters
- Code formatters

Their licenses should be verified against the actual installed package versions.

## 5. License Compliance

Myshkin aims to respect all third-party licenses.

The project maintains the following practices:

1. Preserve required copyright and license notices.
2. Document third-party dependencies and their licenses.
3. Verify licenses before introducing new dependencies.
4. Include required notices in distributed application packages.
5. Respect attribution and redistribution requirements.
6. Review license compatibility before release.

## 6. Verification Notice

The license information in this document must be verified against the actual dependency versions and packages included in each release.

This document is maintained as the project evolves.

---

**Myshkin — The Novel Writing Studio**  
Every story deserves a world.