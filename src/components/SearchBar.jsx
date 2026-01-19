import { useEffect, useRef, useState } from "react";
import { Search,CircleX  } from "lucide-react";
import axios from "axios";
import api from "../utils/api.js";
import "./SearchBar.css";

export function SearchBar({ placeholder, setSearchResult }) {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [isFocused, setIsFocused] = useState(false);

  const cancelSourceRef = useRef(null);
  const containerRef = useRef(null);

  // 1. FETCH LOGIC (MUST BE PRESENT)
  useEffect(() => {
    if (!query.trim()) {
      setSuggestions([]);
      return;
    }

    const timeout = setTimeout(async () => {
      try {
        cancelSourceRef.current?.cancel();
        cancelSourceRef.current = axios.CancelToken.source();
        const { data } = await api.get("/api/products/suggestions", {
          params: { q: query },
          cancelToken: cancelSourceRef.current.token,
        });
        setSuggestions(data);
      } catch (err) {
        if (!axios.isCancel(err)) console.error(err);
      }
    }, 300);

    return () => {
      clearTimeout(timeout);
      cancelSourceRef.current?.cancel();
    };
  }, [query]);

  // 2. CLICK OUTSIDE LOGIC
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsFocused(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearch = async (searchQuery = query) => {
    if (!searchQuery.trim()) return;
    try {
      const { data } = await api.get("/api/search", { params: { q: searchQuery } });
      setSearchResult?.(data);
      setIsFocused(false);
      setSuggestions([]);
      setQuery(searchQuery);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="search-input-container" ref={containerRef}>
      <div className="search-input-wrapper flex-1">
        <Search className="search-icon" size={18} />
        <input
          type="text"
          placeholder={placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          onFocus={() => setIsFocused(true)}
          
        />
        <CircleX 
         tabIndex={0}
         size={17} 
         className= {`cancel-search-icon ${query.length > 0 ? 'show': ''}`}
         onClick={()=>{setQuery('')}}
          />

        {/* Use conditional rendering AND absolute positioning */}
        {isFocused && suggestions.length > 0 && (
          <div className="search-values-container">
            {suggestions.map((item) => (
              <p
                key={item.id}
                onMouseDown={(e) => {
                  e.preventDefault(); // CRITICAL: prevents blur before search
                  setQuery(item.name);
                  handleSearch(item.name);
                  setIsFocused(false)
                }}
              >
                {item.name}
              </p>
            ))}
          </div>
        )}
      </div>
      <button onClick={() => handleSearch()}>Search</button>
    </div>
  );
}
