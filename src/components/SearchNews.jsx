import React, { useState } from "react";

const SearchNews = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    if (query.trim() === "") return;

    try {
      const results = await onSearch(query);

      // Verificar que `results` sea un array antes de usar .slice
      if (Array.isArray(results)) {
        const limitedResults = results.slice(0, 5);
        console.log(limitedResults);
      } else {
        console.error("Los resultados no son un array");
      }

      setQuery("");
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex gap-2 flex-wrap bg-[rgb(22,22,34)] p-4 rounded-lg"
    >
      <input
        type="text"
        placeholder="Buscar articulos..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full sm:w-3/4 p-3 border border-[#71717a] rounded-lg text-white bg-[#787880] focus:outline-none focus:ring-2 focus:ring-[rgb(119,217,144)] transition"
      />
      <button
        type="submit"
        className="sm:w-1/4 px-4 py-3 bg-[rgb(119,217,144)] text-[#000000] rounded-lg hover:bg-green-600 transition"
      >
        Buscar
      </button>
    </form>
  );
};

export default SearchNews;
