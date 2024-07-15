export const SERVER_URL = import.meta.env.VITE_API_BASE_URL;

export const AUTH_URL = "/auth";

export const generateUrl = (url: string, endpoint: string) => {
  let compelteUrl = `${SERVER_URL}${url}${endpoint}`;
  return compelteUrl;
};

export * as api from "./api";
