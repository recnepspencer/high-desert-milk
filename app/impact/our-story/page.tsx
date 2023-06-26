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
      <div className="flex bg-home-productBlue justify-around pt-10 text-white font-sans">
        <div className="flex flex-col w-[40%] font-light">
          <p className=" text-right pb-24">
            Ray Robinson - one of the cofounders of High Desert Milk - begins
            his first dairy
          </p>
          <p className=" text-right pb-24">
            Six dairy producers found High Desert Milk - building a business of
            pharmaceuticals For their animals and creating a market for their
            milk that better matches federal pricing.
          </p>
          <p className=" text-right pb-8">
            After many years of planning, High Desert Milk breaks ground for a
            world-class milk plant.
          </p>
          <p className=" text-right pb-20">
            The milk plant receives its first truckload of milk, milk dryer is
            started
          </p>
          <p className=" text-right pb-12">
            After a few difficult years, High Desert overcomes the highest
            construction costs in history as well as very low milk prices
            brought on by the Great Recession.
          </p>
          <p className=" text-right">
            Expansion complete - butter production begins.
          </p>
          <p className=" text-right">
            Plant expansion that includes MPC Dried Milk.
          </p>
          <p className=" text-right">
            High Desert Milk begins experimenting with direct-consumer sales by
            creating an R&D department that begins making new products.
          </p>
        </div>
        <div className="flex flex-col w-[10%] align-middle">
          <h1 className="self-center">1971</h1>
          <div className="w-[7px] bg-white h-[7px] self-center rounded-full relative">
          <div className="w-[3px] bg-white h-36 self-center absolute ml-[2px]"></div>
          </div>
          <h1 className="self-center mt-36">2001</h1>

          <div className="w-[3px] bg-white h-48 self-center ml-[2px] mt-2"></div>

          <h1 className="self-center mt-2">2007</h1>

          <div className="w-[3px] bg-white h-16 self-center ml-[2px] mt-2"></div>

          <h1 className="self-center mt-2">2008</h1>

          <div className="w-[3px] bg-white h-28 self-center ml-[2px] mt-2"></div>

          <h1 className="self-center mt-2">2009</h1>

          <div className="w-[3px] bg-white h-24 self-center ml-[2px] mt-2"></div>



          
        </div>
        <div className="flex flex-col w-[40%]">
          <div className="h-40"></div>
          <img src="../impact/groundbreaking.png" alt="" />
          <img src="../impact/timeline-2.png" alt="" />
          <img src="../impact/timeline-3.png" alt="" />
          <img src="../impact/timeline-4.png" alt="" />
        </div>
      </div>
    </div>
  );
}
