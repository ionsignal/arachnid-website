---
title: "Introducing Qiln: Agents get forks, not production"
slug: "announcement"
description: "The reversible runtime layer for agent-safe, versioned AI workflow capsules."
pubDate: "2026-08-01"
updatedDate: "2026-08-02"
image: "../../assets/images/logo.svg"
categories:
  - "Announcements"
  - "Engineering"
author: "admin"
draft: false
---

# Introducing Qiln: Agents get forks, not production

<p class="badge-row">
  <span>Private Alpha</span>
  ·
  <span>Versioned Capsules</span>
  ·
  <span>Agent-Safe Changes</span>
  ·
  <span>Managed · Community · Appliance</span>
</p>

**Stop editing production AI workflow systems directly.**

Qiln is the **reversible runtime layer for agent-safe AI workflow capsules**.

It turns fragile production AI workflow systems into versioned capsules that teams can:

> **fork, edit, diff, test, promote, serve through stable routes, and roll back safely.**

The promise is simple:

> **Humans and agents get forks. Production stays protected.**

Qiln helps teams safely change production AI workflow systems. A human or agent works in a forked capsule, runs tests, inspects the evidence, and promotes only an approved version.

<p>
  <a href="/configure"><strong>Configure a Capsule</strong></a>
  ·
  <a href="/discord">Join the Discord</a>
</p>

---

## Why Qiln

A production AI workflow is no longer just source code, a model endpoint, a graph file, or a GPU machine.

It is a living system made of connected parts:

```text
workflow definitions and configurations
+ scripts, services, packages, and dependency locks
+ models, assets, datasets, and input/output folders
+ routes, schemas, aliases, and credential references
+ compute requirements and runtime state
+ tests, run history, snapshots, and rollback metadata
+ external systems and side effects
```

Many teams protect a working system with copies, manual exports, machine images, scattered folders, and names like:

```text
/workflow-working-do-not-update
/workflow-client-final
/workflow-new-test
/workflow-broken
```

That can work for experiments.

It stops working when the system produces revenue, client deliverables, internal operational output, or product functionality.

At that point, the pain is not:

> “I need a GPU.”

The pain is:

> **“This system works and matters, but I am afraid to change it, move it, rebuild it, or let an agent touch it.”**

That is the problem Qiln is built for.

---

## The Qiln loop

Qiln turns a fragile AI workflow system into a versioned capsule that moves through a controlled change process:

```text
known-good snapshot
→ fork branch
→ human or agent edit
→ capsule diff
→ golden test
→ approval
→ route promotion
→ rollback if needed
```

| Step         | What it means                                                                                                                          |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------- |
| **Snapshot** | Preserve the known-good production system before a risky change.                                                                       |
| **Fork**     | Create a safe branch for a human or agent to modify.                                                                                   |
| **Edit**     | Change workflow logic, configuration, services, models, prompts, assets, scripts, or dependencies without directly editing production. |
| **Test**     | Run known inputs and evaluate expected outputs or acceptance conditions.                                                               |
| **Diff**     | Inspect what changed across the whole capsule, not just one file or repository.                                                        |
| **Approve**  | Require an authorized human or policy to accept the evidence.                                                                          |
| **Promote**  | Move a stable route alias such as `prod`, `staging`, or `client-preview` to the approved capsule version.                              |
| **Rollback** | Move the route and capsule state back to a known-good version when needed.                                                             |

Everything in Qiln is built around this loop.

Not GPU rental.  
Not hosted workflow tooling.  
Not a cloud IDE.  
Not a generic agent sandbox.

Qiln is the **reversible runtime layer for versioned AI workflow capsules**.

---

## What is inside a capsule

A Qiln capsule is the deployable, versioned state around a working production AI workflow system.

A capsule may include:

```text
workflow definitions, configurations, graphs, and pipeline metadata
+ scripts, services, packages, and dependency locks
+ private models, assets, datasets, and input/output folders
+ routes, endpoint schemas, aliases, and credential references
+ compute requirements and runtime configuration
+ golden test inputs, outputs, and acceptance conditions
+ logs, run history, snapshots, and rollback metadata
+ external side-effect policies and event logs
```

A capsule is not merely a workflow export, graph file, container, repository, GPU machine, sandbox, or generic workspace.

In practice:

> **The capsule persists. Branches mutate. Compute attaches when needed. Routes move only after approval.**

That is the difference between renting infrastructure and safely operating a production AI workflow system.

---

## Agents get forks, not production

Qiln’s agent-safety claim is about **blast-radius containment and reversibility**.

It is not a claim that every agent is trustworthy or that every external action can be undone.

Agent-authored changes are treated as untrusted until they are tested and promoted by an authorized approver.

The operating rules are straightforward:

1. Agents work only in forked branches.
2. Production secrets are never exposed to agent branches.
3. Branches receive scoped credentials and limited permissions.
4. External actions are blocked, mocked, logged, or approval-gated by branch policy.
5. Diffs and test results are machine-readable.
6. The agent that writes a change does not promote it.
7. A human or separate policy moves the production route alias.

