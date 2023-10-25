import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { BiMenu, BiSolidHome, BiSolidUser, BiLogIn } from "react-icons/bi";
import { GiCruiser } from "react-icons/gi";
import { FcAbout } from "react-icons/fc";

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);
  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.navbarBrand}>
        <div className={styles.navbarTitle}>
          <span className={styles.expenseSign}>
            <GiCruiser />
          </span>
          Go Jolly{" "}
        </div>
      </Link>
      <button className={styles.hamburgerButton} onClick={toggleMenu}>
        <span className={styles.hamburgerIcon}>
          <BiMenu />
        </span>
      </button>
      <ul className={`${styles.navbarNav} ${menuActive ? styles.active : ""}`}>
        <li className={styles.navItem}>
          <Link to="/" className={styles.navLink}>
            <p>
              <BiSolidHome />
            </p>{" "}
            Home
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/About" className={styles.navLink}>
            <p>
              <FcAbout />
            </p>{" "}
            About
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/contact" className={styles.navLink}>
            <p>
              {" "}
              <BiSolidUser />
            </p>{" "}
            ContactUs
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/login" className={styles.navLink}>
            <p>
              <BiLogIn />
            </p>{" "}
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
