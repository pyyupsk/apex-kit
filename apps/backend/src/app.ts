import type { D1Database } from "@cloudflare/workers-types";

import { trpcServer } from "@hono/trpc-server";
import { Hono } from "hono";
import { cors } from "hono/cors";

import { appRouter } from "./trpc/router";

export type AppEnv = {
  Bindings: {
    APEX_KIT_DB: D1Database;
  };
};

const app = new Hono<AppEnv>();

app.use(
  "*",
  cors({
    credentials: true,
    origin: ["http://localhost:3000"],
  }),
);

app.get("/", (c) => {
  return c.json({ message: "Apex Kit API is running", status: "ok" });
});

app.use("/trpc/*", trpcServer({ router: appRouter }));

export default app;
