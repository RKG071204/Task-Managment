import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaHome,
  FaTasks,
  FaEye,
  FaEnvelope,
  FaUsers,
  FaCog,
  FaSignOutAlt,
  FaTable,
  FaMoon,
} from 'react-icons/fa';

const Sidebar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // Add code to toggle dark mode styles
  };

  return (
    <div className={`sidebar ${darkMode ? 'dark' : ''}`}>
      <div className="sidebar-header">
        <FaTable className="dark-mode-label" /> {/* Use FaTable here */}
        <p>Task Management</p>
      </div>
      <ul>
        <li>
          <Link to="/">
            <FaHome /> Home
          </Link>
        </li>
        <li>
          <Link to="/assign-task">
            <FaTasks /> Assign Task
          </Link>
        </li>
        <li>
          <Link to="/view-task">
            <FaEye /> View Task
          </Link>
        </li>
        <li>
          <Link to="/messages">
            <FaEnvelope /> Messages
          </Link>
        </li>
        <li>
          <Link to="/users">
            <FaUsers /> Users
          </Link>
        </li>
        <li>
          <Link to="/settings">
            <FaCog /> Settings
          </Link>
        </li>
      </ul>
      <div className="bottom-buttons">
        <div className="dark-mode-toggle" onClick={toggleDarkMode}>
          <FaMoon className={`dark-mode-icon ${darkMode ? 'on' : ''}`} /> {/* FaMoon icon */}
          <span className="dark-mode-text" style={{ marginLeft: '10px' }}>Dark Mode</span> {/* Add margin here */}
          <div className={`dark-mode-switch ${darkMode ? 'on' : ''}`}>
            <div className="dark-mode-slider" />
          </div>
        </div>
        <button className="logout-button" id="custom-logout-button">
          <FaSignOutAlt /> Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
