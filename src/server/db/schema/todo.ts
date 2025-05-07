import { boolean, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { createTable } from "../../create-table";

export const todoTable = createTable("todo", {
  id: uuid("id").primaryKey().defaultRandom().notNull(),
  title: text("title").notNull(),
  description: text("description"),
  completed: boolean("completed").default(false).notNull(),
  createdAt: timestamp("created_at", { mode: "date" }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { mode: "date" }).defaultNow().notNull(),
});

export type TODO = typeof todoTable.$inferSelect;
