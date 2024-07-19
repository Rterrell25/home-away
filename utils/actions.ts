'use server'

import { profileSchema } from './schemas'

export const createProfileAction = async (
  prevState: any,
  formData: FormData
) => {
  try {
    const rawData = Object.fromEntries(formData)
    const validatedFields = profileSchema.parse(rawData)
    return { message: 'profile created' }
  } catch (error) {
    console.log(error)
    return { message: 'there was an error' }
  }
}
