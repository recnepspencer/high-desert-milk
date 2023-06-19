import RecipeCard, { RecipeData } from "@/app/Components/RecipeCard";
import Link from "next/link";

export default function Buttermilk() {
  return (
    <>
      <div className=" font-sans">
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
          <div className="grid grid-cols-2 mt-16 mb-10 mr-28 ml-28 min-w-[600px]">
            <div className="flex flex-col align-middle pr-10 min-w-[250px]">
              <h1 className="text-6xl mt-auto mb-auto">Buttermilk</h1>
            </div>
            <div className="flex justify-center align-middle">
              <img
                src="../../products/big-powder.png"
                alt=""
                className="w-90 object-contain min-w-[250px]"
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
          <p className="text-center align-middle font-light">
            Nutrition &amp; Allergens
          </p>
          <img
            src="../../down-arrow.svg"
            alt=""
            className="bg-home-blue rounded h-5 ml-2"
          />
        </div>
        <div className="bg-white text-home-blue">
          <p className="text-center h-32 m-10">PACEHOLDER</p>
        </div>
        <div className="text-home-blue flex align-middle justify-center bg-home-productYellow p-4">
          <p className="text-center align-middle font-light">Ingredients</p>
          <img
            src="../../down-arrow.svg"
            alt=""
            className="bg-home-blue rounded h-5 ml-2"
          />
        </div>
        <div className="flex bg-white text-home-blue justify-center">
          <p className="text-center h-32 m-10 w-64">
            Always fresh. Never frozen. <br />
            Our natural butter has a flavor that stands out, enhancing any
            recipe. Pinky promise.
          </p>
        </div>
        <div className="bg-home-productBlue">
          <div className="flex align-middle text-center justify-center">
            <h1 className="flex justify-center text-center text-home-blue pt-20 pb-2 w-60 border-b-2 border-b-home-blue mb-5">
             BUY NOW 
             <img src="../../side-arrow.png" className="bg-home-blue rounded h-5 ml-2"/>
            </h1>
  
          </div>

          <div className="ml-20 mr-20 flex">
            <img
              src="../../amazon.png"
              alt=""
              className="object-contain w-[50%] ml-auto mr-auto"
            />
          </div>
          <div className="flex justify-center  pt-6 pb-36">
            <Link
              href="/"
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
