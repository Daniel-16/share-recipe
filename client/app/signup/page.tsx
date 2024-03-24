"use client";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { useState, useContext } from "react";
import Axios from "axios";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/context/AuthContext";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();
  const { setIsAuthenticated } = useContext(AuthContext);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await Axios.post(
        "http://localhost:7000/api/signup",
        {
          username,
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.token) {
        document.cookie = `currentUser=${response.data.token}; path=/; secure-${
          process.env.NODE_ENV === "production"
        }; sameSite=strict`;
        router.push("/");
        setIsAuthenticated(true);
        console.log(response.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

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
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="font-medium">Username</label>
                <input
                  type="text"
                  required
                  className="w-full mt-2 px-3 py-2 text-gray-800 bg-transparent outline-none border focus:border-[#B66070] shadow-md rounded-lg duration-200"
                  placeholder="johndoe"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div>
                <label className="font-medium">Email</label>
                <input
                  type="email"
                  required
                  className="w-full mt-2 px-3 py-2 text-gray-800 bg-transparent outline-none border focus:border-[#B66070] shadow-md rounded-lg duration-200"
                  placeholder="johndoe@mail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label className="font-medium">Password</label>
                <input
                  type="password"
                  required
                  className="w-full mt-2 px-3 py-2 text-gray-800 bg-transparent outline-none border focus:border-[#B66070] shadow-md rounded-lg duration-200"
                  placeholder="Enter a secure password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 text-white font-medium bg-[#a7727d] hover:bg-[#B66070] active:bg-[#a7727d] rounded-lg duration-150"
              >
                Create account
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
