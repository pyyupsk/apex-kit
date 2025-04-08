import { postRouter } from "@/routers/post";
import { apex } from "@/trpc";

export const appRouter = apex({
  post: postRouter,
});

export type AppRouter = typeof appRouter;
