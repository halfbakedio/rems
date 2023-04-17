import { LogLevel } from "~utils/logger";

export type Environment = "development" | "production";

const {
  REACT_APP_APP_ENV: appEnv,
  REACT_APP_USE_API_GATEWAY: _useApiGateway,
} = process.env;

const isProd = () => appEnv === "production";

const useApiGateway = () => ["1", "true", "yes"].includes(_useApiGateway || "");

// FIXME: needs to support prod
const apiUrl = (version: number) => {
  const port = useApiGateway() ? 8080 : 5100;
  return `http://localhost:${port}/api/v${version}`;
};

export const APP_ENV: Environment = isProd() ? "production" : "development";
export const LOG_LEVEL: LogLevel = APP_ENV === "production" ? "warn" : "log";
export const API_V1_URL = apiUrl(1);
export const API_V2_URL = apiUrl(2);
