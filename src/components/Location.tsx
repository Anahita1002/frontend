const Location = () =>{
    return(
        <>
        <div className="bg-black px-[16px] md:pl-[100px]">
        <div className="mt-[28px] md:mt-[40px]">
            <p className="text-[#F2F2F2] leading-[150%] text-[18px] md:text-[24px]">Location</p>
        </div>
        <div className="mt-[10px] md:mt-[20px]">
            <img src="/location.png" />
        </div>
        <div className="mt-[10px] md:mt-[30px]">
            <button className="w-[154px] h-[36px] md:w-auto md:h-auto rounded-[30px] border-[1px] border-[#FFFFFF66] flex items-center justify-center md:px-[30px] md:py-[19px] text-[10px] md:text-[14px] text-[#FFFFFF99] hover:border-[1.5px] hover:text-[#F2F2F2] hover:border-[#FBDE98]">
              Get Direction</button>
        </div>
        </div>
        </>
    )
}

export default Location;