import RecipeCard, { RecipeData } from "@/app/Components/RecipeCard";
import Image from "next/image";
import Link from "next/link";

export default function Salted() {
  
  return (
    <>
      <div className="  w-[100vw] lg:pl-[5vw] lg:pr-[5vw]">
        <div className="pt-[148px]"></div>
        <div className="flex flex-col justify-center bg-white align-middle text-center text-home-blue">
            <div className="flex justify-center align-middle m-10">
                <h4>Butter</h4>
                <img src="../../down-arrow.svg" alt=""  className="bg-home-blue rounded h-5 ml-2"/>
            </div>
            <div className="grid grid-cols-2 mt-16 mb-10">
                <div className="flex flex-col align-middle">
                    <h1 className="text-[10vw] mt-auto mb-auto">Salted Butter</h1>
                </div>
                <div className="flex justify-center align-middle">
                    <Image loading="lazy" width={4094} height={2880} src="/products/big-butter.png" alt="butter" className="w-[40vw] object-contain"/>
                </div>
                <div></div>
                <div className="text-right mt-10 text-[2vw] ml-auto mr-16">
                  <p className="w-[30vw]">Always fresh. Never frozen. 
Our natural butter has a flavor that stands 
out, enhancing any recipe. Pinky promise.</p>
                </div>
            </div>
        </div>
        <div className="text-home-blue flex align-middle justify-center bg-home-orange p-4">
          <p className="text-center align-middle font-light">Nutrition: </p>
        </div>
        <div className="bg-white text-home-blue p-8">
          <Image loading="lazy" width={2346} height={459} src="/products/butter-nutrition.png" alt="Butter Nutrition facts" />
        </div>
        <div className="text-home-blue flex align-middle justify-center bg-home-productYellow p-4">
          <p className="text-center align-middle font-light">Ingredients &amp; Allergens:</p>
        </div>
        <div className="flex flex-col align-middle items-center bg-white text-home-blue justify-center">
          <p className="text-center m-10 w-64">Grade A Pasteurized Sweet Cream (milk). </p>
          <p className="font-bold mb-10">Contains Milk</p>
        </div>
        <div className="bg-home-productBlue">
          <div className="flex align-middle text-center justify-center">
          <h1 className="text-center text-home-blue pt-20 pb-2 w-60 border-b-2 border-b-home-blue mb-5">WHERE TO BUY</h1>
          </div>

          <div className="grid grid-cols-3 gap-2 justify-between ml-20 mr-20">
            <Image loading="lazy" width={1900} height={936} src="/stokes.png" alt="Stokes" className="object-contain w-full" />
            <Image loading="lazy" width={1900} height={1052} src="/walmart.png" alt="Walmart" className=" w-full object-contain"/>
            <Image loading="lazy" width={1252} height={1084} src="/ridleys.png" alt="Ridleys" className="object-contain w-full"/>
          </div>
          <div className="flex justify-center  pt-6 pb-36">
            <Link href="products/bulk" className="text-xs underline text-home-blue cursor-pointer">
              <p>Click here to see business options.</p>
            </Link>
          </div>
        </div>

      </div>
    </>
  );
}
