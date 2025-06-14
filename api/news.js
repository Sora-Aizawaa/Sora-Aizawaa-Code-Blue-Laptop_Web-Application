/* eslint-env node */
/* eslint-disable no-undef */

import axios from "axios";

export default async function handler(req, res) {
  try {
    const response = await axios.get("https://newsapi.org/v2/top-headlines", {
      params: {
        country: "us",
        category: "technology",
        apiKey: process.env.VITE_APIKEY, // OK di serverless function
        page: 1,
        pageSize: 100,
      },
    });

    res.status(200).json(response.data);
  } catch (error) {
    console.error("API proxy error:", error.message || error);
    res.status(500).json({ error: "Failed to fetch news" });
  }
}
