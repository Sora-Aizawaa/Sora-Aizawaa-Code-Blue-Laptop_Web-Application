import Footer from "../Component/Footer";
import Header from "../Component/Header";
import { useState } from "react";
import monitor from "../assets/monitor.jpg";
import ram from "../assets/ram.jpg";
import repasta from "../assets/repasta.jpg";
import keyboard from "../assets/keyboard.jpg";
import engsel from "../assets/engsel.jpg";
import windows from "../assets/windows.jpg";
import aplikasi from "../assets/aplikasi.png";
import game from "../assets/game.jpg";
import aktivasi from "../assets/aktivasi-windows.jpg";
import virus from "../assets/virus-removal.jpg";

const services = [
  {
    title: "Service Upgrade RAM, SSD, dan Komponen Lainnya",
    description:
      "Tingkatkan kecepatan dan kapasitas penyimpanan laptop Anda dengan upgrade RAM, SSD, atau komponen internal lainnya.",
    image: ram,
  },
  {
    title: "Penggantian Komponen Lcd",
    description:
      "Penggantian komponen layar yang pecah, berkedip, garis-garis dan lainnya.",
    image: monitor,
  },
  {
    title: "Penggantian Thermal Paste & Pembersihan Kipas",
    description:
      "Kurangi overheat dengan membersihkan kipas internal dan mengganti thermal paste lama untuk performa pendinginan yang lebih baik.",
    image: repasta,
  },
  {
    title: "Penggantian Keyboard",
    description:
      "Ganti keyboard yang rusak, macet, atau tidak berfungsi dengan penggantian komponen yang baru.",
    image: keyboard,
  },
  {
    title: "Perbaikan Engsel Laptop",
    description: "Perbaiki engsel laptop yang longgar, patah, atau keras.",
    image: engsel,
  },
  {
    title: "Install Ulang Sistem Operasi Windows dan VMWare WorkStation Linux",
    description: "Install Ulang Windows 10, 11 dan Linux.",
    image: windows,
  },
  {
    title: "Install Aplikasi Apapun",
    description: "Bisa Install Aplikasi Sesuai Kebutuhan Anda.",
    image: aplikasi,
  },
  {
    title: "Install Game Apapun",
    description:
      "Bisa Install Game Sesuai Kemauan Anda Di Laptop, Game Ps1, Ps2, Ps3, Ps4, Game Playstore.",
    image: game,
  },
  {
    title: "Aktivasi Windows dan Office",
    description:
      "Aktivasi Windows dan Office Membuat Laptop Anda Nyaman Untuk Digunakan.",
    image: aktivasi,
  },
  {
    title: "Virus Removal",
    description: "Hapus Semua Virus Di Laptop Anda Sampai Ke Akar-Akarnya.",
    image: virus,
  },
];

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Fungsi untuk menyaring layanan berdasarkan pencarian
  const filteredServices = services.filter((service) =>
    service.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen">
      <Header onSearch={setSearchQuery} />{" "}
      {/* Kirim fungsi pencarian ke Header */}
      <div className="container mx-auto max-w-screen-xl py-4 px-4 flex-grow">
        <h2 className="text-4xl font-bold text-center">
          SERVICE LAPTOP PANGGILAN/DATANG LANGSUNG
        </h2>
        <p className="text-lg text-center mt-4 max-w-2xl mx-auto">
          Jasa Service Laptop Segala Penyakit - Harga Lebih Murah Dibanding Toko
          Service Pada Umumnya
        </p>

        {/* Tampilkan hasil pencarian */}
        {filteredServices.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 mt-12">
            {filteredServices.map((service, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg overflow-hidden transition hover:shadow-xl"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-blue-600">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 mt-2">{service.description}</p>
                  {/* <button className="mt-4 px-4 py-2 border border-black text-black hover:bg-black hover:text-white transition rounded">
                    READ MORE
                  </button> */}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600 mt-6">
            Barang tidak ditemukan.
          </p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
