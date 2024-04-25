import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

//Get all book
export const GET = async (req, { params }) => {
  try {
    const response = await prisma.book.findMany();
    return NextResponse.json(response, { status: 200 });

  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Internal Server error" }, { status: 500 });
  }
};

//Create a new book
