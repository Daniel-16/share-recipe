"use client";
import Link from "next/link";
import Brand from "./BrandLogo";
import { useState, useContext, MutableRefObject, RefObject } from "react";
import { SectionContext } from "@/context/SectionContext";

export default function Navbar() {
  const [state, setState] = useState(false);
  const { section1, section2, section3 } = useContext(SectionContext);

  const scrollToSection = (ref: RefObject<HTMLDivElement>) => {
    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop,
        left: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <header>
      <div className={`md:hidden ${state ? "mx-2 pb-5" : "hidden"}`}>
        <Brand state={state} setState={setState} />
      </div>
      <nav
        className={`pb-5 md:text-sm ${
          state
            ? "absolute top-0 inset-x-0 bg-white shadow-lg rounded-xl border mx-2 mt-2 md:shadow-none md:border-none md:mx-0 md:mt-0 md:relative md:bg-transparent"
            : ""
        }`}
      >
        <div className="gap-x-14 items-center max-w-screen-2xl mx-10 px-4 md:flex md:px-8">
          <Brand state={state} setState={setState} />
          <div
            className={`flex-1 items-center mt-8 md:mt-0 md:flex ${
              state ? "block" : "hidden"
            } `}
          >
            <ul className="flex-1 justify-center items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
              <li className="text-gray-700 hover:text-gray-900">
                <Link
                  href="/"
                  className="block"
                  onClick={() => setState(!state)}
                >
                  Home
                </Link>
              </li>
              <li className="text-gray-700 hover:text-gray-900">
                <div
                  className="block hover:cursor-pointer"
                  onClick={() => scrollToSection(section2)}
                >
                  Recipes
                </div>
              </li>
              <li className="text-gray-700 hover:text-gray-900">
                <Link href="" className="block">
                  Add recipes
                </Link>
              </li>
              <li className="text-gray-700 hover:text-gray-900">
                <div
                  // href="#"
                  className="block hover:cursor-pointer"
                  onClick={() => {
                    scrollToSection(section1);
                  }}
                >
                  About
                </div>
              </li>
            </ul>
            <div className="md:space-x-2">
              <div className="items-center justify-end mt-6 space-y-6 space-x-4 md:inline-flex md:mt-0">
                <Link
                  href="/login"
                  className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-full md:inline-flex"
                >
                  Log in
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
              <div className="items-center justify-end mt-6 space-y-6 space-x-4 md:inline-flex md:mt-0">
                <Link
                  href="/signup"
                  className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-full md:inline-flex"
                >
                  Sign up
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
