import type { User } from "better-auth";
import db from "../db";
import { user } from "../db/schema";
import { eq } from "drizzle-orm";

export async function getUserById(userId: User["id"]) {
  return await db.select().from(user).where(eq(user.id, userId)).limit(1);
}
