'use client'
import RecipeCard, { RecipeData } from "@/app/Components/RecipeCard";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Buttermilk() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = (e: any) => {
    e.stopPropagation();
    setIsActive(!isActive);
  };

  useEffect(() => {
    const handleWindowClick = () => {
      setIsActive(false);
    };

    // Attach the listener to the window on mount.
    window.addEventListener('click', handleWindowClick);

    // Detach the listener from the window on unmount.
    return () => {
      window.removeEventListener('click', handleWindowClick);
    };
  }, []);

  return (
    <>
      <div className="  w-[100vw] lg:pl-[5vw] lg:pr-[5vw]">
        <div className="pt-[148px]"></div>
        <div className="flex flex-col justify-center bg-white align-middle text-center text-home-blue p-4">
        <div className="flex justify-center align-middle m-10">
            <h4>Powder</h4>
            <button onClick={handleClick}>
              <img src="../../down-arrow.svg" alt="" className="bg-home-blue rounded h-5 ml-2" />
            </button>
            {isActive && (
              <div className="absolute mt-8 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                  <a href="/products/powder/buttermilk" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Buttermilk Powder</a>
                  <a href="/products/powder/nonfat-dry-milk" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Nonfat Dry Milk</a>
                </div>
              </div>
            )}
          </div>
          <div className="grid grid-cols-2 mt-16 mb-10 ">
            <div className="flex flex-col align-middle">
              <h1 className="text-[8vw] mt-auto mb-auto ">Buttermilk</h1>
            </div>
            <div className="flex justify-center align-middle">
              <Image loading="lazy" width={2956} height={3264}
                src="/products/big-powder.png"
                alt="Dry Milk Powder"
                className="w-[36vw] object-contain"
              />
            </div>
            <div></div>
            <div className="text-right mt-10 text-[2vw]  ml-auto mr-16">
              <p className="w-[30vw]">
              Simply milk minus water.
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
          <Link target="_blank" href="https://www.amazon.com/High-Desert-Milk-Buttermilk-Powder/dp/B094T666WM/ref=sr_1_2?crid=3L1N1307Nhttps://www.amazon.com/High-Desert-Milk-Nonfat-Powder/dp/B094S5DC52/ref=sr_1_1?crid=74WL9Y274ZX2&keywords=high+desert+milk&qid=1690417514&sprefix=high+desert+milk%2Caps%2C137&sr=8-1OOUD&keywords=high+desert+milk&qid=1690417380&sprefix=high+desert+milk%2Caps%2C158&sr=8-2">
            <h1 className="flex justify-center text-center text-home-blue pt-20 pb-2 w-60 border-b-2 border-b-home-blue mb-5">
              BUY NOW
              <img src="../../side-arrow.png" className="bg-home-blue rounded h-5 ml-2" />
            </h1>
            </Link>
  
          </div>

          <div className="ml-20 mr-20 flex">
          <Link target="_blank" href="https://www.amazon.com/High-Desert-Milk-Buttermilk-Powder/dp/B094T666WM/ref=sr_1_2?crid=3L1N1307NOOUD&keywords=high+desert+milk&qid=1690417380&sprefix=high+desert+milk%2Caps%2C158&sr=8-2">
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
              className="text-sm underline text-home-blue cursor-pointer"
            >
              <p>Click here to see business options.</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
