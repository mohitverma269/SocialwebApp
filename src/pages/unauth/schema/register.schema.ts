import { z } from "zod";

// export const RegisterSchema = z.object({
//   firstName: z.string().min(2, "First name is too short"),
//   lastName: z.string().min(2, "Last name is too short"),

//   email: z.string().email("Invalid email"),

//   mobile: z
//     .string()
//     .regex(/^[0-9]{10}$/, "Enter a valid 10-digit mobile number"),

//   password: z.string().min(6, "Password must be at least 6 characters"),

//   confirmPassword: z.string().min(6, "Confirm password required"),
// }).refine((data) => data.password === data.confirmPassword, {
//   path: ["confirmPassword"],
//   message: "Passwords do not match",
// });

// export type RegisterFormType = z.infer<typeof RegisterSchema>;


export const RegisterSchema = z.object({
  firstName: z.string().min(2, "First name required"),
  lastName: z.string().min(2, "Last name required"),
  email: z.string().email("Invalid email"),
  age: z.string().min(1, "Age required"),
  mobile: z.string().regex(/^[0-9]{10}$/, "Enter valid 10 digit number"),
  password: z.string().min(6, "Min 6 characters"),
  confirmPassword: z.string().min(6, "Confirm password"),
  image: z.any().optional(), // <-- Accept FileList
}).refine((data) => data.password === data.confirmPassword, {
  path: ["confirmPassword"],
  message: "Passwords must match",
});

export type RegisterFormType = z.infer<typeof RegisterSchema>;
