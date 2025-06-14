import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <footer className="bg-[#0a0325] text-white py-10 px-8 md:px-16 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Welcome Section */}
          <div>
            <h3 className="text-lg font-bold">Tentang Kami</h3>
            <p className="text-sm mt-2">
              Code Blue Laptop Merupakan Website yang menyediakan berbagai macam
              service laptop dengan harga terjangkau, memperbaiki laptop dengan
              masalah seperti laptop mati total, laptop mati mendadak, blue
              screen, cleaning/repasta, dll.
            </p>

            <h3 className="text-lg font-bold mt-5">Bisnis Partner</h3>
            <ul className="text-sm mt-2 space-y-1">
              <li>
                TeknisiGo
                <img
                  src="/logo.png"
                  alt="Logo"
                  className="w-6 h-6 inline-block ml-5"
                />
              </li>
            </ul>
          </div>

          {/* More about store & Key Links */}
          <div>
            {/* <h3 className="text-lg font-bold">More about store</h3>
            <ul className="text-sm mt-2 space-y-1">
              <li>Multiple Branches</li>
              <li>Take Franchise</li>
              <li>Scheduled Offers</li>
              <li>More Links</li>
            </ul> */}
            <h3 className="text-lg font-bold">Metode Pembayaran</h3>
            <ul className="text-sm mt-2 space-y-1">
              <li>Qris Gopay/Shopeepay/Bank</li>
              <li>Bank Virtual Account</li>
            </ul>
          </div>

          {/* Popular Products */}
          <div>
            <h3 className="text-lg font-bold">Melayani Perbaikan Di Kota</h3>
            <ul className="text-sm mt-2 space-y-3">
              <li className="flex items-center gap-3">
                {/* <img
                  src="/images/logo.png"
                  alt="Product 1"
                  className="w-12 h-12 object-cover rounded"
                /> */}
                <div>
                  <p>Mempawah</p>
                  {/* <p className="text-yellow-500 font-bold">$56.00</p> */}
                </div>
              </li>
              <li className="flex items-center gap-3">
                {/* <img
                  src="/path-to-image2.jpg"
                  alt="Product 2"
                  className="w-12 h-12 object-cover rounded"
                /> */}
                <div>
                  <p>Pontianak</p>
                  {/* <p className="text-yellow-500 font-bold">$88.00</p> */}
                </div>
              </li>
              <li className="flex items-center gap-3">
                {/* <img
                  src="/path-to-image3.jpg"
                  alt="Product 3"
                  className="w-12 h-12 object-cover rounded"
                /> */}
                <div>
                  <p>Singkawang</p>
                  {/* <p className="line-through text-gray-400">$88.00</p> */}
                  {/* <p className="text-yellow-500 font-bold">$74.00</p> */}
                </div>
              </li>
            </ul>
          </div>

          {/* Contact Details & Local Stores */}
          <div>
            <h3 className="text-lg font-bold">Detail Kontak</h3>
            <p className="text-sm mt-4">Alamat Kantor :</p>
            <p className="text-sm">WhatsApp: +62 895 7017 91492</p>
            <p className="text-sm">E-mail: codebluelaptop@gmail.com</p>
            {/* <h3 className="text-lg font-bold mt-6">
              Melayani Perbaikan Laptop di Kota
            </h3>
            <ul className="text-sm mt-2 space-y-1">
              <li>Mempawah</li>
              <li>Singkawang</li>
              <li>Pontianak</li>
            </ul> */}
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="mt-10 flex flex-col md:flex-row items-center justify-between text-sm border-t border-gray-700 pt-6">
          <div className="flex space-x-4">
            {/* <a href="#" className="hover:text-gray-400">
            Facebook
        </a>
        <a href="#" className="hover:text-gray-400">
            Twitter
        </a> */}
            <a href="#" className="hover:text-gray-400">
              Instagram
            </a>
            <a href="#" className="hover:text-gray-400">
              Tiktok
            </a>
            <a href="#" className="hover:text-gray-400">
              Github
            </a>
            <a href="#" className="hover:text-gray-400">
              Linkedin
            </a>
            <a href="#" className="hover:text-gray-400">
              Whatsapp
            </a>
          </div>
          <p className="mt-4 md:mt-0">
            Copyright | Code Blue Laptop | Developed by Muhammad Reza Anggawiry
            <Link
              to="/receipt"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-yellow-400"
            >
              a
            </Link>
          </p>
        </div>
      </footer>
    </div>
  );
}
