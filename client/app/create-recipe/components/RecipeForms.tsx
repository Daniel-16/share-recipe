"use client";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { FormEvent, useState } from "react";
import AddIngredients from "./AddIngredients";
import AddInstructions from "./AddInstructions";
import CookingTime from "./CookingTime";
import Axios from "axios";
import Cookies from "js-cookie";

export default function RecipeForm() {
  const [recipeTitle, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [ingredients, setIngredients] = useState([""]);
  const [instructions, setInstructions] = useState([""]);
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [previewImgData, setPreviewImgData] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewImgData(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const createRecipe = await Axios.post(
        "http://localhost:7000/api/createRecipe",
        {
          title: recipeTitle,
          imageUrl: previewImgData,
          timeFrame: { hours, minutes },
          ingredients,
          instructions,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${Cookies.get("currentUser")}`,
          },
        }
      );
      console.log(createRecipe);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form className="space-y-5 md:space-y-8 mb-10" onSubmit={handleSubmit}>
        <div>
          <label className="text-xl md:text-3xl text-gray-800 font-medium">
            Recipe Title:
          </label>
          <input
            type="text"
            required
            className="w-full mt-2 px-3 py-3 text-gray-800 outline-none border focus:border-[#7e525f] shadow-md rounded-lg duration-200"
            placeholder="Chocolate Chip Cookies"
            value={recipeTitle}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label className="text-xl md:text-3xl text-gray-800 font-medium">
            Recipe Image:
          </label>
          <Input
            type="file"
            id="picture"
            accept=".jpg, .webp, .jpeg, .png"
            onChange={handleImageChange}
            required
          />
          {previewImgData && (
            <div>
              <Image
                src={previewImgData}
                alt="Preview"
                className="w-auto h-[60vh] mx-auto object-contain mt-5"
                width="10"
                height={"10"}
              />
            </div>
          )}
        </div>
        <div>
          <label className="text-xl md:text-3xl text-gray-800 font-medium">
            Description:
          </label>
          <textarea
            className="w-full mt-2 px-3 py-3 text-gray-800 outline-none border focus:border-[#7e525f] shadow-md rounded-lg duration-200"
            required
            placeholder="Introduce your recipe"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <AddIngredients
          ingredients={ingredients}
          setIngredients={setIngredients}
        />
        <div>
          <label className="text-xl md:text-3xl text-gray-800 font-medium">
            Instructions:
          </label>
          <AddInstructions
            instructions={instructions}
            setInstructions={setInstructions}
          />
        </div>
        <div>
          <label className="text-xl md:text-3xl text-gray-800 font-medium">
            Cooking time:
          </label>
          <br />
          <CookingTime
            hours={hours}
            minutes={minutes}
            setHours={setHours}
            setMinutes={setMinutes}
          />
        </div>
        <button
          type="submit"
          className="bg-[#7e525f] text-white py-2 px-4 rounded-lg shadow-md hover:bg-[#986673] w-full active:bg-[##96493f]"
        >
          Create recipe
        </button>
      </form>
    </>
  );
}
