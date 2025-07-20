import { sendAccountVerificationEmail } from "@/email";
import { getUserBy } from "@/server/controller/user";
import db from "@/server/db";
import { account, session, user, verification } from "@/server/db/schema";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { nextCookies } from "better-auth/next-js";
import { customSession } from "better-auth/plugins";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
    schema: {
      user,
      session,
      account,
      verification,
    },
  }),
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: true,
  },
  emailVerification: {
    sendVerificationEmail: async ({ user, url }) => {
      await sendAccountVerificationEmail({
        identifier: { name: user.name, email: user.email },
        url,
      });
    },
    autoSignInAfterVerification: true,
  },
  user: {
    additionalFields: {
      username: {
        type: "string",
        required: false,
      },
    },
  },
  plugins: [
    nextCookies(),
    customSession(async ({ user, session }) => {
      const userProfile = await getUserBy("id", user.id);
      return {
        user: {
          ...user,
          username: userProfile.username,
        },
        session,
      };
    }),
  ],
});
