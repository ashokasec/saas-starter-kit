"use client";

import { HotkeyProvider } from "@/components/hotkey-provider";
import { app } from "@/lib/config/app";
import { epilogue } from "@/lib/fonts";
import { Asterisk } from "lucide-react";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <HotkeyProvider
      shortcuts={[
        {
          key: "g",
          action: () =>
            window.open(
              "https://github.com/ashokasec/saas-starter-kit",
              "_blank",
            ),
        },
        {
          key: "d",
          action: () => window.open("https://yourdomain.com/docs", "_blank"),
        },
      ]}
    >
      <main className="flex flex-col items-center justify-center min-h-screen px-6">
        <div className="flex max-w-2xl justify-between w-full">
          <div className="flex gap-2 items-center justify-center">
            <div
              style={epilogue.style}
              className="text-[17px] font-semibold leading-none h-10 flex items-center text-blue-600"
            >
              <Asterisk className="relative bottom-[2px] size-5 mr-1" />
              {app.name}
            </div>
          </div>
        </div>

        <div className="max-w-2xl text-start w-full mt-8 space-y-8 text-neutral-800">
          <p className="flex flex-col">
            {/* This is visually hidden but accessible to crawlers and screen readers */}
            <span className="sr-only">{app.name}</span>
            is a modern SaaS starter kit that cuts weeks of setup into minutes.
          </p>
          <p>
            It's built for developers who care about performance, developer
            experience, and long-term maintainability — without the headache of
            wiring everything from scratch.
          </p>
          <p>
            With <strong className="font-semibold">Next.js</strong>,{" "}
            <strong className="font-semibold">Drizzle ORM</strong>, and{" "}
            <strong className="font-semibold">PostgreSQL</strong> at the core,{" "}
            <span
              style={epilogue.style}
              className="font-semibold leading-none text-blue-600"
            >
              {app.name}
            </span>{" "}
            enforces scalable structure, type-safety, and best practices — so
            you can skip the boring setup and start building real features.
          </p>
          <div className="text-foreground">
            <p className="font-medium">What’s included:</p>
            <ul className="list-disc mt-2 ml-5 space-y-1">
              <li>
                <span className="saturate-150 select-none hue-rotate-180">
                  ⚡
                </span>{" "}
                Next.js 15 with App Router
              </li>
              <li>
                <span className="saturate-150 select-none hue-rotate-[259deg]">
                  🧠
                </span>{" "}
                PostgreSQL + Drizzle ORM (type-safe SQL)
              </li>
              <li>
                <span className="saturate-150 select-none hue-rotate-[210deg]">
                  🎨
                </span>{" "}
                Tailwind CSS + ShadCN UI components
              </li>
              <li>
                <span className="saturate-150 select-none hue-rotate-180">
                  🔐
                </span>{" "}
                Better-Auth integration
              </li>
              <li>
                <span className="saturate-150 select-none hue-rotate-60">
                  ✅
                </span>{" "}
                Zod + react-hook-form validation layer
              </li>
              <li>
                <span className="saturate-150 select-none hue-rotate-180">
                  🧹
                </span>{" "}
                Biome for formatting, linting & stability
              </li>
              <li>
                <span className="saturate-150 select-none hue-rotate-180">
                  🔒
                </span>{" "}
                @t3-oss/env-nextjs for env safety
              </li>
            </ul>
          </div>
          <div className="mt-12 flex gap-x-6 text-sm" style={epilogue.style}>
            <Link href="/" className="px-0 text-blue-600 font-medium group">
              [ <span className="group-hover:font-semibold">D</span> ]{" "}
              <span className="group-hover:underline underline-offset-2">
                Docs
              </span>
            </Link>
            <Link href="/" className="px-0 text-blue-600 font-medium group">
              [ <span className="group-hover:font-semibold">G</span> ]{" "}
              <span className="group-hover:underline underline-offset-2">
                Github
              </span>
            </Link>
          </div>
        </div>
      </main>
    </HotkeyProvider>
  );
};

export default page;
