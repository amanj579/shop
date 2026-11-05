import { CgBolt } from "react-icons/cg";
import { AiOutlineDoubleLeft } from "react-icons/ai";
import { BsEnvelope } from "react-icons/bs";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { BsSliders2 } from "react-icons/bs";
import Heder1 from "../componnt/Heder1";
import Foter from "../foter";
import Heder2 from "../componnt/Heder2";
import Heder3 from "../componnt/Heder3";
function Home() {
    const prodacts = [
        {
            id: 1, img: "../src/img/Switch.png", name: "هوش مصنوعی"
        },
        {
            id:2 , img:"../src/img/payton.png" , name:"برنامه نویسی"
        },
        {
            id:3 , img:"../src/img/arz.png" , name:"ارز دیجیتال"
        },
        {
            id:4 , img:"../src/img/hsabdare.png" , name:"حساب داری"
        },
        {
            id:5 , img:"../src/img/grafigh.png" , name:"گرافیک "
        },
        {
            id:6 , img:"../src/img/rsane.png" , name:"رسانه ها"
        },
        {
            id:7 , img:"../src/img/hava.png" , name:"هوا و فضا"
        },
    ]


    const prodacts2 = [
        {id:1 , img:"../src/img/pezashky.png" , name:"پزشکی"},
        {id:2 , img:"../src/img/tegartalktronek.png" , name:"تجارت الکترونیک"},
        {id:3 , img:"../src/img/almi.png" , name:"علمی"},
        {id:4 , img:"../src/img/musik.png" , name:"موسیقی"},
        {id:5 , img:"../src/img/beuteknolzhe.png" , name:"بیوتکنولژِی"},
        {id:6 , img:"../src/img/filmsril.png" , name:"فیلم سریال"},
        {id:7 , img:"../src/img/hamlnaghl.png" , name:"حمل و نقل"},
    ]


    const prodacts3 = [
                {
                    id:1,
                    name: "شرکت اسنپ",
                    category: "تجارت الکترونیک",
                    logo: "../src/img/L2.png",
                    photo: "../src/img/A3.png",
                    color: "#00D66F",
                    audience: "۳۹۸",
                    capital: "۳۱,۳۹۴",
                    description: "از درخواست خودرو گرفته تا سفارش غذا و خدمات متنوع دیگر."
                },
                {
                    id:1,
                    name: "شرکت دیجی‌کالا",
                    category: "تجارت الکترونیک",
                    logo: "../src/img/L3.png",
                    photo: "../src/img/A2.png",
                    color: "#E83A54",
                    audience: "۴۳۲",
                    capital: "۲۵,۱۵۰",
                    description: "هر آنچه که نیاز دارید با بهترین قیمت از دیجی‌کالا بخرید."
                },
                {
                    id:1,
                    name: "کارگزاری فارابی",
                    category: "خدمات مالی",
                    logo: "../src/img/L4.png",
                    photo: "../src/img/A4.png",
                    color: "#08764B",
                    audience: "۳۹۱",
                    capital: "۲۹,۱۲۰",
                    description: "خدمات بازار سرمایه، خرید و فروش سهام و معاملات بورس."
                },
                {
                    id:1,
                    name: "شرکت علی‌بابا",
                    category: "تجارت الکترونیک",
                    logo: "../src/img/L1.png",
                    photo: "../src/img/A1.png",
                    color: "#FFC928",
                    audience: "۳۳۴",
                    capital: "۲۶,۷۵۰",
                    description: "خدمات سفر و گردشگری برای خرید بلیت و برنامه‌ریزی سفر."
                }
            ]


            const prodacts4 = [
                {
                    id:1,
                    logo:"../src/img/blu.ط÷",
                    shghl:"12 فرصت شغلی",
                    name:"بلو بانک"
                },
                {
                    id:2,
                    logo:"../src/img/asia.png",
                    shghl:"16 فرصت شغلی",
                    name:"اسیا تک"
                },
                {
                    id:3,
                    logo:"../src/img/reish.png",
                    shghl:"11 فرصت شغلی",
                    name:"کارگزاری فارابی"
                },
                {
                    id:4,
                    logo:"../src/img/bime.png",
                    shghl:"14 فرصت شغلی",
                    name:"بیمه بازار"
                },
                {
                    id:5,
                    logo:"../src/img/a.png",
                    shghl:"18 فرصت شغلی",
                    name:"گروه بابا علی "
                }

            ]



            const prodacts5 = [
                {id:1,
                photo:"../src/img/car.png",
                name:"تجارت الکترونیک",
                description1:"اسنپ رکورد خود را با بیش از ۵ میلیون سفر روزانه شکست",
                description2:"در ماه پایانی سال ۱۴۰۲، اسنپ رکورد ۵ میلیون و ۱۳۹ هزار و ۶۵ سفر روزانه در سرویس خودرو و باکس را زد. این رکورد در روز چهارشنبه، دوم اسفند، ثبت شد.",
                logo:"../src/img/men1.png",
                p:"فرهاد رئوفی",
                mount:"1402/9/3"
                },
                {id:1,
                photo:"../src/img/mobail.png",
                name:"تجارت الکترونیک",
                description1:"بار دیگر اسنپ فود به دلیل مشکل فنی از دسترس خارج شد ",
                description2:"بار دیگر اسنپ‌فود به‌دلیل مشکل فنی از دسترس کاربران خارج شد. این مشکل اوایل بهمن هم تکرار شده بود و رفع آن ساعت‌ها طول کشید.",
                logo:"../src/img/men2.png",
                p:"امیر بختیاری",
                mount:"1402/9/3"
                },
                {id:1,
                photo:"../src/img/alibaba.png",
                name:"تجارت الکترونیک",
                description1:"رکورد ثبت سفارش آنلاین خدمات گردشگری شکسته شد: ثبت 2 خدمت در هر ثانیه",
                description2:"با نزدیکی به سال نو و افزایش سفرهای بین شهری، رکورد ثبت سفارش آنلاین خدمات گردشگری شکسته شد.",
                logo:"../src/img/men3.png",
                p:"آتوسا صفوی زاده",
                mount:"1402/12/3"
                },
               
            ]

            const prodacts6 =[
                {
                    id:1,
                    photo:"../src/img/r1.png",
                    name:"بوت کمپ برنامه نویسی دیجی کالا",
                    discription:"در این دوره شما بر اساس سرفصل‌های تعیین شده توسط اساتید منتخب دیجی‌کالا، بوژان و کوئرا آموزش می‌بینید و در نهایت امکان استخدام در دیجی‌کالا را خواهید داشت",
                    shahr:"تهران,ایران",
                    mount:"24ابان"
                },
                {
                    id:1,
                    photo:"../src/img/r3.png",
                    name:"سکوی پرتاب غزال",
                    discription:"سکوی پرتاب غزال، 27 دی ماه سال جاری با هدف شناسایی تیم‌ها و سرمایه‌گذاری بر استارتاپ‌های سازنده بازی های رایانه ای برگزار خواهد شد.",
                    shahr:"تهران، ایران",
                    mount:"27دی"
                },
                {
                    id:1,
                    photo:"../src/img/r2.png",
                    name:"سکوی پرتاب قزوین",
                    discription:"ویداد تخصصی سرمایه‌گذاری سکوی پرتاب قزوین با هدف شناسایی تیم‌ها و سرمایه‌گذاری بر استارتاپ‌های این استان ۲۴ آبان ماه سال جاری در پارک علم و فناوری قزوین برگزار می‌شود.",
                    shahr:"قزوین، ایران",
                    mount:"24ابان"
                },
                {
                    id:1,
                    photo:"../src/img/r4.png",
                    name:"فراخوان جذب ایده و استارتاپ",
                    discription:"در حاشیه همایش معدن‌کاری دیجیتال 1401، خانه خلاق و نوآوری دنیای اقتصاد با همکاری مجموعه 100استارت‌آپ، برای ایده‌ها و استارتاپ‌های حوزه معدن جذب سرمایه می‌کند.",
                    shahr:"تهران، ایران",
                    mount:"22شهریور"
                },
            ]

    return (
        <>


            <Heder1/>
            
            <Heder2/>

            
            <Heder3/>



            <div className="className=grid">
                <div className="flex items-center mb-20 gap-4">
                     <h1 className="mr-30 text-3xl text-gray-600 font-bold">دسته بندی ها</h1>
                <hr className="w-280 h-0.2 " />
                </div>
            </div>
            <div className="flex items-center justify-center gap-25">
            {prodacts.map((item) => (
                <div className="grid-cols-2 text-center">
                    <img src={item.img} alt="" />
                    <p>{item.name}</p>
                </div>
            ))}
            </div>

            <div className="flex items-center justify-center gap-25 mt-15 mb-50">
                {prodacts2.map((item)=>(
                    <div className="gride text-center">
                        <img src={item.img} />
                        <p>{item.name}</p>
                    </div>
                ))}
            </div>







<section dir="rtl" className="relative isolate mb-70">

    <div className="absolute inset-0 -z-10 overflow-hidden">

        <img
            src="../src/img/Tooltip.png"
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
        />


        <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 1440 470"
            preserveAspectRatio="none"
            aria-hidden="true"
        >
            <path
                d="M0 0 H1440 V0 Q720 100 0 0 Z"
                fill="white"
            />
            <path
                d="M0 420 Q720 510 1440 420 V470 H0 Z"
                fill="white"
            />
        </svg>

    </div>

    <div className="grid w-340 mr-39">


        <div className="mb-12 flex items-center justify-between text-white translate-y-20">

<h2 className="text-lg font-bold">
                شرکت‌های محبوب
            </h2>

            <div className="ml-15">
                شاهده همه
                <span className="text-xl">›</span>
        </div>

            

        </div>

        <div className="grid h-105 w-300 grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 translate-y-20 ">

    {prodacts3.map((company) => (
        <div
            key={company.id}
            className="overflow-hidden rounded-[22px] bg-white shadow-lg"
        >
            <div className="h-[170px] overflow-hidden">
                <img
                    src={company.photo}
                    alt={company.name}
                    className="h-full w-full object-cover"
                />
            </div>

            <div className="flex items-center justify-between gap-2 p-3">
                <div>
                    <h3 className="text-sm font-bold text-gray-800">
                        {company.name}
                    </h3>
                    <p className="mt-2 text-xs text-gray-400">
                        {company.category}
                    </p>
                </div>

                <img
                    src={company.logo}
                    alt={company.name}
                    className="h-12 w-12 object-contain"
                />
            </div>

            <div className="grid grid-cols-2 gap-2 px-3">
                <div className="rounded-lg border p-2">
                    <p className="text-[10px] text-gray-500">مخاطبین جدید</p>
                    <p className="mt-2 text-xs text-blue-600">
                        {company.audience}
                    </p>
                </div>

                <div className="rounded-lg border p-2">
                    <p className="text-[10px] text-gray-500">سرمایه‌گذاران جدید</p>
                    <p className="mt-2 text-xs text-blue-600">
                        {company.capital}
                    </p>
                </div>
            </div>

            <p className="p-3 text-xs leading-5 text-gray-500">
                {company.description}
            </p>

            <div className="flex justify-between px-3 pb-4 text-xs text-gray-400">
                <span>★ ۵</span>
                <span>تهران، ایران</span>
            </div>
        </div>
    ))}

</div>
        

    </div>

</section>  












        <div className="grid">
            <div className="flex items-center mb-20">
                <h1 className="mr-30 text-3xl text-gray-600 font-bold">فرصت های شغلی </h1>
                <hr className="w-245 h-0.2 mr-5" />
            </div>


            <div className="flex flex-wrap justify-center gap-6 mb-30">
    {prodacts4.map((item) => (
        <div className="w-[220px] h-[213px] bg-[#F6F6F6] flex flex-col justify-center items-center text-center   rounded-[2rem] p-4">
            
             
                <img  src={item.logo} className="-translate-y-1"/>
            

            <p className="text-sm text-gray-600 mb-7">{item.shghl}</p>
            <p className="font-bold text-blue-500 mb-30">{item.name}</p>
        </div>
    ))}
</div>
        </div>



    







<section dir="rtl" className="relative isolate mb-70">

    
    <div className="absolute inset-0 w -z-10 overflow-hidden pointer-events-none h-100">

        <img
            src="../src/img/Tooltip.png"
            alt=""
            className="absolute inset-0 h-full w-full object-fill"
        />

    </div>

    <div className="mx-auto w-full max-w-7xl px-6">

        {/* عنوان */}
        <div className="mb-12 flex items-center justify-between text-white translate-y-20">

            <h2 className="text-lg font-bold">
                تازه ترین اخبار
            </h2>

            <div className="cursor-pointer">
                
                مشاهده همه
                <span className="text-xl">›</span>
            </div>

        </div>

    
        <div className="flex gap-10">
            {prodacts5.map((item) => (
        <div className="grid w-[400px] h-[418px] bg-[#fff] rounded-3xl translate-y-25    ">
            
            <img src={item.photo} alt="" />
            <p className="text-sm text-gray-600 mb-5 mr-5">{item.name}</p>
            <p className="font-bold mb-4 text-[19px]">{item.description1}</p>
            <p className="text-sm">{item.description2}</p>
            <div className="flex mt-10">
                <div className="w-80 flex">
                <img src={item.logo} alt="" />
                <p className="mr-5 text-sm text-gray-600">{item.p}</p>   
                </div>
                <p className="">{item.mount}</p>
            
            </div>
        </div>
    ))}
        </div>
    </div>

</section>


        




            <div className="flex text-center items-center mb-20">
                <h1 className="mr-30 text-3xl text-gray-600 font-bold">رویداد های اخیر</h1>
                <hr className="w-245 h-0.2 mr-5" />
                <h1 className=" mr-5 text-[20px] text-gray-600 ">مشاهده همه›</h1>
            </div> 


            <div className="mb-80 grid grid-cols-2 gap-y-10 mr-25">
                {prodacts6.map((item) => (
        <div className="w-[600px] h-[200] bg-[#fff] border-2  border-gray-200 flex rounded-3xl">
            
            <img src={item.photo}  />
            <div className="grid">
            <p className="font-bold text-[20px] mt-4">{item.name}</p>
            <p className="text-[15px] text-gray-600">{item.discription}</p>

            <div className="flex gap-50">
            <p className="text-[15px] text-gray-600">{item.shahr}</p>
            <p className="text-[15px] text-gray-600">{item.mount}</p>
            </div>

            </div>
        </div>
    ))}
            </div>
            

        <Foter/>




        </>
    );
}

export default Home;