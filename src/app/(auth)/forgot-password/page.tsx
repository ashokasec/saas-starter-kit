"use client";

import {
  AuthDescription,
  AuthHeader,
  AuthSectionContainer,
  BackToHome,
} from "@/components/auth-ui";
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
        <AuthHeader>Recover Password</AuthHeader>
        <AuthDescription>
          Enter your email to receive a password reset link
        </AuthDescription>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="mt-6 space-y-4"
          >
            <EmailInput form={form} name="email" showIcon={false} />
            <Button type="submit" className="w-full">
              {loading ? (
                <Loader2 size={16} className="animate-spin" />
              ) : (
                "Send Reset Link"
              )}
            </Button>
          </form>
        </Form>
      </div>

      <div className="p-3">
        <p className="text-accent-foreground text-center text-sm">
          Got Your Password?
          <Link href="/sign-in" className="ml-1 hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </AuthSectionContainer>
  );
}
