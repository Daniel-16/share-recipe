import Image from "next/image";
import recipeImage from "../assets/eaters-collective-i_xVfNtQjwI-unsplash.jpg";
import Link from "next/link";

export default function RecipeBlogs() {
  return (
    <div className="max-w-screen-lg mx-auto mb-10">
      <ul className="grid gap-x-8 gap-y-10 sm:grid-cols-1 md:grid-cols-3 px-5">
        <li className="w-full mx-auto group sm:max-w-sm border rounded-[15px] hover:shadow-md duration-200">
          <Link href="">
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
              <h3 className="text-lg text-gray-800 duration-150 group-hover:text-indigo-600 font-semibold">
                Italian pasta
              </h3>
              <p className="text-gray-600 text-sm duration-150 group-hover:text-gray-800">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates quaerat molestias quod magnam dolor delectus,
              </p>
            </div>
          </Link>
        </li>
        <li className="w-full mx-auto group sm:max-w-sm border rounded-[15px] hover:shadow-md duration-200">
          <Link href="">
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
              <h3 className="text-lg text-gray-800 duration-150 group-hover:text-indigo-600 font-semibold">
                Italian pasta
              </h3>
              <p className="text-gray-600 text-sm duration-150 group-hover:text-gray-800">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates quaerat molestias quod magnam dolor delectus,
              </p>
            </div>
          </Link>
        </li>
        <li className="w-full mx-auto group sm:max-w-sm border rounded-[15px] hover:shadow-md duration-200">
          <Link href="">
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
              <h3 className="text-lg text-gray-800 duration-150 group-hover:text-indigo-600 font-semibold">
                Italian pasta
              </h3>
              <p className="text-gray-600 text-sm duration-150 group-hover:text-gray-800">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates quaerat molestias quod magnam dolor delectus,
              </p>
            </div>
          </Link>
        </li>
        <li className="w-full mx-auto group sm:max-w-sm border rounded-[15px] hover:shadow-md duration-200">
          <Link href="">
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
              <h3 className="text-lg text-gray-800 duration-150 group-hover:text-indigo-600 font-semibold">
                Italian pasta
              </h3>
              <p className="text-gray-600 text-sm duration-150 group-hover:text-gray-800">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates quaerat molestias quod magnam dolor delectus,
              </p>
            </div>
          </Link>
        </li>
        <li className="w-full mx-auto group sm:max-w-sm border rounded-[15px] hover:shadow-md duration-200">
          <Link href="">
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
              <h3 className="text-lg text-gray-800 duration-150 group-hover:text-indigo-600 font-semibold">
                Italian pasta
              </h3>
              <p className="text-gray-600 text-sm duration-150 group-hover:text-gray-800">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates quaerat molestias quod magnam dolor delectus,
              </p>
            </div>
          </Link>
        </li>
        <li className="w-full mx-auto group sm:max-w-sm border rounded-[15px] hover:shadow-md duration-200">
          <Link href="">
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
              <h3 className="text-lg text-gray-800 duration-150 group-hover:text-indigo-600 font-semibold">
                Italian pasta
              </h3>
              <p className="text-gray-600 text-sm duration-150 group-hover:text-gray-800">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates quaerat molestias quod magnam dolor delectus,
              </p>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
}
