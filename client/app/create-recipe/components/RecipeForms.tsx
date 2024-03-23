"use client";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useState } from "react";
import AddIngredients from "./AddIngredients";
import AddInstructions from "./AddInstructions";
import CookingTime from "./CookingTime";

export default function RecipeForm() {
  const [previewImgData, setPreviewImgData] = useState<any>(null);

  const handleImageChange = (e: any) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setPreviewImgData(reader.result);
    };
    reader.readAsDataURL(file);
    // console.log(previewImgData);
  };
  return (
    <>
      <form className="space-y-5 md:space-y-8 mb-10">
        <div>
          <label className="text-3xl text-gray-800 font-medium">
            Recipe Title:
          </label>
          <input
            type="text"
            required
            className="w-full mt-2 px-3 py-3 text-gray-800 outline-none border focus:border-[#B66070] shadow-md rounded-lg duration-200"
            placeholder="Chocolate Chip Cookies"
          />
        </div>
        <div>
          <label className="text-3xl text-gray-800 font-medium">
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
          <label className="text-3xl text-gray-800 font-medium">
            Description:
          </label>
          <textarea
            className="w-full mt-2 px-3 py-3 text-gray-800 outline-none border focus:border-[#B66070] shadow-md rounded-lg duration-200"
            required
            placeholder="Introduce your recipe"
          ></textarea>
        </div>
        <AddIngredients />
        <div>
          <label className="text-3xl text-gray-800 font-medium">
            Instructions:
          </label>
          <AddInstructions />
        </div>
        <div>
          <label className="text-3xl text-gray-800 font-medium">
            Cooking time:
          </label>
          <br />
          <CookingTime />
        </div>
      </form>
    </>
  );
}
