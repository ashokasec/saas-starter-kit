import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    NODE_ENV: z.enum(["development", "production", "test"]),
  },
  client: {
    NEXT_PUBLIC_BASE_URL: z.string().min(1),
    NEXT_PUBLIC_CANONICAL_URL: z.string().min(1),
  },
  runtimeEnv: {
    // Server Side
    NODE_ENV: process.env.NODE_ENV,

    // Client Accessible
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
    NEXT_PUBLIC_CANONICAL_URL: process.env.NEXT_PUBLIC_CANONICAL_URL,
  },
});
