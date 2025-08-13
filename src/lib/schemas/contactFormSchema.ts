import * as z from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(1).max(50),
  company: z.string().max(50),
  email: z.email().min(1).max(50),
  subject: z.string().min(1).max(50),
  message: z.string().max(250),
});

export type ContactForm = z.infer<typeof contactFormSchema>;
