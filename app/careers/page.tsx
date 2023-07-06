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
            <div className="bg bg-home-impactYellow p-36">
            </div>
            <div className="p-4 flex flex-col items-center">
                <h1 className="text-4xl font-light p-4">
                    Current openings
                </h1>
                <div className="bg-slate-200 w-full p-4 rounded">
                    <div className="flex justify-between">
                        <div className="flex flex-col items-start">
                            <h1 className="text-2xl">
                                Research/developer
                            </h1>
                            <p>
                                -requirements
                            </p>
                            <p>
                                -wage
                            </p>

                        </div>
                        <div className="self-center">
                            <button className="bg-home-blue text-white p-2 hover:bg-blue-900 rounded active:text-home-blue active:bg-white">
                                Details/Apply
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}