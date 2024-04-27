import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BiSolidBookBookmark } from "react-icons/bi";
import Bookstore from "../../../public/LogoYuma.png";
import RegisterInput from "@/components/Register";

function RegisterPage() {
  return (
    <section className="register-page flex h-screen font-jkt text-txt">
      <div className="container h-screen w-2/4 bg-white max-[900px]:hidden">
        <Image
          src={Bookstore}
          height={10}
          width={10}
          className="object-cover h-screen w-full"
          alt="Book Store"
        />
      </div>
      <div className="container relative h-screen w-full bg-white pl-4 md:w-2/4 md:pl-48">
        <p className="absolute mt-8 text-sm md:left-2/4">
          Already have an account?&nbsp;
          <Link
            href="/login"
            className="font-semibold hover:font-bold cursor-pointer"
          >
            Sign In
          </Link>
        </p>
        <h2 className="mt-20 font-jkt text-4xl  font-bold drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
          Register
        </h2>
        <p className="mt-4 text-xl font-bold ">
          Hi, Welcome to{" "}
          <span className="inline-block text-lg text-darkblue">
            <BiSolidBookBookmark />
          </span>
          <span className="inline-block text-darkblue">Novelnest</span>
        </p>
        <RegisterInput />
      </div>
    </section>
  );
}

export default RegisterPage;
