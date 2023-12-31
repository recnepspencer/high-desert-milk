import Students from "@/app/Components/Scholarships";
import Image from "next/image";
import Link from "next/link";

export default function OurCommunity() {

    return (
        <div className="w-[100vw]">
            <div className="pt-[148px]"></div>
            <div className="relative">
                <Image sizes="(max-width: 640px) 640px, (max-width: 750px) 750px, (max-width: 828px) 828px, 1000px" loading="lazy" width={7680} height={4740} src="/impact/our-community-page/our-community-bg.png" alt="Our community" className="w-full" />
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
            <div className="p-24 grid sm:grid-cols-[150px_150px_150px] md:grid-cols-[250px_250px_250px] gap-5 text-[10px] leading-tight justify-center grid-cols-  text-home-blue xs:grid-cols-2">
                <Students />
            </div>
            <div className="bg-home-orange text-home-blue">
                <div className="grid grid-cols-1">
                    <div className="flex flex-col p-8 xs:grid xs:grid-cols-1 justify-center items-center xs:text-center">
                        <h1 className="text-6xl font-light p-4 xs:p-2">Africa Outreach</h1>
                        <p className="p-4 text-md xs:p-2 lg:px-[17vw] xl:px-[20vw] ">Every year, High Desert Milk donates pallets
                            of our powdered milk in Zimbabwe. As you can
                            see from these photos, the natives love being
                            able to enjoy the flavor and nutrients that it
                            provides - most of them not having tasted a
                            glasss of milk since they were infants. Makes
                            you ask yourself - was I able to enjoy a glass of
                            milk today?</p>

                    </div>
                    <div className="flex justify-center">
                        <Image loading="lazy" width={4300} height={4612} src="/impact/our-community-page/africa.png" alt="Africa Service Projects" className="sm:max-w-[66%] pr-12" />
                    </div>
                </div>

            </div>
            <div>
                <div className="flex xs:flex-col p-4">
                <div className="w-[50%] xs:w-full p-8 text-home-blue sm:hidden">
                        <h1 className="text-[5vw]">
                            Community Giveaways</h1>
                        <p className="">In a unique way of giving back to the community, thanking
                            everyone for their support, and keeping up with the trends,
                            High Desert Milk enjoys doing the occasional giveaway during
                            important times of the year. Have you entered before?</p>
                    </div>
                    <div className="w-[50%] xs:w-full">

                        <Image sizes="(max-width: 640px) 640px, (max-width: 750px) 750px, (max-width: 828px) 828px, 1000px" loading="lazy" width={5400} height={6380} alt="giveaways" src="/impact/our-community-page/giveaways.png" className="w-full" />
                    </div>
                    <div className="w-[50%] xs:w-full p-8 text-home-blue xs:hidden">
                        <h1 className="text-[5vw] pb-12">
                            Community Giveaways</h1>
                        <p className="text-md">In a unique way of giving back to the community, thanking
                            everyone for their support, and keeping up with the trends,
                            High Desert Milk enjoys doing the occasional giveaway during
                            important times of the year. Have you entered before?</p>
                    </div>

                </div>
            </div>
            <div className="bg-home-productBlue p-8 text-white md:pb-[20vh] md:px-[5vw] lg:px-[10vw]">
                <h1 className="text-6xl font-light p-4">High Desert Milk Golf Scramble</h1>
                <div className="p-4">
                    <Image sizes="(max-width: 640px) 640px, (max-width: 750px) 750px, (max-width: 828px) 828px, 1000px" loading="lazy" width={1200} height={1200} src="/impact/our-community-page/golf.png" alt="Golf Sponsorship" className="float-right w-[20vw] m-4 max-w-[200px]" />
                    <p className="text-md  pt-12 xs:p-2 xs:pt-2">
                        High Desert Milk puts together an annual Golf Scramble
                        event in the month of August for all our valued Customers and Vendors
                        to attend. This event is a two day event with plant tours and a Meet and
                        Greet the first evening with the Golf Scramble the next morning and
                        lunch afterward. This event is a great way for the High Desert Milk Management
                        and Owners to get a chance to visit and thank all our wonderful supporters.
                        The money raised by this event goes towards the scholarships given to the
                        High Desert Milk Scholarship recipient winners.
                    </p>

                </div>
            </div>
            <div className=" bg-home-orange p-4 text-home-blue">
                <h1 className="text-3xl font-light p-12">Mini-Cassia/Minidoka FFA Sales</h1>
                <p className="text-sm  p-4">High Desert Milk supports our area 4-H and FFA members and to
                    show our support, we take great pride in attending the Livestock Sales
                    each year and taking part in buying some of the great livestock that the
                    area’s younger generation raise. Here is who we have supported recently:</p>

                <div className="grid xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 text-sm gap-5">
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
