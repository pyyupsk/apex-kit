import dotenvx from "@dotenvx/dotenvx";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dbCredentials: {
    url: dotenvx.get("DATABASE_URL"),
  },
  dialect: "postgresql",
  out: "./drizzle",
  schema: "./src/db/schema.ts",
});
