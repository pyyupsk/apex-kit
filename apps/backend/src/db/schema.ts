import { boolean, pgTable, serial, timestamp, varchar } from "drizzle-orm/pg-core";

export const posts = pgTable("posts", {
  content: varchar("content").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  id: serial("id").primaryKey(),
  published: boolean("published").default(false).notNull(),
  title: varchar("title", { length: 255 }).notNull(),
});

export type NewPost = typeof posts.$inferInsert;
export type Post = typeof posts.$inferSelect;
