import { TRPCError } from "@trpc/server";
import { eq } from "drizzle-orm";
import { z } from "zod";

import { tables } from "../db";
import { apex, publicProcedure } from "../trpc";

export const postRouter = apex({
  getAllPosts: publicProcedure.query(async ({ ctx }) => {
    try {
      if (!ctx.db) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Database connection not available",
        });
      }

      return await ctx.db.select().from(tables.posts).orderBy(tables.posts.createdAt);
    } catch (error) {
      console.error("Error fetching posts:", error);
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: "Failed to fetch posts",
      });
    }
  }),

  getPostById: publicProcedure
    .input(
      z.object({
        id: z.number(),
      }),
    )
    .query(async ({ ctx, input }) => {
      try {
        if (!ctx.db) {
          throw new TRPCError({
            code: "INTERNAL_SERVER_ERROR",
            message: "Database connection not available",
          });
        }

        const post = await ctx.db
          .select()
          .from(tables.posts)
          .where(eq(tables.posts.id, input.id))
          .limit(1);

        if (!post.length) {
          throw new TRPCError({
            code: "NOT_FOUND",
            message: "Post not found",
          });
        }

        return post[0];
      } catch (error) {
        if (error instanceof TRPCError) {
          throw error;
        }
        console.error("Error fetching post:", error);
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Failed to fetch post",
        });
      }
    }),
});
