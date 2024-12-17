import React, { useState } from "react";
import axios from "axios";
import SearchNews from "./SearchNews";
import TrendingTopics from "./TrendingTopics";
import { FaTimes } from "react-icons/fa";

const NewsPage = () => {
  const [articles, setArticles] = useState([]);
  const [showArticles, setShowArticles] = useState(false);

  const fetchNews = async (query) => {
    const apiKey = import.meta.env.VITE_APP_API_KEY_NEWS;
    const url = `https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}`;

    try {
      const response = await axios.get(url);

      const articles = Array.isArray(response.data.articles)
        ? response.data.articles.slice(0, 5)
        : [];
      setArticles(articles);
      setShowArticles(true);
    } catch (error) {
      console.error("Error al buscar noticias:", error);
    }
  };

  const toggleArticlesVisibility = () => {
    setShowArticles(!showArticles);
  };

  return (
    <div className="container mx-auto p-4 bg-[rgb(22,22,34)] text-white mb-32">
      <h1 className="text-2xl font-bold mb-4">Noticias de Comercio</h1>
      <SearchNews onSearch={fetchNews} />
      <TrendingTopics onSelect={fetchNews} />

      {showArticles && (
        <button
          onClick={toggleArticlesVisibility}
          className="px-4 py-2 bg-[rgb(119,217,144)] text-[#000000] rounded-lg hover:bg-[rgb(119,217,144)] transition mb-4"
        >
          <FaTimes className="inline-block" />
        </button>
      )}

      {showArticles && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {articles.map((article, index) => (
            <div
              key={index}
              className="p-4 border border-[#71717a] rounded-lg bg-[#787880]"
            >
              <img
                src={article.urlToImage}
                alt={article.title}
                className="w-full h-40 object-cover rounded-md mb-2"
              />
              <h2 className="text-lg font-semibold">{article.title}</h2>
              <p className="text-sm text-gray-300">{article.description}</p>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[rgb(119,217,144)] mt-2 block"
              >
                Leer más
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NewsPage;
