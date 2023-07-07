import Image from "next/image";
import Link from "next/link";
import AnimatedText from "./Components/AnimatedText";

export default function Home() {
  return (
    <main className="flex flex-col min-w-[640px] overflow-hidden">
      <div className="flex flex-col w-[100%] mt-[148px] h-[100%]">
        <img src="background.svg" className="fixed w-full min-w-[700px]" />
        <img
          src="background-logo.svg"
          className="relative m-auto mt-[4%]  h-[100%] w-7/12"
        />
      </div>
      <div className="relative flex flex-col pt-[10px]">
      <AnimatedText size="4xl" color="white" marginTop={-15} animate={true}/>
          <p className="mt-40 ml-20 bg-white p-3 w-fit rounded  sm:text-3xl md:text-4xl lg:text-5xl">
          Pristine by Nature.
        </p>
        <p className="mt-40 text-right mr-20 bg-white p-3 sm:text-3xl md:text-4xl lg:text-5xl rounded w-fit self-end">
          Clean by Routine.
        </p>
        <p className="mt-40 ml-20 bg-white p-3 sm:text-3xl md:text-4xl lg:text-5xl rounded w-fit mb-40">
          Consistent by Design.
        </p>
        

        <div className="flex justify-around bg-orange-500 w-[100%] m-0 pl-4 pr-4">
          <div className="relative w-6/12">
            <img
              src="home-cows.png"
              alt="cute cows"
              className="w-[100%] ml-auto mr-auto"
            />
            <Link href="/impact">
                        <button className="absolute top-[85%] left-[-6%] pl-[40%] pr-2 flex justify-center align-middle bg-home-blue text-white font-light rounded hover:bg-blue-900 active:text-home-blue active:bg-white">
              <span className="mt-auto mb-auto pr-2">Our Story </span>{" "}
              <span className="text-4xl mb-2"> &gt; </span>
            </button>
            </Link>

          </div>
          
          <div className="relative flex flex-col justify-around w-6/12">
            <img
              src="/home-milk.png"
              alt="cows"
              className="w-6/12 ml-auto mr-auto"
            />
            <img
              src="/home-butter.png"
              alt="cows"
              className="w-8/12 ml-auto mr-auto mb-20"
            />
            <Link href="/products">
                        <button className="absolute top-[85%] right-[-6%] pr-[40%] pl-2 flex justify-center align-middle bg-home-blue text-white font-light rounded hover:bg-blue-900 active:text-home-blue active:bg-white">
              <span className="mt-auto mb-auto pr-2">Our Products </span>{" "}
              <span className="text-4xl mb-2"> &gt; </span>
            </button>
            </Link>

          </div>
        </div>
        <div className="bg-white p-20">
                  <div className="flex justify-center border-t-4 border-black pr-20 pl-20 pt-20">
          <img src="idaho-preferred.svg" alt="" className="w-4/12"/>
          <img src="brogs.svg" alt="" className="ml-20 w-4/12"/>
          <img src="real.svg" alt="" className="ml-20 w-4/12"/>
          </div>
          <div className="flex justify-center mt-10 pr-20 pl-20">
          <img src="m.svg" alt="" className="w-4/12"/>
          <img src="k.svg" alt="" className="ml-20 w-4/12"/>
          </div>
        </div>
      </div>
    </main>
    
  );
}
