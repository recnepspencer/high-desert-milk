import Image from "next/image";
import Link from "next/link";
import AnimatedText from "./Components/AnimatedText";

export default function Home() {
  return (
    <main className="flex flex-col w-full overflow-hidden xs:max-w-[100vw]">
      <div className="flex flex-col w-[100%] mt-[148px] sm:h-[100%] ">
        <img src="background.svg" className="fixed w-[100vw] object-cover " />
        <img
          src="background-logo.svg"
          className="relative m-auto mt-[4%]  h-[100%] w-6/12"
        />
      </div>
      <div className="relative flex flex-col pt-[10px]">
      <AnimatedText className="self-center p-0 m-0 leading-none animate-pulse opacity-80 font-bold text-white xs:text-md sm:text-2xl md:text-4xl lg:text-5xl"/>
          <p className="sm:mt-40 sm:ml-20 xs:mt-32 xs:ml-8 bg-white p-3 w-fit rounded xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          Pristine by Nature.
        </p>
        <p className="sm:mt-40 sm:ml-20 xs:mt-32 xs:mr-8 bg-white p-3 w-fit rounded xs:text-2xl sm:mr-20 sm:text-3xl md:text-4xl lg:text-5xl self-end">
          Clean by Routine.
        </p>
        <p className="sm:mt-40 sm:ml-20 xs:mt-32 xs:ml-8 bg-white p-3 w-fit rounded xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xs:mb-32 sm:mb-40">
          Consistent by Design.
        </p>
        

        <div className="flex justify-around bg-orange-500 w-[100%] m-0 pl-4 pr-4 xs:pt-4 xs:flex-col">
          <div className="relative sm:w-6/12 xs:mb-4 xs:border-b-home-blue xs:border-b-2 ">
            <img
              src="home-cows.png"
              alt="cute cows"
              className="w-[100%] ml-auto mr-auto pb-4"
            />
            <Link href="/impact">
                        <button className="sm:absolute sm:top-[85%] sm:left-[-6%] sm:pl-[40%] sm:pr-2 flex sm:justify-center sm:align-middle bg-home-blue text-white font-light rounded hover:bg-blue-900 active:text-home-blue active:bg-white xs:m-auto xs:p-2 xs:mb-4 xs:pl-8 xs:pr-8">
              <span className="mt-auto mb-auto pr-2">Our Story </span>{" "}
              <span className="text-4xl mb-2"> &gt; </span>
            </button>
            </Link>

          </div>
          
          <div className="relative flex flex-col justify-around sm:w-6/12">
            <img
              src="/home-milk.png"
              alt="cows"
              className="w-6/12 ml-auto mr-auto xs:w-8/12"
            />
            <img
              src="/home-butter.png"
              alt="cows"
              className="w-8/12 ml-auto mr-auto sm:mb-20 xs:mb-4 xs:w-10/12"
            />
            <Link href="/products">
                        <button className="sm:absolute sm:top-[85%] sm:left-[-6%] sm:pl-[40%] sm:pr-2 flex sm:justify-center sm:align-middle bg-home-blue text-white font-light rounded hover:bg-blue-900 active:text-home-blue active:bg-white xs:m-auto xs:p-2 xs:mb-4 xs:pl-8 xs:pr-8">
              <span className="mt-auto mb-auto pr-2">Our Products </span>{" "}
              <span className="text-4xl mb-2"> &gt; </span>
            </button>
            </Link>

          </div>
        </div>
        <div className="bg-white sm:p-20 xs:p-8">
                  <div className="flex justify-center border-t-4 border-black pr-20 pl-20 pt-20 xs:pt-8">
          <img src="idaho-preferred.svg" alt="" className="w-4/12"/>
          <img src="brogs.svg" alt="" className="sm:ml-20 xs:ml-12 w-4/12"/>
          <img src="real.svg" alt="" className="sm:ml-20 xs:ml-12 w-4/12"/>
          </div>
          <div className="flex justify-center mt-10 pr-20 pl-20">
          <img src="m.svg" alt="" className="w-4/12"/>
          <img src="k.svg" alt="" className="sm:ml-20 xs:ml-12 w-4/12"/>
          </div>
        </div>
      </div>
    </main>
    
  );
}
