import { serializeError } from "serialize-error";

// const { serializeError } = await import("serialize-error");

export const logError = () => {
  return serializeError(new Error("boom"));
};
