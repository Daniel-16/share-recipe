"use client";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useState } from "react";

export default function RecipeForm() {
  const [previewImgData, setPreviewImgData] = useState<any>(null);
  const [ingredients, setIngredients] = useState([""]);
  const handleImageChange = (e: any) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setPreviewImgData(reader.result);
    };
    reader.readAsDataURL(file);
    // console.log(previewImgData);
  };
  const handleAddIngredient = () => {
    setIngredients([...ingredients, ""]);
  };

  const handleIngredienChange = (index: any, value: any) => {
    const newIngredients = [...ingredients];
    newIngredients[index] = value;
    setIngredients(newIngredients);
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
        <div>
          <label className="text-3xl text-gray-800 font-medium">
            Ingredients:
          </label>
          {ingredients.map((ingredient, index) => (
            <div key={index}>
              <input
                type="text"
                className="w-full mt-2 px-3 py-3 text-gray-800 outline-none border focus:border-[#b66070] shadow-md rounded-lg duration-200"
                placeholder="Add ingredients"
                value={ingredient}
                onChange={(e) => handleIngredienChange(index, e.target.value)}
                required
              />
            </div>
          ))}
          <button
            className="inline-flex items-center text-[#b66055] mt-2"
            onClick={handleAddIngredient}
            type="button"
          >
            <svg
              className="w-6"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title />

              <g id="Complete">
                <g data-name="add" id="add-2">
                  <g>
                    <line
                      fill="none"
                      stroke="#b66055"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      x1="12"
                      x2="12"
                      y1="19"
                      y2="5"
                    />

                    <line
                      fill="none"
                      stroke="#b66055"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      x1="5"
                      x2="19"
                      y1="12"
                      y2="12"
                    />
                  </g>
                </g>
              </g>
            </svg>
            Add ingredient
          </button>
        </div>
      </form>
    </>
  );
}
