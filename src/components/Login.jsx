"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import useInput from "@/hooks/useInput";
import { login } from "@/fetcher/Auth";
import { FaRegEnvelope, FaKey } from "react-icons/fa";

function LoginInput() {
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");

  const router = useRouter();

  const onLogin = async () => {
    await login({ email, password });

    setTimeout(() => {
      router.push("/");
    }, 1700);

    Swal.fire({
      position: "center",
      icon: "success",
      title: "Welcome to Alfath Library",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <form className="flex flex-col items-center">
      <label className="relative mt-8 block w-full max-w-md">
        <span className="sr-only">Email</span>
        <span className="absolute inset-y-0 left-4 flex items-center text-gray-500">
          <FaRegEnvelope className="h-6 w-6" />
        </span>
        <input
          className="placeholder-gray-400 focus:border-sky-500 focus:ring-sky-500 block w-full h-16 px-12 rounded-xl bg-white py-1 focus:outline-none focus:ring-1 sm:text-sm text-black"
          placeholder="Enter your email"
          type="text"
          name="email"
          id="email-login"
          value={email}
          onChange={onEmailChange}
          required
        />
      </label>
      <label className="relative mt-7 block w-full max-w-md">
        <span className="sr-only">Password</span>
        <span className="absolute inset-y-0 left-4 flex items-center text-gray-500">
          <FaKey className="h-6 w-6" />
        </span>
        <input
          className="placeholder-gray-400 focus:border-sky-500 focus:ring-sky-500 block w-full h-16 px-12 rounded-xl bg-white py-1 focus:outline-none focus:ring-1 sm:text-sm text-black"
          placeholder="Password"
          type="password"
          name="password"
          id="password-login"
          value={password}
          onChange={onPasswordChange}
          required
        />
      </label>
      <button
        type="button"
        onClick={() => onLogin()}
        className="mt-10 w-full max-w-md flex h-16 items-center justify-center rounded-xl bg-darkblue py-6 font-semibold text-white hover:bg-primary hover:font-bold"
      >
        <span>Sign In</span>
      </button>
    </form>
  );
}


export default LoginInput;
