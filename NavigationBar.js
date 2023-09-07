import React from 'react';
import { FaSearch, FaComments, FaUser } from 'react-icons/fa';

const NavigationBar = () => {
  return (
    <div className="navbar">
      <div className="search-bar">
        <FaSearch />
        <input type="text" placeholder="Search" />
      </div>
      <div className="user-icons">
        <FaComments style={{ fontSize: '24px' }} /> {/* Adjust the font-size as needed */}
        <FaUser className="user-avatar" style={{ fontSize: '24px' }} /> {/* Adjust the font-size as needed */}
      </div>
    </div>
  );
};

export default NavigationBar;
