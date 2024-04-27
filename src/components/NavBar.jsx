'use client'

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { logout } from "@/fetcher/Auth";
import { BiSolidBookOpen, BiSolidBookAdd, BiLogOut } from "react-icons/bi";

function Navigation() {
  const router = useRouter();

  const onSignOut = async () => {
    await logout();

    router.push("/login");

    Swal.fire({
      position: "center",
      icon: "success",
      title: "See you again!",
      showConfirmButton: false,
      timer: 1500,
    });
  };
  return (
    <div className="navigation w-full fixed bottom-10 flex justify-center drop-shadow-xl">
      <div className="btm-nav w-10/12 md:w-6/12  xl:w-4/12 relative rounded-full drop-shadow-xxl shadow-2xl">
        <Link
          href="/"
          className="bg-white text-pink-600 rounded-l-full hover:active hover:bg-blue-200 hover:text-blue-600 hover:border-blue-600"
        >
          <BiSolidBookOpen />
          <span className="btm-nav-label ">Books</span>
        </Link>

        <Link
          href="/create"
          className="bg-white text-pink-600 hover:active hover:bg-blue-200 hover:text-blue-600 hover:border-blue-600"
        >
          <BiSolidBookAdd />
          <span className="btm-nav-label">Add</span>
        </Link>

        <Link
          href="/login"
          className="bg-white text-pink-600  hover:active hover:bg-blue-200 hover:text-blue-600 hover:border-blue-600 rounded-r-full"
          onClick={() => onSignOut()}
        >
          <BiLogOut />
          <span className="btm-nav-label">Sign Out</span>
        </Link>
      </div>
    </div>
  );
}

export default Navigation;