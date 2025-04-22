import { initTRPC } from "@trpc/server";
import { drizzle } from "drizzle-orm/d1";
import superjson from "superjson";
import { ZodError } from "zod";

import type { AppEnv } from "../app";
import type { TrpcContext } from "../types/trpc";

import * as schema from "../db/schema";

const trpc = initTRPC.context<TrpcContext<AppEnv>>().create({
  errorFormatter({ error, shape }) {
    return {
      ...shape,
      data: {
        ...shape.data,
        zodError: error.cause instanceof ZodError ? error.cause.flatten() : null,
      },
    };
  },
  transformer: superjson,
});

const timingMiddleware = trpc.middleware(async ({ next, path }) => {
  const start = Date.now();

  if (trpc._config.isDev) {
    const waitMs = Math.floor(Math.random() * 400) + 100;
    await new Promise((resolve) => setTimeout(resolve, waitMs));
  }

  const result = await next();

  const end = Date.now();
  console.log(`[TRPC] ${path} took ${end - start}ms to execute`);

  return result;
});

export const databaseMiddleware = trpc.middleware(async ({ ctx, next }) => {
  const db = drizzle(ctx.env.APEX_KIT_DB, { schema });

  return await next({
    ctx: {
      ...ctx,
      db,
    },
  });
});

export const apex = trpc.router;
export const publicProcedure = trpc.procedure.use(timingMiddleware).use(databaseMiddleware);
