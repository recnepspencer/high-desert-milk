'use client'
import Link from "next/link";
import RecipeCard, {RecipeData} from "@/app/Components/RecipeCard"
import SideArrowButton from "../Components/Buttons";
import Image from "next/image";

export default function OurProducts() {
  const mainFeature = RecipeData.filter(recipe => recipe.isMainFeature)
  return (
    <>
      <div className="w-[100vw] overflow-hidden">
        <div className="pt-[148px]"></div>
        <div className="flex flex-col justify-center bg-white align-middle text-center text-home-blue">
          <h1 className="text-5xl font-light mt-[20px]">Our Products</h1>
          <h4 className="text-xl font-light mt-[20px]">
            Pristine by Nature. Clean by Routine. Consistent by Design.
          </h4>
          <div className="grid grid-cols-3 pt-10 ml-12 mr-12 items-center align-middle">
            <div className="grid grid-cols-1">
            <Link href="/products/butter">
              <Image loading="lazy" width={1180} height={844} src="/products/butter.png" alt="" className="w-[40vw] mb-4 ml-auto mr-auto"/>
              </Link>
              
            </div>
            <div>
            <Link href="/products/powder">
              <Image loading="lazy" width={2956} height={3264} src="/products/big-powder.png" alt="Powder Milk" className="w-[18vw] mb-4 ml-auto mr-auto"/>
              </Link>
            </div>
            <div>
              <Link href="/products/bulk">
              <Image loading="lazy" width={2670} height={3560} alt="Bulk Powder Buttermilk" src="/products/bulk-buttermilk.png" className="w-[18vw] mb-4 ml-auto mr-auto" />
              </Link>
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
            <Image loading="lazy"
            width={4108}
            height={5000}
              src="/products/caramel.png"
              alt="Caramel"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="w-full bg-home-orange p-10">
            <Image loading="lazy"
            width={4904} height={2880}
              src="/products/big-butter.png"
              alt="Butter"
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
            <Image loading="lazy"
            width={2956} height={3264}
              src="/products/big-powder.png"
              alt="Milk powder"
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
            <Image loading="lazy"
            width={5444}
            height={4212}
              src="/products/cake.png"
              alt="Cake"
              className="w-full object-cover h-full"
            />
          </div>
          <div className="w-full flex justify-center items-center">
            <Image loading="lazy" 
            width={512}
            height={512}
              src="/products/bulk-butter-2.jpeg"
              alt="Beautiful butter"
              className="w-full object-cover h-full"
            />
          </div>
          <div className="w-full bg-home-recipeOrange p-10">
            <Image loading="lazy"
              width={3340} height={2504}
              src="/products/bulk-butter.png"
              alt="Bulk Butter"
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
            <Link href="products/recipes" className="flex cursor-pointer">
                          <label className="pr-2 text-home-blue text-xl cursor-pointer ">
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
                See all recipes
              </button>
            </Link>
            </div>
      </div>
      
        </div>
      </div>
    </>
  );
}
