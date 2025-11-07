
const Navbar = () => {
    return (
        <nav className="w-full bg-black md:fixed top-0 z-10">
            <div className="w-full px-5 md:px-[100px] py-5 flex justify-between items-center">
                {/* left */}
                <div className="flex items-center gap-10 ">
                    {/* desktop Xseries */}
                    <div className="hidden md:block">
                        <img src="/xseries.png" alt="Xseries" />
                    </div>
                    {/* desktop Search */}
                    <div className="md:flex hidden w-[319px] border border-[#E2E2E233] rounded-[35px] items-center gap-2 bg-[#F5F5F533] p-3">
                        <img src="/search.png" alt="" />
                        <input placeholder="search for location, villa, facilities..." className="text-[12px] font-medium text-[#CCCCCC] bg-transparent boreder-none outline-none flex-auto" type="text" />
                    </div>
                    {/* mobile logo */}
                    <div className="block md:hidden">
                        <img src="/logoOnly.png" alt="" className="w-[33px] brightness-[1.05] "/>
                    </div>
                </div>
                {/* right */}
                <div className="flex items-center gap-6">
                    {/* desktop SaffronStays */}
                    <div className="hidden md:flex items-center gap-2">
                        <img src="/logoOnly.png" alt="" />
                        <p className="text-white">SaffronStays</p>
                    </div>
                    {/* desktop phn */}
                    <div className="hidden items-center gap-2 md:flex">
                        <img src="/phn.png" alt="" />
                        <p className="text-white font-[500] text-[16px]">08069160000</p>
                    </div>
                    {/* desktoplogin */}
                    <div className="hidden md:block">
                        <button className="w-[102px] h-[44px] rounded-[100px] text-[14px] font-[600] bg-white">Login</button>
                    </div>
                    {/* mobile search*/}
                    <div className="block md:hidden">
                        <img src="/search.png" alt="" className="w-[24px]"/>
                    </div>
                </div>
            </div>
        </nav>
    );

}

export default Navbar;
