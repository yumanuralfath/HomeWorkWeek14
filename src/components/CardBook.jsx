import React from "react";
import Link from "next/link";
import Image from "next/image";

function CardBook({ book }) {
  return (
    <Link href={`/book/${book.id}`}>
      <div className="w-40 xl:w-56 bg-black shadow-md hover:shadow-lg hover:border-gray-200">
          <Image
            src={book.image}
            width={500}
            height={500}
            alt={`${book.title} image`}
            className="w-full h-full rounded-t-md"
          />

        <div className="card-body p-4 xl:p-6">
          <h5 className="card-title font-bold text-lg text-black">
            {book.title}
          </h5>

          <p className="text-sm text-gray-600">{book.author}</p>

          <div className="flex justify-between items-center mt-4">
            <div className="badge badge-primary text-sm">{book.category}</div>

            <div className="text-sm text-gray-600">{book.price}</div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default CardBook;
