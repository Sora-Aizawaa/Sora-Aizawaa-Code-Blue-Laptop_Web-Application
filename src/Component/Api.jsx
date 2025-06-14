import axios from "axios";

const baseUrl = import.meta.env.VITE_BASEURL;
const apiKey = import.meta.env.VITE_APIKEY;

export const getBlogList = async () => {
  try {
    // Ambil totalResults dulu
    const initialResponse = await axios.get(
      `${baseUrl}/top-headlines?country=us&category=technology&apiKey=${apiKey}&page=1&pageSize=1`
    );

    console.log("Initial API Response:", initialResponse.data);

    if (
      initialResponse.data?.status !== "ok" ||
      !initialResponse.data?.totalResults
    ) {
      throw new Error("Invalid API response");
    }

    const totalResults = initialResponse.data.totalResults;

    // Ambil semua artikel dalam satu permintaan (dibatasi 100 per permintaan)
    const totalPages = Math.ceil(totalResults / 100);
    let allArticles = [];

    for (let page = 1; page <= totalPages; page++) {
      const response = await axios.get(
        `${baseUrl}/top-headlines?country=us&category=technology&apiKey=${apiKey}&page=${page}&pageSize=100`
      );

      if (response.data?.status === "ok" && response.data?.articles) {
        allArticles = [...allArticles, ...response.data.articles];
      }
      console.log(response.data.articles);
    }

    console.log("Final Articles:", allArticles.length);
    return allArticles;
  } catch (error) {
    console.error("Error fetching blog list:", error.message || error);
    return [];
  }
};