That creates a safe change path:

```text
agent proposes change
→ team reviews capsule diff
→ branch runs tests and observe evidence
→ authorized approver promotes
→ known-good version remains available for rollback
```

> **Agents get forks, not production.**

---

## Diffs and side effects matter

A raw source-control diff is not enough.

A useful Qiln diff shows the relevant changes across the capsule:

```text
workflow or pipeline configuration changed
service, script, package, or dependency changed
model, asset, or dataset changed
route, schema, or credential reference changed
test input, expected condition, or result changed
external side effect was blocked, mocked, logged, approved, or allowed
```

The goal is not merely to prove that “something changed.”

The goal is to answer:

> **Is this capsule version safe to promote?**

Rollback also needs honesty.

Qiln can restore capsule state and move stable routes back to a known-good version. But it cannot magically unsend an email, reverse a database write, remove a published post, or undo an external API action.

That is why Qiln treats external side effects as first-class release risks.

Branch policies can define how external actions behave:

| Mode                  | Meaning                                                                           |
| --------------------- | --------------------------------------------------------------------------------- |
| **block**             | Do not allow the action.                                                          |
| **mock**              | Return a simulated response so the run continues without calling the real system. |
| **log_only**          | Record what would have happened; skip the real action.                            |
| **approval_required** | Pause until an authorized human approves the action.                              |
| **allow**             | Permit the action under the branch policy.                                        |

Production write credentials and irreversible side effects stay controlled until promotion.

---

## Why existing tools are not enough

Teams already use valuable tools for individual parts of the stack.

The missing piece is a release transaction across the complete production AI workflow system.

| Category                          | What it is good for                              | What Qiln adds                                                                                                                      |
| --------------------------------- | ------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------- |
| **Raw GPU clouds**                | Providing compute capacity                       | Persistent capsules, controlled mutation, tests, routes, promotion, and rollback.                                                   |
| **Workflow tools**                | Building and executing workflow logic            | Safe versioning of the surrounding production system: assets, services, dependencies, routes, credentials, tests, and side effects. |
| **Source control and containers** | Code, configuration, and repeatable environments | Capture and review of the evolved multi-artifact system that actually runs in production.                                           |
| **Agent sandboxes**               | Disposable environments for agent work           | Persistent state, evidence, stable routes, approvals, promotion, and rollback.                                                      |
| **Backend branch platforms**      | Branching services they own                      | Branching the relevant AI workflow system across multiple artifacts and runtimes.                                                   |

Qiln does not replace the tools that build or execute a workflow.

Workflow tools own their editors and execution engines.

Qiln owns the safe mutation transaction around the complete production system:

```text
fork
→ edit
→ diff
→ test
→ approve
→ promote
→ rollback
```

---

## What Qiln is — and is not

| Qiln is                                                                             | Qiln is not                                       |
| ----------------------------------------------------------------------------------- | ------------------------------------------------- |
| A reversible runtime layer for versioned AI workflow capsules                       | Cheap GPU rental                                  |
| A safe change path for production AI workflow systems                               | Hosted workflow tooling as the product            |
| A way to fork, diff, test, promote, serve, and roll back workflow systems           | A workflow-builder or graph-editor replacement    |
| A persistent home for relevant models, assets, routes, tests, and rollback metadata | A generic remote development environment          |
| A side-effect-aware environment for human and agent-driven changes                  | A generic agent sandbox                           |
| A managed path for teams that do not want to operate infrastructure                 | A hyperscale inference or model-training platform |
| A private appliance option for owned hardware                                       | A Kubernetes replacement for everyone             |

Use Qiln when the workflow makes money, matters operationally, or supports a real product—and your team is afraid to let a human or agent change it directly.

---

## Three ways to run Qiln

All Qiln delivery models express the same promise:

> **Turn fragile production AI workflow systems into agent-safe, versioned capsules.**

### Qiln Managed

**Managed capsules for production AI workflow systems, with compute attached dynamically when needed.**

Qiln Managed is for teams that want the outcome without operating the underlying infrastructure themselves.

During private alpha, Qiln Managed is focused on concierge migration for teams with working, revenue-relevant AI workflow systems.

A managed capsule can bring together private assets, authenticated routes, diffs, tests, scoped credentials, approval-gated promotion, and rollback.

```text
import
→ known-good snapshot
→ fork
→ diff
→ test
→ approve
→ promote
→ rollback
```

Pricing is not final. Early managed engagements are intentionally hands-on.

### Qiln Community

**Open-source, self-managed capsule hosting for owned GPU servers—without Kubernetes.**

Qiln Community is for technical users, small teams, labs, and hardware owners who want to operate Qiln themselves.

Current Community direction includes:

- Apache 2.0 core
- no CLA
- single-node first
- NVIDIA-first support
- Incus-based isolation
- ZFS-backed vaults, clones, snapshots, quotas, backups, and rollback primitives
- declarative YAML blueprints
- Caddy HTTPS routing and route aliases
- pre-release alpha until public `v0.1.0`

