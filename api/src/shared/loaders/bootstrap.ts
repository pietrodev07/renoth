import { Hono } from "hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";

import { corsConfig } from "@/config/*";
import { authRouter } from "@/auth/routes/auth.routes";
import { authMiddleware } from "@/middlewares/auth.middleware";

export const bootstrapApplication = () => {
  const app = new Hono();

  app.use(cors(corsConfig), logger());
  app.use("auth/logout", authMiddleware);
  app.use("auth/me", authMiddleware);

  app.route("/auth", authRouter);

  app.onError((_, c) => {
    console.log(_);
    return c.json({ success: false, message: "Internal Server Error" });
  });

  return app;
};
