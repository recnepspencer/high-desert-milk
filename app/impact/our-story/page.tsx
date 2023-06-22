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
          <p className=" text-right">
            Ray Robinson - one of the cofounders of High Desert Milk - begins
            his first dairy
          </p>
          <p className=" text-right">
          Six dairy producers found High 
Desert Milk - building a business of pharmaceuticals
 For their animals and creating a market for their
milk that better matches federal pricing.
          </p>
          <p className=" text-right">
          After many years of planning, High Desert Milk breaks 
ground for a world-class milk plant.
          </p>
          <p className=" text-right">
          The milk plant receives its first truckload 
of milk, milk dryer is started
          </p>
          <p className=" text-right">
          After a few difficult years, High Desert overcomes the 
highest construction costs in history as well as 
very low milk prices brought on by the Great Recession.
          </p>
          <p className=" text-right">
          Expansion complete - butter production begins.
          </p>
          <p className=" text-right">
          Plant expansion that includes MPC Dried Milk.
          </p>
          <p className=" text-right">
          High Desert Milk begins experimenting 
with direct-consumer sales by creating an R&D 
department that begins making new products.
          </p>

        </div>
        <div className="flex flex-col w-[10%]">1971</div>
        <div className="flex flex-col w-[40%]">w</div>
      </div>
    </div>
  );
}
