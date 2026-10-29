# Publishing Solite Icons

The `CI` workflow in `.github/workflows/ci.yml` validates the library with React 18 and 19, runs browser accessibility checks, and builds/typechecks the docs on every push and pull request. Its `Publish npm` job runs only for pushes to `staging` and `main` in `Nikola-Limpet/solite-icons`, after all validation jobs pass. PRs and other branches do not publish.

## One-time npm setup

Before the first automatic release, a package owner must add an npm trusted publisher for `solite-icons`. Open [package settings](https://www.npmjs.com/package/solite-icons/access), choose **Trusted publishing → GitHub Actions**, and enter:

| Field                | Value                         |
| -------------------- | ----------------------------- |
| Organization or user | `Nikola-Limpet`               |
| Repository           | `solite-icons`                |
| Workflow filename    | `ci.yml`                      |
| Environment          | Leave empty                   |
| Allowed actions      | Enable direct **npm publish** |

Save the configuration and complete npm's 2FA prompt. The workflow uses a GitHub-hosted runner, Node `22.23.4`, npm `11.21.1`, and job-scoped `id-token: write`. No `NPM_TOKEN` secret is required. npm generates provenance for OIDC publications from this public repository.

Configure trust when a real next-version candidate is ready: npm requires the first successful publish within two days of adding the trusted publisher, or the configuration expires. A green skipped publishing job does not verify authentication. The pipeline is fully activated only after a real prerelease publish succeeds and its archive integrity is verified. See [npm's trusted publishing guide](https://docs.npmjs.com/trusted-publishers/).

## Prepare the next version

Choose the target stable version before pushing new package work to `staging`. For example:

```sh
npm version 0.3.0 --no-git-tag-version
npm run build
npm test
npm run check
npm run format:check
```

Update `CHANGELOG.md`, inspect the diff, and commit the package files, lockfile, and regenerated assets. Keep the committed version stable (`0.3.0`), including on `staging`. Do not commit a `-staging` suffix. The pipeline does not choose bumps or create version commits, tags, or GitHub Releases.

The target must be newer than npm's current `latest`. An older target fails on either branch. On `main`, an already published exact target is skipped without changing npm tags. On `staging`, a target equal to `latest` fails with an instruction to choose the next version; it does not publish prereleases for an already completed release.

## Test on staging

Push the candidate to `staging` and let CI finish. With target `0.3.0` and GitHub run 42, attempt 1, the package is published as `0.3.0-staging.42.1` under the **staging** npm tag. The helper changes package/lockfile versions only in the disposable runner checkout, rebuilds, runs tests, and checks that the archive's package and manifest versions agree.

```sh
npm install solite-icons@staging
# Or pin a particular tested candidate:
npm install solite-icons@0.3.0-staging.42.1
```

Prereleases are publicly downloadable. They leave `latest` unchanged and are distinct from npm's Staged Packages feature that requires individual 2FA approval.

## Release from main

Merge the tested changes from `staging` into `main` with the stable target still `0.3.0`. CI builds again and publishes `solite-icons@0.3.0` under **latest**. This is a new archive with stable version metadata, rebuilt from the main commit; it does not just retag the prerelease.

```sh
npm install solite-icons
```

Docs-only changes with an existing stable version do not publish. The docs app remains pinned to its explicit npm dependency. After a successful stable release, update `website/package.json` and its lockfile in a normal PR to use that release, along with counts/examples where needed. The pipeline does not automatically edit docs or change the existing Vercel deployment settings.

## Inspect or retry a run

Publishing is serialized across both branches. A run whose branch head advanced while it waited is rejected; the current commit's run can publish instead. The helper also compares the candidate against the current `staging` tag before building and again before publication. It rejects an older target or run/attempt instead of moving that tag backward. A staging tag containing an unsupported version format fails closed for maintainer inspection. GitHub concurrency keeps at most one waiting job, so rapid pushes may replace a waiting run. Not every superseded commit gets a prerelease.

In the GitHub Actions run, download the `npm-release-<run-id>-<attempt>` artifact. It contains `release.json` and, if packing succeeded, the inspected `.tgz`. The report records the commit, version, tag, status, and SHA-512 integrity. The workflow retains these artifacts for 14 days, including failed publication attempts. It packs once and publishes that exact archive, with publishing lifecycle scripts disabled.

Registry outages, invalid registry metadata, stale branch heads, and version mismatches fail rather than being treated as an unpublished version. A publish error is not rolled back automatically. Inspect npm and the artifact before retrying: a network error can happen after npm accepts a publish.

Rerunning a staging job gets a new attempt suffix. Rerunning a stable job with an already published target skips publication and does not move tags. If another publisher released a newer stable version, this pipeline rejects the old target. Post-publish metadata/integrity failures stay failed even if npm accepted the archive; verify the existing version before deciding what to do next.

For a read-only eligibility check, run this from the repository root (use `staging` and a newer target to inspect a prerelease plan):

```sh
GITHUB_EVENT_NAME=push \
GITHUB_REPOSITORY=Nikola-Limpet/solite-icons \
GITHUB_REF=refs/heads/main \
GITHUB_RUN_NUMBER=1 \
GITHUB_RUN_ATTEMPT=1 \
node scripts/release.mjs plan
```

`plan` reads public npm metadata and writes `output/npm-release/release.json`. It does not rebuild, rewrite package files, or publish. The explicit `publish` command is intended for the CI runner.
