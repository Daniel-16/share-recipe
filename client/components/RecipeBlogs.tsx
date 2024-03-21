"use client";
import Image from "next/image";
import recipeImage from "../assets/eaters-collective-i_xVfNtQjwI-unsplash.jpg";
import Link from "next/link";
import { useState } from "react";

type VoteState = {
  [key: number]: number;
};

export default function RecipeBlogs() {
  const [votes, setVotes] = useState<VoteState>({});
  const handleVotes = (cardId: any) => {
    setVotes((prevVotes: any) => ({
      ...prevVotes,
      [cardId]: (prevVotes[cardId] || 0) + 1,
    }));
  };
  return (
    <div className="max-w-screen-lg mx-auto mb-10">
      <Link
        href="/recipes"
        className="flex justify-end items-center pr-6 pb-3 hover:cursor-pointer text-[#B66055] hover:text-[#a7727d] focus:text-[#B66055]"
      >
        <p className="font-extrabold text-lg">View more</p>
      </Link>
      <ul className="grid gap-x-8 gap-y-10 sm:grid-cols-1 md:grid-cols-3 px-5">
        <li className="w-full mx-auto group sm:max-w-sm border rounded-[15px] hover:shadow-md duration-200">
          <Image
            src={recipeImage}
            loading="lazy"
            alt={"Recipes"}
            className="w-full rounded-t-lg"
          />
          <div className="mt-3 space-y-2 px-3 pb-3">
            <span className="block text-indigo-600 text-sm">
              21st March, 2022
            </span>
            <div className="flex items-center justify-between">
              <h3 className="text-lg text-gray-800 duration-150 group-hover:text-indigo-600 font-semibold">
                Italian pasta
              </h3>
              <div
                className="flex border px-2 py-1 rounded-lg items-center space-x-2 hover:shadow-md cursor-pointer"
                onClick={() => handleVotes(1)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="20"
                  height="20"
                  viewBox="0 0 64 64"
                  aria-hidden="true"
                  role="img"
                  className="iconify iconify--emojione-monotone"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <path
                    d="M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2zm5.143 28.305V49H26.857V30.305H16L32 15l16 15.305H37.143z"
                    fill="#000000"
                  ></path>
                </svg>
                <span className="text-gray-800 text-sm">
                  {votes[1] || 0} votes
                </span>
              </div>
            </div>
            <p className="text-gray-600 text-sm duration-150 group-hover:text-gray-800">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates quaerat molestias quod magnam dolor delectus,
            </p>
          </div>
        </li>
        <li className="w-full mx-auto group sm:max-w-sm border rounded-[15px] hover:shadow-md duration-200">
          <Image
            src={recipeImage}
            loading="lazy"
            alt={"Recipes"}
            className="w-full rounded-t-lg"
          />
          <div className="mt-3 space-y-2 px-3 pb-3">
            <span className="block text-indigo-600 text-sm">
              21st March, 2022
            </span>
            <div className="flex items-center justify-between">
              <h3 className="text-lg text-gray-800 duration-150 group-hover:text-indigo-600 font-semibold">
                Italian pasta
              </h3>
              <div
                className="flex border px-2 py-1 rounded-lg items-center space-x-2 hover:shadow-md cursor-pointer"
                onClick={() => handleVotes(2)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="20"
                  height="20"
                  viewBox="0 0 64 64"
                  aria-hidden="true"
                  role="img"
                  className="iconify iconify--emojione-monotone"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <path
                    d="M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2zm5.143 28.305V49H26.857V30.305H16L32 15l16 15.305H37.143z"
                    fill="#000000"
                  ></path>
                </svg>
                <span className="text-gray-800 text-sm">
                  {votes[2] || 0} votes
                </span>
              </div>
            </div>
            <p className="text-gray-600 text-sm duration-150 group-hover:text-gray-800">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates quaerat molestias quod magnam dolor delectus,
            </p>
          </div>
        </li>
        <li className="w-full mx-auto group sm:max-w-sm border rounded-[15px] hover:shadow-md duration-200">
          <Image
            src={recipeImage}
            loading="lazy"
            alt={"Recipes"}
            className="w-full rounded-t-lg"
          />
          <div className="mt-3 space-y-2 px-3 pb-3">
            <span className="block text-indigo-600 text-sm">
              21st March, 2022
            </span>
            <div className="flex items-center justify-between">
              <h3 className="text-lg text-gray-800 duration-150 group-hover:text-indigo-600 font-semibold">
                Italian pasta
              </h3>
              <div className="flex border px-2 py-1 rounded-lg items-center space-x-2 hover:shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="20"
                  height="20"
                  viewBox="0 0 64 64"
                  aria-hidden="true"
                  role="img"
                  className="iconify iconify--emojione-monotone"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <path
                    d="M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2zm5.143 28.305V49H26.857V30.305H16L32 15l16 15.305H37.143z"
                    fill="#000000"
                  ></path>
                </svg>
                <span className="text-gray-800 text-sm">123 votes</span>
              </div>
            </div>
            <p className="text-gray-600 text-sm duration-150 group-hover:text-gray-800">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates quaerat molestias quod magnam dolor delectus,
            </p>
          </div>
        </li>
        <li className="w-full mx-auto group sm:max-w-sm border rounded-[15px] hover:shadow-md duration-200">
          <Image
            src={recipeImage}
            loading="lazy"
            alt={"Recipes"}
            className="w-full rounded-t-lg"
          />
          <div className="mt-3 space-y-2 px-3 pb-3">
            <span className="block text-indigo-600 text-sm">
              21st March, 2022
            </span>
            <div className="flex items-center justify-between">
              <h3 className="text-lg text-gray-800 duration-150 group-hover:text-indigo-600 font-semibold">
                Italian pasta
              </h3>
              <div className="flex border px-2 py-1 rounded-lg items-center space-x-2 hover:shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="20"
                  height="20"
                  viewBox="0 0 64 64"
                  aria-hidden="true"
                  role="img"
                  className="iconify iconify--emojione-monotone"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <path
                    d="M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2zm5.143 28.305V49H26.857V30.305H16L32 15l16 15.305H37.143z"
                    fill="#000000"
                  ></path>
                </svg>
                <span className="text-gray-800 text-sm">123 votes</span>
              </div>
            </div>
            <p className="text-gray-600 text-sm duration-150 group-hover:text-gray-800">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates quaerat molestias quod magnam dolor delectus,
            </p>
          </div>
        </li>
        <li className="w-full mx-auto group sm:max-w-sm border rounded-[15px] hover:shadow-md duration-200">
          <Image
            src={recipeImage}
            loading="lazy"
            alt={"Recipes"}
            className="w-full rounded-t-lg"
          />
          <div className="mt-3 space-y-2 px-3 pb-3">
            <span className="block text-indigo-600 text-sm">
              21st March, 2022
            </span>
            <div className="flex items-center justify-between">
              <h3 className="text-lg text-gray-800 duration-150 group-hover:text-indigo-600 font-semibold">
                Italian pasta
              </h3>
              <div className="flex border px-2 py-1 rounded-lg items-center space-x-2 hover:shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="20"
                  height="20"
                  viewBox="0 0 64 64"
                  aria-hidden="true"
                  role="img"
                  className="iconify iconify--emojione-monotone"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <path
                    d="M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2zm5.143 28.305V49H26.857V30.305H16L32 15l16 15.305H37.143z"
                    fill="#000000"
                  ></path>
                </svg>
                <span className="text-gray-800 text-sm">123 votes</span>
              </div>
            </div>
            <p className="text-gray-600 text-sm duration-150 group-hover:text-gray-800">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates quaerat molestias quod magnam dolor delectus,
            </p>
          </div>
        </li>
        <li className="w-full mx-auto group sm:max-w-sm border rounded-[15px] hover:shadow-md duration-200">
          <Image
            src={recipeImage}
            loading="lazy"
            alt={"Recipes"}
            className="w-full rounded-t-lg"
          />
          <div className="mt-3 space-y-2 px-3 pb-3">
            <span className="block text-indigo-600 text-sm">
              21st March, 2022
            </span>
            <div className="flex items-center justify-between">
              <h3 className="text-lg text-gray-800 duration-150 group-hover:text-indigo-600 font-semibold">
                Italian pasta
              </h3>
              <div className="flex border px-2 py-1 rounded-lg items-center space-x-2 hover:shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="20"
                  height="20"
                  viewBox="0 0 64 64"
                  aria-hidden="true"
                  role="img"
                  className="iconify iconify--emojione-monotone"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <path
                    d="M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2zm5.143 28.305V49H26.857V30.305H16L32 15l16 15.305H37.143z"
                    fill="#000000"
                  ></path>
                </svg>
                <span className="text-gray-800 text-sm">123 votes</span>
              </div>
            </div>
            <p className="text-gray-600 text-sm duration-150 group-hover:text-gray-800">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates quaerat molestias quod magnam dolor delectus,
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
}
