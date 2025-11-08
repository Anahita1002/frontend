const Footer = () =>{
    return(
        
        <div className="border-[1px] border-[#FFFFFF1A] mt-[100px]">
            <div className="block md:hidden ">
                {/* Phone only */}
                <div className="bg-[#333333] pt-[24px] flex items-center gap-2">
                    <img src="/logoOnly.png" className="pl-[20px]" />
                <div>
                    <p className="text-[17px] text-[#FFFFFF]">SaffronStays</p>
                    <p className="text-[10px] text-[#FFFFFF]">where families bond</p>
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

                <ul className="space-y-[20px] md:ml-[25px]">
                    <li className="text-[18px] text-[#FFFFFFCC] leading-[150%] font-semibold">Company</li>
                    <li className="text-[14px] text-[#FFFFFF99] leading-[150%] font-medium">Saffronstays</li>
                    <li className="text-[14px] text-[#FFFFFF99] leading-[150%] font-medium">Signature</li>
                    <li className="text-[14px] text-[#FFFFFF99] leading-[150%] font-medium">XSeries</li>
                    <li className="text-[14px] text-[#FFFFFF99] leading-[150%] font-medium">About</li>
                </ul>

                <ul className="space-y-[20px] md:ml-[25px]">
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

                <ul className="space-y-[20px] md:ml-[25px]">
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
            
        </div>
        
    )
}

export default Footer;
