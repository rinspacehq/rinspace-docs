# Rinspace Docs source rules

- This repository owns only the independent technical documentation site and `content/docs/` authoring source.
- Its public URL is `/docs`; use a `/docs` base path for HTML, assets, search and deep links.
- The private `rinspacehq/rinspace` product repository owns the edge route, automatic update policy, exact deployed-release record and rollback. A successful `main` build publishes an immutable `docs-<full SHA>` release; the private updater checks and activates it. This repository does not own book reading, user publications, account sessions or business APIs.
- Keep the site public and read-only. Do not include production credentials, private operational files or user content.
- Develop on named branches. Run typecheck and build before merging. A failed build must leave the old site live; never publish a mutable worktree.
