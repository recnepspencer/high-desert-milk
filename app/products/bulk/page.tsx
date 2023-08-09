'use client'
import { prisma } from "@/app/db";
import Link from "next/link";
import React from "react";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from "next/image";


export default function Bulk({user }: any) {
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
    <div>
      <div className="w-[100vw]">
        <div className="pt-[148px]"></div>
        <div className="flex flex-col justify-center bg-white align-middle text-center text-home-blue">
          <div className="flex justify-center align-middle m-10">
          <div className="flex justify-center align-middle m-10">
            <h4>Butter</h4>
            <button onClick={handleClick}>
              <img src="../../down-arrow.svg" alt="" className="bg-home-blue rounded h-5 ml-2" />
            </button>
            {isActive && (
              <div className="absolute mt-8 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                  <a href="/contact" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Contact Us </a>
                </div>
              </div>
            )}
          </div>
          </div>
          <div className="grid grid-cols-2 mt-16 mb-10 mr-6 ml-6 gap-8">
            <div className="flex flex-col align-middle pr-10">
              <h1 className="text-[10vw] p-2 mt-auto mb-auto">Buttermilk Powder</h1>
            </div>
            <div className="flex justify-center align-middle flex-shrink">
              <Image loading="lazy"
              width={2672} height={3560}
                src="/products/bulk-buttermilk.png"
                alt="Bulk Buttermilk powder"
                className="w-[90%] object-contain"
              />
            </div>
            <div className="flex flex-shrink justify-center align-middle">
              <Image loading="lazy"
              width={2660} height={3548}
                src="/products/bulk-nonfat-dry.png"
                alt="Bulk Nonfat Dry Milk powder"
                className="w-[90%] object-contain"
              />
            </div>
            <div className="flex flex-col align-middle pr-10">
              <h1 className="text-[10vw] mt-auto mb-auto">Nonfat Dry Milk</h1>
            </div>
            <div className="flex flex- shrink flex-col align-middle pr-10">
              <h1 className="text-[10vw] mt-auto mb-auto">Skim Milk Powder</h1>
            </div>
            <div className="flex flex-shrink justify-center align-middle">
              <Image loading="lazy" 
              width={2676} height={3564}
                src="/products/bulk-skim-powder.png"
                alt="Bulk Skim Milk Powder"
                className="w-[90%] object-contain"
              />
            </div>

            <div className="flex flex-shrink justify-center align-middle">
              <Image loading="lazy"
              width={3440} height={2504}
                src="/products/bulk-butter.png"
                alt="Bulk Butter"
                className="w-[100%] object-contain"
              />
            </div>

            <div className="flex flex-col align-middle pr-10">
              <h1 className="text-[10vw] mt-auto mb-auto">Butter</h1>
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
          <p className="text-center h-32 m-10">Varies by product</p>
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
           Varies by product
          </p>
        </div>
      </div>
    </div>
  );
}
