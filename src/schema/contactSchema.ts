import { z } from 'zod'

const contactSchema = z.object({
  name: z.string().min(3, { message: 'Imię musi mieć co najmniej 3 znaki' }),
  email: z.email({ message: 'Nieprawidłowy adres email' }),
  phone: z.string().regex(/^\d{3,}$/, {
    message: 'Numer telefonu musi składać się z 9 cyfr',
  }),
  message: z
    .string()
    .min(20, { message: 'Wiadomość musi zawierać co najmniej 20 znaków' })
    .max(1000, { message: 'Wiadomość może zawierać maksymalnie 1000 znaków' }),
})

export type ContactFormData = z.infer<typeof contactSchema>

export default contactSchema
