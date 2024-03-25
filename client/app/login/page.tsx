"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import Axios from "axios";
import { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/context/AuthContext";
import { UserNameContext } from "@/context/UsernameContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { setIsAuthenticated } = useContext(AuthContext);
  const { setUsername } = useContext(UserNameContext);

  const handleEmail = (e: any) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e: any) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await Axios.post(
        "http://localhost:7000/api/login",
        {
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
        const { username } = response.data.user;
        setUsername(username);
        setIsAuthenticated(true);
      }
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="h-screen">
      <Navbar />
      <main className="w-full flex flex-col items-center justify-center sm:px-4">
        <div className="md:w-full sm:max-w-md space-y-6 text-gray-600">
          <div className="text-center">
            <div className="mt-5 space-y-2">
              <h3 className="text-gray-800 text-4xl font-extrabold sm:text-3xl">
                Log in to your account
              </h3>
              <p className="">
                Don&apos;t have an account?{" "}
                <Link
                  href="/signup"
                  className="font-medium text-[#B66055] hover:text-[#a7727d] hover:underline"
                >
                  Sign up
                </Link>
              </p>
            </div>
          </div>
          <div className="bg-white shadow p-4 py-6 sm:p-6 rounded-[15px] md:rounded-lg">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="font-medium">Email</label>
                <input
                  type="email"
                  required
                  className="w-full mt-2 px-3 py-2 text-gray-800 bg-transparent outline-none border focus:border-[#B66070] shadow-md rounded-lg duration-200"
                  placeholder="johndoe@mail.com"
                  value={email}
                  onChange={handleEmail}
                />
              </div>
              <div>
                <label className="font-medium">Password</label>
                <input
                  type="password"
                  required
                  className="w-full mt-2 px-3 py-2 text-gray-800 bg-transparent outline-none border focus:border-[#B66070] shadow-md rounded-lg duration-200"
                  placeholder="Enter a secure password"
                  onChange={handlePassword}
                  value={password}
                />
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 text-white font-medium bg-[#a7727d] hover:bg-[#B66070] active:bg-[#a7727d] rounded-lg duration-150"
              >
                Sign in
              </button>
              <div className="text-center">
                <Link href="" className="hover:text-[#B66070]">
                  Forgot password?
                </Link>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
