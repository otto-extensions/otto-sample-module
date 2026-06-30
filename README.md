# Otto Sample Module

This repository provides a fully working example module for the Otto ecosystem.
It demonstrates how to structure a module, define manifests, register commands,
add UI panels, and integrate with the Otto kernel and command service layer.

## What This Sample Demonstrates
- A complete ExtensionManifest
- A complete CommandManifest
- A complete UIManifest
- A working command handler
- A working UI panel
- Recommended folder structure
- Build and packaging instructions

## Folder Structure
```
otto-sample-module/
├── src/
│   ├── commands/        # Command handlers
│   ├── backend/         # Rust backend logic
│   └── ui/              # Optional UI components
├── manifests/
│   ├── extension.json   # Module metadata
│   ├── commands.json    # Command definitions
│   └── ui.json          # UI definitions
├── docs/                # Developer documentation
└── tests/               # Unit and integration tests
```

## Getting Started
1. Clone this repository.
2. Review the manifests in the `manifests/` directory.
3. Explore the example command handler in `src/commands/`.
4. Explore the example UI panel in `src/ui/`.
5. Build the module using your Otto development environment.
6. Load the module into Otto using the extension loader.
7. Use this module as a reference when building your own modules.
