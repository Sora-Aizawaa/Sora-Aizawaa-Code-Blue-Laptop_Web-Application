import Footer from "../Component/Footer";
import Header from "../Component/Header";

const Teknisi = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="max-w-6xl mx-auto px-4 py-8 flex-1">
        {/* Pastikan "Surzil Geek" sejajar dengan "Latest News" */}

        <div className="flex flex-col w-full py-3 mr-15">
          {/* Nama & Profesi */}
          <h1 className="text-4xl font-bold">Muhammad Reza A</h1>
          <p className="text-lg text-gray-600 font-semibold">Teknisi</p>

          {/* Deskripsi */}
          <p className="mt-4 text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          {/* Signature */}
          <p className="mt-6 text-2xl font-signature">Muhammad Reza A</p>

          {/* Informasi Kontak */}
          <div className="mt-6">
            <p>
              <strong>Nick Name:</strong> Endrue Surzil Geek
            </p>
            <p>
              <strong>Email:</strong> itsme@surzilgeek.com
            </p>
            <p>
              <strong>Phone:</strong> (123)-456-78910
            </p>
            <p>
              <strong>Date of Birth:</strong> Jan 13, 1982
            </p>
            <p>
              <strong>Address:</strong> 121 King Street, Melbourne Victoria,
              1200 USA
            </p>
          </div>

          {/* Statistik */}
          <div className="mt-10 flex flex-wrap gap-10">
            <div>
              <p className="text-4xl font-bold text-orange-500">35</p>
              <p className="text-gray-600">Projects completed</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-purple-500">19</p>
              <p className="text-gray-600">Winning Awards</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-blue-500">229</p>
              <p className="text-gray-600">Happy Clients</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-green-500">19</p>
              <p className="text-gray-600">Running Projects</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Teknisi;
