import { trpcServer } from "@hono/trpc-server";
import { Hono } from "hono";
import { cors } from "hono/cors";

import { appRouter } from "./trpc/router";

const app = new Hono();

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
