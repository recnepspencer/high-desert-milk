import RecipeCard, { RecipeData } from "@/app/Components/RecipeCard";
import Link from "next/link";

export default function Salted() {
  return (
    <>
      <div className=" font-sans">
        <div className="pt-[148px]"></div>
        <div className="flex flex-col justify-center bg-white align-middle text-center text-home-blue">
            <div className="flex justify-center align-middle m-10">
                <h4>Butter</h4>
                <img src="../../down-arrow.svg" alt=""  className="bg-home-blue rounded h-5 ml-2"/>
            </div>
            <div className="grid grid-cols-2 mt-16 mb-10 mr-28 ml-28">
                <div className="flex flex-col align-middle">
                    <h1 className="text-6xl mt-auto mb-auto">Unsalted Butter</h1>
                </div>
                <div className="flex justify-center align-middle">
                    <img src="../../products/unsalted-butter.png" alt="" className="w-90 object-contain"/>
                </div>
                <div></div>
                <div className="text-right mt-10 text-sm">
                  <p className="text-left"><span className="pl-16">Always fresh.</span> Never frozen. 
Our natural butter has a flavor that stands 
out, enhancing any recipe. Pinky promise.</p>
                </div>
            </div>
        </div>
        <div className="text-home-blue flex align-middle justify-center bg-home-orange p-4">
          <p className="text-center align-middle font-light">Nutrition &amp; Allergens</p>
          <img src="../../down-arrow.svg" alt=""  className="bg-home-blue rounded h-5 ml-2"/>
        </div>
        <div className="bg-white text-home-blue">
          <p className="text-center h-32 m-10">PACEHOLDER</p>
        </div>
        <div className="text-home-blue flex align-middle justify-center bg-home-productYellow p-4">
          <p className="text-center align-middle font-light">Ingredients</p>
          <img src="../../down-arrow.svg" alt=""  className="bg-home-blue rounded h-5 ml-2"/>
        </div>
        <div className="flex bg-white text-home-blue justify-center">
          <p className="text-center h-32 m-10 w-64">Always fresh. Never frozen. <br />
Our natural butter has a flavor that stands 
out, enhancing any recipe. Pinky promise.</p>
        </div>
        <div className="bg-home-productBlue">
          <div className="flex align-middle text-center justify-center">
          <h1 className="text-center text-home-blue pt-20 pb-2 w-60 border-b-2 border-b-home-blue mb-5">WHERE TO BUY</h1>
          </div>

          <div className="grid grid-cols-3 gap-2 justify-between ml-20 mr-20">
            <img src="../../stokes.png" alt="" className="object-contain w-full" />
            <img src="../../walmart.png" alt="" className="h-36 w-full object-contain"/>
            <img src="../../ridleys.png" alt="" className="object-contain w-full"/>
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
