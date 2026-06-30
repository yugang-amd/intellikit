# Contributing

To report issues and submit pull requests, visit the [GitHub repository](https://github.com/AMDResearch/IntelliKit).

## Getting started

To clone the repository and navigate into the directory:

```bash
git clone https://github.com/AMDResearch/intellikit.git
cd intellikit
```

Each tool within IntelliKit is an independent Python package. You can install the packages you want to work on in editable mode:

```bash
pip install -e ./metrix
pip install -e ./linex
pip install -e ./kerncap[dev]
# ...any subset
```

There is no metapackage at the root level of the repository. You must install each package individually.

## Running tests

Each package has its own test suite:

```bash
# Metrix
python3 -m pytest metrix/tests/ -v

# Kerncap unit tests (no GPU required)
PYTHONPATH=kerncap pytest kerncap/tests/unit/ -v

# Kerncap integration tests (requires ROCm + AMD GPU)
PYTHONPATH=kerncap pytest kerncap/tests/integration/ -v
```

## Project structure

```
intellikit/
├── accordo/        Kernel validation
├── kerncap/        Kernel extraction and isolation
├── linex/          Source-line GPU profiling
├── metrix/         Human-readable GPU metrics
├── nexus/          HSA packet source extraction
├── rocm_mcp/       ROCm MCP servers
├── uprof_mcp/      AMD uProf MCP server
├── install/        Install scripts (tools + skills)
└── docs/           This documentation site
```

## Bugs and ideas

Report issues or share your suggestions on [github.com/AMDResearch/intellikit/issues](https://github.com/AMDResearch/intellikit/issues).

## License

This project is licensed under the [MIT License](https://github.com/AMDResearch/intellikit/blob/main/LICENSE).

Copyright 2025-2026 Advanced Micro Devices, Inc.
