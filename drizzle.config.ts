import { defineConfig } from "drizzle-kit";
import "dotenv/config";
import { env } from "@/lib/env";

export default defineConfig({
  out: "./src/server/db/migration",
  schema: "./src/server/db/schema/index.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: env.DATABASE_URL,
  },
});
