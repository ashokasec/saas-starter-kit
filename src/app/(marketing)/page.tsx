import { Button } from "@/components/ui/button";
import { geistSans } from "@/lib/fonts";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <section>
        <div className="relative pt-24 md:pt-36">
          <div className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]" />
          <div className="mx-auto max-w-7xl px-6 flex flex-col items-center justify-center">
            <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
              <Link
                href="https://x.com/ashokasec"
                className="hover:bg-background dark:hover:border-t-border bg-muted group mx-auto flex w-fit items-center gap-4 rounded-full border p-1 pl-4 shadow-md shadow-zinc-950/5 transition-colors duration-300 dark:border-t-white/5 dark:shadow-zinc-950"
              >
                <span className="text-foreground text-sm">
                  Introducing Link to Follow the Author
                </span>
                <span className="dark:border-background block h-4 w-0.5 border-l bg-white dark:bg-zinc-700" />

                <div className="bg-background group-hover:bg-muted size-6 overflow-hidden rounded-full duration-500">
                  <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                    <span className="flex size-6">
                      <ArrowRight className="m-auto size-3" />
                    </span>
                    <span className="flex size-6">
                      <ArrowRight className="m-auto size-3" />
                    </span>
                  </div>
                </div>
              </Link>
            </div>

            <h1
              className="mt-8 text-center font-semibold text-balance text-6xl md:text-7xl lg:mt-16 xl:text-[5.25rem]"
              style={geistSans.style}
            >
              Dude Make Your Own Landing Page
            </h1>
            <p className="mx-auto mt-8 text-center max-w-2xl text-balance text-lg">
              Highly customizable components for building modern websites and
              applications that look and feel the way you mean it.
            </p>

            <div className="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row">
              <div
                key={1}
                className="bg-foreground/10 rounded-[calc(var(--radius-xl)+0.125rem)] border p-0.5"
              >
                <Button asChild size="lg" className="rounded-xl px-5 text-base">
                  <Link href="#link">
                    <span className="text-nowrap">Ahh Okay</span>
                  </Link>
                </Button>
              </div>
              <Button
                key={2}
                asChild
                size="lg"
                variant="ghost"
                className="h-10.5 rounded-xl px-5"
              >
                <Link href="#link">
                  <span className="text-nowrap">No I Wont</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
