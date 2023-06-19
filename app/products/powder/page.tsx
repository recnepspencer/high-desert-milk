import RecipeCard, { RecipeData } from "@/app/Components/RecipeCard";
import Link from "next/link";
export default function ProductPowder() {

  const buttermilkFeature = RecipeData.filter(recipe => recipe.isButtermilkFeature)
  

  return (
    <>
      <div className=" font-sans">
        <div className="pt-[148px]"></div>
        <div className="flex flex-col justify-center bg-white align-middle text-center text-home-blue">
            <div className="flex justify-center align-middle m-10">
                                <h4>Powder</h4>
                <img src="../down-arrow.svg" alt=""  className="bg-home-blue rounded h-5 ml-2"/>

            </div>
            <div className="grid grid-cols-2 mt-16 mb-10 mr-28 ml-28">
                <div className="flex flex-col align-middle">
                    <h1 className="text-6xl mt-auto">Milk Powder</h1>
                    <h4 className="text-xl font-light mt-10 mb-auto">Fresh milk never lasted so long.</h4>
                </div>
                <div className="flex justify-center align-middle">
                    <img src="../products/big-powder.png" alt="" className="w-72 object-contain"/>
                </div>
            </div>
        </div>
        <div className="grid grid-cols-2">
        <div className="w-full bg-home-productBlue p-10">
            <img
              src="../products/big-powder.png"
              alt=""
              className="align-middle mt-[20%]"
            />
            <div className="flex justify-center mt-10">
              <Link href="/products/powder/buttermilk" className="text-white text-2xl font-light justify-center pr-3">
                Buttermilk
              </Link>
              <button className="text-white text-2xl font-bold bg-home-blue rounded pr-3 pl-3 align-middle pb-1 hover:bg-blue-900 active:bg-white active:text-home-blue">
                &gt;
              </button>
            </div>
          </div>
          <div className="w-full bg-home-orange p-10">
            <img
              src="../products/nonfat-dry.png"
              alt=""
              className="align-middle mt-[20%]"
            />
            <div className="flex justify-center mt-10">
              <Link href="products/powder/nonfat-dry-milk" className="text-white text-2xl font-light justify-center pr-3">
                Nonfat Dry Milk
              </Link>
              <button className="text-white text-2xl font-bold bg-home-blue rounded pr-3 pl-3 align-middle pb-1 hover:bg-blue-900 active:bg-white active:text-home-blue">
                &gt;
              </button>
            </div>
          </div>
        </div>
        <div className="bg-home-productYellow ">
          <div className="flex justify-center p-4 pt-8">
            <label className="pr-2 text-home-blue text-xl ">
              Try these buttermilk recipes
            </label>
            <button className="text-white text-2xl font-bold bg-home-blue rounded pr-3 pl-3 align-middle pb-1 cursor-default">
              &gt;
            </button>
          </div>

          <div className="grid grid-cols-3 gap-2 p-3">


          </div>
          <div className="grid grid-cols-3 pb-10">
        {buttermilkFeature.map((recipe, index) => (
          <RecipeCard key={index} recipe={recipe} />
        ))}
      </div>
      <button className="relative mb-10 pl-32 bg-home-blue text-white rounded pr-3 pt-1 pb-1 font-light hover:underline cursor-pointer">Powder for your business <span className="ml-2 font-bold text-xl">&gt;</span></button>
        </div>
      </div>
    </>
  );
}