### Qiln Appliance

**A private agent-safe AI workflow appliance for teams that need infrastructure control.**

Qiln Appliance is for teams with owned hardware, privacy requirements, data residency needs, or deployment-control constraints.

It is a custom-priced option for private capsule hosting, controlled agent branches, private assets, route management, backup planning, support, and operational integration.

---

## Alpha focus

We are starting narrow because the complete capsule transaction has to work end to end.

The private alpha is focused on one outcome:

```text
import a working AI workflow system
→ create a known-good capsule snapshot
→ fork a branch
→ change it manually or with an agent
→ inspect the capsule diff
→ run golden tests
→ promote an approved route
→ verify rollback
```

Alpha focus areas include:

- capsule creation
- known-good snapshots
- workflow, configuration, pipeline, file, dependency, model, and asset manifests
- - capsule diffs
- golden tests
- scoped credentials
- side-effect policies and logs
- stable route aliases
- approval-gated promotion
- rollback paths
- machine-readable APIs for harnesses and automation

Our first maintained commercial blueprint uses Python, PyTorch, CUDA, and TypeScript components.

That blueprint is integration proof—not Qiln’s identity.

Qiln will add runtimes and integrations only when a credible customer or design partner has a real capsule problem: a durable system boundary, relevant artifacts to capture, a meaningful test path, and a clear reason to protect production changes.

---

## Under the hood

Qiln uses Incus isolation, ZFS vaults and snapshots, Caddy HTTPS routing, NATS, Postgres, Fastify, tRPC, Vue 3, NVIDIA-first GPU support, and declarative YAML blueprints.

The implementation exists to support one commercial outcome:

```text
fork
→ edit
→ diff
→ test
→ promote
→ rollback
```

Early Qiln is for trusted teams, managed customers, and controlled environments.

It is not positioned as hardened infrastructure for hostile public multi-tenancy on day one.

---

## Who Qiln is for

We are looking for commercial AI system builders with workflow systems they are afraid to change.

You may be a fit if you are a:

- AI agency or consultant
- creative AI studio
- ecommerce operator
- workflow or automation builder
- founder-builder with an AI system behind a product
- small AI team operating customer-facing or internal production systems
- team managing private models, assets, services, routes, and fragile deployment glue

You are a strong early fit if your workflow already produces revenue, client deliverables, internal production output, or product functionality.

| You may be a fit if...                                                                                               | You are probably not the first fit if...                                   |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| Your AI workflow supports paid work, a product, or operations                                                        | You only want the cheapest GPU-hour                                        |
| Your system includes more than one artifact, runtime, asset, route, or dependency                                    | You only need a disposable experiment environment                          |
| You have private models, assets, packages, configurations, or credentials                                            | You do not care whether the environment can be recreated                   |
| You expose workflows through APIs, webhooks, or client-facing routes                                                 | You only need a hosted single-tool playground                              |
| You want agents to help edit workflows without directly touching production                                          | You do not need diffs, tests, approvals, routes, or rollback               |
| Your workflow can create external side effects such as messages, database writes, CRM updates, or publishing actions | Your system is already safely handled by a clean, complete release process |

The question we care about is:

> **Do you have a production AI workflow system that you are afraid to break, move, upgrade, or let an agent modify?**

---

## Concierge onboarding

During private alpha, onboarding is hands-on.

We want to see real systems, real dependencies, real routes, real assets, real external integrations, and real failure modes.

For alpha customers:

> **Send us the AI workflow system you are afraid to change. We will migrate it into a Qiln capsule, create a known-good snapshot and golden test, then show you how to fork, edit, diff, test, promote, and roll back safely.**

Bring us:

- workflow definitions and configurations
- services, scripts, packages, and dependency requirements
- model, asset, storage, and compute requirements
- routes, webhooks, and endpoint schemas
- credential references
- known-good inputs and expected outputs
- external side effects and integrations
- current deployment constraints

We will map the system into a capsule and demonstrate:

```text
your working system
→ Qiln capsule
→ known-good snapshot
→ branch
→ safe change
→ capsule diff
→ golden test
→ route promotion
→ rollback
```

---

## Configure a capsule

Private alpha capacity is intentionally limited.

We want to work with teams that already have a workflow system worth protecting.

If you are rebuilding machines by hand, duplicating model or asset folders, fighting dependency drift, exposing ad hoc routes, manually copying workflow exports, or trying to let agents improve a production system without breaking it, we want to hear from you.

<p>
  <a href="/configure"><strong>Configure a Capsule</strong></a>
  ·
  <a href="/discord">Join the Discord</a>
</p>

Stop editing production AI workflow systems directly.

Fork the capsule.  
Diff it.  
Test it.  
Promote it.  
Roll it back when needed.

**Agents get forks, not production.**

_Qiln is developed by IonSignal, Inc._
