import { neon } from "@neondatabase/serverless";
import { initTRPC } from "@trpc/server";
import { drizzle } from "drizzle-orm/neon-http";
import superjson from "superjson";
import { ZodError } from "zod";

import type { AppEnv } from "../app";
import type { TrpcContext } from "../types/trpc";

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

export const databaseMiddleware = trpc.middleware(async ({ ctx, next }) => {
  const sql = neon(ctx.env.DATABASE_URL);
  const db = drizzle(sql);

  return await next({
    ctx: {
      ...ctx,
      db,
    },
  });
});

export const apex = trpc.router;
export const publicProcedure = trpc.procedure.use(databaseMiddleware);
