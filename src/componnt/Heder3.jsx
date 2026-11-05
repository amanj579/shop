import { BsEnvelope } from "react-icons/bs";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { BsSliders2 } from "react-icons/bs";
function Heder3(){
    return(
        <div>
            <div className="flex justify-center items-center mb-20 gap-10">


                <div >
                    <div className="w-[307px] h-[225px] bg-[#E9EAEE] translate-y-[139px] -translate-x-[38px] rounded-t-4xl grid justify-center ">



                        <div className="w-[270px] h-[75px] bg-[#ffff] rounded-2xl mt-5 grid justify-end pl-4 ">
                            <img src="../src/img/Button.png" alt="" className="translate-y-[35px]" />
                        </div>

                        <div className="w-[275px] h[89px] flex gap-2  items-center">
                            <div className="w-[132px] h-[59px] bg-[#ffff] flex items-center justify-center rounded-2xl text-2xl"><BsEnvelope className="" /></div>
                            <div className="w-[132px] h-[59px] bg-[#ffff] flex items-center justify-center rounded-2xl text-2xl"><BsTelephone /></div>
                        </div>
                    </div>
                    <div className="w-[392px] h-[137px] bg-[#AECFFE] rounded-[30px]"></div>
                    <h1 className="mr-10 font-bold text-2xl">شرکت‌های مورد علاقت رو پیدا کن</h1>
                </div>



                <div >
                    <div className="w-[307px] h-[225px] bg-[#E9EAEE] translate-y-[139px] -translate-x-[38px] rounded-t-4xl ">


                        <div className="flex justify-center items-center w-[300px] h-[40px] gap-2 pt-8 mb-10  rounded-lg ">

                            <div className="flex justify-center items-center w-[217px] h-[40px]   rounded-lg bg-[#fff] ">
                                <AiOutlineSearch className="ml-2 text-lg text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="جستجوی "
                                    className="w-[200px] bg-transparent outline-none"
                                />
                            </div>
                            <div className="w-[48px] h-[48px] bg-[#fff] flex items-center justify-center rounded-2xl"><BsSliders2 /></div>
                        </div>

                        <div className="w-[275px] h-[85px] flex items-center gap-2 justify-center mr-3">
                            <div className="w-[83px] h-[85px] bg-[#fff] rounded-2xl"></div>
                            <img src="../src/img/Button.png" />
                            <div className="w-[83px] h-[85px] bg-[#fff] rounded-2xl"></div>
                        </div>

                        <div className="flex  justify-center gap-2 mt-2">
                            <div className="w-[83px] h-[55px] bg-[#fff] rounded-t-2xl "></div>
                            <div className="w-[83px] h-[55px] bg-[#fff] rounded-t-2xl"></div>
                            <div className="w-[83px] h-[55px] bg-[#fff] rounded-t-2xl"></div>
                        </div>

                    </div>

                    <div className="w-[392px] h-[137px] bg-[#AECFFE] rounded-[30px]"></div>
                    <h1 className="mr-10 font-bold text-2xl">کسب و کارهای مناسب رو پیدا کن</h1>
                </div>


                <div className="">
                    <div className="w-[307px] h-[225px] bg-[#E9EAEE] translate-y-[139px] -translate-x-[38px] rounded-t-4xl grid justify-center ">


                        <div className="w-[270px] h-[75px] bg-[#ffff] rounded-2xl mt-5 grid justify-end pl-4 ">
                            <img src="../src/img/Button.png" alt="" className="translate-y-[35px]" />
                        </div>

                        <div className="w-[275px] h[89px] flex gap-2  items-center">
                            <div className="w-[132px] h-[59px] bg-[#ffff] flex items-center justify-center rounded-2xl text-2xl"><BsEnvelope className="" /></div>
                            <div className="w-[132px] h-[59px] bg-[#ffff] flex items-center justify-center rounded-2xl text-2xl"><BsTelephone /></div>
                        </div>
                    </div>
                    <div className="w-[392px] h-[137px] bg-[#AECFFE] rounded-[30px]"></div>
                    <h1 className="mr-15 font-bold text-2xl">با کسب و کارها ارتباط بگیر</h1>
                </div>
            </div>
        </div>
    )
}
export default Heder3