import React from 'react';
function Foter() {
    return (
        <footer dir="rtl" className="relative text-white overflow-hidden pt-28 pb-6 m-0 p-0">
            
            <div className="absolute inset-0 -z-10 pointer-events-none w-full h-full">
                <img
                    src="../src/img/Tooltip.png"
                    alt="Footer Background"
                    className="w-full h-150 object-cover object-bottom"
                />
            </div>

            <div className="mx-auto w-full max-w-7xl px-6">
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12 items-start">
                    
                    <div className="space-y-4 text-sm">
                        <h4 className="font-bold text-base mb-4 text-white">کانسبتو</h4>
                        <ul className="space-y-3 text-gray-200">
                            <li><p  className="hover:text-white transition">درباره ما</p></li>
                            <li><p  className="hover:text-white transition">تماس با ما</p></li>
                            <li><p  className="hover:text-white transition">اتاق خبر</p></li>
                            <li><p  className="hover:text-white transition">قوانین و مقررات</p></li>
                        </ul>
                    </div>

                    <div className="space-y-4 text-sm">
                        <h4 className="font-bold text-base mb-4 text-white">خدمات مشتریان</h4>
                        <ul className="space-y-3 text-gray-200">
                            <li><p  className="hover:text-white transition">حساب کاربری</p></li>
                            <li><p  className="hover:text-white transition">سوالات متداول</p></li>
                            <li><p  className="hover:text-white transition">راهنمای کار با سایت</p></li>
                            <li><p  className="hover:text-white transition">گزارش باگ</p></li>
                        </ul>
                    </div>

                    <div className="space-y-4 text-sm">
                        <h4 className="font-bold text-base mb-4 text-white">پیشنهاد کانسبتو</h4>
                        <ul className="space-y-3 text-gray-200">
                            <li><p  className="hover:text-white transition">لیست استارتاپ های ایرانی</p></li>
                            <li><p  className="hover:text-white transition">ارزش گذاری استارتاپ</p></li>
                            <li><p  className="hover:text-white transition">ایده های استارتاپی</p></li>
                            <li><p  className="hover:text-white transition">محبوب ترین شرکت ها</p></li>
                        </ul>
                    </div>

                    <div className="space-y-5 md:col-span-1">
                        <h3 className="text-sm font-semibold text-gray-200">از جدیدترین اخبار مطلع شوید :</h3>
                        
                        
                        <div className="relative flex items-center bg-white rounded-full p-1 shadow-lg max-w-sm">
                            <input 
                                type="email" 
                                placeholder="ایمیل خود را وارد کنید" 
                                className="bg-transparent px-4 py-2 text-xs text-gray-800 placeholder-gray-400 focus:outline-none flex-grow text-right"
                            />
                            <button className="bg-[#1e40af] hover:bg-blue-800 text-white px-5 py-2 rounded-full text-xs font-medium flex items-center gap-1 transition">
                                <span>✓</span> عضویت
                            </button>
                        </div>

                
                        <div className="space-y-2 text-xs text-gray-200 leading-relaxed">
                            <p className="flex items-start gap-1.5">
                                <span className="mt-0.5">📍</span> 
                                <span>آدرس: تهران، خیابان ولیعصر، خیابان سرو، ساختمان کانسبتو</span>
                            </p>
                            <p className="flex items-center gap-1.5">
                                <span>📞</span> 
                                <span>شماره تماس: ۰۹۱۲۳۴۵۶۷۸۹</span>
                            </p>
                        </div>

                
                        <div className="pt-2 space-y-3">
                            <p className="text-xs text-gray-200">ما را در شبکه های اجتماعی دنبال کنید:</p>
                            <div className="flex items-center gap-4 text-base">
                                <p  className="hover:text-blue-300 transition">f</p>
                                <p  className="hover:text-blue-300 transition">in</p>
                                <p  className="hover:text-blue-300 transition">📷</p>
                                <p className="hover:text-blue-300 transition">𝕏</p>
                            </div>
                        </div>
                    </div>

                </div>

                
                <div className="pt-6 border-t border-white/20 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs text-gray-300 pb-2">
                    <div className="space-y-1 max-w-sm">
                        <img src="../src/logo.png" alt="" />
                        {/* <h2 className="text-white font-bold text-lg tracking-wider">CONCEPTO</h2> */}
                        <p className="leading-relaxed text-gray-300">
                            استارتاپ‌هایی که آینده را شکل می‌دهند. از ایده‌های نوآورانه تا پروژه‌های پیشرفته، جهان استارتاپ‌ها را از اینجا کشف کنید.
                        </p>
                    </div>
                    <div>
                        <p>© ۱۴۰۲ - تمامی حقوق برای کانسبتو محفوظ است.</p>
                    </div>
                </div>

            </div>
        </footer>
    );
}

export default Foter;
