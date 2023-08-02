'use client'
import RecipeCard, { RecipeData } from "@/app/Components/RecipeCard";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
export default function ProductPowder() {
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

  const buttermilkFeature = RecipeData.filter(recipe => recipe.isButtermilkFeature)


  return (
    <>
      <div className="  w-[100vw] lg:pl-[5vw] lg:pr-[5vw]">
        <div className="pt-[148px]"></div>
        <div className="flex flex-col justify-center bg-white align-middle text-center text-home-blue">
        <div className="flex justify-center align-middle m-10">
      <h4>Powder</h4>
      <button onClick={handleClick}>
        <img src="../down-arrow.svg" alt="" className="bg-home-blue rounded h-5 ml-2" />
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
          <div className="grid grid-cols-2 mt-16 mb-10 mr-28 ml-28">
            <div className="flex flex-col align-middle">
              <h1 className="text-6xl mt-auto">Milk Powder</h1>
              <h4 className="text-xl font-light mt-10 mb-auto">Fresh milk never lasted so long.</h4>
            </div>
            <div className="flex justify-center align-middle">
              <Image loading="lazy" width={2956} height={3264} src="/products/big-powder.png" alt="Buttermilk Powder" className="w-72 object-contain" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2">
          <div className="w-full bg-home-productBlue p-10">
            <Image loading="lazy"
              width={2956} height={3264}
              src="/products/big-powder.png"
              alt="Buttermilk Powder"
              className="align-middle mt-[20%]"
            />
            <div className="flex justify-center mt-10">
              <Link href="/products/powder/buttermilk" className="text-white text-2xl font-light justify-center pr-3 hover:underline decoration-white">
                Buttermilk
              </Link>
              <Link href="products/powder/buttermilk">
                <button className="text-white text-2xl font-bold bg-home-blue rounded pr-3 pl-3 align-middle pb-1 hover:bg-blue-900 active:bg-white active:text-home-blue">
                  &gt;
                </button>
              </Link>

            </div>
          </div>
          <div className="w-full bg-home-orange p-10">
            <Image loading="lazy"
            width={1760} height={2053}
              src="/products/nonfat-dry.png"
              alt=""
              className="align-middle mt-[20%]"
            />
            <div className="flex justify-center mt-10">
              <Link href="products/powder/nonfat-dry-milk" className="text-white text-2xl font-light justify-center pr-3 hover:underline decoration-white">
                Nonfat Dry Milk
              </Link>
              <Link href="products/powder/nonfat-dry-milk">
                <button className="text-white text-2xl font-bold bg-home-blue rounded pr-3 pl-3 align-middle pb-1 hover:bg-blue-900 active:bg-white active:text-home-blue">
                  &gt;
                </button>
              </Link>

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
          <div className="grid grid-cols-3 gap-3 p-3 pb-10">
            {buttermilkFeature.map((recipe, index) => (
              <RecipeCard key={index} recipe={recipe} />
            ))}
          </div>
          <Link href="../products/bulk">
            <button className="relative mb-10 pl-32 bg-home-blue text-white rounded pr-3 pt-1 pb-1 font-light hover:underline cursor-pointer">Powder for your business <span className="ml-2 font-bold text-xl">&gt;</span></button>
          </Link>

        </div>
      </div>
    </>
  );
}
