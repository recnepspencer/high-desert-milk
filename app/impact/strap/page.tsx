"use client"
import Image from "next/image";
import { useState } from "react";

export default function Strap() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
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
        formData.append("phoneNumber", phoneNumber);
        formData.append("email", email);
        formData.append("message", message);

        const baseUrl =
            process.env.NODE_ENV === "development"
                ? process.env.NEXT_PUBLIC_API_BASE_URL
                : process.env.NEXT_PUBLIC_PRODUCTION_API_BASE_URL;


        fetch(`${baseUrl}/api/strap`, {
            method: "POST",
            body: formData,
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                // Reset the form
                setFirstName("");
                setLastName("");
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
        <div className="pt-[148px] text-home-blue">
                        
            <div>
            <Image loading="lazy" width={1900} height={936} src="/download.jpeg" alt="Stokes" className="object-contain w-40 m-8 float-right" />
                <h1 className="text-[10vw] p-4">
                    S.T.R.A.P.
                </h1>
                <h2 className="text-[6vw] p-6">(School To Registered Apprenticeship Program)</h2>
                <p className="p-6 text-[2.25vw]">
                    A program for High School Students to gain experience in the workforce. For additional information check out the video below and send us your contact information in the form.
                </p>

            </div>


            <iframe width="100%" height="400" src="https://www.youtube.com/embed/jPPaZZcO4lU" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

            <div className="p-4">
                <h1 className="text-[6vw]">Interested? Send us your contact info.</h1>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col m-4 p-2 text-center rounded-lg items-center ml-auto mr-auto w-[275px] bg-slate-300">
                <img src="../email-icon.svg" alt="" />
                <p className="text-sm p-3">
                    We would love to hear from you!
                    Feel free to leave us a detailed
                    message through this form:
                </p>
                <div className="p-4">
                    <input type="text" placeholder="First Name:" value={firstName} onChange={e => setFirstName(e.target.value)} className="p-2 rounded-full placeholder:text-home-blue placeholder:text-sm mb-[8px] text-home-blue text-sm w-full " />
                    <input type="text" placeholder="Last Name:" value={lastName} onChange={e => setLastName(e.target.value)} className="p-2 rounded-full placeholder:text-home-blue placeholder:text-sm mb-[8px] text-home-blue text-sm w-full" />
                    <input type="text" placeholder="Phone Number:" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} className="p-2 rounded-full placeholder:text-home-blue placeholder:text-sm mb-[8px] text-home-blue text-sm w-full" />
                    <input type="text" placeholder="Email:" value={email} onChange={e => setEmail(e.target.value)} className="p-2 rounded-full placeholder:text-home-blue placeholder:text-sm mb-[8px] text-home-blue text-sm w-full" />
                    <textarea name="Message:" value={message} onChange={e => setMessage(e.target.value)} placeholder="Message: (optional)" className="p-2  rounded-xl pt-2 placeholder:text-home-blue placeholder:text-sm text-home-blue text-sm w-full h-32"></textarea>
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
    )
}