import AnimatedText from "@/app/Components/AnimatedText";
import Sustainability, { SustainData } from "@/app/Components/Sustainability";
import Image from "next/image";
import Link from "next/link";

export default function OurStory() {
  return (
    <div className="w-[100vw] lg:pl-[5vw] lg:pr-[5vw] overflow-hidden">
      <div className="pt-[148px]"></div>
      <div className="sm:flex xs:grid xs:grid-cols-1">
        <div className="flex flex-col items-center w-full justify-center align-middle text-home-blue xs:p-12">
          <h1 className="text-4xl m-2">Our Story</h1>
          <AnimatedText className="leading-[40px] text-6xl animate-pulse opacity-80" />
        </div>
        <div className="flex justify-end w-[100%] xs:p-12">
          <Image loading="lazy"
          width={4068} height={3052}
            src="/impact/our-story.png"
            alt="Nostalgic picture in front of a dairy"
            className="mt-4 mb-4 "
          />
        </div>
      </div>
      <div className="flex flex-col bg-home-recipeBlue border-t-white border-t-[1px] p-4 mt-8">
        <h1 className="text-center p-4 pl-8 font-light text-4xl text-home-blue">How we began:</h1>
        <iframe width="100%" height="400" src="https://www.youtube.com/embed/FMS3e2vlkQ4" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
      
      <div className="flex bg-home-productBlue justify-between pb-8">
        
        <div className="grid grid-cols-[minmax(45vw,_20px)_10vw] w-full justify-between pt-10  text-center text-white  grid-rows-[200px_250px_100px_100px_180px_250px_150px_100px_140px]">
          <div className="text-right pl-8 pr-8 h-[10px] xs:pl-2 xs:pr-2">
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
          <div className="text-right pl-8 pr-8 xs:pl-2 xs:pr-2">
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
          <div className="text-right pl-8 pr-8 xs:pl-2 xs:pr-2">
            <p className="h-12">
              After many years of planning, High Desert Milk breaks ground for a
              world-class milk plant.
            </p>
          </div>
          <div className="flex flex-col text-center">
            <p>2007</p>
            <div className="w-[3px] bg-white h-full self-center ml-[2px]"></div>
          </div>
          <div className="text-right pl-8 pr-8 xs:pl-2 xs:pr-2">
            <p className="h-12">
              The milk plant receives its first truckload of milk, milk dryer is
              started
            </p>
          </div>
          <div className="flex flex-col text-center">
            <p>2008</p>
            <div className="w-[3px] bg-white h-full self-center ml-[2px]"></div>
          </div>
          <div className="text-right pl-8 pr-8 xs:pl-2 xs:pr-2">
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
          <div className="text-right pl-8 pr-8 xs:pl-2 xs:pr-2">
            <p className="h-12">
              Expansion complete - butter production begins.
            </p>
          </div>
          <div className="flex flex-col text-center">
            <p>2012</p>
            <div className="w-[3px] bg-white h-full self-center ml-[2px]"></div>
          </div>
          <div className="text-right pl-8 pr-8 xs:pl-2 xs:pr-2">
            <p className="h-12">
              Expansion continues - consumer line for butter begins
            </p>
          </div>
          <div className="flex flex-col text-center">
            <p>2017</p>
            <div className="w-[3px] bg-white h-full self-center ml-[2px]"></div>
          </div>
          <div className="text-right pl-8 pr-8 xs:pl-2 xs:pr-2">
            <p className="h-12">
              Plant expansion that includes MPC Dried Milk.

            </p>
          </div>
          <div className="flex flex-col text-center">
            <p>2020</p>
            <div className="w-[3px] bg-white h-full self-center ml-[2px]"></div>
          </div>
          <div className="text-right pl-8 pr-8 xs:pl-2 xs:pr-2">
            <p className="h-12">
              High Desert Milk begins experimenting with direct-consumer sales by
              creating an R&D department that begins making new products.
            </p>
          </div>
          <div className="flex flex-col text-center">
            <p>2020</p>
            <p className="text-5xl">&#8595;</p>
          </div>


        </div>

        <div className="flex flex-col w-[80%] pl-8 max-w-[500px] xs:w-[100%] xs:pl-2">
          <div className="mt-auto pt-[200px]"></div>
          <Image loading="lazy" width={7680} height={5164} src="/impact/groundbreaking.png" alt="Timeline photo 1" />
          <Image loading="lazy" width={3484} height={2612} src="/impact/timeline-2.png" alt="Timeline photo 2" />
          <Image loading="lazy" width={3972} height={2648} src="/impact/timeline-3.png" alt="Timeline photo 3" />
          <Image loading="lazy" width={3516} height={4688} src="/impact/timeline-4.png" alt="Timeline photo 4" />

        </div>
      </div>

      <div className="bg-home-orange p-4">
        <p className="text-white pl-8 text-2xl  font-light">Our People</p>
        <img src="../impact/our-people.png" alt="" />
      </div>
      <div className="flex flex-col  text-home-sustainGreen p-8">
        <div className="">
          <h1 className="text-4xl font-bold">
            Sustainability
          </h1>
          <p className="p-4 text-md">As stewards of the land, high desert owners not only
            use the most environmental practices with their land and animals,
            but also in the process of making their milk products. Here is a brief mention of the
            ways that High Desert and its owners have been able to take care of our planet Earth
            thus far.</p>
        </div>
        <Sustainability />
      </div>
      <div className="flex justify-end">
        <Link href="impact/our-community">
          <button className="flex bg-home-blue pl-6 pr-12 pt-1 pb-1 text-white font-light text-xl mt-10 mb-20 rounded  hover:underline decoration-white">
            See How We Impact Our Community <img src="../side-arrow.png" className="w-8" />
          </button>
        </Link>

      </div>
      <div className="flex flex-col bg-home-recipeBlue border-t-white border-t-[1px] p-4 mt-8">
        <h1 className="text-center p-4 pl-8 font-light text-4xl text-white">Virtual Plant Tour:</h1>
        <iframe width="100%" height="400" src="https://www.youtube.com/embed/xMtlE4v3H9Q" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>



    </div>
  );
}
