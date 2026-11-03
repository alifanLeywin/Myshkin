# Myshkin — The Novel Writing Studio

**Every story deserves a world.**

Myshkin is an open-source, offline-first desktop writing studio for novelists.
This repository contains the first application foundation: a React and
TypeScript workspace shell, a persistent dark/light theme, and a Tauri 2 native
desktop entry point. Project management and manuscript editing are not
implemented yet.

## Requirements

- Node.js 20.19+ or 22.12+ and npm
- Rust stable installed with [rustup](https://rustup.rs/)
- macOS: Xcode Command Line Tools
- Windows: Microsoft C++ Build Tools and WebView2
- Linux: the system libraries required by Tauri 2 and WebKitGTK

See the [official Tauri prerequisites](https://v2.tauri.app/start/prerequisites/)
for current operating-system and distribution-specific setup instructions.

## Development

```sh
npm install
npm run tauri dev
```

For frontend-only development in a browser:

```sh
npm run dev
```

The current dashboard is an initial shell. Create/Open Project controls and
unbuilt navigation destinations are visibly disabled; they do not simulate
project functionality.

## Checks and builds

```sh
npm run typecheck
npm test
npm run build
npm run tauri build
```

`npm run build` checks TypeScript and creates the frontend bundle.
`npm run tauri build` also builds and packages the native application for the
current host. Build each target platform on its supported host and install the
resulting platform prerequisites before claiming a platform build is verified.

## Project map

- `src/app/` — app composition, workspace layout, theme provider, and styles
- `src/features/` — feature-owned dashboard and project empty state
- `src/components/ui/` — shared interface primitives
- `src/services/` — typed Tauri IPC boundary
- `src/stores/` — persistent frontend settings
- `src-tauri/src/` — Rust application entry point, IPC command, and error type
- `src-tauri/capabilities/` — minimal desktop capability declaration
- `src-tauri/icons/` — original Myshkin icon source and generated desktop assets

See [ARCHITECTURE.md](./ARCHITECTURE.md) for boundaries and foundation decisions.

To regenerate the platform icons from the included SVG:

```sh
npm run tauri -- icon src-tauri/icons/myshkin.svg --output src-tauri/icons
```