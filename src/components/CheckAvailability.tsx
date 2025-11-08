
const CheckAvailability = () => {
    return(
        <>
        <div className="hidden xl:block bg-[#333333] absolute top-[4.5%] left-[80%] transform -translate-x-1/2 -translate-y-1/2 rounded-[10px] p-6 border border-[#FFFFFF33]">
            <div className="mb-4 flex items-center gap-2">
                <div>
                    <span className="text-[14px] font-medium text-[#FFFFFF99] line-through">₹1,49,086</span>
                </div>
                <div>
                    <span className="text-[20px] font-bold text-[#FFFFFF]">₹1,00,086</span>
                    <span className="text-[12px] font-medium  text-[#FFFFFF]">/Night</span>
                </div>
            </div>

            <hr className="border border-[#FFFFFF1A] mb-4"/>
            
            <div className="w-[352px] h-[31px] bg-[#404040] rounded-[40px] border border-[#B6A16D66] pl-4 pr-1 flex items-center justify-between mb-4">
                <span className="text-[11px] font-medium text-[#F9D680]">Special discounts available!!</span>
                <button className="bg-[#B49F6B] text-black w-[81px] h-[23px] top-[811px]left-[1231px] rounded-[30px] text-[10px] font-semibold">Unlock Price</button>
            </div>
      
            <div className="space-y-4">

                <div className=" h-[48px]  flex items-center justify-between rounded-[4px] border border-[#DDDDDD4D] p-4">
                    <div className="flex items-center gap-4">
                        <img src="/calendar.png" />
                        <span className="text-[14px] font-regular text-[#999999]">Check in - Check out</span>
                    </div>
                    <div className="">
                        <img src="/up&down.png" />
                    </div>
                </div>
        
                <div className="h-[48px]  flex items-center justify-between rounded-[4px] border border-[#DDDDDD4D] p-4 ">
                    <div className="flex items-center gap-4">
                        <img src="/person.png" />
                        <span className="text-[14px] font-regular text-[#999999]">2 Guests</span>
                    </div>
                    <div>
                        <img src="/up&down.png" />
                    </div>
                </div>
        
                <button className="w-[352px] h-[48px]  rounded-[4px] bg-[#D2BA7F] text-[14px] font-semibold text-black">Check Availability</button>
            </div>
        </div>
        <div className="block xl:hidden h-[80.5px] w-full fixed bottom-0">
                {/* Phone only */}
                <div className="bg-black py-[16px] flex items-center justify-between px-[16px]">
                    <div>
                        <div>
                            <p className="text-[12px] font-medium text-[#999999] line-through">₹1,49,086</p>
                        </div>
                        <div className="flex">
                            <p className="text-[16px] font-bold text-[#FFFFFF] leading-[150%]">₹1,00,086
                                <span className="text-[12px] leading-[150%]">/night</span>
                            </p>
                        </div>
                    </div>
                    <div>
                    <button className="w-[185px] h-[48px]  rounded-[4px] bg-[#D2BA7F] text-[14px] font-semibold text-black">Check Availability</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CheckAvailability;