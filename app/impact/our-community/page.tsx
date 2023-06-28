import Students from "@/app/Components/Scholarships";

export default function OurCommunity() {

    return (
        <div>
            <div className="pt-[148px]"></div>
            <div className="relative">
                <img src="../impact/our-community-page/our-community-bg.png" alt="" className="w-full"/>
                <h1 className="absolute bg-home-blue rounded-xl text-white text-5xl top-[65%] left-[50%] -translate-x-[50%] font-light p-4 w-[400px] mb-12"> Our Community</h1>
            </div>
            <div className="mt-10 mb-10">
                <h1 className="text-4xl text-home-blue pl-8 mb-8">
                    High Desert Milk Scholarship
                </h1>
                <button className="flex bg-home-blue items-center text-white text-md font-light pl-40 rounded-r-md hover:bg-blue-900 active:text-home-blue active:bg-white active:border-home-blue active:border-2">Apply For 2023 Here <img src="../side-arrow.png" className="w-8"/></button>
            </div>
            <div className="p-24 grid grid-cols-[250px_250px_250px] gap-5 text-[10px] leading-tight justify-center grid-cols- font-sans text-home-blue">
                <Students/>
            </div>
            <div className="bg-home-orange text-home-blue">
                <div className="grid grid-cols-2">
                    <div className="flex flex-col p-8 justify-center items-center max-w-[600px]">
                        <h1 className="text-4xl font-light p-8 min-w-[270px]">Africa Outreach</h1>
                        <p className="p-8 text-sm">Every year, High Desert Milk donates pallets 
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
        </div>
    )
}