"use client";

import { Google } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { EmailInput, PasswordInput } from "@/components/ui/input";
import { authClient } from "@/lib/auth/client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";
import {
  AuthHeader,
  AuthDescription,
  AuthSectionContainer,
  BackToHome,
} from "@/components/auth-ui";

const signInFormSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
});

export default function SignInPage() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof signInFormSchema>>({
    resolver: zodResolver(signInFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(data: z.infer<typeof signInFormSchema>) {
    await authClient.signIn.email({
      email: data.email,
      password: data.password,
      callbackURL: "/dashboard",
      fetchOptions: {
        onResponse: () => {
          setLoading(false);
        },
        onRequest: () => {
          setLoading(true);
        },
        onError: (ctx) => {
          toast.error(ctx.error.message);
        },
        onSuccess: async () => {
          router.push("/dashboard");
        },
      },
    });
  }

  return (
    <AuthSectionContainer>
      <div className="p-2">
        <BackToHome />
        <AuthHeader>Welcome Back</AuthHeader>
        <AuthDescription>
          Login to read and manage your favorite comics!
        </AuthDescription>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="mt-6 space-y-4"
          >
            <EmailInput form={form} name="email" showIcon={false} />
            <PasswordInput form={form} name="password" />
            <Button type="submit" className="w-full">
              {loading ? (
                <Loader2 size={16} className="animate-spin" />
              ) : (
                "Sign In"
              )}
            </Button>
          </form>
        </Form>

        <div className="my-6 grid grid-cols-[1fr_auto_1fr] items-center gap-3">
          <hr className="border-dashed" />
          <span className="text-muted-foreground text-xs">
            Or continue With
          </span>
          <hr className="border-dashed" />
        </div>

        <Button type="button" className="w-full" variant="outline">
          <Google />
          <span>Google</span>
        </Button>
      </div>

      <div className="p-3">
        <p className="text-accent-foreground text-center text-sm">
          Don’t have an account?
          <Link href="/sign-up" className="ml-1 hover:underline">
            Create one
          </Link>
        </p>
      </div>
    </AuthSectionContainer>
  );
}
