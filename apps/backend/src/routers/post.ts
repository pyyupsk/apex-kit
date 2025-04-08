import { z } from "zod";

import { apex, publicProcedure } from "../trpc";

const postSchema = z.object({
  authorId: z.string(),
  content: z.string(),
  createdAt: z.date(),
  id: z.string(),
  published: z.boolean().default(false),
  title: z.string(),
});

export const postRouter = apex({
  createPost: publicProcedure
    .input(postSchema.omit({ createdAt: true, id: true }))
    .mutation(async ({ input }) => {
      const newPost = {
        ...input,
        createdAt: new Date(),
        id: `${mockPosts.length + 1}`,
      };
      mockPosts.push(newPost);
      return newPost;
    }),
  getAllPosts: publicProcedure.query(async () => {
    return mockPosts;
  }),
  getPostById: publicProcedure.input(z.object({ id: z.string() })).query(async ({ input }) => {
    const post = mockPosts.find((p) => p.id === input.id);
    if (!post) throw new Error("Post not found");
    return post;
  }),
});

const mockPosts = [
  {
    authorId: "1",
    content: "This is a post about our amazing stack!",
    createdAt: new Date("2023-01-10"),
    id: "1",
    published: true,
    title: "Hello Rapide",
  },
  {
    authorId: "1",
    content: "End-to-end type safety is a game changer for developer experience.",
    createdAt: new Date("2023-01-15"),
    id: "2",
    published: true,
    title: "Type Safety with tRPC",
  },
];
