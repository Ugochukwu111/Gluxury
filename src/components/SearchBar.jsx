import { Search } from "lucide-react";

import "./SearchBar.css";

export function SearchBar({placeholder}) {

  return (
    <div className="search-input-container">
      <div className="search-input-wrapper flex-1">
        <Search size={18}/>
        <input 
         type="text"
         placeholder= {placeholder}
          />
      </div>
      <button>Search</button>
    </div>
  );
}
