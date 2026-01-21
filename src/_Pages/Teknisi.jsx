import Header from "../Component/Header";
import Footer from "../Component/Footer";
// import reza from "../assets/reza1.png";
import cv from "../assets/service1.pdf";

const Teknisi = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <main className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="relative max-w-6xl w-full bg-white text-black rounded-xl border border-gray-200 shadow-xl overflow-hidden">
          {/* <div className="absolute top-24 right-32 w-20 h-20 border-4 border-black rounded-full opacity-20"></div>
          <div className="absolute bottom-24 left-32 w-16 h-16 border-4 border-black rounded-full opacity-20"></div> */}

          {/* ===== CONTENT ===== */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 p-10 relative z-10">
            {/* ===== LEFT CONTENT ===== */}
            <div>
              <h1 className="text-5xl font-extrabold leading-tight text-black">
                Muhammad <br /> Reza A
              </h1>

              <p className="mt-3 text-lg font-semibold text-black">
                Teknisi Laptop
              </p>

              <p className="mt-6 text-gray-700 max-w-md text-sm leading-relaxed">
                Service laptop segala penyakit: Melakukan instalasi ulang sistem
                operasi dan software pendukung kerja. Troubleshooting hardware
                dan software. Instalasi Sistem Operasi. Perbaikan Keyboard,
                Harddisk, Ssd, Ram, Fan dan Lain lain. Harga service jauh lebih
                murah dibanding toko service pada umumnya.
              </p>

              {/* ===== SECTIONS ===== */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 text-sm">
                {/* Experiences */}
                {/* <div>
                  <h3 className="font-bold text-lg mb-2 text-black">
                    Pengalaman
                  </h3>
                  <p className="text-gray-700">
                    5+ tahun pengalaman service laptop dan PC rakitan.
                  </p>
                  <button className="mt-3 px-4 py-1 border border-black text-black rounded-full text-xs font-semibold">
                    Download CV
                  </button>
                </div> */}

                {/* Education */}
                <div>
                  <h3 className="font-bold text-lg mb-2 text-black">
                    Pendidikan
                  </h3>
                  <p className="text-gray-700">
                    S1 STMIK PONTIANAK JURUSAN TEKNIK INFORMATIKA
                  </p>
                  <a
                    href={cv}
                    download="CV-Muhammad-Reza.pdf"
                    role="button"
                    className="
    inline-flex items-center justify-center gap-2 mt-3 px-4 py-1
    bg-green-600 text-white border border-green-600
    rounded-full text-xs font-semibold shadow-sm
    hover:bg-white hover:text-blue-600 hover:border-blue-600
    transition
  "
                  >
                    Download CV
                  </a>
                </div>

                {/* Skills */}
                <div className="text-left">
                  <h3 className="font-bold text-lg mb-3 text-black">
                    Sertifikasi
                  </h3>

                  <div className="space-y-2">
                    <p className="text-gray-700">
                      Teknisigo Academy – Sertifikat Pelatihan Service Laptop
                      (Interface & Advance)
                    </p>

                    <p className="text-gray-700">
                      Certificate in HTML5 Application Development Essential
                      (Bahasa Pemrograman HTML5)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ===== RIGHT IMAGE ===== */}
            <div className="relative flex justify-center items-center">
              <div className="overflow-hidden rounded-[70px] w-full max-w-md border border-gray-300">
                {/* <img
                  src={reza}
                  alt="Teknisi"
                  className="w-full h-[380px] object-cover"
                /> */}
              </div>
            </div>
          </div>

          <br />
          <div className="absolute bottom-1 right-8 text-sm text-black space-y-2">
            <p>📞 0895701791492</p>
            <p>✉️ hazedivision127@gmail.com</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Teknisi;
