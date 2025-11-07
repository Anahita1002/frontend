const Footer = () =>{
    return(
        
        <div className="border-[1px] border-[#FFFFFF1A] mt-[100px]">
            <div className="block md:hidden ">
                {/* Phone only */}
                <div className="bg-[#333333] pt-[24px] flex items-center gap-2">
                    <img src="/logoOnly.png" className="pl-[20px]" />
                <div>
                    <p className="text-[17px]">SaffronStays</p>
                    <p className="text-[10px]">where families bond</p>
                </div>
                </div>
            </div>
            <div className="md:h-[353px] pl-[20px] gap-y-[30px] bg-[#333333] flex flex-col md:flex-row items-start md:pl-[100px] py-[20px] md:gap-[102px]">
                {/* Upper Grey portion */}
                <ul className="space-y-[20px]">
                    <li className="text-[18px] text-[#FFFFFFCC] leading-[150%] font-semibold">Company</li>
                    <li className="text-[14px] text-[#FFFFFF99] leading-[150%] font-medium">Saffronstays</li>
                    <li className="text-[14px] text-[#FFFFFF99] leading-[150%] font-medium">Signature</li>
                    <li className="text-[14px] text-[#FFFFFF99] leading-[150%] font-medium">XSeries</li>
                    <li className="text-[14px] text-[#FFFFFF99] leading-[150%] font-medium">About</li>
                </ul>

                <ul className="space-y-[20px]">
                    <li className="text-[18px] text-[#FFFFFFCC] leading-[150%] font-semibold">Company</li>
                    <li className="text-[14px] text-[#FFFFFF99] leading-[150%] font-medium">Saffronstays</li>
                    <li className="text-[14px] text-[#FFFFFF99] leading-[150%] font-medium">Signature</li>
                    <li className="text-[14px] text-[#FFFFFF99] leading-[150%] font-medium">XSeries</li>
                    <li className="text-[14px] text-[#FFFFFF99] leading-[150%] font-medium">About</li>
                </ul>

                <ul className="space-y-[20px]">
                    <li className="text-[18px] text-[#FFFFFFCC] leading-[150%] font-semibold">Contact</li>
                    <li className="text-[14px] text-[#FFFFFF99] leading-[150%] font-medium underline">mail@saffronstays.com</li>
                    <li className="text-[14px] text-[#FFFFFF99] leading-[150%] font-medium">+91 3728253727</li>
                    <li className="text-[14px] text-[#FFFFFF99] leading-[150%] font-medium">Contact us</li>
                    <li className="text-[14px] text-[#FFFFFF99] leading-[150%] font-medium">Contact to Partner</li>
                </ul>

                <ul className="space-y-[20px]">
                    <li className="text-[18px] text-[#FFFFFFCC] leading-[150%] font-semibold">Partner with us</li>
                    <li className="text-[14px] text-[#FFFFFF99] leading-[150%] font-medium">List a home</li>
                </ul>

                <ul className="space-y-[20px]">
                    <li className="text-[18px] text-[#FFFFFFCC] leading-[150%] font-semibold">Policies</li>
                    <li className="text-[14px] text-[#FFFFFF99] leading-[150%] font-medium">Privacy Policy</li>
                    <li className="text-[14px] text-[#FFFFFF99] leading-[150%] font-medium">Terms</li>
                    <li className="text-[14px] text-[#FFFFFF99] leading-[150%] font-medium">Sitemap</li>
                    <li className="text-[14px] text-[#FFFFFF99] leading-[150%] font-medium">Cancellation Policy</li>
                </ul>

            </div>
            <div className="w-full h-[98px] md:h-[60px] bg-[#333333] md:bg-[#191919] border-[#191919] flex flex-col py-[20px] md:py-0 md:flex-row items-center justify-between pl-[65px] md:pl-[100px] pr-[100px]">
                {/* Lower Black Portion */}
                <div className="font-medium text-[12px] text-[#FFFFFF99] whitespace-nowrap">© 2021 SaffronStays. All rights reserved</div>
                <img src="/bottom.png" className="hidden md:block"/>
                <img src="/footer_icons.png" className="block md:hidden" />
            </div>
            <div className="block md:hidden h-[80.5px] w-full fixed bottom-0">
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
        </div>
        
    )
}

export default Footer;
