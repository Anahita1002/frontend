const About = () => {
  return (
    <>
      <div className="w-full md:w-[809px] pl-[16px] md:pl-[100px] bg-black flex-col items-center mt-[28px] md:mt-[36px] gap-2">
        {/*  About */}
        <h2 className="text-[18px] md:text-[24px] text-[#F2F2F2] leading-[150%]">About</h2>

        <div className=" text-[#888888] mt-[10px] md:mt-[30px]">
          {/* Desktop points */}
          <ul className="hidden md:block list-disc pl-5 space-y-3">
            <li className="text-[16px] text-[#888888] leading-[150%]">
              Tucked away cosily in the lap of nature, this is the perfect
              destination getaway for a vacation trip near Delhi and Chandigarh.
            </li>
            <li className="text-[16px] text-[#888888] leading-[150%]">
              The tourist-favourite Bhimtal Lake is only a stone's throw away.
              <button className="font-semibold text-[16px] text-[#CFB77D] leading-[150%] underline">
                Read more
              </button>
            </li>
          </ul>
          {/* Phn text veiw */}
          <div className="block md:hidden">
            <p className="text-[14px] text-medium text-[#888888] leading-[150%]">Tucked away cosily in the lap of nature, this is the perfect destination getaway for a vacation trip near Delhi and Chandigarh.
              <button className="text-[14px] text-medium text-[#888888] leading-[150%] underline">
                Read more
                </button>
            </p>
          </div>
        </div>

        <div className="mt-[30px] flex flex-wrap gap-2">
          <button className="rounded-[30px] border-[1.5px] border-[#FFFFFF66] px-5 py-2 text-[10px] md:text-[14px] text-[#FFFFFF99] hover:text-[#F2F2F2] hover:border-[#FBDE98]">
            House Rules
          </button>
          <button className="rounded-[30px] border-[1.5px] border-[#FFFFFF66] px-5 py-2 text-[10px] md:text-[14px] text-[#FFFFFF99] hover:text-[#F2F2F2] hover:border-[#FBDE98]">
            Cancellation Policy
          </button>
          <button className="rounded-[30px] border-[1.5px] border-[#FFFFFF66] px-5 py-2 text-[10px] md:text-[14px] text-[#FFFFFF99] hover:text-[#F2F2F2] hover:border-[#FBDE98]">
            Things you need to know
          </button>
          <button className="rounded-[30px] border-[1.5px] border-[#FFFFFF66] px-5 py-2 text-[10px] md:text-[14px] text-[#FFFFFF99] hover:text-[#F2F2F2] hover:border-[#FBDE98]">
            Things to do
          </button>
        </div>
      </div>

      <div className="w-[307px] pl-[16px] bg-black md:pl-[100px] mt-[28px] md:mt-[40px] md:w-[497px]">
        {/* Amenities */}
        <h2 className="text-[18px] md:text-[24px] text-[#FFFFFF] leading-[150%]">Amenities</h2>

        <div className="mt-[25px] grid grid-cols-2 gap-y-[20px]">
          {/* Item 1 */}
          <div className="flex items-center gap-3">
            <img src="/bed.png" />
            <p className="text-[14px] font-medium md:font-normal md:text-[16px] text-[#BBBBBB]">4 Bedrooms</p>
          </div>

          {/* Item 2 */}
          <div className="flex items-center gap-3">
            <img src="/people.png" />
            <p className="text-[14px] font-medium md:font-normal md:text-[16px] text-[#BBBBBB]">12 Guests</p>
          </div>

          {/* Item 3 */}
          <div className="flex items-center gap-3">
            <img src="/home.png" />
            <p className="text-[14px] md:font-normal md:text-[14px] text-[#BBBBBB] font-medium">
              Free Parking
            </p>
          </div>

          {/* Item 4 */}
          <div className="flex items-center gap-3">
            <img src="/home.png" />
            <p className="text-[14px] md:font-normal md:text-[14px] text-[#BBBBBB] font-medium">
              Air Conditioning
            </p>
          </div>

          {/* Item 5 */}
          <div className="flex items-center gap-3">
            <img src="/bed.png" />
            <p className="text-[14px] md:font-normal md:text-[14px] text-[#BBBBBB] font-medium">4 Bedrooms</p>
          </div>

          {/* Item 6 */}
          <div className="flex items-center gap-3">
            <img src="/people.png" />
            <p className="text-[14px] md:font-normal md:text-[14px] text-[#BBBBBB] font-medium">12 Guests</p>
          </div>
        </div>

        <div className="pl-[4px] mt-[15px] md:pl-0 md:mt-[30px]">
          <button className="rounded-[30px] border-[1.5px] border-[#FFFFFF66] px-5 py-2 text-[10px] md:text-[14px] text-[#F2F2F2] hover:border-[#FBDE98]">
            View All Amenities
          </button>
        </div>
      </div>

      <div className="w-full md:w-[578px] bg-black pl-[16px] md:pl-[100px] mt-[28px] md:mt-[40px]">
        {/* Meals */}
        <h2 className="text-[18px] md:text-[24px] text-[#F2F2F2] leading-[150%]">Meals</h2>
        <p className="mt-[16px] text-[14px] font-medium md:font-normal md:text-[16px] text-[#888888] leading-[150%]">
          A cook is available to prepare local specialities and a delicious
          spread of home-cooked meals all day, at an additional charge
        </p>
        <div className="flex mt-[22px] md:mt-[20px] gap-[10px]">
          <img src="/Veg.png" className=""></img>
          <p className="text-[16px] text-[#CCCCCC] font-medium leading-[150%]">
            Veg
          </p>

          <img src="/NonVeg.png" className="pl-[64px]"></img>
          <p className="text-[16px] text-[#CCCCCC] font-medium leading-[150%]">
            Non-Veg
          </p>
        </div>
        <div className="flex mt-[20px] gap-[20px]">
          <button className="rounded-[30px] border-[1.5px] border-[#FFFFFF66] px-5 py-2 text-[10px] md:text-[14px] text-[#F2F2F2] hover:border-[#FBDE98]">
            View Menu
          </button>
          <button className="rounded-[30px] border-[1.5px] border-[#FFFFFF66] px-5 py-2 text-[10px] md:text-[14px] text-[#F2F2F2] hover:border-[#FBDE98]">
            Meal Rate Card
          </button>
        </div>
      </div>
    </>
  );
};

export default About;
