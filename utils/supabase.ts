import { createClient } from '@supabase/supabase-js'
import db from './db'

const bucket = 'home-away'

const url = process.env.SUPABASE_URL as string
const key = process.env.SUPABASE_KEY as string

const supabase = createClient(url, key)

interface ImageData {
  id: Record<string, string>
  tableName: string
  fieldName: string
}

const deleteOldImage = async (publicUrl: string): Promise<void> => {
  if (publicUrl) {
    const pathname = publicUrl.replace(
      `https://tdflxrycxumvirqxdzyp.supabase.co/storage/v1/object/public/${bucket}/`,
      ''
    )
    const { error } = await supabase.storage.from(bucket).remove([pathname])
    if (error) throw new Error('Failed to delete old image file')
  }
}

const getOldImageUrl = async (
  tableName: string,
  id: Record<string, string>,
  fieldName: string
): Promise<string | null> => {
  const record = await (db as any)[tableName].findUnique({
    where: { ...id }
  })

  return record?.[fieldName]
}

export const uploadImage = async (
  image: File,
  imageData: ImageData | null
): Promise<string> => {
  if (imageData) {
    const { tableName, id, fieldName } = imageData
    const oldImageUrl = await getOldImageUrl(tableName, id, fieldName)

    if (oldImageUrl) {
      await deleteOldImage(oldImageUrl)
    }
  }

  const timestamp = Date.now()
  const newName = `${timestamp}-${image.name}`
  const { data } = await supabase.storage
    .from(bucket)
    .upload(newName, image, { cacheControl: '3600' })

  if (!data) throw new Error('Image upload failed')
  return supabase.storage.from(bucket).getPublicUrl(newName).data.publicUrl
}
