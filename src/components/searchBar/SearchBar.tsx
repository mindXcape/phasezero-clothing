import React, { useRef } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import '../../scss/main.scss';
import { IconButton } from '@mui/material';
import useOnClickOutside from '../../hooks/useOnClickOutside';

interface SearchBarProps {
  isActive: boolean; // A prop to determine whether the search bar is active
  backgroundState: (state: boolean) => void; // prop to toggle background state, while search bar is open or closed
  onClose: () => void; // A function to be called when the search bar needs to close
}

// SearchBar component
export default function SearchBar({
  isActive,
  onClose,
  backgroundState,
}: SearchBarProps) {
  const ref = useRef<HTMLDivElement>(null); // Create a reference to the search bar div

  useOnClickOutside(ref, onClose);

  return (
    // Set the CSS class based on isActive prop
    <div ref={ref} className={`search-bar ${isActive ? 'active' : ''}`}>
      <div className="searchbox_wrapper">
        <div className="closeBtn__searchBar">
          {/* On clicking the close button, the onClose handler is called */}
          <IconButton
            onClick={() => {
              onClose();
              backgroundState(false);
            }}
          >
            <CloseIcon />
          </IconButton>
        </div>
        <div className="input__searchBar__wrapper">
          {/* <span className="searchBox__text"></span> */}
          <div className="input__searchBar">
            {/* Search input field */}
            <input type="text" placeholder="WHAT ARE YOU LOOKING FOR?..." />
            <IconButton className="searchBtn__searchBar">
              <SearchRoundedIcon fontSize="large" />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
}
