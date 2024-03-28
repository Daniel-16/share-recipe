"use client";
import Image from "next/image";
import recipeImage from "../../assets/michele-blackwell-rAyCBQTH7ws-unsplash.jpg";
import Navbar from "@/components/Navbar";
import Axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await Axios.get("http://localhost:7000/api/recipes");
        console.log(response.data.recipes);
        setRecipes(response.data.recipes);
      } catch (error) {
        console.error(error);
      }
    };
    fetchRecipes();
  }, []);

  const text =
    "Lorem, ipsum dolor sitsdfsdfasdfsdf consectetur adipisicing elit.Voluptates quaerat molestias quod magnam dolor delectus,";
  let numCols = 3;
  if (recipes.length === 2) {
    numCols = 2;
  }
  return (
    <>
      <Navbar />
      <div className="max-w-screen-lg mx-auto px-5">
        <h1 className="text-3xl md:text-4xl text-gray-800 font-extrabold py-5">
          Explore Recipes
        </h1>
        <ul
          className={`grid gap-x-8 md:gap-x-2 lg:gap-x-8 gap-y-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-${numCols} mb-5`}
        >
          {recipes.map((recipe: any) => (
            <li
              key={recipe._id}
              className="w-full mx-auto group sm:max-w-sm border border-[#dcc5c9] rounded-[15px] hover:shadow-md duration-200"
            >
              <Image
                src={recipe.imageUrl}
                priority
                alt={"Recipes"}
                className="w-full h-[40vh] rounded-t-lg object-cover"
                width={10}
                height={10}
              />
              <div className="mt-3 space-y-2 px-3 pb-3">
                <span className="block text-[#7e525f] text-sm">
                  21st March, 2022
                </span>
                <div className="flex items-center justify-between">
                  <h3 className="text-lg text-gray-800duration-150 group-hover:text-[#7e525f] font-semibold">
                    {recipe.title}
                  </h3>
                  <div
                    className="flex border border-[#dcc5c9] px-2 py-1 rounded-lg items-center space-x-2 hover:shadow-md cursor-pointer"
                    // onClick={() => handleVotes(1)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      viewBox="0 0 64 64"
                      aria-hidden="true"
                      role="img"
                      className="iconify iconify--emojione-monotone w-5"
                      preserveAspectRatio="xMidYMid meet"
                    >
                      <path
                        d="M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2zm5.143 28.305V49H26.857V30.305H16L32 15l16 15.305H37.143z"
                        fill="#7e525f"
                      ></path>
                    </svg>
                    <span className="text-gray-800 text-sm">
                      {/* {votes[1] || 0} votes */}
                      110 votes
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm duration-150 group-hover:text-gray-800">
                  {recipe.description && recipe.description.length > 113
                    ? `${recipe.description.slice(0, 113)}...`
                    : recipe.description}
                </p>
                <div className="inline-flex items-center space-x-1">
                  <svg
                    fill="#7e525f"
                    className="w-5 flex-shrink-0"
                    viewBox="0 0 512 512"
                    id="_x30_1"
                    version="1.1"
                    xmlSpace="preserve"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <path d="M256,0C114.615,0,0,114.615,0,256s114.615,256,256,256s256-114.615,256-256S397.385,0,256,0z M256,90  c37.02,0,67.031,35.468,67.031,79.219S293.02,248.438,256,248.438s-67.031-35.468-67.031-79.219S218.98,90,256,90z M369.46,402  H142.54c-11.378,0-20.602-9.224-20.602-20.602C121.938,328.159,181.959,285,256,285s134.062,43.159,134.062,96.398  C390.062,392.776,380.839,402,369.46,402z" />
                  </svg>
                  <p className="font-semibold text-md">{recipe.recipeOwner}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
