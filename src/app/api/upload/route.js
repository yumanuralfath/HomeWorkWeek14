import { writeFile } from "fs/promises";
import { NextResponse } from "next/server";


export const POST = async (request) => {
  const data = await request.formData();
  const file = data.get("file");

  if (!file) {
    return NextResponse.json({ success: false });
  }

  if (!file.type.startsWith('image/')) {
    throw new Error('Only image files are allowed.')
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const path = `public/upload/${file.name}`;
  await writeFile(path, buffer)

  return NextResponse.json(path);
} 
