"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import foodMain from "../assets/michele-blackwell-rAyCBQTH7ws-unsplash.jpg";
import Link from "next/link";
import Brand from "@/components/BrandLogo";
import Section from "@/components/Section";
import Recipes from "@/components/Recipes";
import RecipeBlogs from "@/components/RecipeBlogs";
import NewsLetter from "@/components/NewsLetter";
import Sponsors from "@/components/Sponsors";
import Footer from "@/components/Footer";

function Home() {
  const [state, setState] = useState(false);

  return (
    <div className="relative">
      <div
        className="absolute inset-0 blur-xl h-[580px]"
        // style={{
        //   background:
        //     "linear-gradient(143.6deg, rgba(192, 132, 252, 0) 20.79%, rgba(232, 121, 249, 0.26) 40.92%, rgba(204, 171, 238, 0) 70.35%)",
        // }}
      ></div>
      <div className="relative">
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
                    <Link href="" className="block">
                      Home
                    </Link>
                  </li>
                  <li className="text-gray-700 hover:text-gray-900">
                    <Link href="" className="block">
                      Recipes
                    </Link>
                  </li>
                  <li className="text-gray-700 hover:text-gray-900">
                    <Link href="" className="block">
                      About us
                    </Link>
                  </li>
                  <li className="text-gray-700 hover:text-gray-900">
                    <Link href="" className="block">
                      Contact
                    </Link>
                  </li>
                </ul>
                <div className="md:space-x-2">
                  <div className="items-center justify-end mt-6 space-y-6 space-x-4 md:inline-flex md:mt-0">
                    <Link
                      href="/"
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
                      href="/"
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
        <section>
          <div className="max-w-screen-lg mx-auto px-4 py-20 gap-12 text-gray-600 overflow-hidden md:px-4 md:flex">
            <div className="flex-none space-y-5 max-w-xl">
              <h1 className="text-4xl text-gray-800 font-extrabold sm:text-5xl md:pt-10">
                Spoonfuls of Delight: A Feast for Foodies
              </h1>
              <p>
                Sed ut perspiciatis unde omnis iste natus voluptatem accusantium
                doloremque laudantium, totam rem aperiam, eaque ipsa quae. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
                voluptas. Lorem, ipsum dolor sit amet consectetur adipisicing
                elit. Veniam illo officiis odio temporibus vero at eius facilis
                aspernatur ipsa necessitatibus?
              </p>
              <div className="flex items-center gap-x-3 sm:text-sm">
                <Link
                  href=""
                  className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-gray-800 duration-150 hover:bg-gray-700 active:bg-gray-900 rounded-full md:inline-flex"
                >
                  Explore recipes
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
            <div className="flex-1 hidden md:block">
              <Image
                src={foodMain}
                className="md:rounded-tl-[108px] md:rounded-br-[108px] w-auto h-auto"
                alt="Food main"
                loading="lazy"
                // style={{ height: "20rem" }}
              />
            </div>
          </div>
          <Section />
          <Recipes />
          <RecipeBlogs />
          <NewsLetter />
          <Sponsors />
          <Footer />
        </section>
      </div>
    </div>
  );
}

export default Home;
