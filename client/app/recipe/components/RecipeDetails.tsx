import Image from "next/image";
import foodImage from "../../../assets/michele-blackwell-rAyCBQTH7ws-unsplash.jpg";

export default function RecipeDetails() {
  return (
    <div>
      <div className="border px-10 mt-5 mb-5"></div>
      <Image
        src={foodImage}
        alt="Food"
        className="w-auto h-[60vh] mx-auto object-contain "
      />
      <div className="py-5 inline-flex items-center justify-center space-x-2">
        <p className="text-gray-600 text-2xl font-extrabold">Cooking time:</p>
        <span className="text-gray-800 text-2xl font-extrabold">10 mins</span>
      </div>
    </div>
  );
}
