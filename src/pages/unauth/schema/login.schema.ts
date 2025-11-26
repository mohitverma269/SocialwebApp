import { z } from "zod";

export const LoginSchema = z.object({
  email: z.string().email("Invalid email format").min(1, "Email is required"),
  password: z.string().min(6, "Password must be 6+ characters"),
});

export type LoginFormType = z.infer<typeof LoginSchema>;
