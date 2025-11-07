const RatingsReviews = () => {
  return (
    <>
      <div className="w-full md:w-[800px] px-[16px] md:pl-[100px] pt-[12px] md:pt-[24px]">
        {/* Reviews & Ratings */}
        <div className="w-full flex items-center justify-between">
          {/* //left part */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              {/* star & rating */}
              <img src="/star.png" />
              <p className="font-bold text-[14px] md:text-[16px] text-[#999999] leading-[150%]">4.5 / 5</p>
            </div>
            <div className="bg-[#999] w-0 h-[18px] border-[1px]"></div> {/* Horizontal Line */}
            <div>
                <p className="font-medium text-[12px] md:text-[14px] text-[#999999] leading-[150%] underline">105 reviews</p>
            </div>
          </div>
          {/* right part */}
          <div className="flex items-center gap-[17.5px] md:gap-[20px]">
            <img src="/share.png"></img>
            <img src="/like.png"></img>
          </div>
        </div>
      </div>

      <div className="w-full bg-black pl-[8px] md:pl-[100px] flex flex-wrap items-center pt-[20px]">
            {/* Facilities */}
            <div className="rounded-[9px] px-[8px] py-[4px] md:px-[16px] md:py-[8px] gap-[9px] bg-[#FFFFFF14] flex items-center">
                <img src="/home.png" className=""></img>
                <p className="text-[10px] md:text-[14px] text-[#BBBBBB] font-medium">Entire Villa</p>
            </div>
            <img src="/dot.png" className="px-[10px]"></img>
            <div className="rounded-[9px] px-[8px] py-[4px] md:px-[16px] md:py-[8px] gap-[9px] bg-[#FFFFFF14] flex items-center">
                <img src="/people.png" className=""></img>
                <p className="text-[10px] md:text-[14px] text-[#BBBBBB] font-medium">16-12 Guests</p>
            </div>
            <img src="/dot.png" className="px-[10px]"></img>
            <div className="rounded-[9px] px-[8px] py-[4px] md:px-[16px] md:py-[8px] gap-[9px] bg-[#FFFFFF14] flex items-center">
                <img src="/bed.png" className=""></img>
                <p className="text-[10px] md:text-[14px] text-[#BBBBBB] font-medium">8 bedrooms</p>
            </div>
            <img src="/dot.png" className="hidden md:block px-[10px]"></img>
            <div className="hidden md:flex rounded-[9px] px-[16px] py-[8px] gap-[9px] bg-[#FFFFFF14]  items-center">
                <img src="/paw.png" className=""></img>
                <p className="text-[14px] text-[#BBBBBB] font-medium">Pet-friendly</p>
            </div>
        </div>
    </>
  );
};

export default RatingsReviews;
