import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

//Get Book By id
export const GET = async (req, { params }) => {
  try {
    const { id } = params;

    const data = await prisma.book.findUnique({
      where: {
        id: +id
      }
    })

    return NextResponse.json(data, { status: 200 })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 })
  }
}

export const DELETE = async (req, { params }) => {
  try {
    const { id } = params;

    const data = await prisma.book.delete({
      where: {
        id: +id
      }
    });
    return NextResponse.json({ message: "Deleting Book Success" }, { status: 200 });

  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: 'Error deleting book' }, { status: 500 })
  }
}