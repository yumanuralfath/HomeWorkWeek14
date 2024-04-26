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
export const POST = async (req, { params }) => {
  try {

    const { title, author, publisher, year, pages, image } = await req.json();

    await prisma.book.create({
      data: {
        title,
        author,
        publisher,
        year,
        pages,
        image
      }
    })

    return NextResponse.json({ message: "Book created successful" })
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 })
  }
}