"use client";

import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function Signup() {
  return (
    <div className="h-screen">
      <Navbar />
      <main className="w-full flex flex-col items-center justify-center sm:px-4">
        <div className="md:w-full space-y-6 text-gray-600 sm:max-w-md">
          <div className="text-center">
            <div className="mt-5 space-y-2">
              <h3 className="text-gray-800 text-4xl font-bold sm:text-3xl">
                Create an account
              </h3>
              <p className="">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="font-medium text-[#B66055] hover:text-[#a7727d] hover:underline"
                >
                  Log in
                </Link>
              </p>
            </div>
          </div>
          <div className="bg-white shadow p-4 py-6 sm:p-6 rounded-[15px] md:rounded-lg">
            <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
              <div>
                <label className="font-medium">Username</label>
                <input
                  type="text"
                  required
                  className="w-full mt-2 px-3 py-2 text-gray-800 bg-transparent outline-none border focus:border-[#B66070] shadow-md rounded-lg duration-200"
                  placeholder="johndoe"
                />
              </div>
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
                Create account
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
