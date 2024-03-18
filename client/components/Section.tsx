import Image from "next/image";
import snapFood from "../assets/ambitious-studio-rick-barrett-N2i51XCS-3g-unsplash.jpg";
import Link from "next/link";

export default function Section() {
  return (
    <div className="max-w-screen-lg mx-auto px-4 md:flex py-24 md:space-x-20 md:justify-center md:items-center md:px-4 overflow-hidden">
      <div className="max-w-sm p-5 md:p-0">
        <Image
          src={snapFood}
          alt="Snap food"
          className="rounded-tr-[108px] rounded-bl-[108px] md:w-auto md:h-1/2"
          loading="lazy"
        />
      </div>
      <div className="flex-none space-y-5 max-w-xl">
        <h1 className="text-4xl text-gray-800 font-extrabold sm:text-5xl md:pt-10 pt-5">
          Share your Recipes
        </h1>
        <p className="text-gray-800">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ea
          nobis deserunt doloremque libero, eos corrupti modi, similique atque
          nulla itaque soluta repellendus accusamus! Omnis eos beatae enim rerum
          delectus.
        </p>
        <div className="flex items-center gap-x-3 sm:text-sm">
          <Link
            href=""
            className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-gray-800 duration-150 hover:bg-gray-700 active:bg-gray-900 rounded-full md:inline-flex"
          >
            Create a recipe
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
  );
}
