
import { CgBolt } from "react-icons/cg";
function Serch({ searchQuery="" }) {
  
  const prodacts = [
    {
      id:1, 
      logo:"../src/img/serch7.png",
      name:"بلوبانک",
      logo1:"../src/img/sav.png"
    },
    {
      id:2, 
      logo:"../src/img/serch8.png",
      name:"اسنپ",
      logo1:"../src/img/sav.png"
    },
    {
      id:3, 
      logo:"../src/img/serch9.png",
      name:"علی بابا",
      logo1:"../src/img/sav.png"
    },
    {
      id:4, 
      logo:"../src/img/serch10.png",
      name:"اسنپ فود ",
      logo1:"../src/img/sav.png"
    },
    {
      id:5, 
      logo:"../src/img/serch11.png",
      name:"تیپ سی",
      logo1:"../src/img/sav.png"
    },
    {
      id:6, 
      logo:"../src/img/serch12.png",
      name:"جابنیجا",
      logo1:"../src/img/sav.png"
    },
    {
      id:7, 
      logo:"../src/img/serch13.png",
      name:"ایرانسل",
      logo1:"../src/img/sav.png"
    },
    {
      id:8, 
      logo:"../src/img/serch14.png",
      name:"دیوار",
      logo1:"../src/img/sav.png"
    },
    {
      id:9, 
      logo:"../src/img/serch15.png",
      name:"دی جی کلا",
      logo1:"../src/img/sav.png"
    },
    {
      id:10, 
      logo:"../src/img/serch7.png",
      name:"بلوبانک",
      logo1:"../src/img/sav.png"
    },
    {
      id:11, 
      logo:"../src/img/serch10.png",
      name:"اسنپ فود ",
      logo1:"../src/img/sav.png"
    },
  ]

  const filteredProducts = prodacts.filter((item) =>
  item.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <>
    <div className="grid gap-10 mt-10 mr-30 mb-20">
      <h1 className="text-3xl font-bold">جستجو</h1>

      <div className="flex gap-10 mr-8" >

        <p className="flex">
          <img src="../src/img/serch1.png" alt="" />
          <span>ذخیره شده ها</span>
        </p>

        <p className="flex">
          <img src="../src/img/serch2.png" alt="" />
          <span>شرکت ها</span>
        </p>
        
        <p className="flex">
          <img src="../src/img/serch3.png" alt="" />
          <span>راه های تماس</span>
        </p>

        <p className="flex">
          <img src="../src/img/serch4.png" alt="" />
          <span>سرمایه گذار</span>
        </p>

        <p className="flex">
          <img src="../src/img/serch5.png" alt="" />
          <span>رویداد ها</span>
        </p>

      </div>
    </div>

    <div className="flex justify-center ">
      <div className="grid w-330 h-230 bg-white shadow-2xl">
        <div className="grid h-20">

        <div className="flex justify-center  gap-275 h-20">
        <p className="flex items-center">
          <img src="../src/img/serch6.png" />
          <span className="font-bold text-gray-500 text-[16px]">پیشنهاد ها</span>
        </p>
          <p className="flex justify-center items-center text-blue-600">
          <CgBolt/>
        مشاهده بیشتر
          </p>
          </div>

          <div>
          <hr className="w-full" />
        </div>
        </div>




        <div className="flex flex-col gap-2 h-180 ">
  {filteredProducts.length > 0 ? (
              filteredProducts.map((item) => (
                <div key={item.id} className="flex items-center   justify-between w-full py-3 px-4 border-b border-gray-100 hover:bg-gray-50 transition-colors">
                 
                  <div className="flex items-center gap-3">
                    <img src={item.logo} alt={item.name} className="w-8 h-8 rounded-lg object-contain" />
                    <span className="font-medium text-gray-800">{item.name}</span>
                  </div>
                 
                  <div className="flex items-center">
                    <img src={item.logo1} className="w-5 h-5" />
                  </div>
                  
                </div>
              ))
            ) : (
              
              <div className="text-center py-6 text-gray-400">
                
              </div>
            )}
</div>




      </div>
      </div>
    </>
  );
}

export default Serch;