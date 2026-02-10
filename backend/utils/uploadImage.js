import { supabase } from "../config/supabase.js";

export const uploadImage = async (file, bucket, folder) => {
  const fileExt = file.originalname.split(".").pop();
  const fileName = `${Date.now()}.${fileExt}`;

  const filePath = `${folder}/${fileName}`;

  const { error } = await supabase.storage
    .from(bucket)
    .upload(filePath, file.buffer, {
      contentType: file.mimetype
    });

  if (error) throw error;

  const { data } = supabase.storage
    .from(bucket)
    .getPublicUrl(filePath);

  return data.publicUrl;
};
