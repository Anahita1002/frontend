import Navbar from "./Navbar";

const SeaLaVie = () => {
    return (
        <>
            <div className="w-full relative">
                <div className="w-full md:hidden h-[24px] bg-black flex items-center justify-end gap-[9px] pr-[9px]">
                    {/* mobile notification */}
                    <img src="/wifi.png"/>
                    <img src="/network.png"/>
                    <img src="/battery.png"/>
                    <p className="text-[#DDDDDD]">12:30</p>
                </div>
                <Navbar />
                <div className="">
                    <img src="./SeaLaVie.png" className="w-full h-[324px] md:h-[762px] object-cover" />
                </div>
                {/* left side */}
                <div className=" absolute top-[225px] md:top-[322px] left-[26px] md:left-[131px]">
                    <h1 className="text-[24px] md:text-[60px] text-[#FFFFFF] leading-[130%]">Sea La Vie</h1>
                    <p className="text-[14px] md:text-[22px] text-[#FFFFFF] leading-[150%]">Alibaug, Maharashtra</p>
                </div>
                <div className="w-[74px] md:w-[124px] h-[22.08px] md:h-[37px] absolute top-[298px] md:top-[449px] left-[26px] md:left-[131px] flex items-center justify-center rounded-[2.39px] md:rounded-[4px] bg-black">
                    <img src="./xseries.png" className="w-[50.13px] h-[11.65px] md:w-[84px] md:h-[19.52px]" />
                </div>
                {/* right side */}
                <div>
                    <img src="./smoll.png" className="w-[72px] h-[72px] md:w-[130px] md:h-[130px] absolute top-[316px] md:top-[559px] right-[16px] md:right-[100px] rounded-[5.5px] md:rounded-[10px]" />
                </div>
                {/* center */}
                <div className="bg-transparent">
                    <img src="/dots.png" className=" w-[90px] md:w-[174px] absolute top-[364px] md:top-[680px] left-1/2 -translate-x-1/2 "></img>
                </div>
            </div>
        </>
    )
}

export default SeaLaVie;
