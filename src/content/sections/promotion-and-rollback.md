---
enable: true
title: "Promotion + rollback"
subtitle: "Controlled Release"
description: >-
  Production routes move only after authorized approval. Promotion points the
  production route alias to the approved capsule version while the prior
  known-good version remains available. If recovery is needed, rollback moves
  the route alias back. Completed external side effects are not automatically
  reversible.
features:
  - "Require authorized approval before a production route can move."
  - "Point the production route alias at the approved capsule version."
  - "Keep the last known-good version available for rollback."
  - "Treat completed external side effects as non-reversible."
imageAlt: "An approved version 43 capsule is promoted to the generate route while version 42 remains available as a known-good rollback target."
---
