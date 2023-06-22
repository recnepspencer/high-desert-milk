'use client'
import { prisma } from "@/app/db";
import Link from "next/link";
import React from "react";
import { useState } from 'react';
import { useRouter } from 'next/navigation';


export default async function Bulk({user }: any) {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");

  const sendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await prisma.inquiry.create({
      data: {
        name,
        email,
        company,
        message,
      },
    });
  };
  

  return (
    <>
      <div className=" font-sans">
        <div className="pt-[148px]"></div>
        <div className="flex flex-col justify-center bg-white align-middle text-center text-home-blue">
          <div className="flex justify-center align-middle m-10">
            <h4>Bulk</h4>
            <img
              src="../../down-arrow.svg"
              alt=""
              className="bg-home-blue rounded h-5 ml-2"
            />
          </div>
          <div className="grid grid-cols-2 mt-16 mb-10 mr-6 ml-6 min-w-[600px] gap-8">
            <div className="flex flex-col align-middle pr-10">
              <h1 className="text-6xl mt-auto mb-auto">Buttermilk Powder</h1>
            </div>
            <div className="flex justify-center align-middle flex-shrink">
              <img
                src="../../products/bulk-buttermilk.png"
                alt=""
                className="w-76 object-contain"
              />
            </div>
            <div className="flex flex-shrink justify-center align-middle">
              <img
                src="../../products/bulk-nonfat-dry.png"
                alt=""
                className="w-76 object-contain"
              />
            </div>
            <div className="flex flex-col align-middle pr-10">
              <h1 className="text-6xl mt-auto mb-auto">Nonfat Dry Milk</h1>
            </div>
            <div className="flex flex- shrink flex-col align-middle pr-10">
              <h1 className="text-6xl mt-auto mb-auto">Skim Milk Powder</h1>
            </div>
            <div className="flex flex-shrink justify-center align-middle">
              <img
                src="../../products/bulk-skim-powder.png"
                alt=""
                className="w-76 object-contain"
              />
            </div>

            <div className="flex flex-shrink justify-center align-middle">
              <img
                src="../../products/bulk-butter.png"
                alt=""
                className="w-76 object-contain min-w-[250px]"
              />
            </div>

            <div className="flex flex-col align-middle pr-10">
              <h1 className="text-6xl mt-auto mb-auto">Butter</h1>
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
        <div className="bg-home-productBlue flex flex-col">
          <form className="bg-slate-300 rounded w-[45%] ml-auto mr-auto flex flex-col justify-center align-middle text-center mt-10 mb-10 border-black"
          onSubmit={sendMessage}>
            <h1 className="mt-3 mb-3 text-xl font-bold">Contact Us:</h1>
            <img
              src="../../products/email-logo.png"
              className="w-20 self-center"
            />
            <div className="self-center w-full pl-5 pr-5 mt-3 mb-3">
              <p className="text-left text-sm">
                If High Desert suits your business needs, email us through this
                form below:
              </p>
            </div>

            <input
              placeholder="Name:"
              className="w-56 self-center rounded-xl pl-2 placeholder:text-black h-7  mb-5"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              placeholder="Email:"
              className="w-56 self-center rounded-xl pl-2 placeholder:text-black h-7  mb-5"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              placeholder="Company:"
              className="w-56 self-center rounded-xl pl-2 placeholder:text-black h-7  mb-5"
              onChange={(e) => setCompany(e.target.value)}
            />
            <textarea
              placeholder="Message:"
              className="w-56 self-center rounded-xl p-2 placeholder:text-black mb-5 h-24 min-h-24"
              onChange={(e) => setMessage(e.target.value)}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}
