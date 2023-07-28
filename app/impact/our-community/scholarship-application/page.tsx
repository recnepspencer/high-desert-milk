'use client'
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Scholarships() {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1;
    const currentDay = currentDate.getDate();
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const [sig, setSig] = useState('');
    const [date, setDate] = useState('');
    const [isLoading, setLoading] = useState(false);
    const [isSubmitted, setSubmitted] = useState(false);
    const [file, setFile] = useState<string | null>(null);

    const handleFileChange = (e: any) => {
        const file = e.target.files[0];
        const reader = new FileReader();
    
        reader.onloadend = () => {
            // Remove the data:*/*;base64, part of the result
            const base64String = (reader.result as string).replace(/.*;base64,/, '');
            setFile(base64String);
        };
    
        reader.readAsDataURL(file);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true)

        const formData = new FormData();
        formData.append("name", name);
        formData.append("gender", gender);
        formData.append("address", address);
        formData.append("phone", phone);
        formData.append("birthDate", birthDate);
        formData.append("email", email);
        formData.append("sig", sig);
        formData.append("date", date);
        formData.append("age", age);
        if (file) {
            formData.append("fileBase64", file);
        }

        console.log(formData.get("attachment"));

        const baseUrl =
            process.env.NODE_ENV === "development"
                ? process.env.NEXT_PUBLIC_API_BASE_URL
                : process.env.NEXT_PUBLIC_PRODUCTION_API_BASE_URL;


        fetch(`${baseUrl}/api/scholarship-application`, {
            method: "POST",
            body: formData,
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                // Reset the form
                setName("");
                setGender("");
                setAddress("");
                setPhone("");
                setBirthDate("");
                setEmail("");
                setSig("");
                setDate("");
                setAge("");
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

    const isOpen =
        (currentMonth > 12 || (currentMonth === 12 && currentDay >= 15)) ||
        (currentMonth < 4 || (currentMonth === 3 && currentDay <= 15));

    // if (!isOpen) {
    //     return (
    //         <div className="pt-[148px] pb-[100vh] flex flex-col items-center">
    //                    <h1 className="text-4xl text-center mt-[10vh] p-8 text-home-blue">Application will be open Dec, 15th</h1>
    //                    <Link href="impact/our-community">
    //                    <button className="mt-20 p-4 text-2xl bg-home-blue text-white rounded hover:bg-blue-900 active:bg-white active:text-home-blue border-home-blue border-[1px] ">Go Back</button>
    //                    </Link>

    //         </div>

    //     )

    // }

    return (
        <div className="pt-[148px] ">
            <form onSubmit={handleSubmit} encType="multipart/form-data" className="p-8 border-black m-8 border-[1px]">
                <div className="flex justify-between ">
                    <img src="../../logo.svg" alt="" className="w-40 p-4 rounded bg-slate-600" />
                    <div>
                        <p>
                            High Desert Milk <br />
                            1033 Idaho Avenue <br />
                            Burley, Idaho 83318<br />
                            (208)-878-6455
                        </p>
                    </div>
                </div>
                <div className="text-center mt-8 text-2xl font-bold">
                    <h1>High Desert Milk Co-op Scholarship Application</h1>
                </div>
                <div className="m-4 font-bold">
                    <h1>Attention: Deadline March 15, 2024</h1>
                </div>
                <div className="flex text-home-blue w-full mt-8">
                    <label htmlFor="name" >Name:</label>
                    <input type="text" id="name" className="w-10/12 border-black border-b-[1px] mr-4 ml-4" value={name} onChange={(e) => setName(e.target.value)} />

                    <label htmlFor="genderMale">Male</label>
                    <input type="radio" id="genderMale" name="gender" className="w-1/12 p-2" value="male" checked={gender === 'male'} onChange={(e) => setGender(e.target.value)} />

                    <label htmlFor="genderFemale">Female</label>
                    <input type="radio" id="genderFemale" name="gender" className="w-1/12 p-2 " value="female" checked={gender === 'female'} onChange={(e) => setGender(e.target.value)} />
                </div>
                <div className="flex text-home-blue w-full mt-8">
                    <label htmlFor="address" >Address:</label>
                    <input type="text" id="address" className="w-full border-black border-b-[1px] mr-4 ml-4" value={address} onChange={(e) => setAddress(e.target.value)} />
                </div>
                <div className="flex text-home-blue w-full mt-8">
                    <label htmlFor="phone" className="mt-auto" >Phone:</label>
                    <input type="text" id="phone" className="w-[40%] border-black border-b-[1px] mr-4 ml-4" value={phone} onChange={(e) => setPhone(e.target.value)} />
                    <label htmlFor="birth-date" className="mt-auto"  >DOB:</label>
                    <input type="text" id="birth-date" className="w-[40%] border-black border-b-[1px] mr-4 ml-4" value={birthDate} onChange={(e) => setBirthDate(e.target.value)} />
                    <label htmlFor="age" className="mt-auto" >Age:</label>
                    <input type="text" id="age" className="w-[40%] border-black border-b-[1px] mr-4 ml-4" value={age} onChange={(e) => setAge(e.target.value)} />

                </div>
                <div className="flex text-home-blue w-full mt-8">
                    <label htmlFor="email" >Email:</label>
                    <input type="text" id="email" className="w-full border-black border-b-[1px] mr-4 ml-4" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <p className="mt-8 pr-8 pl-8">We are offering this scholarship to seniors graduating this year with interests in agriculture and
                        areas relating to agriculture. Applying seniors must be currently attending one of the following
                        high schools: Burley, Declo, Minico, Kimberly, Murtaugh, Hansen, Oakley, Twin Falls and must
                        be US Citizens.</p>
                </div>
                <div className="mt-4">
                    <p className="font-bold">Requirements</p>
                    <div className="font-light">
                        <p className="pl-12 mt-4">A. A transcript of classes and grades for the last four years, including a list of classes currently taking the spring semester of your senior year.</p>
                        <p className="pl-12 mt-4">B. Two letters of recommendation. One from a teacher and one from a community member.</p>
                        <p className="pl-12 mt-4">C. List all school organizations of which you have been a member during your school years and the years of membership in each organization.</p>
                        <p className="pl-12 mt-4">D. List all offices you have held in any school organization, club or student office and the year held.</p>
                        <p className="pl-12 mt-4">E. List all other school and non-school activities, work, and community service activities you have been active in.</p>
                        <p className="pl-12 mt-4">F. Write an essay up to one page giving the reason why you qualify for this scholarship.</p>
                        <p className="pl-12 mt-4">G. List the major you plan to pursue and how it applies to agriculture.</p>
                        <p className="pl-12 mt-4">H. Name of college/university/vocational school you plan to attend.</p>
                        <p className="pl-12 mt-4">I. A 4x6 (or larger) picture of yourself.</p>
                    </div>
                    <p className="font-bold mt-4">Please submit this application before the deadline.</p>
                </div>
                <div className="flex text-home-blue w-full mt-8">
                    <label htmlFor="sig">Signature:</label>
                    <input type="text" id="sig" className="w-[60%] border-black border-b-[1px] mr-4 ml-4" value={sig} onChange={(e) => setSig(e.target.value)} />
                    <label htmlFor="date" >Date:</label>
                    <input type="text" id="date" className="w-[40%] border-black border-b-[1px] mr-4 ml-4" value={date} onChange={(e) => setDate(e.target.value)} />
                </div>
                <div className="flex text-home-blue w-full mt-8">
                    <label htmlFor="attachment" className="mr-2">Attachment:</label>
                    <input type="file" id="attachment" accept="image/" multiple onChange={handleFileChange} />
                </div>
                <div className="w-full items-center justify-center align-middle text-center">
                     <button className="p-2 mt-8 text-xl bg-home-blue text-white rounded hover:bg-blue-900 active:bg-white active:text-home-blue border-home-blue border-[1px] " type="submit" disabled={isLoading || isSubmitted} >
                    {isLoading ? (
                        <div>Loading...</div>
                    ) : isSubmitted ? (
                        <div>Message Sent &#10003;</div>
                    ) : (
                        <div>Submit</div>
                    )}
                </button>
                </div>
               
            </form>

        </div>
    )
}

