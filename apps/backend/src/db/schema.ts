import { sql } from "drizzle-orm";
import { int, integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const posts = sqliteTable("posts", {
  content: text("content").notNull(),
  createdAt: text("created_at")
    .default(sql`(CURRENT_TIMESTAMP)`)
    .notNull(),
  id: int("id").primaryKey({ autoIncrement: true }),
  published: integer("published", { mode: "boolean" }).default(false).notNull(),
  title: text("title", { length: 255 }).notNull(),
});

export type NewPost = typeof posts.$inferInsert;
export type Post = typeof posts.$inferSelect;
