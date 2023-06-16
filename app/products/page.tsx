import Link from "next/link";
import RecipeCard, {RecipeData} from "@/app/Components/RecipeCard"

export default function OurProducts() {
  const mainFeature = RecipeData.filter(recipe => recipe.isMainFeature)
  return (
    <>
      <div className=" font-sans">
        <div className="pt-[148px]"></div>
        <div className="flex flex-col justify-center bg-white align-middle text-center text-home-blue">
          <h1 className="text-5xl font-light mt-[20px]">Our Products</h1>
          <h4 className="text-xl font-light mt-[20px]">
            Pristine by Nature. Clean by Routine. Consistent by Design.
          </h4>
          <div className="flex pt-10">
            <div className="flex flex-col pl-40 ">
              <img
                src="products/butter.png"
                alt=""
                className=" w-4/6 h-4/6  object-cover  overflow-hidden self-center"
              />
              <Link
                href="products/butter"
                className="h-auto max-w-full hover:underline"
              >
                Butter
              </Link>
            </div>
            <div className="flex flex-col pr-40">
              <img
                src="products/powder.png"
                alt=""
                className=" w-4/6 h-4/6  object-cover  overflow-hidden self-center"
              />
              <Link
                href="products/powder"
                className="h-auto hover:underline max-w-full"
              >
                Powder
              </Link>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2">
          <div className="w-full">
            <img
              src="products/caramel.png"
              alt=""
              className="object-cover w-full h-full"
            />
          </div>
          <div className="w-full bg-home-orange p-10">
            <img
              src="products/big-butter.png"
              alt=""
              className="align-middle mt-[20%]"
            />
            <div className="flex justify-center mt-10">
              <Link href="products/butter">
                <label className="text-white text-2xl font-light justify-center pr-3 hover:underline cursor-pointer">
                  Butter
                </label>
                <button className="text-white text-2xl font-bold bg-home-blue rounded pr-3 pl-3 align-middle pb-1 hover:bg-blue-900 active:bg-white active:text-home-blue">
                  &gt;
                </button>
              </Link>
            </div>
          </div>

          <div className="w-full bg-home-productBlue p-10">
            <img
              src="products/big-powder.png"
              alt=""
              className="align-middle"
            />
            <div className="flex justify-center mt-10">
              <Link href="products/powder">
                <label className="text-white text-2xl font-light justify-center pr-3 hover:underline cursor-pointer">
                  Powder
                </label>
                <button className="text-white text-2xl font-bold bg-home-blue rounded pr-3 pl-3 align-middle pb-1 hover:bg-blue-900 active:bg-white active:text-home-blue">
                  &gt;
                </button>
              </Link>
            </div>
          </div>
          <div className="w-full flex justify-center items-center">
            <img
              src="products/cake.png"
              alt=""
              className="w-full object-cover h-full"
            />
          </div>
        </div>
        <div className="bg-home-productYellow ">
          <div className="flex justify-center p-4 pt-8">
            <label className="pr-2 text-home-blue text-xl ">
              Try these recipes
            </label>
            <button className="text-white text-2xl font-bold bg-home-blue rounded pr-3 pl-3 align-middle pb-1 cursor-default">
              &gt;
            </button>
          </div>

          <div className="grid grid-cols-3 pb-10">
        {mainFeature.map((recipe, index) => (
          <RecipeCard key={index} recipe={recipe} />
        ))}
      </div>
        </div>
      </div>
    </>
  );
}
