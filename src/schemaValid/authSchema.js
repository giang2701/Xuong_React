import * as z from "zod";

export const authSchema = z.object({
    username: z.string().min(4),
    email: z.string().email(),
    password: z.string().min(6),
});

export const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
});

export const registerSchema = z
    .object({
        username: z.string().min(4),
        email: z.string().email(),
        password: z.string().min(6),
        confirmPass: z.string().min(6),
    })
    .refine((data) => data.password === data.confirmPass, {
        message: "Passwords don't match",
        path: ["confirmPass"],
    });
