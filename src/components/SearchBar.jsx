import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation, useSearchParams } from "react-router-dom";
import axios from "axios";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

import "./SearchBar.css";

export function SearchBar({ placeholder = "Search", onResults }) {
  const [searchParams] = useSearchParams();
  const queryFromURL = searchParams.get("query") || "";

  const [query, setQuery] = useState(queryFromURL);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const inputRef = useRef(null);


  // Get user role once
  const userRole = localStorage.getItem("user");

  /* ----------------------------------------------------
     Sync input state from URL (fixes back / forward)
  -----------------------------------------------------*/
  useEffect(() => {
    setQuery(queryFromURL);
  }, [queryFromURL]);

  /* ----------------------------------------------------
     Focus input when on search page
  -----------------------------------------------------*/
  useEffect(() => {
    if (location.pathname.startsWith("/search")) {
      inputRef.current?.focus();
    }
  }, [location.pathname]);

  /* ----------------------------------------------------
     Navigate to search page on focus (non-admin)
  -----------------------------------------------------*/
  const moveToSearchPage = () => {
    if (userRole !== "admin" && !location.pathname.startsWith("/search")) {
      navigate(`/search?query=${encodeURIComponent(query)}`);
    }
  };

  /* ----------------------------------------------------
     Input ONLY updates URL
  -----------------------------------------------------*/
  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    const params = new URLSearchParams(location.search);
    params.set("query", value);

    navigate(
      { pathname: "/search", search: params.toString() },
      { replace: true }
    );
  };

  /* ----------------------------------------------------
     Debounced search driven by URL (single source of truth)
  -----------------------------------------------------*/
  useEffect(() => {
    const timeout = setTimeout(async () => {
      if (!queryFromURL.trim()) {
        onResults([]);
        return;
      }

      try {
        setLoading(true);
        const res = await axios.get(
          `${API_BASE_URL}/api/products/search?query=${queryFromURL}`
        );
        onResults(res.data);
      } catch (err) {
        console.error("Search failed:", err);
        onResults([]);
      } finally {
        setLoading(false);
      }
    }, 500);

    return () => clearTimeout(timeout);
  }, [queryFromURL, onResults]);

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
          ref={inputRef}
          type="text"
          placeholder={placeholder}
          value={query}
          onFocus={moveToSearchPage}
          onChange={handleChange}
        />

        {loading && <span className="search-loading-dot"></span>}
      </div>
    </div>
  );
}
