import React from 'react';
import '../../scss/main.scss'; // assuming SearchBar.scss is in the same directory

function SearchBar({ isActive }) {
  return (
    <div className={`search-bar ${isActive ? 'active' : ''}`}>
      <input type="text" placeholder="Search..." />
    </div>
  );
}

export default SearchBar;
