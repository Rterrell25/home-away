import * as z from 'zod'
import { ZodSchema } from 'zod'

export const profileSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: 'first name must be atleast 2 characters' }),
  lastName: z
    .string()
    .min(2, { message: 'last name must be atleast 2 characters' }),
  username: z
    .string()
    .min(2, { message: 'username must be atleast 2 characters' })
    .max(15, { message: 'username must be a maximum of 25 characters' })
})

export function validateWithZodSchema<T>(schema: ZodSchema<T>, data: unknown) {
  const result = schema.safeParse(data)

  if (!result.success) {
    const errors = result.error.errors.map(({ message }) => message)
    throw new Error(errors.join(','))
  }

  return result.data
}
