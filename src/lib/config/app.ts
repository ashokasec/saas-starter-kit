import { env } from "@/lib/env";

export const app = {
  name: "SAAS Starter Kit",
  logo: "/",
  locale: "en-US",
  publicUrl: env.NEXT_PUBLIC_BASE_URL,
  canonicalUrl: env.NEXT_PUBLIC_CANONICAL_URL,
};

export const team = {
  founder: {
    name: "Shivam Gupta",
    social: {
      website: "https://ashokasec.com",
      x: "https://x.com/ashokasec",
      github: "https://x.com/ashokasec",
      email: "ashokasec@example.com",
    },
  },
};
