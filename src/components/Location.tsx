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
            <button className="rounded-[30px] border-[1px] border-[#FFFFFF99] px-[30px] py-[10px] text-[10px] md:text-[14px] text-[#FFFFFF] hover:border-[#FBDE98] leading-[150%]">Get Direction</button>
        </div>
        </div>
        </>
    )
}

export default Location;