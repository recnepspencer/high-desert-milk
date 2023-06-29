export default function ContactUs() {
    return (
        <div>
            <div className="pt-[148px]">
                <div className="relative text-home-blue">
                    <img src="../impact/our-community-page/map.png" alt="" className="pb-[400px] bg-home-productBlue" />
                    <div className="absolute top-0 w-full ">
                        <div className="flex flex-col ml-auto m-4 p-2 bg-white text-center rounded items-center w-6/12 mt-16 ">
                            <h1 className="text-2xl font-light">How can we help you? </h1>
                            <p className="text-sm font-sans w-8/12">Have a question or suggestion? Feel free to reach us through our form below!
                            </p>
                        </div>
                        <div className="flex flex-col ml-auto m-4 p-2 bg-white text-center rounded items-end w-4/12">
                            <p className="text-sm p-2">
                                M-F   8:00am - 5:00pm
                            </p>
                            <p className="text-sm p-2">1033 Idaho St, Burley, ID 83318
                            </p>
                            <p className="text-sm p-2">208.878.milk
                            </p>
                        </div>
                        <div className="w-full border-[1px] border-dashed border-slate-600 mt-20 mb-20"></div>
                        <form className="flex flex-col m-4 p-2 text-center rounded-lg items-center ml-auto mr-auto w-4/12 bg-slate-300">
                            <img src="../email-icon.svg" alt="" />
                            <p className="text-xs p-3">
                                We would love to hear from you!
                                Feel free to leave us a detailed
                                message through this form:
                            </p>
                            <div className="p-4">
                                <input type="text" placeholder="First Name:" className="p-2 rounded-full placeholder:text-home-blue placeholder:text-xs mb-[8px] text-home-blue text-xs w-full " />
                                <input type="text" placeholder="First Name:" className="p-2 rounded-full placeholder:text-home-blue placeholder:text-xs mb-[8px] text-home-blue text-xs w-full" />
                                <input type="text" placeholder="Company:" className="p-2 rounded-full placeholder:text-home-blue placeholder:text-xs mb-[8px] text-home-blue text-xs w-full" />
                                <input type="text" placeholder="Phone Number:" className="p-2 rounded-full placeholder:text-home-blue placeholder:text-xs mb-[8px] text-home-blue text-xs w-full" />
                                <input type="text" placeholder="Email:" className="p-2 rounded-full placeholder:text-home-blue placeholder:text-xs mb-[8px] text-home-blue text-xs w-full" />
                                <textarea name="Message:" placeholder="Message:" className="p-2  rounded-xl pt-2 placeholder:text-home-blue placeholder:text-xs text-home-blue text-xs w-full h-32"></textarea>
                            </div>
                            <img src="../side-arrow.png" alt="" className="w-8 bg-home-blue rounded"/>


                        </form>

                    </div>
                </div>
            </div>

        </div>
    )
}