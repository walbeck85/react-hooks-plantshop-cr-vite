import React, { useState } from "react";

function Search({ onSearch }) {
  // Track the current value of the input field
  const [searchText, setSearchText] = useState("");

  // Handle changes to the input field and pass them upward
  function handleChange(e) {
    const value = e.target.value;
    setSearchText(value); // update local state
    onSearch(value);      // notify parent component of the change
  }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={searchText}
        onChange={handleChange}
      />
    </div>
  );
}

export default Search;
