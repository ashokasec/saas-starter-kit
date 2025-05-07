import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Eye, EyeOff, Mail } from "lucide-react";
import type * as React from "react";
import { useState } from "react";
import type { FieldValues, Path, UseFormReturn } from "react-hook-form";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className,
      )}
      {...props}
    />
  );
}

interface PasswordInputProps<TFormValues extends FieldValues> {
  name: Path<TFormValues>;
  label?: string;
  description?: string;
  placeholder?: string;
  form: UseFormReturn<TFormValues>;
  showFormDescription?: boolean;
  className?: string;
  inputClassName?: string;
  disabled?: boolean;
  required?: boolean;
  autoComplete?: string;
}

export function PasswordInput<TFormValues extends FieldValues>({
  name,
  label = "Password",
  description = "Password must be at least 8 characters and include uppercase, lowercase, and numbers.",
  placeholder = "Enter your password",
  form,
  showFormDescription = true,
  className = "",
  inputClassName = "",
  disabled = false,
  required = false,
  autoComplete = "current-password",
}: PasswordInputProps<TFormValues>) {
  const [showPassword, setShowPassword] = useState(false);

  // Prevent default behavior of button to avoid form submission
  const handleToggleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className={className}>
          {label && (
            <FormLabel>
              {label}
              {required && <span className="text-red-500 ml-1">*</span>}
            </FormLabel>
          )}
          <div className="relative">
            <FormControl>
              <Input
                type={showPassword ? "text" : "password"}
                className={`pr-10 ${inputClassName}`}
                placeholder={placeholder}
                disabled={disabled}
                autoComplete={autoComplete}
                {...field}
              />
            </FormControl>
            <button
              type="button"
              onClick={handleToggleClick}
              disabled={disabled}
              className="absolute right-2 top-2 text-gray-500 hover:text-gray-700 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label={showPassword ? "Hide password" : "Show password"}
              tabIndex={0}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          {showFormDescription && description && (
            <FormDescription>{description}</FormDescription>
          )}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

interface EmailInputProps<TFormValues extends FieldValues> {
  name: Path<TFormValues>;
  label?: string;
  description?: string;
  placeholder?: string;
  form: UseFormReturn<TFormValues>;
  showFormDescription?: boolean;
  showIcon?: boolean;
  className?: string;
  inputClassName?: string;
  disabled?: boolean;
  required?: boolean;
  autoComplete?: string;
}

export function EmailInput<TFormValues extends FieldValues>({
  name,
  label = "Email",
  description = "Enter a valid email address",
  placeholder = "example@domain.com",
  form,
  showFormDescription = false,
  showIcon = true,
  className = "",
  inputClassName = "",
  disabled = false,
  required = false,
  autoComplete = "email",
}: EmailInputProps<TFormValues>) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className={className}>
          {label && (
            <FormLabel>
              {label}
              {required && <span className="text-red-500 ml-1">*</span>}
            </FormLabel>
          )}
          <div className="relative">
            <FormControl>
              <Input
                type="email"
                className={`${showIcon ? "pl-10" : ""} ${inputClassName}`}
                placeholder={placeholder}
                disabled={disabled}
                autoComplete={autoComplete}
                {...field}
              />
            </FormControl>
            {showIcon && (
              <div className="absolute left-3 top-2.5 text-gray-500">
                <Mail size={20} />
              </div>
            )}
          </div>
          {showFormDescription && description && (
            <FormDescription>{description}</FormDescription>
          )}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export { Input };
