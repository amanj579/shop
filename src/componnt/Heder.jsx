import { CgBolt } from "react-icons/cg";
import { FcImport } from "react-icons/fc";
import { AiOutlineSearch } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

function Heder({ searchQuery, setSearchQuery }) {
    const navigate = useNavigate();

    return (
        <header className="shadow-sm">
            <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-4 py-5">
                <div className="flex flex-wrap items-center gap-8">
                    <img src="/logo.png" alt="لوگو" className="w-28 object-contain" />

                    <div className="flex w-full max-w-[320px] items-center rounded-lg bg-gray-100 px-4 py-2">

                        <AiOutlineSearch className="ml-2 text-lg text-gray-400" />

                        <input
                            type="text"
                            placeholder="جستجوی کسب‌وکار"
                            onClick={() => navigate("/serch")}className="w-full bg-transparent outline-none"
                            value={searchQuery}
                            onChange={(e)=>setSearchQuery(e.target.value)}
                        />
                    </div>

                    <nav className="flex flex-wrap items-center gap-6 text-sm font-medium text-gray-600">

                        <Link to="/sherkat" className="transition hover:text-blue-600">شرکت‌ها</Link>
                        <Link to="/" className="transition hover:text-blue-600">فرصت‌های شغلی</Link>
                        <Link to="/" className="transition hover:text-blue-600">اخبار و رویدادها</Link>
                        <Link to="/" className="transition hover:text-blue-600">درباره ما</Link>
                        <Link to="/" className="transition hover:text-blue-600">تماس با ما</Link>

                    </nav>
                </div>

                <div className="flex flex-wrap items-center gap-4">
                    <button className="flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700"><CgBolt className="text-lg" /> رایگان شروع کن!</button>
                    <button  className="flex items-center justify-center gap-2 rounded-lg border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50"><FcImport className="text-lg" /> ورود/ثبت‌نام</button>
                </div>
            </div>
        </header>
    );
}

export default Heder;