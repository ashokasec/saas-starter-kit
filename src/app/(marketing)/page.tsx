"use client";

import { app } from "@/lib/config/app";
import { epilogue } from "@/lib/fonts";
import { Asterisk } from "lucide-react";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
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
          enforces scalable structure, type-safety, and best practices — so you
          can skip the boring setup and start building real features.
        </p>
        <div className="text-foreground">
          <p className="font-medium">What’s included:</p>
          <ul className="list-disc mt-2 ml-5 space-y-1">
            <li>Next.js 15 with App Router</li>
            <li>PostgreSQL + Drizzle ORM (type-safe SQL)</li>
            <li>Tailwind CSS + ShadCN UI components</li>
            <li>Better-Auth integration</li>
            <li>Zod + react-hook-form validation layer</li>
            <li>Biome for formatting, linting & stability</li>
            <li>@t3-oss/env-nextjs for env safety</li>
          </ul>
        </div>
        <div className="mt-12 flex gap-x-6 text-sm" style={epilogue.style}>
          <Link
            href="/dashboard"
            className="px-0 text-blue-600 font-medium group"
          >
            <span className="group-hover:underline underline-offset-2">
              Dashboard
            </span>
          </Link>
          <Link
            href="https://x.com/ashokasec"
            className="px-0 text-blue-600 font-medium group"
          >
            <span className="group-hover:underline underline-offset-2">
              Dev's X
            </span>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default page;
