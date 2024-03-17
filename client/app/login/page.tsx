"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Login() {
  const [state, setState] = useState(false);
  return (
    <div className="h-screen">
      <Navbar />
      <main className="w-full flex flex-col items-center justify-center px-4">
        <div className="max-w-sm w-full text-gray-600">
          <div className="text-center">
            <div className="mt-5 space-y-2">
              <h3 className="text-gray-800 text-4xl font-extrabold sm:text-3xl">
                Log in to your account
              </h3>
              <p className="">
                Don&apos;t have an account?{" "}
                <Link
                  href="/"
                  className="font-medium text-[#B66055] hover:text-[#a7727d]"
                >
                  Sign up
                </Link>
              </p>
            </div>
          </div>
          <form onSubmit={(e) => e.preventDefault()} className="mt-8 space-y-5">
            <div>
              <label className="font-medium">Email</label>
              <input
                type="email"
                required
                className="w-full mt-2 px-3 py-2 text-gray-800 bg-transparent outline-none border focus:border-[#B66070] shadow-md rounded-lg duration-200"
                placeholder="johndoe@mail.com"
              />
            </div>
            <div>
              <label className="font-medium">Password</label>
              <input
                type="password"
                required
                className="w-full mt-2 px-3 py-2 text-gray-800 bg-transparent outline-none border focus:border-[#B66070] shadow-md rounded-lg duration-200"
                placeholder="Enter a secure password"
              />
            </div>
            <button className="w-full px-4 py-2 text-white font-medium bg-[#a7727d] hover:bg-[#B66070] active:bg-[#a7727d] rounded-lg duration-150">
              Sign in
            </button>
            <div className="text-center">
              <a href="javascript:void(0)" className="hover:text-[#B66070]">
                Forgot password?
              </a>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
