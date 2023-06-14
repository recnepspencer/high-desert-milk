import Link from "next/link";
import RecipeCard from "../Components/RecipeCard";

export default function OurProducts() {
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
              <p className="h-auto max-w-full">Butter</p>
            </div>
            <div className="flex flex-col pr-40">
              <img
                src="products/powder.png"
                alt=""
                className=" w-4/6 h-4/6  object-cover  overflow-hidden self-center"
              />
              <p className="h-auto max-w-full">Powder</p>
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
              <label className="text-white text-2xl font-light justify-center pr-3">
                Butter
              </label>
              <button className="text-white text-2xl font-bold bg-home-blue rounded pr-3 pl-3 align-middle pb-1 hover:bg-blue-900 active:bg-white active:text-home-blue">
                &gt;
              </button>
            </div>
          </div>

          <div className="w-full bg-home-productBlue p-10">
            <img
              src="products/big-powder.png"
              alt=""
              className="align-middle"
            />
            <div className="flex justify-center mt-10">
              <label className="text-white text-2xl font-light justify-center pr-3">
                Powder
              </label>
              <button className="text-white text-2xl font-bold bg-home-blue rounded pr-3 pl-3 align-middle pb-1 hover:bg-blue-900 active:bg-white active:text-home-blue">
                &gt;
              </button>
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

          <div className="grid grid-cols-3 gap-2 p-3">
          <RecipeCard
          recipeName="Buttermilk Mashed Potatoes"
          imageUrl="products/mashed-potatoes.png"
          backgroundColor="bg-home-recipeOrange"
          recipeUrl=""
        />
                    <RecipeCard
          recipeName="Avacado Salad Dressing"
          imageUrl="products/salad-dressing.png"
          backgroundColor="bg-home-recipeBlue"
          recipeUrl=""
        />
            <RecipeCard
          recipeName="Blue Ribbon Butter Cake"
          imageUrl="products/butter-cake.png"
          backgroundColor="bg-home-recipeRed"
          recipeUrl=""
        />
          </div>
        </div>
      </div>
    </>
  );
}
