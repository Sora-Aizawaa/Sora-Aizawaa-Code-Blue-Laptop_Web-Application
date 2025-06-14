import Footer from "../Component/Footer";
import Header from "../component/header";
import { useState } from "react";
import monitor from "../assets/monitor.jpg";
import ram from "../assets/ram.jpg";
import repasta from "../assets/repasta.jpg";

const services = [
  {
    title: "Upgrade services (RAM, SSD, etc.)",
    description:
      "Improve your laptop’s speed and storage by upgrading RAM, SSD, or other internal components.",
    image: ram,
  },
  {
    title: "Screen and monitor repair",
    description:
      "Repair broken, flickering, or unresponsive screens with quality parts and expert service.",
    image: monitor,
  },
  {
    title: "Thermal paste cleaning & fan maintenance",
    description:
      "Reduce overheating by cleaning internal fans and replacing old thermal paste for better cooling.",
    image: repasta,
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
        <h2 className="text-4xl font-bold text-center">SERVICES</h2>
        <p className="text-lg text-center mt-4 max-w-2xl mx-auto">
          We offer a full range of repair services provided by an experienced
          and specialized team.
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
                  <button className="mt-4 px-4 py-2 border border-black text-black hover:bg-black hover:text-white transition rounded">
                    READ MORE
                  </button>
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
