"use client";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useState } from "react";

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
      <form className="space-y-14">
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
          />
          {previewImgData && (
            <div>
              <Image
                src={previewImgData}
                alt="Preview"
                className="w-auto h-[60vh] mx-auto object-contain mt-10 mb-10"
                width="10"
                height={"10"}
              />
            </div>
          )}
        </div>
      </form>
    </>
  );
}
