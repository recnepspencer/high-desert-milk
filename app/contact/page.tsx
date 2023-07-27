"use client"
import Image from "next/image";
import React from "react";
import { useState } from "react";
export default function ContactUs() {
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




    return (
        <div>
            <div className="pt-[148px] lg:pl-[5vw] lg:pr-[5vw] max-w-screen-xl xl:ml-auto xl:mr-auto w-[100vw]">
                <div className="relative text-home-blue">
                    <Image width={7680} height={7004} src="/impact/our-community-page/map.png" alt="Background image: Map" className="pb-[430px] bg-home-productBlue" />
                    <div className="absolute top-0 w-full ">
                        <div className="flex flex-col ml-auto m-4 p-2 mr-8 bg-white text-center rounded items-center w-[450px] xs:w-[350px] mt-16">
                            <h1 className="text-2xl font-light">How can we help you? </h1>
                            <p className="text-sm font-sans w-8/12">Have a question or suggestion? Feel free to reach us through our form below!
                            </p>
                        </div>
                        <div className="flex flex-col ml-auto m-4 mr-8 p-2 bg-white text-center rounded items-end w-[250px]">
                            <p className="text-sm p-2">
                                M-F   8:00am - 5:00pm
                            </p>
                            <p className="text-sm p-2">1033 Idaho St, Burley, ID 83318
                            </p>
                            <p className="text-sm p-2">208.878.milk
                            </p>
                        </div>
                        <div className="w-full border-[1px] border-dashed border-slate-600 mt-20 mb-20"></div>
                        <form onSubmit={handleSubmit} className="flex flex-col m-4 p-2 text-center rounded-lg items-center ml-auto mr-auto w-[275px] bg-slate-300">
                            <img src="../email-icon.svg" alt="" />
                            <p className="text-xs p-3">
                                We would love to hear from you!
                                Feel free to leave us a detailed
                                message through this form:
                            </p>
                            <div className="p-4">
                                <input type="text" placeholder="First Name:" value={firstName} onChange={e => setFirstName(e.target.value)} className="p-2 rounded-full placeholder:text-home-blue placeholder:text-xs mb-[8px] text-home-blue text-xs w-full " />
                                <input type="text" placeholder="Last Name:" value={lastName} onChange={e => setLastName(e.target.value)} className="p-2 rounded-full placeholder:text-home-blue placeholder:text-xs mb-[8px] text-home-blue text-xs w-full" />
                                <input type="text" placeholder="Company:" value={company} onChange={e => setCompany(e.target.value)} className="p-2 rounded-full placeholder:text-home-blue placeholder:text-xs mb-[8px] text-home-blue text-xs w-full" />
                                <input type="text" placeholder="Phone Number:" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} className="p-2 rounded-full placeholder:text-home-blue placeholder:text-xs mb-[8px] text-home-blue text-xs w-full" />
                                <input type="text" placeholder="Email:" value={email} onChange={e => setEmail(e.target.value)} className="p-2 rounded-full placeholder:text-home-blue placeholder:text-xs mb-[8px] text-home-blue text-xs w-full" />
                                <textarea name="Message:" value={message} onChange={e => setMessage(e.target.value)} placeholder="Message:" className="p-2  rounded-xl pt-2 placeholder:text-home-blue placeholder:text-xs text-home-blue text-xs w-full h-32"></textarea>
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
                <div className="bg-home-productBlue h-60"></div>
            </div>

        </div>
    )
}