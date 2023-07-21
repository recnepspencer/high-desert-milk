import Link from "next/link";
import RecipeCard, {RecipeData} from "@/app/Components/RecipeCard"
import SideArrowButton from "../Components/Buttons";

export default function OurProducts() {
  const mainFeature = RecipeData.filter(recipe => recipe.isMainFeature)
  return (
    <>
      <div className=" font-sans w-[100vw] lg:pl-[5vw] lg:pr-[5vw] overflow-hidden">
        <div className="pt-[148px]"></div>
        <div className="flex flex-col justify-center bg-white align-middle text-center text-home-blue">
          <h1 className="text-5xl font-light mt-[20px]">Our Products</h1>
          <h4 className="text-xl font-light mt-[20px]">
            Pristine by Nature. Clean by Routine. Consistent by Design.
          </h4>
          <div className="grid grid-cols-3 pt-10 ml-12 mr-12 items-center align-middle">
            <div className="grid grid-cols-1">
              <img src="products/butter.png" alt="" className="w-[40vw] mb-4 ml-auto mr-auto"/>
              
            </div>
            <div>
              <img src="products/big-powder.png" alt="" className="w-[18vw] mb-4 ml-auto mr-auto"/>
            </div>
            <div>
              <img src="products/bulk-buttermilk.png" alt="" className="w-[18vw] mb-4 ml-auto mr-auto" />
            </div>
            <div className="mb-4">
              <Link href="/products/butter">
                Butter
              </Link>  
            </div>
            <div className="mb-4">
              <Link href="/products/powder">
                Powder
              </Link>  
            </div>
            <div className="mb-4">
              <Link href="/products/bulk">
                Bulk
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
              <Link href="products/butter" className="flex">
                <label className="text-white text-2xl font-light justify-center pr-3 hover:underline cursor-pointer">
                  Butter
                </label>
                <SideArrowButton width='8' />
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
              <Link href="products/powder" className="flex">
                <label className="text-white text-2xl font-light justify-center pr-3 hover:underline cursor-pointer">
                  Powder
                </label>
                <SideArrowButton width="8"/>
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
          <div className="w-full flex justify-center items-center">
            <img
              src="products/bulk-butter-2.jpeg"
              alt=""
              className="w-full object-cover h-full"
            />
          </div>
          <div className="w-full bg-home-recipeOrange p-10">
            <img
              src="products/bulk-butter.png"
              alt=""
              className="align-middle"
            />
            <div className="flex justify-center mt-10">
              <Link href="products/bulk" className="flex">
                <label className="text-white text-2xl font-light justify-center pr-3 hover:underline cursor-pointer">
                  Bulk
                </label>
                <SideArrowButton width="8"/>
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-home-productYellow ">
          <div className="flex justify-center p-4 pt-8">
            <Link href="products/recipes" className="flex">
                          <label className="pr-2 text-home-blue text-xl ">
              Try these recipes
            </label>
            <SideArrowButton width="8"/>
            </Link>

          </div>

          <div className="grid grid-cols-3 gap-3 p-3 pb-10">
        {mainFeature.map((recipe, index) => (
          <RecipeCard key={index} recipe={recipe} />
        ))}
      </div>
      <div>
          {/* a centered button that says see all recipes */}
          <div className="flex justify-center">
            <Link href="products/recipes" className="flex pb-4">
              <button className="text-white bg-home-blue rounded p-2 text-xl hover:bg-blue-900 active:text-home-blue active:bg-white cursor-pointer">
                See all recipes:
              </button>
            </Link>
            </div>
      </div>
      
        </div>
      </div>
    </>
  );
}
