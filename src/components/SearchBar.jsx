import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      value={query}
      onChange={handleChange}
      className="px-4 py-2 border border-gray-300 rounded-md"
    />
  );
};

export default SearchBar;
