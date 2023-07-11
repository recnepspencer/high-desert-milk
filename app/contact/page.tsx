"use client"
'use strict'
import React from "react";
import { useState } from "react";
export default function ContactUs() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [company, setCompany] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
      
      
        const payload = {
          firstName, 
          lastName, 
          company, 
            phoneNumber, 
            email, 
            message 
        };

        try {
          const response = await fetch('/api/contact', { 
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify(payload),
          });
    
          if (response.ok) {
              console.log('Payload sent successfully!');
          } else {
              console.error('Error sending payload:', response.status);
          }
      } catch (error) {
          console.error('Error sending payload:', error);
      }
    }

        


    return (
        <div>
            <div className="pt-[148px] lg:pl-[5vw] lg:pr-[5vw] max-w-screen-xl xl:ml-auto xl:mr-auto min-w-[640px]">
                <div className="relative text-home-blue">
                    <img src="../impact/our-community-page/map.png" alt="" className="pb-[430px] bg-home-productBlue" />
                    <div className="absolute top-0 w-full ">
                        <div className="flex flex-col ml-auto m-4 p-2 bg-white text-center rounded items-center w-[450px] mt-16">
                            <h1 className="text-2xl font-light">How can we help you? </h1>
                            <p className="text-sm font-sans w-8/12">Have a question or suggestion? Feel free to reach us through our form below!
                            </p>
                        </div>
                        <div className="flex flex-col ml-auto m-4 p-2 bg-white text-center rounded items-end w-[250px]">
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
                            <button type="submit">
                                <img src="../side-arrow.png" alt="" className="w-8 bg-home-blue rounded" />
                            </button>



                        </form>

                    </div>
                </div>
            </div>

        </div>
    )
}