import Sustainability, { SustainData } from "@/app/Components/Sustainability";
import Link from "next/link";

export default function OurStory() {
  return (
    <div>
      <div className="pt-[148px]"></div>
      <div className="flex">
        <div className="flex flex-col items-center w-full justify-center align-middle text-home-blue">
          <h1 className="text-4xl ">Our Story</h1>
          <h2 className="text-6xl font-serif">∨ ∨ ∨</h2>
        </div>
        <div className="flex justify-end w-[100%]">
          <img
            src="../impact/our-story.png"
            alt="Nostalgic picture in front of a dairy"
            className="mt-4 mb-4 "
          />
        </div>
      </div>
      <div className="flex bg-home-productBlue justify-between">
        <div className="grid grid-cols-[minmax(300px,_4fr)_20%] w-full justify-between pt-10  text-center text-white font-sans grid-rows-[200px_250px_100px_100px_180px_250px_150px_100px_140px]">
          <div className="text-right pl-8 pr-8 h-[10px]">
            <p className="">
              Ray Robinson - one of the cofounders of High Desert Milk - begins
              his first dairy.
            </p>
          </div>
          <div className="flex flex-col text-center">
            <p>1971</p>
            <div className="w-[7px] bg-white h-[7px] self-center rounded-full relative">
              <div className="w-[3px] bg-white h-[175px] self-center absolute ml-[2px]"></div>
            </div>
          </div>
          <div className="text-right pl-8 pr-8">
            <p className="h-12">
              Six dairy producers found High Desert Milk - building a business of
              pharmaceuticals For their animals and creating a market for their
              milk that better matches federal pricing.
            </p>
          </div>
          <div className="flex flex-col text-center">
            <p>2001</p>
            <div className="w-[3px] bg-white h-full self-center ml-[2px]"></div>
          </div>
          <div className="text-right pl-8 pr-8">
            <p className="h-12">
              After many years of planning, High Desert Milk breaks ground for a
              world-class milk plant.
            </p>
          </div>
          <div className="flex flex-col text-center">
            <p>2007</p>
            <div className="w-[3px] bg-white h-full self-center ml-[2px]"></div>
          </div>
          <div className="text-right pl-8 pr-8">
            <p className="h-12">
              The milk plant receives its first truckload of milk, milk dryer is
              started
            </p>
          </div>
          <div className="flex flex-col text-center">
            <p>2008</p>
            <div className="w-[3px] bg-white h-full self-center ml-[2px]"></div>
          </div>
          <div className="text-right pl-8 pr-8">
            <p className="h-12">
              After a few difficult years, High Desert overcomes the highest
              construction costs in history as well as very low milk prices
              brought on by the Great Recession.
            </p>
          </div>
          <div className="flex flex-col text-center">
            <p>2009</p>
            <div className="w-[3px] bg-white h-full self-center ml-[2px]"></div>
          </div>
          <div className="text-right pl-8 pr-8">
            <p className="h-12">
              Expansion complete - butter production begins.
            </p>
          </div>
          <div className="flex flex-col text-center">
            <p>2012</p>
            <div className="w-[3px] bg-white h-full self-center ml-[2px]"></div>
          </div>
          <div className="text-right pl-8 pr-8">
            <p className="h-12">
              Expansion continues - consumer line for butter begins
            </p>
          </div>
          <div className="flex flex-col text-center">
            <p>2017</p>
            <div className="w-[3px] bg-white h-full self-center ml-[2px]"></div>
          </div>
          <div className="text-right pl-8 pr-8">
            <p className="h-12">
              Plant expansion that includes MPC Dried Milk.

            </p>
          </div>
          <div className="flex flex-col text-center">
            <p>2020</p>
            <div className="w-[3px] bg-white h-full self-center ml-[2px]"></div>
          </div>
          <div className="text-right pl-8 pr-8">
            <p className="h-12">
              High Desert Milk begins experimenting with direct-consumer sales by
              creating an R&D department that begins making new products.
            </p>
          </div>
          <div className="flex flex-col text-center">
            <p>2020</p>
            <p className="text-5xl font-serif">&#8595;</p>
          </div>


        </div>

        <div className="flex flex-col w-[80%] pl-8 min-w-[400px] max-w-[500px]">
          <div className="mt-auto pt-[200px]"></div>
          <img src="../impact/groundbreaking.png" alt="" />
          <img src="../impact/timeline-2.png" alt="" />
          <img src="../impact/timeline-3.png" alt="" />
          <img src="../impact/timeline-4.png" alt="" />

        </div>
      </div>
      <div className="bg-home-orange p-4">
        <p className="text-white pl-8 text-2xl font-sans font-light">Our People</p>
        <img src="../impact/our-people.png" alt="" />
      </div>
      <div className="flex flex-col font-sans text-home-sustainGreen p-8">
        <div className="p-4">
          <h1 className="text-4xl font-light">
            Sustainability
          </h1>
          <p className="p-4 text-sm">As stewards of the land, high desert owners not only
            use the most environmental practices with their land and animals,
            but also in the process of making their milk products. Here is a brief mention of the
            ways that High Desert and its owners have been able to take care of our planet Earth
            thus far.</p>
        </div>
        <Sustainability />
        <p className="text-[10px] pl-32 w-16 text-gray-400">https://www.northwestfcs.com/ag-industries/industry-insights/dairy</p>
      </div>
      <div className="flex justify-end">
        <Link href="impact/our-community">
          <button className="flex bg-home-blue pl-6 pr-12 pt-1 pb-1 text-white font-light text-xl mt-10 mb-20 rounded font-sans hover:underline decoration-white">
            See How We Impact Our Community <img src="../side-arrow.png" className="w-8" />
          </button>
        </Link>

      </div>



    </div>
  );
}
