import { describe, it, expect } from "vitest";
import zodPkg from "zod/package.json";

// Returns true when a >= b for numeric semver arrays.
function isAtLeast(a: number[], b: number[]): boolean {
  for (let i = 0; i < b.length; i++) {
    if (a[i] > b[i]) return true;
    if (a[i] < b[i]) return false;
  }
  return true;
}

describe("zod security fix (GHSA-mrhx-c7xc-m3w5)", () => {
  it("installs zod >= 4.6.6, the version fixed by the advisory", () => {
    const version = String(zodPkg.version)
      .split(".")
      .map((n) => Number.parseInt(n, 10));

    expect(
      isAtLeast(version, [4, 6, 6]),
      `installed zod ${zodPkg.version} is below the fixed 4.6.6`,
    ).toBe(true);
  });
});
