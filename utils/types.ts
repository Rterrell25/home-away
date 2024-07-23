export type actionFunction = (
  prevState: any,
  formData: FormData
) => Promise<{ message: string }>

export interface ImageData {
  id: Record<string, string>
  tableName: string
  fieldName: string
}
