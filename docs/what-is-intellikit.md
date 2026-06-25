# What is IntelliKit?

IntelliKit is a set of Python tools for AMD-focused performance and validation. Most of the stack targets GPUs through ROCm, turning hardware counters, traces, and dispatch data into clear APIs you can use from Python. `uprof_mcp` adds AMD uProf for host-side CPU hotspot analysis. For LLM-style workflows, you also get MCP servers and agent skills — installable `SKILL.md` playbooks for Cursor, Claude, Codex, and GitHub Copilot.

| Tool | Role | Description |
|------|------|-------------|
| **[Kerncap](tools/kerncap.md)** | Isolate | Capture kernel dispatches, build standalone reproducers for HIP and Triton |
| **[Metrix](tools/metrix.md)** | Profile | Human-readable metrics from hardware counters: bandwidth, cache, compute |
| **[Linex](tools/linex.md)** | Profile | Source-line timing and stall analysis — map GPU performance to your code |
| **[Nexus](tools/nexus.md)** | Inspect | Intercept HSA packets to see what ran on the GPU: assembly and HIP source |
| **[Accordo](tools/accordo.md)** | Validate | Prove an optimized kernel still matches a reference implementation |
| **[ROCm MCP](tools/rocm-mcp.md)** | MCP | HIP compiler, HIP docs, and rocminfo servers for LLM agents |
| **[uProf MCP](tools/uprof-mcp.md)** | CPU | MCP bridge to AMD uProf for host-side CPU hotspot analysis |
