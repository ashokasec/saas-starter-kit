import { Google } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { app } from "@/lib/config/app";
import { bricolage } from "@/lib/fonts";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export const AuthSectionContainer = ({
  children,
}: { children?: React.ReactNode }) => {
  return (
    <section className="flex min-h-screen px-4 py-16 md:py-32 dark:bg-transparent">
      <div className="m-auto h-fit w-full max-w-md overflow-hidden dark:[--color-muted:var(--color-zinc-900)]">
        {children}
      </div>
    </section>
  );
};

export const AuthHeader = ({ children }: { children: string }) => {
  return (
    <h1 className="mb-1 mt-4 text-3xl font-bold" style={bricolage.style}>
      {children}
    </h1>
  );
};

export const AuthDescription = ({ children }: { children: string }) => {
  return <p className="text-neutral-700 mt-3 text-[15px]">{children}</p>;
};

export const BackToHome = ({ children }: { children?: React.ReactNode }) => {
  return (
    <Link
      href="/"
      aria-label="go home"
      className="text-neutral-600 text-sm font-semibold flex items-center w-fit"
      style={bricolage.style}
    >
      {children ?? (
        <>
          <ArrowLeft size={16} className="mr-2" />
          <span>{app.name}</span>
        </>
      )}
    </Link>
  );
};

export const GoogleButton = () => {
  return (
    <Button type="button" className="w-full" variant="outline">
      <Google />
      <span>Google</span>
    </Button>
  );
};
