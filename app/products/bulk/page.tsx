'use client'
import { prisma } from "@/app/db";
import Link from "next/link";
import React from "react";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from "next/image";


export default function Bulk({user }: any) {
  const [isActive, setIsActive] = useState(false);

  const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [company, setCompany] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isLoading, setLoading] = useState(false);
    const [isSubmitted, setSubmitted] = useState(false);


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true)

        const formData = new FormData();
        formData.append("firstName", firstName);
        formData.append("lastName", lastName);
        formData.append("company", company);
        formData.append("phoneNumber", phoneNumber);
        formData.append("email", email);
        formData.append("message", message);

        const baseUrl =
            process.env.NODE_ENV === "development"
                ? process.env.NEXT_PUBLIC_API_BASE_URL
                : process.env.NEXT_PUBLIC_PRODUCTION_API_BASE_URL;


        fetch(`${baseUrl}/api`, {
            method: "POST",
            body: formData,
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                // Reset the form
                setFirstName("");
                setLastName("");
                setCompany("");
                setPhoneNumber("");
                setEmail("");
                setMessage("");
                // Set loading to false and submitted to true
                setLoading(false);
                setSubmitted(true);
            })
            .catch((error) => {
                console.error("Error:", error);
                setLoading(false);
            });
        console.log(formData);
    };

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
            <h4>Bulk</h4>
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
          <div className=" bg-home-recipeBlue p-4">
          <form onSubmit={handleSubmit} className="flex flex-col m-4 p-2 text-center rounded-lg items-center ml-auto mr-auto w-[275px] bg-slate-300 text-home-blue">
                            <h1 className="text-4xl">
                              Contact Us
                            </h1>
                            <img src="../email-icon.svg" alt="" />
                            <p className="text-sm p-3">
                                We would love to hear from you!
                                Feel free to leave us a detailed
                                message through this form:
                            </p>
                            <div className="p-4">
                                <input type="text" placeholder="First Name:" value={firstName} onChange={e => setFirstName(e.target.value)} className="p-2 rounded-full placeholder:text-home-blue placeholder:text-sm mb-[8px] text-home-blue text-sm w-full " />
                                <input type="text" placeholder="Last Name:" value={lastName} onChange={e => setLastName(e.target.value)} className="p-2 rounded-full placeholder:text-home-blue placeholder:text-sm mb-[8px] text-home-blue text-sm w-full" />
                                <input type="text" placeholder="Company:" value={company} onChange={e => setCompany(e.target.value)} className="p-2 rounded-full placeholder:text-home-blue placeholder:text-sm mb-[8px] text-home-blue text-sm w-full" />
                                <input type="text" placeholder="Phone Number:" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} className="p-2 rounded-full placeholder:text-home-blue placeholder:text-sm mb-[8px] text-home-blue text-sm w-full" />
                                <input type="text" placeholder="Email:" value={email} onChange={e => setEmail(e.target.value)} className="p-2 rounded-full placeholder:text-home-blue placeholder:text-sm mb-[8px] text-home-blue text-sm w-full" />
                                <textarea name="Message:" value={message} onChange={e => setMessage(e.target.value)} placeholder="Message:" className="p-2  rounded-xl pt-2 placeholder:text-home-blue placeholder:text-sm text-home-blue text-sm w-full h-32"></textarea>
                            </div>
                            <button type="submit" disabled={isLoading || isSubmitted} >
                                {isLoading ? (
                                    <div>Loading...</div>
                                ) : isSubmitted ? (
                                    <div>Message Sent &#10003;</div>
                                ) : (
                                    <img src="../side-arrow.png" alt="" className="w-8 bg-home-blue rounded" />
                                )}
                            </button>



                        </form>
          </div>
      </div>
    </div>
  );
}
