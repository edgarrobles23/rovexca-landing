import { z } from "zod";

export const trialSchema = z.object({
  name: z.string().min(2, "Ingresa tu nombre completo"),
  email: z.string().email("Ingresa un correo válido"),
  phone: z
    .string()
    .min(10, "Ingresa un teléfono válido")
    .regex(/^[0-9+\s()-]{10,15}$/, "Formato de teléfono inválido"),
  organization: z.string().min(2, "Ingresa el nombre de tu clínica o consultorio"),
  address: z.string().optional(),
  city: z.string().optional(),
  Doctor: z.string().optional(),
  specialty: z.string().optional(),
  usersEstimate: z.string().min(1, "Selecciona el número estimado de usuarios"),
});

export type TrialFormData = z.infer<typeof trialSchema>;
