import React from 'react';
import { Link } from "react-router-dom";
import { CgBolt } from "react-icons/cg";

const companiesData = [
  {
    id: 1,
    name: "بلوبانک",
    industry: "طراحی گیمینگ",
    location: "تهران",
    description: "لورم ایپسوم لورم ایپسوم متن ساختگی با تولید",
    logo: "../src/img/serch7.png",
  },
  {
    id: 2,
    name: "گروه اسنپ",
    industry: "حمل و نقل و تدارکات",
    location: "ایران، شیراز",
    description: "لورم ایپسوم لورم ایپسوم متن ساختگی با تولید",
    logo: "../src/img/serch8.png",
  },
  {
    id: 3,
    name: "گروه علی بابا",
    industry: "طراحی گیمینگ",
    location: "اصفهان",
    description: "لورم ایپسوم لورم ایپسوم متن ساختگی با تولید",
    logo: "../src/img/serch9.png",
  },
  {
    id: 4,
    name: "اسنپ فود",
    industry: "طراحی گیمینگ",
    location: "مشهد",
    description: "لورم ایپسوم لورم ایپسوم متن ساختگی با تولید",
    logo: "../src/img/serch10.png",
  },
  {
    id: 5,
    name: "تپسی",
    industry: "حمل و نقل و تدارکات",
    location: "کرج",
    description: "لورم ایپسوم لورم ایپسوم متن ساختگی با تولید",
    logo: "../src/img/serch11.png",
  },
  {
    id: 6,
    name: "ایرانسل",
    industry: "طراحی گیمینگ",
    location: "تهران",
    description: "لورم ایپسوم لورم ایپسوم متن ساختگی با تولید",
    logo: "../src/img/serch13.png",
  },
  {
    id: 7,
    name: "دیجی‌کالا",
    industry: "تجارت الکترونیک و خرده فروشی",
    location: "تهران",
    description: "لورم ایپسوم لورم ایپسوم متن ساختگی با تولید",
    logo: "../src/img/serch15.png",
  },
  {
    id: 8,
    name: "تپسی",
    industry: "حمل و نقل و تدارکات",
    location: "اصفهان",
    description: "لورم ایپسوم لورم ایپسوم متن ساختگی با تولید",
    logo: "../src/img/serch11.png",
  },
  {
    id: 9,
    name: "اسنپ فود",
    industry: "طراحی گیمینگ",
    location: "تهران",
    description: "لورم ایپسوم لورم ایپسوم متن ساختگی با تولید",
    logo: "../src/img/serch10.png",
  },
];

const prodact = [
  { id: 1, name: "توصیف کلمات کلیدی", icon: "∨" },
  { id: 2, name: "مکان دفتر مرکزی شرکت ها", icon: "∨" },
  { id: 3, name: "نوع شرکت ها", icon: "∨" },
  { id: 4, name: "صنعت", icon: "∨" },
  { id: 5, name: "جستجو در میان شرکت های مشابه", icon: "∨" },
  { id: 6, name: "تکنولوژی", icon: "∨" },
];

