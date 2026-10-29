import { execFileSync } from "node:child_process";
import { isAbsolute } from "node:path";

/** Reuse the npm CLI that launched the script instead of resolving npm through PATH. */
export function runNpm(args, options) {
  const cli = process.env.npm_execpath;
  if (!cli || !isAbsolute(cli)) {
    throw new Error("Run this command through npm run so its installed npm CLI can be reused.");
  }
  return execFileSync(process.execPath, [cli, ...args], options);
}
