import { z } from 'zod';

export const registrationSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email format'),
  password: z.string().min(6, 'Password must be at least 6 characters long'),
  confirmPassword: z.string(),
  terms: z.boolean().refine(val => val === true, {
    message: 'You must agree to the terms',
  }),
}).refine(data => data.password === data.confirmPassword, {
  path: ['confirmPassword'],
  message: "Passwords don't match",
});

export type RegistrationFormData = z.infer<typeof registrationSchema>;
