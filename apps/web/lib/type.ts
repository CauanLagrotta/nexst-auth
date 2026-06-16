import { z } from "zod";

export type FormState =
  | {
      error?: {
        name?: string[];
        email?: string[];
        password?: string[];
      };
      message?: string;
    }
  | undefined;

export const SignupFormSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: "Name is required and must be at least 2 characters long",
    })
    .trim(),
  email: z.email({ message: "Email is required" }).trim(),
  password: z
    .string()
    .min(8, {
      message: "Password must contain at least 8 characters",
    })
    .regex(/[a-zA-Z]/, {
      message: "Password must contain at least one letter",
    })
    .regex(/[0-9]/, { message: "Must contain at least one number" })
    .regex(/[^a-zA-Z0-9]/, {
      message: "Must contain at least one special character",
    })
    .trim(),
});
