import React from "react";
import Image from "next/image";
import { FaThumbtack } from "react-icons/fa";
import { FaCheckSquare } from "react-icons/fa";
import "@/app/globals.css";

//Product
function Product() {
  return (  
    <section className="flex items-center m-0 p-0">
      <div className=" w-full flex flex-col md:flex-row gap-12">

        {/* LEFT: Gambar Smoothie */}
        <div className="relative flex ">
          <Image
            src="/product.svg"
            alt="Strawberry Smoothie"
            width={858}
            height={1080}
          />
        </div>

        {/* RIGHT: Konten */}
        <div className="w-full md:w-[600px] space-y-6 text-start">
          <p className="text-lg font-semibold text-gray-500">Smooth & Healthy</p>

          <h2 className="text-[48px] font-extrabold leading-tight bg-gradient-to-r from-[#ff5e66] to-[#c3d86e] bg-clip-text text-transparent">
            Strawberry <br /> Smoothies
          </h2>
          <p className="text-[18px] font-medium text-gray-700 leading-relaxed">
            Buah strawberry diblend dengan gula & susu, dengan topping potongan buah, whipped cream dan keju.
          </p>

          {/* Tombol */}
          <div className="flex gap-5 pt-4">
            <button className="bg-[#a6b860] hover:bg-[#95a452] text-white text-lg font-bold py-2 px-6 rounded-full shadow-md transition">
              15K
            </button>
            <button className="bg-[#2c2222] hover:bg-[#3c2e2e] text-white text-lg font-bold py-2 px-6 rounded-full shadow-md transition" onClick={() => form()}>
              ORDER NOW
            </button>
          </div>
        </div>
      </div>
    </section>
  )
};

// Deskripsi
function Description() {
  return (
    <section className="px-4 py-10 md:px-16 font-sans">
      <h1 className="text-[40px] font-extrabold text-[#4d5735] mb-4 font-jomhuria">
        Mamita Jepun — <span className="text-[#4d5735]">Smoothies Lokal, Rasa Juara!</span>
      </h1>

      <div className="mt-6 flex flex-col lg:flex-row gap-6">
        {/* Kotak Hijau */}
        <div className="bg-[#c3d86e] rounded-[32px] p-5 text-[#333] shadow-lg max-w-[797px] max-h-[485px] leading-relaxed text-base md:text-lg font-extrabold font-germania">
          <p>
            <span className="text-white font-extrabold font-germania">Selamat datang di Mamita Jepun —</span> tempat terbaik untuk menikmati smoothies segar, creamy, dan penuh topping yang bikin nagih!
          </p>
          <br />
          <p>
            Berawal dari dorongan keluarga dan semangat menciptakan cita rasa yang berbeda, Mamita hadir dengan berbagai pilihan minuman yang dibuat dari buah-buahan segar pilihan. Mulai dari Mango Thai yang juicy, Strawberry Smoothies yang seger, sampai Avocado dan Ice Durian yang legit, semuanya diracik dengan cinta dan topping khas Mamita yang melimpah.
          </p>
        </div>
        <div className="flex flex-col">
          <div className="bg-[#f9c283] rounded-[20px] p-5 text-[#333] shadow-lg w-full max-h-[252px] leading-relaxed text-base md:text-lg font-normal font-sans">
            <h2 className="text-[32px] font-extrabold text-[#4d5735] mb-3 font-jomhuria">
              Kenapa Harus <span className="text-[#a0c36e]">Mamita Jepun</span><span className="text-[#cce3ec]">?</span>
            </h2>
            <ul className="space-y-2 text-[base] md:text-base font-extrabold font-freeman">
              <li className="flex items-start gap-2"><FaCheckSquare className="text-green-600 mt-1" /> Rasa otentik buah segar</li>
              <li className="flex items-start gap-2"><FaCheckSquare className="text-green-600 mt-1" /> Topping & whipped cream khas Mamita</li>
              <li className="flex items-start gap-2"><FaCheckSquare className="text-green-600 mt-1" /> Proses higienis, cepat, dan berkualitas</li>
              <li className="flex items-start gap-2"><FaCheckSquare className="text-green-600 mt-1" /> Selalu hadir di media sosial kamu lewat TikTok & IG</li>
              <li className="flex items-start gap-2"><FaCheckSquare className="text-green-600 mt-1" /> Cocok buat semua usia, dari anak-anak sampai lansia</li>
            </ul>
          </div>
          <p className="mt-6 text-base md:text-lg font-semibold text-[#4d5735] w-full md:w-[65%] font-sans">
            Diproduksi langsung oleh tangan-tangan terpercaya, semua minuman disiapkan hanya dalam waktu <br />
            <span className="text-lg md:text-xl font-extrabold">5–6 menit</span> dengan standar kebersihan terbaik.
          </p>
        </div>
      </div>
      <div className="mt-6 flex items-start gap-2 text-xs md:text-sm font-extrabold text-[#252525] font-freeman">
        <FaThumbtack className="text-red-600 mt-1" />
        <p>
          Saat ini Mamita hadir di kota asalnya, namun ke depan, kami siap ekspansi ke Bandung & Ngunut — siapa tahu kota kamu jadi tujuan berikutnya?
        </p>
      </div>
    </section>
  );
}
export default function Content() {
  return (
    <>
      <Description />
      <Product />
    </>
  );
}
