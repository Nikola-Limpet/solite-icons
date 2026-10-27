# npm Pipeline Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Publish tested prereleases from staging and stable versions from main.

**Architecture:** Extend the current CI workflow with a publish job depending on validate and docs. A Node helper owns release eligibility, disposable version preparation, archive inspection, publication, and verification, with external I/O injectable for tests. Use npm trusted publishing through ci.yml.

**Tech Stack:** Node ESM, node:test, npm, GitHub Actions OIDC.

**Spec:** docs/superpowers/specs/2026-10-27-npm-pipeline-design.md

## Global Constraints

- Stable target in package.json and lockfile; no automatic stable version bump or runtime dependencies.
- Publish only pushes to staging/main in Nikola-Limpet/solite-icons after both existing CI jobs pass.
- Prereleases use staging dist-tag; stable versions use latest. Never downgrade stable latest.
- No publishing credentials for PRs; OIDC permission only on publish job; supported explicit Node/npm versions.
- Pack once, inspect archive and manifest, publish that archive, verify registry integrity, retain release artifacts.
- Preserve concurrent work; create isolated native worktree from origin/main.
- No new stable package version just to validate this infrastructure; report unverified npm activation honestly.

## Review Focus

- Registry outage, malformed responses, or authorization failures must not be interpreted as missing versions.
- Duplicate/retried runs and branch-head changes must not publish stale artifacts or move tags backward.
- Multi-digit version components must compare numerically; prerelease targets and unsafe run identifiers must fail.
- Package and manifest versions must agree in the inspected tarball; publishing must use that exact tarball.
- Existing-version skip must work without npm authentication and leave registry tags unchanged.

### Task 1: Release helper and behavioral tests

**Files:** Create scripts/release.mjs and test/release.test.mjs.

**Interfaces:** Export getReleasePlan({eventName, repository, ref, version, latestVersion, existingVersion, runNumber, runAttempt}) producing {publish, version, tag, reason}; export runRelease({env, root, registry, run, head}) with injectable registry/process/head boundaries. The CLI uses GitHub environment variables and public npm metadata, writes output/npm-release metadata, and only publishes when passed an explicit publish command.

- [x] Write behavior tests for staging version/tag, stable version/tag, event/ref/repository rejection, exact stable skip, older target rejection, invalid metadata, numeric ordering, and unsafe run numbers. Run node --test test/release.test.mjs; expect failures for missing implementation.
- [x] Implement release selection and public registry adapter with only missing-version responses treated as absent. Test HTTP failure and malformed response handling using local/injected responses.
- [x] Add tests exercising real temporary package files and an injected process boundary: staging rewrites package/lock then rebuilds; manifest and package must agree in archive; stable skips without executing publication; stale head rejects publication; failure propagates; published integrity must match. Watch tests fail, then implement orchestration and CLI.
- [x] Run node --test test/release.test.mjs and npm test; expect all pass. Commit helper and tests.

### Task 2: Workflow, operator documentation, and delivery

**Files:** Modify .github/workflows/ci.yml and README.md; create docs/releases.md; commit approved spec and plan.

**Interfaces:** Publish job invokes scripts/release.mjs after validate/docs, has job-only id-token permission and cross-branch concurrency, and uploads output/npm-release even when inspection/publish fails. Keep scripts out of package allowlist.

- [x] Extend workflow with push-only branch/repository condition, needs [validate, docs], supported pinned Node/npm, clean checkout without persisted credentials, non-cancelling serialization, and artifact upload. Never run publish on workflow_dispatch or pull_request.
- [x] Document target version bump, generated assets/changelog, staging install, main release, reruns, failure handling, docs dependency update, exact npm trust fields, and activation status. Replace README's obsolete manual-only claim.
- [x] Validate workflow syntax (actionlint), formatting, generated consistency, node tests, npm pack dry-run, docs build and typecheck. Verify no runtime/package API or npm files allowlist changes. Run helper's non-publishing plan command against current public npm metadata and confirm existing 0.2.1 is skipped.
- [x] Perform one fresh whole-branch review via the native subagent tool, as required by executing-plans. Fix material findings with regression tests. Commit final changes.
- [ ] Push feature branch, create PR using GitHub connector, and immediately link it with link_pull_request. Check status once; merge if ready, otherwise watch the PR and return without polling. On completion, unwatch.
- [ ] After merge, create staging branch from the reviewed main if absent without overwriting an existing branch. Configure npm trust if supported authenticated access is available; otherwise provide the exact owner-only setup. Verify a real prerelease only when an unpublished target exists; do not fabricate a version or claim activation without a successful publish.

## Execution choice

Implement inline under the user's “okay let proceed” approval; one fresh final review. No additional design or execution-method confirmation is needed.
