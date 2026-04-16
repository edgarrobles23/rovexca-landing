import { z } from "zod";

export const leadSchema = z.object({
  nombre: z.string().min(2, "Ingresa tu nombre completo"),
  especialidad: z.string().min(2, "Ingresa tu especialidad"),
  telefono: z
    .string()
    .min(10, "Ingresa un teléfono válido")
    .regex(/^[0-9+\s()-]{10,15}$/, "Formato de teléfono inválido"),
  email: z.string().email("Ingresa un correo válido"),
  tamano: z.enum(["solo", "2-5", "6-10", "mas-10"], {
    error: "Selecciona el tamaño de tu consultorio",
  }),
});

export type LeadFormData = z.infer<typeof leadSchema>;
