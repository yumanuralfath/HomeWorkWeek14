import { writeFile } from "fs/promises";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const data = await request.formData();
  const file = data.get("file");

  if (!file) {
    return NextResponse.json({ success: false });

  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const path = `public/upload/${file.name}`;
  await writeFile(path, buffer)
  console.log(`Open ${path} to see the uploaded file`);

  return NextResponse.json({ success: true });
} 
