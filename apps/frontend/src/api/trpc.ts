import type { AppRouter } from "@apps/backend/src/trpc/router";

import { createTRPCClient, httpBatchLink, loggerLink } from "@trpc/client";
import { type inferRouterInputs, type inferRouterOutputs } from "@trpc/server";
import superjson from "superjson";

const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:8787/trpc";

export const trpc = createTRPCClient<AppRouter>({
  links: [
    loggerLink({
      enabled: (opts) =>
        // eslint-disable-next-line turbo/no-undeclared-env-vars
        import.meta.env.DEV || (opts.direction === "down" && opts.result instanceof Error),
    }),
    httpBatchLink({
      transformer: superjson,
      url: apiUrl,
    }),
  ],
});

export type RouterInputs = inferRouterInputs<AppRouter>;
export type RouterOutputs = inferRouterOutputs<AppRouter>;
