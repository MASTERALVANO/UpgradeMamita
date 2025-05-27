"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaThumbtack, FaCheckSquare } from "react-icons/fa";
import "@/app/globals.css";

// Pesan
const HARGA_MINUMAN = 15000;

const produkMinuman = [
  {
    image: '/product.svg',
    title1: 'Strawberry',
    title2: 'Smoothies',
    desc: 'Buah strawberry diblend dengan gula & susu, dengan topping potongan buah, whipped cream dan keju.'
  },
  {
    image: '/product (1).svg',
    title1: 'Avocado',
    title2: 'Smoothies',
    desc: 'Buah alpukat diblend dengan gula & susu, dengan topping potongan buah, whipped cream dan keju.'
  },
  {
    image: '/product (2).svg',
    title1: 'Mango',
    title2: 'Thai',
    desc: 'Buah mangga diblend dengan gula & susu, dengan topping potongan buah, whipped cream dan keju.'
  },
  {
    image: '/product (3).svg',
    title1: 'Ice Chocoblend',
    title2: 'With Oreo',
    desc: 'Buah durian diblend dengan gula & susu, dengan topping potongan buah, whipped cream dan keju.'
  },
];

function Product({ onOrder }: { onOrder: () => void }) {
  const [imgIndex, setImgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImgIndex((prev) => (prev + 1) % produkMinuman.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const produk = produkMinuman[imgIndex];

  return (
    <section className="flex items-center m-0 p-0">
      <div className="w-full flex flex-col md:flex-row gap-12">
        {/* LEFT: Gambar Smoothie */}
        <div className="relative flex">
          <Image
            src={produk.image}
            alt={`Smoothie ${imgIndex + 1}`}
            width={858}
            height={1080}
          />
        </div>
        {/* RIGHT: Konten */}
        <div className="w-full md:w-[600px] space-y-6 text-start">
          <p className="text-lg font-semibold text-black-500">Smooth & Healthy</p>
          <h2 className="text-[48px] font-extrabold leading-tight text-black">
            {produk.title1} <br /> {produk.title2}
          </h2>

          <p className="text-[18px] font-medium text-black-700 leading-relaxed">
            {produk.desc}
          </p>
          <div className="flex gap-5 pt-4">
            <button className="bg-[#a6b860] hover:bg-[#95a452] text-white text-lg font-bold py-2 px-6 rounded-full shadow-md transition">
              15K
            </button>
            <button
              className="bg-[#2c2222] hover:bg-[#3c2e2e] text-white text-lg font-bold py-2 px-6 rounded-full shadow-md transition"
              onClick={onOrder}
            >
              ORDER NOW
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
function Pesan({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [jumlah, setJumlah] = useState(0);
  const [nama, setNama] = useState("");
  const [alamat, setAlamat] = useState("");
  const [minuman, setMinuman] = useState("Strawberry Smoothies");
  const [pembayaran, setPembayaran] = useState("tunai");

  const totalHarga = jumlah * HARGA_MINUMAN;

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const res = await fetch('/api/pesanan', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nama, alamat, jumlah, minuman, pembayaran }),
  });

  if (res.ok) {
    alert('Pesanan berhasil dikirim!');
    setNama('');
    setAlamat('');
    setJumlah(0);
    setMinuman('Strawberry Smoothies');
    setPembayaran('tunai');
    onClose();
  } else {
    alert('Gagal mengirim pesanan!');
  }
};


  return (
    <div
      className={`fixed inset-0 z-50 flex items-end justify-center bg-black/40 transition-all duration-300 ${
        isOpen ? "visible opacity-100" : "invisible opacity-0"
      }`}
      style={{ pointerEvents: isOpen ? "auto" : "none" }}
    >
      <section
        className={`w-full max-w-md bg-white rounded-t-2xl p-6 font-sans shadow-lg transform transition-transform duration-300 ${
          isOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <button
          className="absolute top-4 right-6 text-gray-500 text-2xl"
          onClick={onClose}
        >
          ×
        </button>

        <h2 className="text-lg font-semibold mb-4">Form Pemesanan</h2>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium mb-1">Minuman</label>
            <select
              value={minuman}
              onChange={(e) => setMinuman(e.target.value)}
              className="w-full border rounded p-2"
            >
              <option value="Strawberry Smoothies">Strawberry Smoothies</option>
              <option value="Avocado Smoothies">Avocado Smoothies</option>
              <option value="Mango Thai">Mango Thai</option>
              <option value="Ice Chocoblend With Oreo">Ice Chocoblend With Oreo</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Nama</label>
            <input
              type="text"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              placeholder="Masukkan nama"
              className="w-full border rounded p-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Alamat</label>
            <input
              type="text"
              value={alamat}
              onChange={(e) => setAlamat(e.target.value)}
              placeholder="Masukkan alamat"
              className="w-full border rounded p-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Jumlah</label>
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => setJumlah(Math.max(0, jumlah - 1))}
                className="px-3 py-1 bg-red-500 text-white rounded"
              >
                -
              </button>
              <span>{jumlah}</span>
              <button
                type="button"
                onClick={() => setJumlah(jumlah + 1)}
                className="px-3 py-1 bg-green-500 text-white rounded"
              >
                +
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Pembayaran</label>
            <select
              value={pembayaran}
              onChange={(e) => setPembayaran(e.target.value)}
              className="w-full border rounded p-2"
            >
              <option value="tunai">Tunai</option>
              <option value="qris">QRIS</option>
              <option value="transfer">Transfer Bank</option>
            </select>
          </div>

          <div className="border-t pt-4 mt-4">
            <p className="text-sm">
              Harga satuan: <strong>Rp {HARGA_MINUMAN.toLocaleString()}</strong>
            </p>
            <p className="text-base font-semibold">
              Total: Rp {totalHarga.toLocaleString()}
            </p>
          </div>

          <button
            type="submit"
            className="mt-4 bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Pesan Sekarang
          </button>
        </form>
      </section>
    </div>
  );
}

// Product


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
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div id="home">
      <Description />
      <Product onOrder={() => setIsOpen(true)} />
      <Pesan isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
}
