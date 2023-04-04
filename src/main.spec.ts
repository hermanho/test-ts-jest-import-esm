import { jest } from "@jest/globals";
import { getProvincName } from "./provinces";
import { logError } from "./logError";

describe("HttpLoqateClient", () => {
  it("should be defined", () => {
    expect(getProvincName()).toBeDefined();
    expect(logError()).toBeDefined();
  });
});
