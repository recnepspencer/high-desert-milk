import Link from "next/link"

export default function Footer(){
    return (
        <footer className="bg-home-blue relative pt-10 pl-20 pr-20">
          <div className="flex text-white border-white border-t-2">
            <div className="flex flex-col mt-7 mr-[40px]">
              <h6 className="text-center text-s leading-7 font-light">BUSINESS</h6>
              <Link href="" className="text-xs font-thin leading-7">Customer Portal (Businesses)</Link>
              <Link href="" className="text-xs font-thin leading-7">Career</Link>
              <Link href="" className="text-xs font-thin leading-7">Employee Login</Link>
              <Link href="" className="text-xs font-thin leading-7">Scholarship</Link>
              <Link href="" className="text-xs font-thin leading-7">Contact</Link>
            </div>
            <div className="flex flex-col mt-7 mr-[70px]">
              <h6 className="text-center text-s leading-7 font-light">DAIRY MARKET INFORMATION</h6>
              <Link href="" className="text-xs font-thin leading-7 ml-5">CME Group</Link>
              <Link href="" className="text-xs font-thin leading-7 ml-5">Daily Dairy Report</Link>
              <Link href="" className="text-xs font-thin leading-7 ml-5">Cheese Market News</Link>
              <Link href="" className="text-xs font-thin leading-7 ml-5">Northwest Farm Credit Services</Link>
            </div>
            <div className="w-1/3 mt-[20px]">

                <img src="logo.svg" alt="" className="w-full"/>
              
            </div>
          </div>
          <div className="flex justify-center align-middle mt-10 mb-10">
            <Link href="https://www.facebook.com/profile.php?id=100058249872750" className="mr-10 w-8"><img src="facebook-icon.svg" alt="" /></Link>
            <Link href="https://www.instagram.com/highdesertmilk/" className="mr-10 w-8"><img src="instagram-icon.svg" alt="" /></Link>
            
            <Link href=""><img src="email-icon.svg" alt="" className="w-8"/></Link>
          </div>
          <div className="flex justify-around text-white text-[10px] font-extralight text-center pb-5">
            <div className="mr-[20px]">
            <p>
              All Pricing similar to CME Group, Global Dairy Trade, NDPSR
            </p>
            </div>
            <div className="mr-[20px]">
              <p>
                All milk suppied to High Desert Milk is rBST free.
              </p>
              <p>
                The FDA has stated that no significant difference has been shown between milk derived from rBST treated and non rBST treated cows.
              </p>
            </div>
            <div>
              <p>&copy; 2023 High Desert Milk. All Rights Reserved</p>
            </div>
          </div>
        </footer>
    )
}
