import React from 'react';
import Link from 'next/link';
import Image from 'next/image';



  interface Sustainer{
    title: string,
    text: string,
    imgurl: string,
  }


  export const SustainData: Sustainer[] = [
    {
        title: "Compost",
        text: "It’s common knowledge, cows produce a lot of waste. This natural solid and liquid waste from our dairies is stored and then recycled back into the soil for the nutrition of future crops. These nutrients are then re-consumed by our cattle, thus creating a recycling of the ecosystem.",
        imgurl: "/impact/sustainability/poop.png"

    },
    {
        title: "Digesters",
        text: "While the natural waste from our cattle is stored before it is recycled, methane gas is emitted. This natural gas can be used to generate electricity. Built for this purpose, digesters currently in use and under construction on our farms will generate enough electricity to power over 15,000 homes!", 
        imgurl: "/impact/sustainability/digesters.png"

    },
    {
        title: "Windmills",
        text: "Using the hills to their advantage, the windmills that occupy land owned by our founders produce on average 2.41 million kWh/month, or enough to power over 2,700 homes!",
        imgurl: "/impact/sustainability/windmills.png"

    },
    {
        title: "Water",
        text: "The water used in our plant is recycled through reverse osmosis and also UV treated. The byproduct of this is distilled water - cleaner than when it originally came into our facility. 85% of our water is reused before being drained.",
        imgurl: "/impact/sustainability/water.png"

    },
    {
        title: "Energy",
        text: "Our evaporator produces a lot of steam. Through advanced environmental technologies, this steam is reused 16 times to generate electricity before it escapes as heat - reducing electrical grid consumption.",
        imgurl: "/impact/sustainability/energy.png"

    },
    {
        title: "Smoke",
        text: "Seeing plumes from traditional factories may cause concern of environmental damage. The ‘smoke’ plumes that are emitted from our milk plant are in fact steam - 100% water. This steam has been reused 16 times to generate electricity for our plant. Thus we can see that this steam does not represent environmental contamination, but the opposite - environmental stewardship. This steam is constantly measured to ensure it does not contain pollutants.",
        imgurl: "/impact/sustainability/smoke.png"

    },
    {
        title: "Investments",
        text: "In our last investment, $1.75 million was put towards improving our environmental footprint through new and improved processes and technologies.",
        imgurl: "/impact/sustainability/investments.png"
    },
    {
        title: "Recycling",
        text: "Many of the products used at High Desert Milk - such as metal and paper products - (i.e. cardboard) are compacted and recycled on a daily basis.",
        imgurl: "/impact/sustainability/recycling.png"
    },
    {
        title: "Proximity",
        text: "High Desert prides itself in its environmental stewardship through proximity. All of the dairies that supply milk to our plant are located within a 30 mile radius (vs 50 mi. national average). This helps the environment through savings in fossil fuels and less pollution through transportation.",
        imgurl: "/impact/sustainability/proximity.png"
    },
    {
        title: "Robotics",
        text: "Robots are being used more and more frequently in our plant as well as our dairies and farms. By using automated systems in our production facilities, we have become more efficient with material and chemical use. Over 1,000 of our cows are milked by robots, creating efficiency, increasing cow happiness (yes, it’s true, by allowing them to be milked voluntarily, they are much more content), and cutting out many unnecessary steps in the process of bringing our products to your table.",
        imgurl: "/impact/sustainability/robot.png"
    },

  ]

  const Sustainability: React.FC = () => {
    return (
      <div className='xs:px-[5vw] sm:px-[9vw] md:px-[12vw] lg:px-[16vw] xl:px-[24vw] '>
        {SustainData.map((sustainer, index) => (
          <div key={index}>
            <div className="flex items-center">
              <h2 className="text-2xl pr-16 ">{sustainer.title}</h2>
              <Image loading="lazy" width={1000} height={1000} alt={`${sustainer.title} icon`} src={sustainer.imgurl} className="w-20" />
            </div>
            <p className="pt-4 pl-8 pr-8 pb-4">
              {sustainer.text}
            </p>
          </div>
        ))}
      </div>
    );
  }
  
  export default Sustainability;