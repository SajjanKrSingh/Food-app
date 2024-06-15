import React, { useState } from 'react';

const FilterOptions = ({ onFilter }) => {
  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleFilter = (filter) => {
    const newFilters = selectedFilters.includes(filter)
      ? selectedFilters.filter((f) => f !== filter)
      : [...selectedFilters, filter];

    setSelectedFilters(newFilters);
    onFilter(newFilters);
  };

  return (
    <div>
      <button onClick={() => handleFilter('')} className="mr-2">
      </button>
      <button onClick={() => handleFilter('')} className="mr-2">
   
      </button>
      <button onClick={() => handleFilter('')} className="mr-2">
    
      </button>
    </div>
  );
};

export default FilterOptions;
