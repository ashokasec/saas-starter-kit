import { eq } from "drizzle-orm";
import db from "../db";
import { user } from "../db/schema";

export const getUserBy = async (key: "id" | "username", value: string) => {
  const result = await db.select().from(user).where(eq(user[key], value));
  return result[0];
};
