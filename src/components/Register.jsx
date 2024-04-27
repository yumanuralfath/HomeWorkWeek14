"use client";
import React from "react";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import useInput from "@/hooks/useInput";
import { register } from "@/fetcher/Auth";
import { FaRegEnvelope, FaKey, FaRegUser } from "react-icons/fa";

function RegisterInput() {
  const [name, onNameChange] = useInput("");
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");
  const [confirmPassword, onConfirmPasswordChange] = useInput("");

  const router = useRouter();

  const onRegister = async () => {
    if (password !== confirmPassword) {
      return;
    }
    await register({ name, email, password });

    setTimeout(() => {
      router.push("/login");
    }, 1700);

    Swal.fire({
      position: "center",
      icon: "success",
      title: "You have successfully registered",
      showConfirmButton: false,
      timer: 1700,
    });
  };

  return (
    <form>
      <label
        className="relative mt-8 block  drop-shadow-[7px_7px_2px_rgba(0,0,0,0.25)]"
        htmlFor="name-register"
      >
        <span className="sr-only">Name</span>
        <span className="absolute inset-y-0 left-6 flex items-center pl-2 text-[#808080]">
          <FaRegUser className="h-6 w-6 " />
        </span>
        <input
          className=" placeholder:text-slate-400 focus:border-sky-500 focus:ring-sky-500 block h-14 w-[350px] rounded-xl bg-white py-1 pl-20  pr-3 focus:outline-none focus:ring-1 sm:text-sm md:w-[412px]"
          placeholder="Name"
          type="text"
          name="name"
          id="name-register"
          value={name}
          onChange={onNameChange}
          required
        />
      </label>
      <label
        className="relative mt-7 block  drop-shadow-[7px_7px_2px_rgba(0,0,0,0.25)]"
        htmlFor="email-register"
      >
        <span className="sr-only">Email</span>
        <span className="absolute inset-y-0 left-6 flex items-center pl-2 text-[#808080]">
          <FaRegEnvelope className="h-6 w-6 " />
        </span>
        <input
          className=" placeholder:text-slate-400 focus:border-sky-500 focus:ring-sky-500 block h-14 w-[350px] rounded-xl bg-white py-1 pl-20  pr-3 focus:outline-none focus:ring-1 sm:text-sm md:w-[412px]"
          placeholder="Enter your email"
          type="text"
          name="email"
          id="email-register"
          value={email}
          onChange={onEmailChange}
          required
        />
      </label>
      <label
        className="relative mt-7 block  drop-shadow-[7px_7px_2px_rgba(0,0,0,0.25)]"
        htmlFor="password-register"
      >
        <span className="sr-only">Paswword</span>
        <span className="absolute inset-y-0 left-6 flex items-center pl-2 text-[#808080]">
          <FaKey className="h-6 w-6 " />
        </span>
        <input
          className=" placeholder:text-slate-400 focus:border-sky-500 focus:ring-sky-500 block h-14 w-[350px] rounded-xl bg-white py-1 pl-20  pr-3 focus:outline-none focus:ring-1 sm:text-sm md:w-[412px]"
          placeholder="Password"
          type="password"
          name="password"
          id="password-register"
          value={password}
          onChange={onPasswordChange}
          required
        />
      </label>
      <label
        className="relative mt-7 block  drop-shadow-[7px_7px_2px_rgba(0,0,0,0.25)]"
        htmlFor="confirm-password-register"
      >
        <span className="sr-only">Confirm Paswword</span>
        <span className="absolute inset-y-0 left-6 flex items-center pl-2 text-[#808080]">
          <FaKey className="h-6 w-6 " />
        </span>
        <input
          className=" placeholder:text-slate-400 focus:border-sky-500 focus:ring-sky-500 block h-14 w-[350px] rounded-xl bg-white py-1 pl-20  pr-3 focus:outline-none focus:ring-1 sm:text-sm md:w-[412px]"
          placeholder="Confirm Password"
          type="password"
          name="confirm-password"
          id="confirm-password-register"
          value={confirmPassword}
          onChange={onConfirmPasswordChange}
          required
        />
      </label>
      {password !== confirmPassword && (
        <p className="mt-2 ml-2">The password does not match</p>
      )}

      <button
        type="button"
        onClick={() => onRegister()}
        className="mt-14 flex h-16 w-[350px] items-center justify-center rounded-xl bg-darkblue py-6 font-semibold text-white drop-shadow-[7px_7px_2px_rgba(0,0,0,0.25)] hover:bg-primary hover:font-bold md:w-[412px]"
      >
        <span className="pl-4">Sign Up</span>
      </button>
    </form>
  );
}

export default RegisterInput;
