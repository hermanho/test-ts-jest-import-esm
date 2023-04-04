import { serializeError } from "serialize-error";

export const logError = () => {
  return serializeError(new Error("boom"));
};
