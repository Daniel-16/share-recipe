"use client";
import { SectionContext } from "@/context/SectionContext";
import { useContext } from "react";

export default function NewsLetter() {
  const { section3 } = useContext(SectionContext);
  return (
    <div
      ref={section3}
      className="bg-[#FFF0ED] w-full py-20 mt-10 mx-auto text-center px-4"
    >
      <div className="">
        <h1 className="text-4xl text-gray-800 font-extrabold">
          Let&apos;s stay in touch
        </h1>
        <p className="text-3xl text-gray-600 pt-5 font-medium">
          You can join our newsletter, so that we reach out to you with
          <br /> our news and offers.
        </p>
      </div>
      <div className="md:flex md:items-center md:gap-4 px-10 mt-5 md:justify-center grid space-y-4 md:space-y-0">
        <input
          type="email"
          placeholder="Email address"
          className="py-2 px-4 rounded-lg md:w-1/2 border outline-none text-gray-800 shadow-sm"
        />
        <button
          type="submit"
          className="bg-[#B66055] text-white py-2 px-4 rounded-lg shadow-md"
        >
          Subscribe
        </button>
      </div>
    </div>
  );
}
