"use client"

import { useEffect, useState } from "react";
import CardBook from "./cardBook";
import { getAllbook } from "@/fetcher/books";

function ContainerBooks() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllbook();
        setBooks(data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex justify-center items-center">
      <div className="xl:grid-cols-4 md:grid-cols-3 grid-cols-2 grid mt-5 gap-5 xl:gap-12 place-content-between w-full">
        {books.map((book) => (
          <CardBook key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}

export default ContainerBooks;
