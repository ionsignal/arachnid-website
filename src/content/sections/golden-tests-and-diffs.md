---
enable: true
title: "Capsule diffs + golden tests"
subtitle: "Diff, Then Test"
description: >-
  Inspect what changed between the known-good capsule and its candidate before
  running the candidate. Review workflow configuration, models and assets,
  dependencies, routes, schemas, credential references, and side-effect policy.
  Then run known inputs against workflow-specific acceptance conditions and
  preserve the results as release evidence.
features:
  - "Compare workflow configuration between capsule versions."
  - "Review changed models, assets, dependencies, routes, and schemas."
  - "Inspect credential references and side-effect policy."
  - "Run known inputs and preserve golden-test evidence."
image: "../../assets/images/sections/diffs-golden-tests.svg"
imageAlt: "A version 42 capsule is compared with a version 43 branch before the branch runs a golden test and produces passing release evidence."
---
