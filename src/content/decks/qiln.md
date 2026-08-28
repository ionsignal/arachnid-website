---
title: "Pitch Deck"
description: "Qiln helps teams safely change production AI workflow systems with versioned capsules, isolated forks, capsule diffs, golden tests, approvals, promotion, and rollback."
variants:
  explainer:
    slides:
      - title
      - problem
      - solution
      - product
      - qr
  vc:
    slides:
      - title
      - problem
      - solution
      - product
      - beachhead
      - evidence
      - raise
      - qr
slides:
  title:
    eyebrow: "Introduction"
    title: "Agents get forks, not production"
    subtitle: "Safe changes for production AI workflows"
    diagram:
      label: "Qiln release model"
      description: "A known-good capsule branches to the live production route and an isolated human or agent fork where edits occur"
  problem:
    eyebrow: "The repository is not the production system"
    title: "Teams cannot safely change what they cannot recreate"
    subtitle: "AI workflow state spans many artifacts outside a code repository. When those parts are not captured as one known-good version, teams cannot reliably reproduce, test, inspect, or roll back a change"
    diagram:
      label: "The production-state gap"
      description: "A model or asset update, new input or output, dependency upgrade, or agent-authored edit begins with a repository or workflow export containing only code and partial configuration. The actual working production state is distributed across models, assets, files, runtimes, routes, credential references, test evidence, and external side-effect policies. Without that complete state, teams cannot reproduce the workflow, test safely, see what changed, or confidently roll back"
  solution:
    eyebrow: "Version the whole working system"
    title: "A capsule is the versioned, runnable state around a working AI workflow"
    subtitle: "It preserves the relevant system state needed to run, edit, review changes, test, and safely change a production AI workflow"
    diagram:
      label: "Qiln capsule and production route diagram"
      description: "A known-good versioned capsule contains workflow services, dependencies, models, assets, files, routes, schemas, credential references, tests, snapshots, and release evidence, with the production route alias pointing to the live known-good version"
  product:
    eyebrow: "Give every change a safe path"
    title: "A known-good capsule gives every change a safe path"
    subtitle: "Agents get forks, not production"
    diagram:
      label: "Safe production change path"
      description: "A human or agent forks a known-good capsule, edits the isolated branch, inspects the capsule diff, runs the golden test, passes an approval gate, and promotes a new version to the production route with rollback available"
  beachhead:
    eyebrow: "Initial Beachhead & GTM"
    title: "Land where unsafe change costs money"
    subtitle: "Design partners → Concierge capsule migration → Expand workflow by workflow"
    diagram:
      label: "Initial ICP and concierge migration"
      description: "Qiln starts with commercial AI product teams operating revenue or operations-critical Python/PyTorch/CUDA workflows. A qualified workflow spans code, CUDA and dependency state, model weights, assets, services, and routes; has an upcoming model, runtime, dependency, or agent-authored change; and can be protected with a golden test, approval-gated promotion, and rollback. Concierge migration creates a known-good capsule and proves one safe production change before expansion."
  evidence:
    eyebrow: "Validate the safe-change transaction"
    title: "Early Commercial Pull"
    subtitle: "Two design partners committed to migrate production workflows"
    diagram:
      label: "Committed design partners and validation path"
      description: "Two partners have committed revenue-relevant AI workflows for Qiln migration. Qiln will validate the transaction by creating a known-good capsule and golden test, then completing a fork → diff → test → approve → promote → rollback loop for each partner."
  raise:
    eyebrow: "Scale safe change for production AI workflows"
    title: "Raising $1.5M Pre-Seed"
    subtitle: "To make safe AI workflow change repeatable. In 18 months, we will prove:"
    diagram:
      label: "Pre-seed proof milestones"
      description: "The eighteen-month milestones are thirty paid production capsules, one thousand completed safe change transactions, and commercial evidence across migration, activation, renewal, and expansion"
  qr:
    eyebrow: "Stay connected"
    title: "Continue the conversation"
    subtitle: "Scan the QR code to visit Qiln, or connect with us using the links below."
    diagram:
      label: "Qiln QR code and social links"
      description: "A QR code for Qiln alongside clickable social profile URLs."
    socialLinks:
      - "https://linkedin.com/company/qiln"
      - "https://discord.gg/NjEZKaHaDD"
      - "https://x.com/QilnEngine"
      - "https://github.com/ionsignal/qiln"
---
