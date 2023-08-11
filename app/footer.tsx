import Image from "next/image"
import Link from "next/link"

export default function Footer(){
    return (
        <footer className="bg-home-blue relative pt-10 pl-12 pr-12 w-[100vw]">
          <div className="xs:flex-col xs: xs:items-center xs:flex sm:flex text-white border-white border-t-2 sm:justify-around">
            <div className="flex flex-col mt-7 mr-[20px] min-w-[170px]">
              <h6 className="text-center text-s leading-7 font-light">BUSINESS</h6>
              <Link href="https://highdesertmilk-my.sharepoint.com/:f:/p/coakes/Ej7LAMahyoZCkLc8iQMQiJMBBIwOWRHUK934R9t4epOsoQ?e=ubUwYL" className="text-xs font-thin leading-7">Customer Portal (Businesses)</Link>
              <Link href="/careers" className="text-xs font-thin leading-7">Career</Link>
              <Link href="/impact/our-community/scholarship-application" className="text-xs font-thin leading-7">Scholarship</Link>
              <Link href="/contact" className="text-xs font-thin leading-7">Contact</Link>
            </div>
            <div className="flex flex-col mt-7 mr-[40px] min-w-[170px]">
              <h6 className="text-center text-s leading-7 font-light">DAIRY MARKET INFORMATION</h6>
              <Link href="https://www.cmegroup.com/trading/agricultural/spot-call-data.html" target="_blank"
        rel="noopener noreferrer" className="text-xs font-thin leading-7 ml-5">CME Group</Link>
              <Link href="https://www.northwestfcs.com/ag-industries/industry-insights/dairy" target="_blank"
        rel="noopener noreferrer" className="text-xs font-thin leading-7 ml-5">Daily Dairy Report</Link>
              <Link href="https://www.cheesemarketnews.com/" target="_blank"
        rel="noopener noreferrer" className="text-xs font-thin leading-7 ml-5">Cheese Market News</Link>
              <Link href="https://member.northwestfcs.com/" target="_blank"
        rel="noopener noreferrer" className="text-xs font-thin leading-7 ml-5">Northwest Farm Credit Services</Link>
            </div>
            <div className="w-1/3 mt-[20px]">

                <Image src="/logo.svg" width={151} height={110} alt="" className="w-full max-w-[20vw]"/>
              
            </div>
          </div>
          <div className="flex justify-center align-middle mt-10 mb-10">
            <Link href="https://www.facebook.com/profile.php?id=100058249872750" target="_blank"
        rel="noopener noreferrer" className="mr-10 w-8">
          <Image src="/facebook-icon.svg" width={659} height={655} alt="" />
          </Link>
            <Link href="https://www.instagram.com/highdesertmilk/" target="_blank"
        rel="noopener noreferrer" className="mr-10 w-8">
          <Image src="/instagram-icon.svg" width={450} height={450} alt="" />
          </Link>
            
            <Link href="/contact">
              <Image src="/email-icon.svg" width={489} height={483} alt="" className="w-8 "/>
              </Link>
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
