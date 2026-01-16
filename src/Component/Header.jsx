import logo from "../assets/logo.png";
import { useState } from "react";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";

export default function Header({ onSearch }) {
  const [query, setQuery] = useState("");

  const location = useLocation();

  const isHomePage = location.pathname === "/";

  const handleSearch = (e) => {
    if (isHomePage) {
      // Hanya berfungsi di Home
      const value = e.target.value;
      setQuery(value);
      onSearch(value);
    }
  };

  const handleClick = () => {
    if (!isHomePage) {
      alert("Search ini hanya bisa digunakan di halaman Services!");
    }
  };

  return (
    <div className="w-full bg-gray-100 mb-10">
      {/* Top Bar */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      />
      <div className="bg-blue-900 text-white text-sm py-4 px-8 flex text-left border-b border-white border-opacity-30 overflow-hidden">
        <div
          className="whitespace-nowrap"
          style={{
            animation: "slideText 10s linear infinite",
          }}
        >
          Selamat Datang Di Website Code Blue Laptop
        </div>
        <style>
          {`
                        @keyframes slideText {
                            0% { transform: translateX(100%); }
                            100% { transform: translateX(-100%); }
                        }
                    `}
        </style>
        <span className="hidden md:inline absolute right-12 top-4 text-xl font-bold">
          WhatsApp: 0895701791492
        </span>
      </div>

      {/* Header */}
      <header className="bg-blue-900 text-white py-4 px-8 flex items-center justify-between">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-22 mr-2" />
          <h1 className="text-3xl font-bold">
            <span className="text-blue-500">CodeBlue</span>Laptop
          </h1>
        </div>
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="text-blue-500 hover:text-yellow-400">
            Services
          </Link>
          {/* <Link to="/berita" className="text-blue-500 hover:text-yellow-400">
            Berita
          </Link> */}
          {/* <Link to="/teknisi" className="text-blue-500 hover:text-yellow-400">
            Teknisi
          </Link> */}
        </nav>
      </header>

      {/* Search Bar */}
      <div className="flex items-center bg-white px-8 py-4 shadow">
        <input
          type="text"
          placeholder="Cari Services..."
          className="w-72 max-w-full px-4 py-2 border border-gray-300 rounded mx-4"
          value={query}
          onChange={handleSearch}
          onClick={handleClick}
          readOnly={!isHomePage}
        />

        <div className="flex items-center space-x-10">
          <div className="whitespace-nowrap overflow-hidden w-full">
            <p className="animate-marquee text-black-700 text-sm">
              Alamat Kantor: Jalan Tanjung Raya 2, Garden Mas 2, Kelurahan
              Saigon, Kecamatan Pontianak Timur, Kota Pontianak, Provinsi
              Kalimantan Barat.
            </p>
          </div>
        </div>

        <style>
          {`
    @keyframes marquee {
      0% {
        transform: translateX(100%); /* Start from the right */
      }
      100% {
        transform: translateX(-100%); /* Move to the left */
      }
    }

    .animate-marquee {
      display: inline-block;
      white-space: nowrap;
      animation: marquee 40s linear infinite;
    }
  `}
        </style>
      </div>
    </div>
  );
}

// Tambahkan validasi PropTypes
Header.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

// Atur default props jika diperlukan
Header.defaultProps = {
  onSearch: () => {},
};
