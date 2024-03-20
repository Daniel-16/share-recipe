import Image from "next/image";
import foodImage from "../../../assets/michele-blackwell-rAyCBQTH7ws-unsplash.jpg";
import Ingredients from "./Ingredients";

export default function RecipeDetails() {
  return (
    <div>
      <div className="border px-10 mt-5 mb-5"></div>
      <Image
        src={foodImage}
        alt="Food"
        className="w-auto h-[60vh] mx-auto object-contain "
        priority
      />
      <div className="py-5 inline-flex items-center justify-center space-x-2">
        <p className="text-gray-800 text-2xl font-extrabold">Cooking time:</p>
        <span className="text-gray-600 text-2xl font-extrabold">10 mins</span>
      </div>
      <p className="text-gray-600">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam
        similique sequi doloribus, vero quos ratione ex asperiores nostrum.
        Voluptates, sit.
      </p>
      <div className="pt-10">
        <h1 className="text-4xl font-extrabold text-gray-800">Ingredients:</h1>
        <Ingredients />
      </div>
    </div>
  );
}
