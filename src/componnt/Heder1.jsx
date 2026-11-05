
import { AiOutlineDoubleLeft } from "react-icons/ai";
import { CgBolt } from "react-icons/cg";
function Heder1(){
    return(
        <div>
            <div className="mt-24 grid justify-center ">
                <div className="grid">
                    <h1 className=" font-bold text-[50px]">با سرچ کمتر نتیجه بهتر بگیر</h1>
                    <p className="mr-15 mt-7">کانسپتو اولین مرجع معتبر معرفی استارتاپ ها و شرکت های ایرانی</p>
                </div>
                <div className="flex gap-4 mt-7 mr-25 mb-20">
                    <button className="flex items-center justify-center gap-2 border border-gray-300 text-gray-700 font-medium px-5 py-2.5 rounded-lg text-sm hover:bg-gray-50 transition">
                        درباره کانسپتو<AiOutlineDoubleLeft /></button>
                    <button className="flex items-center justify-center gap-2 bg-blue-600 text-white font-medium px-5 py-2.5 rounded-lg text-sm hover:bg-blue-700 transition">
                        <CgBolt className="text-lg" />رایگان شروع کن! </button>
                </div>
            </div>
        </div>
    )
}

export default Heder1