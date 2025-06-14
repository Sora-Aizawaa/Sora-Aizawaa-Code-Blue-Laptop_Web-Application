import { useState, useEffect } from "react";
import Footer from "../Component/Footer";
import Header from "../component/header";
import { getBlogList } from "../Component/Api";

const Blog = () => {
  // API
  const [popularBlog, setPopularBlog] = useState([]);
  const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
    const fetchArticles = async () => {
      const data = await getBlogList();
      // Menggunakan setArticles karena state articles sudah didefinisikan
      setPopularBlog(data);
      setTotalResults(data.length);
    };

    fetchArticles();
  }, []);

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  // Data kalender manual (menyesuaikan grid tampilan)
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const currentMonthDays = new Date(
    time.getFullYear(),
    time.getMonth() + 1,
    0
  ).getDate();
  const firstDay = new Date(time.getFullYear(), time.getMonth(), 1).getDay();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="max-w-6xl mx-auto px-4 py-8 flex-1">
        <h1 className="text-3xl font-bold">Berita Teknologi Terbaru</h1>
        {/* <p className="text-gray-500"></p> */}
        <div className="border-b-5 border-red-500 w-100 my-10"></div>
        <h2 className="text-2xl font-bold mb-4">
          Total Berita: {totalResults}
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* News Section */}
          <div className="md:col-span-2 space-y-8">
            {popularBlog.length > 0 ? (
              popularBlog.map((article, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row bg-white shadow-lg p-4 rounded-lg"
                >
                  <img
                    src={
                      article.urlToImage || "https://via.placeholder.com/150"
                    }
                    alt={article.title}
                    className="w-full md:w-60 h-40 object-cover rounded-lg"
                  />
                  <div className="md:ml-4 flex flex-col justify-between">
                    <div>
                      <h2
                        className="text-xl font-semibold mt-2 text-blue-600 cursor-pointer hover:underline"
                        onClick={() => window.open(article.url, "_blank")}
                      >
                        {article.title}
                      </h2>
                      <p className="text-gray-500 text-sm my-2">
                        Author : {article.author || "Unknown Author"}
                      </p>
                      <p className="text-gray-500 text-sm">
                        {new Date(article.publishedAt).toLocaleString("en-US", {
                          weekday: "long",
                          month: "short",
                          day: "2-digit",
                          year: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                          hour12: true,
                          // timeZoneName: "short",
                        })}
                      </p>
                      <p className="text-gray-600 text-sm mt-2">
                        {article.description}
                      </p>
                    </div>
                    <div className="flex items-center text-sm text-gray-500 mt-2">
                      {/* <img
                        src={"https://via.placeholder.com/30"} // Tidak ada ikon di API
                        alt="Source"
                        className="w-6 h-6 rounded-full mr-2"
                      /> */}
                      <span className="font-semibold">
                        Source : {article.source.name}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500">
                Lagi Loading Beritanya, Mohon Ditunggu...
              </p>
            )}
          </div>

          {/* Sidebar - Popular News */}
          <div className="p-4 bg-white shadow-lg rounded-lg">
            {/* Jam Saat Ini */}
            <div className="text-center mb-6">
              <p className="text-3xl font-bold">
                Jam : {time.toLocaleTimeString()}
              </p>
              <p className="text-gray-500 text-lg mt-2">
                Tanggal : {time.toLocaleDateString()}
              </p>
            </div>

            {/* Kalender */}
            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-center mb-4">
                {time.toLocaleString("default", { month: "long" })}{" "}
                {time.getFullYear()}
              </h3>
              <div className="grid grid-cols-7 text-center text-gray-700">
                {days.map((day) => (
                  <div key={day} className="font-semibold">
                    {day}
                  </div>
                ))}
                {/* Kosongkan slot sebelum hari pertama */}
                {Array(firstDay)
                  .fill("")
                  .map((_, index) => (
                    <div key={`empty-${index}`} className="p-2"></div>
                  ))}
                {/* Isi kalender */}
                {Array.from({ length: currentMonthDays }, (_, i) => i + 1).map(
                  (day) => (
                    <div
                      key={day}
                      className={`p-2 rounded-lg ${
                        day === time.getDate()
                          ? "bg-blue-500 text-white font-bold"
                          : "hover:bg-gray-200"
                      }`}
                    >
                      {day}
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      {/* Modal */}
    </div>
  );
};

export default Blog;
