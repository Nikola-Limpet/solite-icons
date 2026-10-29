# npm staging and stable release pipeline

## Intent and scope

Automate publishing this single npm package after CI passes. The user selected an explicit target version in `package.json`, prereleases from `staging`, and stable releases from `main`. Keep existing package exports, runtime, documentation hosting, and unrelated work intact.

## Approaches

Selected: small GitHub Actions workflow and Node release helper using the existing npm build. Maintainers control the stable version and changelog in the release PR. This adds no release framework or runtime dependencies.

Alternative considered: Conventional Commit automation chooses version bumps from commit messages. It adds a commit convention and release tooling that the user did not choose.

## Release behavior

- Keep `package.json` and its lockfile at a stable target such as `0.3.0`. Maintainers update the changelog and regenerate versioned assets when changing the target.
- Existing CI runs on pushes and pull requests. A publish job runs only on pushes to `staging` or `main` in `Nikola-Limpet/solite-icons`, after package validation and docs build/typecheck succeed. Pull requests and other branches never publish.
- On `staging`, publish an installable prerelease such as `0.3.0-staging.<run-number>.<run-attempt>` using npm dist-tag `staging`. Rewrite the version only in the disposable release checkout, rebuild the package and manifest, and test the resulting artifact. Install with `npm install solite-icons@staging`.
- On `main`, publish the unchanged stable target under `latest` when it is newer than the current public stable version and absent from the registry. An already published stable version is a visible no-op; docs-only changes do not create releases. An older target is rejected rather than moving `latest` backward.
- A staging target must be newer than the current stable release. Reject prerelease or malformed target versions in committed package metadata. Registry errors other than a missing version fail the job; they never imply permission to publish.
- Serialize publishing across both branches without cancelling an active publish. Reject a run whose branch head has advanced before publishing. Do not change npm tags when skipping an existing version.
- Pack once and publish the inspected tarball. Upload the archive and release metadata as GitHub Actions artifacts for inspection. Verify the registry version and integrity after publishing. A failed publish remains failed and retryable; no automatic unpublish or rollback.
- This pipeline does not bump versions automatically, commit from CI, create GitHub Releases, or repin the docs dependency. After a stable release, update the docs dependency and lockfile in a normal PR so the website consumes the published version.

## Authentication and activation

Use npm trusted publishing (OIDC) from a GitHub-hosted runner with an explicit supported Node/npm version and `id-token: write` scoped to the publish job. Do not add a long-lived npm token or expose publishing credentials to pull requests.

Configure the npm package's trusted publisher for GitHub owner `Nikola-Limpet`, repository `solite-icons`, and workflow filename `ci.yml`, allowing direct `npm publish`. Using the existing workflow lets publishing depend directly on its two successful CI jobs. npm may require the owner's interactive 2FA for this one-time trust configuration. Automatic releases are active only after this configuration is saved and a real prerelease publish verifies it. Create the `staging` branch as part of rollout, but do not invent a new stable library version merely to test infrastructure.

The branch named `staging` produces public npm prereleases. It is separate from npm's Staged Packages approval feature; this design uses direct publishing through the authorized trusted publisher.

## Verification and delivery

Test version selection, branch/event restrictions, existing versions, registry failures, stale runs, and prerelease/stable tag isolation with injected registry/process boundaries. Verify the archive version and manifest agree and that no secret or release tooling enters the package. Run the existing formatting, generation, package, and docs checks, and validate workflow syntax. Deliver through a PR and merge after checks pass under the user's existing shipping authorization. Report any owner-only npm setup still pending without claiming publishing is active.

Reference: https://docs.npmjs.com/trusted-publishers/
