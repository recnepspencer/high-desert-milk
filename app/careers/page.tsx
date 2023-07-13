import Listing, { JobData } from "../Components/Job";

export default function Careers() {
    return (
        <div className="text-home-blue">
            <div className="pt-[148px]"></div>
            <div className="flex">
                <img src="careers.png" alt="" className="w-7/12" />
                <div className="flex flex-col p-4 text-center w-full justify-center">
                    <h1 className="text-4xl font-light pb-8">Careers</h1>
                    <p className="font-sans text-sm">High Desert Milk is expanding and we
                        would love for you to join in our growth
                        and success! Our employees are proud
                        of the products that we make and we
                        are always looking for more team
                        members who take pride in their work
                        and want to be behind the smile that
                        comes when our customers use our
                        products!</p>

                </div>
            </div>
            <div className=" bg-home-impactYellow flex justify-center align-middle p-16">
                <h1 className="text-[5vw] p-4">
                    Current openings
                </h1>
            </div>
            
            <div> 
                {JobData.map((job) => (
                    <Listing key={job.id} />
                ))}
            </div>

        </div>
    )
}