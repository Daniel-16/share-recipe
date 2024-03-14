import Image from "next/image";
import recipeImage from "../assets/eaters-collective-i_xVfNtQjwI-unsplash.jpg";

export default function RecipeBlogs() {
  return (
    <div className="max-w-screen-lg mx-auto mb-10">
      <ul className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        <li className="w-full mx-auto group sm:max-w-sm">
          <a href="">
            <Image
              src={recipeImage}
              loading="lazy"
              alt={"Recipes"}
              className="w-full rounded-lg"
            />
            <div className="mt-3 space-y-2">
              <span className="block text-indigo-600 text-sm">
                21st March, 2022
              </span>
              <h3 className="text-lg text-gray-800 duration-150 group-hover:text-indigo-600 font-semibold">
                Italian pasta
              </h3>
              <p className="text-gray-600 text-sm duration-150 group-hover:text-gray-800">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates quaerat molestias quod magnam dolor delectus,
              </p>
            </div>
          </a>
        </li>
        <li className="w-full mx-auto group sm:max-w-sm">
          <a href="">
            <Image
              src={recipeImage}
              loading="lazy"
              alt={"Recipes"}
              className="w-full rounded-lg"
            />
            <div className="mt-3 space-y-2">
              <span className="block text-indigo-600 text-sm">
                21st March, 2022
              </span>
              <h3 className="text-lg text-gray-800 duration-150 group-hover:text-indigo-600 font-semibold">
                Italian pasta
              </h3>
              <p className="text-gray-600 text-sm duration-150 group-hover:text-gray-800">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates quaerat molestias quod magnam dolor delectus,
              </p>
            </div>
          </a>
        </li>
        <li className="w-full mx-auto group sm:max-w-sm">
          <a href="">
            <Image
              src={recipeImage}
              loading="lazy"
              alt={"Recipes"}
              className="w-full rounded-lg"
            />
            <div className="mt-3 space-y-2">
              <span className="block text-indigo-600 text-sm">
                21st March, 2022
              </span>
              <h3 className="text-lg text-gray-800 duration-150 group-hover:text-indigo-600 font-semibold">
                Italian pasta
              </h3>
              <p className="text-gray-600 text-sm duration-150 group-hover:text-gray-800">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates quaerat molestias quod magnam dolor delectus,
              </p>
            </div>
          </a>
        </li>
        <li className="w-full mx-auto group sm:max-w-sm">
          <a href="">
            <Image
              src={recipeImage}
              loading="lazy"
              alt={"Recipes"}
              className="w-full rounded-lg"
            />
            <div className="mt-3 space-y-2">
              <span className="block text-indigo-600 text-sm">
                21st March, 2022
              </span>
              <h3 className="text-lg text-gray-800 duration-150 group-hover:text-indigo-600 font-semibold">
                Italian pasta
              </h3>
              <p className="text-gray-600 text-sm duration-150 group-hover:text-gray-800">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates quaerat molestias quod magnam dolor delectus,
              </p>
            </div>
          </a>
        </li>
        <li className="w-full mx-auto group sm:max-w-sm">
          <a href="">
            <Image
              src={recipeImage}
              loading="lazy"
              alt={"Recipes"}
              className="w-full rounded-lg"
            />
            <div className="mt-3 space-y-2">
              <span className="block text-indigo-600 text-sm">
                21st March, 2022
              </span>
              <h3 className="text-lg text-gray-800 duration-150 group-hover:text-indigo-600 font-semibold">
                Italian pasta
              </h3>
              <p className="text-gray-600 text-sm duration-150 group-hover:text-gray-800">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates quaerat molestias quod magnam dolor delectus,
              </p>
            </div>
          </a>
        </li>
        <li className="w-full mx-auto group sm:max-w-sm">
          <a href="">
            <Image
              src={recipeImage}
              loading="lazy"
              alt={"Recipes"}
              className="w-full rounded-lg"
            />
            <div className="mt-3 space-y-2">
              <span className="block text-indigo-600 text-sm">
                21st March, 2022
              </span>
              <h3 className="text-lg text-gray-800 duration-150 group-hover:text-indigo-600 font-semibold">
                Italian pasta
              </h3>
              <p className="text-gray-600 text-sm duration-150 group-hover:text-gray-800">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates quaerat molestias quod magnam dolor delectus,
              </p>
            </div>
          </a>
        </li>
      </ul>
    </div>
  );
}
