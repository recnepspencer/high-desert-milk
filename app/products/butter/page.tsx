import RecipeCard, { RecipeData } from "@/app/Components/RecipeCard";
import Image from "next/image";
import Link from "next/link";

export default function ProductButter() {
  const featuredButter = RecipeData.filter(recipe => recipe.isButterFeature)
  return (
    <>
      <div className=" font-sans w-[100vw] lg:pl-[5vw] lg:pr-[5vw]">
        <div className="pt-[148px]"></div>
        <div className="flex flex-col justify-center bg-white align-middle text-center text-home-blue">
            <div className="flex justify-center align-middle m-10">
                                <h4>Butter</h4>
                <img src="../down-arrow.svg" alt=""  className="bg-home-blue rounded h-5 ml-2"/>

            </div>
            <div className="grid grid-cols-2 mt-16 mb-10 items-center gap-3">
                <div className="flex flex-col justify-center align-middle">
                    <h1 className="text-[10vw] mt-auto">Butter</h1>
                    <h4 className="text-[3vw] font-light mt-10 mb-auto">Always Fresh. Never Frozen.</h4>
                </div>
                <div className="flex justify-center align-middle">
                    <Image loading="lazy" width={4904} height={2880} src="/products/big-butter.png" alt="Butter" className="w-90 object-contain"/>
                </div>
            </div>
        </div>
        <div className="grid grid-cols-2">
        <div className="w-full bg-home-productBlue p-10">
            <Image loading="lazy" width={4904} height={2880} src="/products/big-butter.png" alt="Butter"
              className="align-middle mt-[20%]"
            />
            <div className="flex justify-center mt-10">
              <Link href="/products/butter/salted" className="text-white text-2xl font-light justify-center pr-3">
                Salted
              </Link>
              <button className="text-white text-2xl font-bold bg-home-blue rounded pr-3 pl-3 align-middle pb-1 hover:bg-blue-900 active:bg-white active:text-home-blue">
                <a href="/products/butter/salted">&gt;</a>
              </button>
            </div>
          </div>
          <div className="w-full bg-home-orange p-10">
            <Image loading="lazy"
            width={4628} height={2496}
              src="/products/unsalted-butter.png"
              alt="Unstalted butter"
              className="align-middle mt-[20%]"
            />
            <div className="flex justify-center mt-10">
              <Link href="products/butter/unsalted" className="text-white text-2xl font-light justify-center pr-3">
                Unsalted
              </Link>
              <button className="text-white text-2xl font-bold bg-home-blue rounded pr-3 pl-3 align-middle pb-1 hover:bg-blue-900 active:bg-white active:text-home-blue">
              <a href="/products/butter/unsalted">&gt;</a>
              </button>
            </div>
          </div>
        </div>
        <div className="bg-home-productYellow ">
          <div className="flex justify-center p-4 pt-8">
            <label className="pr-2 text-home-blue text-xl ">
              Try these butter recipes
            </label>
            <button className="text-white text-2xl font-bold bg-home-blue rounded pr-3 pl-3 align-middle pb-1 cursor-default">
            <a href="/products/recipes">&gt;</a>
            </button>
          </div>

          <div className="grid grid-cols-3 gap-3 pb-10 p-3">
          {featuredButter.map((recipe, index) => (
          <RecipeCard key={index} recipe={recipe} />
        ))}

          </div>
          <Link href="products/bulk">
                <button className="relative mb-10 pl-32 bg-home-blue text-white rounded pr-3 pt-1 pb-1 font-light hover:underline cursor-pointer">Butter for your business <span className="ml-2 font-bold text-xl">&gt;</span></button>
          </Link>

        </div>

      </div>
    </>
  );
}
