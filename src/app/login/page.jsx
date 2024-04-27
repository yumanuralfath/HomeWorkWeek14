import React from "react";
import Bookstore from "../../../public/LogoYuma.png";
import Link from "next/link";
import Image from "next/image";
import LoginInput from "@/components/Login";

function LoginPage() {
  return (
    <section className="login-page flex h-screen font-jkt text-white bg-gradient-to-br from-purple-900 to-blue-900">
      <div className="container h-full w-1/2 bg-white flex justify-center items-center">
        <Image src={Bookstore} alt="Book Store" className="w-2/3" />
      </div>
      <div className="container relative h-full w-1/2 bg-gray-800 px-8 md:px-24 py-12 md:py-0 flex flex-col justify-center">
        <h1 className="text-4xl md:text-5xl text-center font-bold text-yellow-300 mb-6">
          <span className="inline-block text-5xl md:text-6xl mb-4 md:mb-0"></span>
          <span className="inline-block">ALFATH LIBRARY</span>
        </h1>
        <p className="text-lg md:text-xl text-center font-bold mb-4">
          Welcome Back Librarian 📚
        </p>
          <LoginInput />
        <p className="text-sm mt-4 text-center">
          Dont have an account yet?&nbsp;
          <Link
            href="/register"
            className="font-semibold hover:font-bold cursor-pointer text-yellow-300"
          >
            Sign Up now
          </Link>
        </p>
      </div>
    </section>
  );
}

export default LoginPage;
