import { useState, useEffect } from "react";
import axios from "axios";
import "./SearchBar.css";

export function SearchBar({
  placeholder = "Search",
  query,
  setQuery,      // parent controls this
  onResults,
}) {
  const [debouncedValue, setDebouncedValue] = useState(query || "");
  const [loading, setLoading] = useState(false);

  // Debounce Effect (500ms)
  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedValue(query);
    }, 500);

    return () => clearTimeout(timeout);
  }, [query]);

  // Search API call
  useEffect(() => {
    if (debouncedValue.trim() === "") {
      onResults([]); // reset search
      return;
    }

    const searchProducts = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          `http://localhost:5000/api/products/search?query=${debouncedValue}`
        ); 
        onResults(res.data);
      } catch (error) {
        console.error("Search failed:", error);
        onResults([]);
      } finally {
        setLoading(false);
      }
    };

    searchProducts();
  }, [debouncedValue, onResults]);

  return (
    <div className="d-flex flex-1 justify-center">
      <div className="flex-1 searchProduct-container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide-search-icon"
        >
          <path d="m21 21-4.34-4.34" />
          <circle cx="11" cy="11" r="8" />
        </svg>

        <input
          type="text"
          placeholder={placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        {loading && <span className="search-loading-dot"></span>}
      </div>
    </div>
  );
}
