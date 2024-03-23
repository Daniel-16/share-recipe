export default function CookingTime() {
  return (
    <>
      <div className="inline-flex items-center gap-4 w-full">
        <input
          type="number"
          required
          className="w-full mt-2 px-3 py-3 text-gray-800 outline-none border focus:border-[#B66070] shadow-md rounded-lg duration-200"
          placeholder="Hours"
        />
        <input
          type="number"
          required
          className="w-full mt-2 px-3 py-3 text-gray-800 outline-none border focus:border-[#B66070] shadow-md rounded-lg duration-200"
          placeholder="Minutes"
        />
      </div>
      <p className="text-sm text-gray-500 pt-2">
        How long does it take to cook this recipe
      </p>
    </>
  );
}
