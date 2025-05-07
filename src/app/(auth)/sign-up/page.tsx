"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { EmailInput, Input, PasswordInput } from "@/components/ui/input";
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
  GoogleButton,
} from "@/components/auth-ui";

const signupFormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 1 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" })
    .regex(/[A-Z]/, {
      message: "Password must contain at least one uppercase letter",
    })
    .regex(/[a-z]/, {
      message: "Password must contain at least one lowercase letter",
    })
    .regex(/[0-9]/, { message: "Password must contain at least one number" }),
});

export default function SignupPage() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof signupFormSchema>>({
    resolver: zodResolver(signupFormSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  async function onSubmit(data: z.infer<typeof signupFormSchema>) {
    await authClient.signUp.email({
      email: data.email,
      password: data.password,
      name: data.name,
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
        <AuthHeader>Get Started Now</AuthHeader>
        <AuthDescription>
          Create an account to read and manage your favorite comics!
        </AuthDescription>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="mt-6 space-y-4"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel> Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <EmailInput form={form} name="email" showIcon={false} />
            <PasswordInput form={form} name="password" />
            <Button type="submit" className="w-full">
              {loading ? (
                <Loader2 size={16} className="animate-spin" />
              ) : (
                "Create an account"
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

        <GoogleButton />
      </div>

      <div className="p-3">
        <p className="text-accent-foreground text-center text-sm">
          Have an account?
          <Link href="/sign-in" className="ml-1 hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </AuthSectionContainer>
  );
}
