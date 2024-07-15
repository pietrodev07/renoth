import { ZodType } from "zod";

export interface EmailOptions {
  to: string;
  subject: string;
  html: string;
}

interface RouteData {
  method: "GET" | "POST" | "PUT" | "DELETE";
  path: string;
  validator?: ZodType;
}

export type RoutesData = Record<string, RouteData>;
