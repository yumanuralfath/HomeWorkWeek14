"use client";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { createBook, updateBook } from "@/fetcher/books";
import useInput from "@/hooks/useInput";
import BookStuck from "../../public/accountlogo.png";

function BookForm({ bookData }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [title, onTitleChange] = useInput(bookData ? bookData.title : "");
  const [author, onAuthorChange] = useInput(bookData ? bookData.author : "");
  const [publisher, onPublisherChange] = useInput(
    bookData ? bookData.publisher : ""
  );
  const [year, onYearChange] = useInput(bookData ? bookData.year : "");
  const [pages, onPagesChange] = useInput(bookData ? bookData.pages : "");

  const router = useRouter();

  const bookId = bookData ? bookData.id : null;

  const onAddBook = async () => {
    if (!selectedImage) {
      alert("Masukkan Gambar");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("author", author);
    formData.append("publisher", publisher);
    formData.append("year", year);
    formData.append("pages", pages);
    formData.append("image", selectedImage.file);

    await createBook(formData);

    Swal.fire({
      position: "center",
      icon: "success",
      title: "The book has been successfully created",
      showConfirmButton: false,
      timer: 1700,
    });

    setTimeout(() => {
      router.push("/");
      resetForm();
    }, 1700);
  };
  const resetForm = () => {
    onTitleChange("");
    onAuthorChange("");
    onPublisherChange("");
    onYearChange("");
    onPagesChange("");
    setSelectedImage(null);
  };

  useEffect(() => {
    if (bookData?.image) {
      setSelectedImage({
        file: bookData.image,
        url: `${bookData.image}`,
      });
    }
  }, [bookData]);

  const onImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage({
        file: file,
        url: URL.createObjectURL(file),
      });
    }
  };

  const onUpdateBook = async () => {
    const bookUpdateData = {
      id: parseInt(bookId),
      title: title,
      author: author,
      publisher: publisher,
      year: parseInt(year),
      pages: parseInt(pages),
    };

    try {
      await updateBook(bookId, bookUpdateData);
    } catch (error) {
      console.error("Error updating book:", error);
      // Handle error here
    } finally {
      setTimeout(() => {
        router.push("/");
      }, 1700);

      Swal.fire({
        position: "center",
        icon: "success",
        title: "The book has been successfully updated",
        showConfirmButton: false,
        timer: 1700,
      });
    }
  };

  return (
    <div className="body-novelform flex mt-5">
      <form action="" className="w-full bg-white xl:w-2/4">
        <label className="form-control w-full max-w">
          <div className="label">
            <span className="label-text text-txt">Title</span>
          </div>
          <input
            type="text"
            placeholder="Masukkan Judul Buku"
            className="input input-bordered input-primary  w-full max-w-lg bg-[#f0f0f0]"
            name="title"
            required
            defaultValue={bookData ? bookData.title : title}
            onChange={onTitleChange}
          />
        </label>
        <label className="form-control w-full max-w">
          <div className="label">
            <span className="label-text text-txt">Author</span>
          </div>
          <input
            type="text"
            placeholder="Masukkan Nama Penulis Buku"
            className="input input-bordered input-primary  w-full max-w-lg bg-[#f0f0f0]"
            name="author"
            required
            defaultValue={bookData ? bookData.author : author}
            onChange={onAuthorChange}
          />
        </label>
        <label className="form-control w-full max-w">
          <div className="label">
            <span className="label-text text-txt">Publisher</span>
          </div>
          <input
            type="text"
            placeholder="Masukkan Nama Penerbit Buku"
            className="input input-bordered input-primary  w-full max-w-lg bg-[#f0f0f0]"
            name="publisher"
            required
            defaultValue={bookData ? bookData.publisher : publisher}
            onChange={onPublisherChange}
          />
        </label>
        <label className="form-control w-full max-w">
          <div className="label">
            <span className="label-text text-txt">Year</span>
          </div>
          <input
            type="text"
            placeholder="Masukkan Tahun Diterbitkan Buku"
            className="input input-bordered input-primary  w-full max-w-lg bg-[#f0f0f0]"
            name="year"
            required
            defaultValue={bookData ? bookData.year : year}
            onChange={onYearChange}
          />
        </label>
        <label className="form-control w-full max-w">
          <div className="label">
            <span className="label-text text-txt">Pages</span>
          </div>
          <input
            type="text"
            placeholder="Masukkan Jumlah Halaman Buku"
            className="input input-bordered input-primary  w-full max-w-lg bg-[#f0f0f0]"
            name="pages"
            required
            defaultValue={bookData ? bookData.pages : pages}
            onChange={onPagesChange}
          />
        </label>
        {!bookData?.image && (
          <label className="form-control w-full max-w">
            <div className="label">
              <span className="label-text text-txt">Image</span>
            </div>
            <input
              type="file"
              className="file-input file-input-bordered file-input-primary w-full max-w-lg bg-white"
              name="image"
              accept="image/*"
              onChange={onImageChange}
            />
          </label>
        )}
        {selectedImage && (
          <Image
            src={selectedImage.url}
            alt="Selected Image"
            className="mt-3 ml-3 h-60"
          />
        )}
        {bookData ? (
          <button
            type="button"
            className="btn bg-darkblue hover:bg-primary mt-5 w-full max-w-lg border-0 text-white"
            onClick={onUpdateBook}
          >
            Edit Book
          </button>
        ) : (
          <button
            type="button"
            className="btn bg-darkblue hover:bg-primary mt-5 w-full max-w-lg border-0 text-white"
            onClick={onAddBook}
          >
            Add Book
          </button>
        )}
      </form>
      <div className="img-additional w-2/4 bg-white max-[900px]:hidden pl-10 flex justify-center items-center">
        <Image
          src={BookStuck}
          alt="Book Stuck Image"
          className="rounded-[100px] saturate-200"
        />
      </div>
    </div>
  );
}

export default BookForm;
