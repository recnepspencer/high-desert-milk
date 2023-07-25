import Link from "next/link";
import Image from "next/image";

export default function Impact() {
  return (
    <div className="font-sans xs:pl-0 xs:pr-0 sm:pl-8 sm:pr-8 xs:w-[100vw] sm:min-w-[640px] lg:pl-[5vw] lg:pr-[5vw]">
      <div className="pt-[148px]"></div>
      <div>
        <img
          src="impact/groundbreaking.png"
          alt="High Desert Milk Groundbreaking"
          className="w-full"
        />
      </div>
      <div className="flex flex-col items-center bg-home-productBlue">
        <h1 className="mt-8 text-4xl text-home-blue">Impact</h1>
        <p className="mt-4 text-home-blue xs:text-center">
          Making a difference in the lives of others is our highest priority.
        </p>

        <h4 className="mt-16 text-white text-2xl">Our story</h4>
        <Link href="impact/our-story">
          <img src="side-arrow.png" alt="" className="w-8 bg-home-blue rounded mb-16 mt-4 hover:bg-blue-900 active:bg-white" />
        </Link>
      </div>
      <div className="flex xs:flex-col sm:flex-row">
        <div >
          <img src="impact/community.png" alt="" className="xs:object-fit sm:w-[140vh] " />
        </div>
        <div className="bg-home-orange flex flex-col items-center justify-center align-middle w-full pb-auto pt-auto xs:text-center xs:p-4">
          <h1 className="text-white font-light text-xl mt-10 ">Our Community</h1>
          <Link href={"impact/our-community"}>
            <img src="side-arrow.png" alt="" className="w-8 bg-home-blue rounded mb-16 mt-4" />
          </Link>
        </div>
      </div>
      <img src="impact/community-2.png" className="w-full bg-home-impactYellow p-8" />
    </div>
  );
}
