import React, { useState } from 'react';
import styles from './NavBarCompany.module.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaUserTie, FaSignOutAlt, FaClipboardList } from "react-icons/fa";
import logo from '../../Assets/jobben.svg'

const NavBarCompany = () => {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = () => {
    localStorage.setItem('accessToken', '');
    localStorage.setItem('company', '');
    navigate('/login_company')
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div>
      {/* --------------- Navigation Bar ---------------- */}
      <header className={styles.header}>
        <div className={styles.flex}>
        <NavLink to='/'>
          <img src={logo} className={styles.Logo} />
          </NavLink>
          <nav className={styles.navbar}>
            <NavLink to='/companyMain'><i className="fas fa-home"></i> Home</NavLink>
            <NavLink to='/jobs'><i className="fas fa-search"></i> Find Jobs</NavLink>
            <NavLink to='/companies'><i className="fas fa-building"></i> Companies</NavLink>
            <NavLink to='/blog'><i className="fas fa-newspaper"></i> Blog</NavLink>
            <NavLink to='/resume-builder'><i className="fas fa-file-alt"></i> Resume Builder</NavLink>
            <NavLink to='/posted-jobs'><FaClipboardList /> Posted Jobs</NavLink>
          </nav>
          <div className={styles.profileLink}>
            <div className={styles.dropdown}>
              <button onClick={toggleDropdown} className={styles.dropbtn}>
                <FaUserTie className={styles.btncompany} />
              </button>
              {dropdownOpen && (
                <div className={styles.dropdownContent}>
                  <NavLink to='/'>Profile</NavLink>
                  <button onClick={handleLogout}>Log Out <FaSignOutAlt className={styles.btnlogout} /></button>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default NavBarCompany;
