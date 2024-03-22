import { Input } from "@/components/ui/input";

export default function RecipeForm() {
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
          <Input type="file" id="picture" accept=".jpg, .webp, .jpeg, .png" />
        </div>
      </form>
    </>
  );
}
