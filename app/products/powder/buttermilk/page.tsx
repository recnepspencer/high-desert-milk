import RecipeCard, { RecipeData } from "@/app/Components/RecipeCard";
import Image from "next/image";
import Link from "next/link";

export default function Buttermilk() {
  return (
    <>
      <div className="  w-[100vw] lg:pl-[5vw] lg:pr-[5vw]">
        <div className="pt-[148px]"></div>
        <div className="flex flex-col justify-center bg-white align-middle text-center text-home-blue">
          <div className="flex justify-center align-middle m-10">
            <h4>Powder</h4>
            <img
              src="../../down-arrow.svg"
              alt=""
              className="bg-home-blue rounded h-5 ml-2"
            />
          </div>
          <div className="grid grid-cols-2 mt-16 mb-10 ">
            <div className="flex flex-col align-middle pr-10 min-w-[250px]">
              <h1 className="text-6xl mt-auto mb-auto">Buttermilk</h1>
            </div>
            <div className="flex justify-center align-middle">
              <Image loading="lazy" width={2956} height={3264}
                src="/products/big-powder.png"
                alt=""
                className="w-[40vw] object-contain"
              />
            </div>
            <div></div>
            <div className="text-right mt-10 text-sm">
              <p className="text-left w-72">
                <span className="pl-16">Simply milk minus water. </span>
                Your shelf life is increased while flavor remains intact -
                enhancing any recipe for the best experience possible.
              </p>
            </div>
          </div>
        </div>
        <div className="text-home-blue flex align-middle justify-center bg-home-orange p-4">
          <p className="text-center align-middle font-light">Nutrition: </p>
        </div>
        <div className="bg-white text-home-blue p-8">
          <Image loading="lazy" width={2346} height={459}  src="/products/butter-nutrition.png" alt="buttermilk nutrition facts" />
        </div>
        <div className="text-home-blue flex align-middle justify-center bg-home-productYellow p-4">
          <p className="text-center align-middle font-light">Ingredients &amp; Allergens:</p>
        </div>
        <div className="flex flex-col align-middle items-center bg-white text-home-blue justify-center">
          <p className="text-center m-10 w-64">Sweet Cream Buttermilk Powder </p>
          <p className="font-bold mb-10">Contains Milk</p>
        </div>

        <div className="bg-home-productBlue">
          <div className="flex align-middle text-center justify-center">
            <h1 className="flex justify-center text-center text-home-blue pt-20 pb-2 w-60 border-b-2 border-b-home-blue mb-5">
             BUY NOW 
             <img src="../../side-arrow.png" className="bg-home-blue rounded h-5 ml-2"/>
            </h1>
  
          </div>

          <div className="ml-20 mr-20 flex">
          <Link href="https://www.amazon.com/High-Desert-Milk-Buttermilk-Powder/dp/B094T666WM/ref=sr_1_2?crid=3L1N1307NOOUD&keywords=high+desert+milk&qid=1690417380&sprefix=high+desert+milk%2Caps%2C158&sr=8-2">
                        <Image loading="lazy"
            width={2404} height={724}
              src="/amazon.png"
              alt="Amazon link"
              className="object-contain w-[50%] ml-auto mr-auto"
            />
            </Link>
          </div>
          <div className="flex justify-center  pt-6 pb-36">
            <Link
              href="products/bulk"
              className="text-xs underline text-home-blue cursor-pointer"
            >
              <p>Click here to see business options.</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
