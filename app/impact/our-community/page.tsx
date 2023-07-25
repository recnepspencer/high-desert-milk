import Students from "@/app/Components/Scholarships";
import Link from "next/link";

export default function OurCommunity() {

    return (
        <div className="w-[100vw] lg:pl-[5vw] lg:pr-[5vw]">
            <div className="pt-[148px]"></div>
            <div className="relative">
                <img src="../impact/our-community-page/our-community-bg.png" alt="" className="w-full" />
                <h1 className="absolute bg-home-blue rounded-xl text-white text-5xl top-[65%] left-[50%] -translate-x-[50%] font-light p-4 w-[400px] mb-12 xs:text-3xl xs:p-3 text-center xs:w-[300px]"> Our Community</h1>
            </div>
            <div className="mt-10 mb-10">
                <h1 className="text-4xl text-home-blue pl-8 mb-8">
                    High Desert Milk Scholarship
                </h1>
                <Link href="/impact/our-community/scholarship-application">
                    <button className="flex bg-home-blue items-center text-white text-md font-light pl-40 rounded-r-md hover:bg-blue-900 active:text-home-blue active:bg-white active:border-home-blue active:border-2">Apply For 2023 Here <img src="../side-arrow.png" className="w-8" /></button>
                </Link>
            </div>
            <div className="p-24 grid sm:grid-cols-[150px_150px_150px] md:grid-cols-[250px_250px_250px] gap-5 text-[10px] leading-tight justify-center grid-cols- font-sans text-home-blue xs:grid-cols-2">
                <Students />
            </div>
            <div className="bg-home-orange text-home-blue">
                <div className="grid grid-cols-1">
                    <div className="flex flex-col p-8 xs:grid xs:grid-cols-2 justify-center items-center">
                        <h1 className="text-4xl font-light p-8 xs:p-2">Africa Outreach</h1>
                        <p className="p-8 text-sm ">Every year, High Desert Milk donates pallets
                            of our powdered milk in Zimbabwe. As you can
                            see from these photos, the natives love being
                            able to enjoy the flavor and nutrients that it
                            provides - most of them not having tasted a
                            glasss of milk since they were infants. Makes
                            you ask yourself - was I able to enjoy a glass of
                            milk today?</p>

                    </div>
                    <div>
                        <img src="../impact/our-community-page/africa.png" alt="" />
                    </div>
                </div>

            </div>
            <div>
                <div className="sm:relative sm:min-w-[780px] p-4 sm:h-[800px] xs:flex">
                    <div className="flex sm:flex-col items-center p-4 w-6/12 ml-auto xs:mr-auto pt-16 text-home-blue xs:grid xs:grid-cols-1 xs:w-full">
                        <div>
                            <h1 className="text-3xl mb-10">
                                Community Giveaways</h1>
                            <p className="text-sm">In a unique way of giving back to the community, thanking
                                everyone for their support, and keeping up with the trends,
                                High Desert Milk enjoys doing the occasional giveaway during
                                important times of the year. Have you entered before?</p>
                        </div>
                        <div>

                            <img src="../impact/our-community-page/giveaways.png" className="sm:absolute sm:w-9/12 sm:left-0 sm:top-0 xs:w-full" />
                        </div>

                    </div>
                </div>
            </div>
            <div className="bg-home-productBlue p-8 text-white h-[425px]">
                <h1 className="text-3xl font-light p-4">High Desert Milk Golf Scramble</h1>
                <div className="flex p-4">
                    <p className="text-xs font-sans pt-12">
                        High Desert Milk puts together an annual Golf Scramble
                        event in the month of August for all our valued Customers and Vendors
                        to attend. This event is a two day event with plant tours and a Meet and
                        Greet the first evening with the Golf Scramble the next morning and
                        lunch afterward. This event is a great way for the High Desert Milk Management
                        and Owners to get a chance to visit and thank all our wonderful supporters.
                        The money raised by this event goes towards the scholarships given to the
                        High Desert Milk Scholarship recipient winners.
                    </p>
                    <img src="../impact/our-community-page/golf.png" alt="" className="w-[150px] pl-8 object-contain" />
                </div>
            </div>
            <div className=" bg-home-orange p-4 text-home-blue">
                <h1 className="text-3xl font-light p-12">Mini-Cassia/Minidoka FFA Sales</h1>
                <p className="text-xs font-sans p-4">High Desert Milk supports our area 4-H and FFA members and to
                    show our support, we take great pride in attending the Livestock Sales
                    each year and taking part in buying some of the great livestock that the
                    area’s younger generation raise. Here is who we have supported recently:</p>

                <div className="grid grid-cols-5 pl-24 pr-24 text-xs gap-5">
                    <div>
                        Shaelyn Young

                    </div>
                    <div>
                        Shelbie Draper


                    </div>
                    <div>
                        Karter Zampedri

                    </div>
                    <div>
                        Makayla Scott


                    </div>
                    <div>
                        Lee Nyblade


                    </div>
                    <div>
                        Randy Scott


                    </div>
                    <div>
                        Kaelen Winnett


                    </div>
                    <div>
                        Dalyce Davis

                    </div>
                    <div>
                        Bailie Smith


                    </div>
                    <div>
                        MaKenna Winnett


                    </div>
                    <div>
                        Clarabell Evens


                    </div>
                    <div>
                        Mallory Scott


                    </div>
                    <div>
                        Renee Scott


                    </div>
                    <div>
                        Stetson Rodgers


                    </div>

                </div>
            </div>
        </div>
    )
}
