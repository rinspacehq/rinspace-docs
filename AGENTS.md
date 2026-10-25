# Rinspace Docs source rules

- This repository owns only the independent technical documentation site and `content/docs/` authoring source.
- Its public URL is `/docs`; use a `/docs` base path for HTML, assets, search and deep links.
- The private `rinspacehq/rinspace` product repository owns the edge route, exact artifact lock, deployment and rollback. This repository does not own book reading, user publications, account sessions or business APIs.
- Keep the site public and read-only. Do not include production credentials, private operational files or user content.
- Develop on named branches. Run typecheck and build before merging. Do not publish a mutable worktree or assume that a main commit is already live.
