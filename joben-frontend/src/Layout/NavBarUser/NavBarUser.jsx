import React, { useState } from 'react';
import styles from './NavBarUser.module.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaRegUserCircle } from "react-icons/fa";
import logo from '../../Assets/jobben.svg'

const NavBarUser = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLogout = () => {
    localStorage.setItem('accessToken', '');
    navigate('/login')
  }

  return (
    <div>
      {/* --------------- Navigation Bar ---------------- */}
      <header className={styles.header}>
        <div className={styles.flex}>
        <NavLink to='/'>
          <img src={logo} className={styles.Logo} />
          </NavLink>
          <nav className={styles.navbar}>
            <NavLink to='/'><i className="fas fa-home"></i> Home</NavLink>
            <NavLink to='/jobs'><i className="fas fa-search"></i> Find Jobs</NavLink>
            <NavLink to='/companies'><i className="fas fa-building"></i> Companies</NavLink>
            <NavLink to='/blog'><i className="fas fa-newspaper"></i> Blog</NavLink>
            <NavLink to='/resume-builder'><i className="fas fa-file-alt"></i> Resume Builder</NavLink>
          </nav>
          <div className={styles.profileLink}>
            {/* Dropdown */}
            <div className={styles.dropdown}>
              <button onClick={toggleDropdown} className={styles.btnuser}>
                <FaRegUserCircle className={styles.marduk} />
              </button>
              {showDropdown && (
                <div className={styles.dropdownContent}>
                  <NavLink to='/profile'>Profile</NavLink>
                  <button onClick={handleLogout}>Log out</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default NavBarUser;