function Sherkat() {
  return (
    <div dir="rtl" className="min-h-screen bg-gray-50 pb-20 font-sans">
      
      
      <div className="grid shadow-sm bg-white mb-6">
        <div className="flex gap-2 mt-6 mr-10 sm:mr-20 text-sm text-gray-600">
          <p className="flex items-center gap-1 text-blue-700">
            <img src="../src/img/shercat1.png" alt="" />
            خانه
          </p>
          <p>›</p>
          <span className="text-gray-800">شرکت ها</span>
        </div>

        <div className="mt-5 mr-10 sm:mr-20">
          <h1 className="font-bold text-3xl text-gray-900">جستجو بر اساس شرکت ها</h1>
        </div>

        
        <div className="flex flex-wrap gap-6 sm:gap-10 mt-8 mr-10 sm:mr-20 mb-6 text-sm">
          <p className="flex items-center gap-2 cursor-pointer text-gray-600 hover:text-blue-600">
            <img src="../src/img/shercat2.png" alt="" />
            ذخیره شده ها
          </p>
          <p className="flex items-center gap-2 cursor-pointer text-blue-700 font-semibold border-b-2 border-blue-700 pb-2">
            <img src="../src/img/shercat3.png" alt="" />
            شرکت ها
          </p>
          <p className="flex items-center gap-2 cursor-pointer text-gray-600 hover:text-blue-600">
            <img src="../src/img/shercat4.png" alt="" />
            راه های تماس
          </p>
          <p className="flex items-center gap-2 cursor-pointer text-gray-600 hover:text-blue-600">
            <img src="../src/img/shercat5.png" alt="" />
            سرمایه گذاری
          </p>
          <p className="flex items-center gap-2 cursor-pointer text-gray-600 hover:text-blue-600">
            <img src="../src/img/shercat6.png" alt="" />
            رویداد ها
          </p>
        </div>
      </div>

  
      <div className="flex flex-wrap items-center w-full gap-4 px-10 sm:px-20 mb-8">
        <button className="border border-gray-300 bg-white hover:bg-gray-50 rounded-[14px] px-5 h-10 text-sm text-gray-700 shadow-sm transition">محبوب ترین</button>
        <button className="border border-gray-300 bg-white hover:bg-gray-50 rounded-[14px] px-5 h-10 text-sm text-gray-700 shadow-sm transition">پر بازدید ترین</button>
        <button className="border border-gray-300 bg-white hover:bg-gray-50 rounded-[14px] px-5 h-10 text-sm text-gray-700 shadow-sm transition">برترین شرکت های ایرانی</button>
        <button className="border border-gray-300 bg-white hover:bg-gray-50 rounded-[14px] px-5 h-10 text-sm text-gray-700 shadow-sm transition">برترین شرکت ها در صنعت</button>
      </div>

    
      <div className="flex gap-10 sm:px-20 items-start">
        
      
        <div className="w-[380px] bg-white rounded-2xl shadow-sm border border-gray-200">

          <div className="flex items-center justify-between px-6 h-20 border-b border-gray-100">
            <p className="flex items-center gap-2 font-bold text-[18px] text-gray-800">
              <img src="../src/img/shercat7.png" alt="" />
              همه ی فیلتر ها
            </p>
            <button className="text-blue-600 text-sm font-medium hover:underline">حذف همه ی فیلتر ها</button>
          </div>


          <div>
            {prodact.map((item) => (
              <div key={item.id} className="flex justify-between items-center px-6 py-4 hover:bg-gray-50 cursor-pointer transition">
                <span className="text-gray-700 text-sm">{item.name}</span>
                <span className="text-gray-400 text-sm">{item.icon}</span>
              </div>
            ))}
          </div>



          <div className="p-6 border-t border-gray-100 mt-4">
            <h2 className="text-[16px] font-bold text-gray-800 mb-4">تعداد کارمند ها</h2>
          
          </div>
        </div>



        
        <div className=" w-[808px] h-[700px] bg-white rounded-xl border border-gray-200 shadow-sm flex flex-col overflow-hidden">
          
          
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-white">

            <p className="font-bold text-base text-gray-800 flex items-center gap-2">
              <img src="../src/img/shercat8.png"  />
              لیست شرکت ها</p>

            <p className="text-blue-600 text-sm cursor-pointer hover:underline flex items-center">
              <CgBolt/>
              مشاهده بیشتر</p>
          </div>


        
          <div className="flex">
            <table className="w-full border-collapse text-right">
              <thead>
                <tr className="border-b border-gray-200 text-gray-400 text-xs font-semibold bg-white sticky top-0 z-10">
                  <th className="py-3 px-4 w-12 text-center">
                    <input type="checkbox" className="rounded border-gray-300 accent-blue-600 cursor-pointer" />
                  </th>
                  <th className="py-3 px-4">نام شرکت</th>
                  <th className="py-3 px-4">صنعت</th>
                  <th className="py-3 px-4">مكان شرکت</th>
                  <th className="py-3 px-4">توضیحات</th>
                  <th className="py-3 px-4 w-12 text-center">
                    <input type="checkbox" className="rounded border-gray-300 accent-blue-600 cursor-pointer" />
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
                {companiesData.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50/50 transition-colors">
                    <td className="py-4 px-4 text-center">
                      <input type="checkbox" className="rounded border-gray-300 accent-blue-600 cursor-pointer" />
                    </td>
                    <td className="py-4 px-4 font-semibold text-gray-900">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center overflow-hidden border border-gray-100">
                          {item.logo ? (
                            <img src={item.logo} alt={item.name} className="w-full h-full object-cover" />
                          ) : (
                            <span className="text-[10px] text-gray-400">لوگو</span>
                          )}
                        </div>
                        <span>{item.name}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-gray-600 text-xs">{item.industry}</td>
                    <td className="py-4 px-4 text-gray-600 text-xs">{item.location}</td>
                    <td className="py-4 px-4 text-gray-500 text-xs max-w-[180px] truncate">{item.description}</td>
                    <td className="py-4 px-4 text-center">
                      <input type="checkbox" className="rounded border-gray-300 accent-blue-600 cursor-pointer" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Sherkat;
