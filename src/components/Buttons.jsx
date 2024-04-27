"use client";
import Link from "next/link";
import React from "react";
import Swal from "sweetalert2";
import { deleteBook } from "@/fetcher/books";
import { useRouter } from "next/navigation";
import { BiSolidEdit, BiSolidTrash } from "react-icons/bi";

function ButtonsDetail({ bookId }) {
  const router = useRouter();

  // const id = bookId ?

  const onDelete = async () => {
    await deleteBook(bookId);

    setTimeout(() => {
      router.push("/");
    }, 2000);

    Swal.fire({
      position: "center",
      icon: "success",
      title: "The book has been successfully deleted",
      showConfirmButton: false,
      timer: 1700,
    });
  };

  return (
    <div className="buttons-action flex mt-5">
      <Link
        href={`/editbook/${bookId}`}
        className="btn btn-primary text-white w-36"
      >
        <BiSolidEdit />
        Edit
      </Link>
      <button
        className="btn btn-error text-white ml-5 w-36"
        type="button"
        onClick={onDelete}
      >
        <BiSolidTrash />
        Delete
      </button>
    </div>
  );
}

export default ButtonsDetail;
