import React, { useState } from "react";
import { debounce } from "lodash";

const Search = ({ setQuery, setCurrentPage }) => {
  const [input, setInput] = useState("");

  const handleSearchbutton = debounce((val) => {
    setQuery(val);
    setCurrentPage(1);
  }, 500); // Debounce delay of 500ms

  const handleInputChange = (e) => {
    setInput(e.target.value);
    handleSearchbutton(e.target.value);
  };

  return (
    <div className="search-box">
      <input
        type="text"
        value={input}
        placeholder="Type to search questions..."
        onChange={handleInputChange}
        className="search-input"
      />
    </div>
  );
};

export default Search;
