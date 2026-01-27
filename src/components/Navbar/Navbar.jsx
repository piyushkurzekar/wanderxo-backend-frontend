import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import logo from "../../assets/images/Wanders-XO-Logo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ ADD THIS FUNCTION
  const closeMenu = () => {
    const navbarCollapse = document.getElementById("navbarContent");
    if (navbarCollapse && navbarCollapse.classList.contains("show")) {
      const bsCollapse = new window.bootstrap.Collapse(navbarCollapse, {
        toggle: false,
      });
      bsCollapse.hide();
    }
  };

  return (
    <nav
      ref={navbarRef}
      className={`navbar navbar-expand-lg fixed-top ${styles.navbar} ${
        scrolled ? styles.scrolled : ""
      }`}
    >
      <div className="container-fluid px-3 px-lg-5">
        {/* LOGO */}
        <Link className={`navbar-brand ${styles.logoWrapper}`} to="/" onClick={closeMenu}>
          <img src={logo} alt="Wander XO Logo" className={styles.logo} />
        </Link>

        {/* HAMBURGER */}
        <button
          className={`navbar-toggler ${styles.toggler}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* COLLAPSIBLE MENU */}
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className={`navbar-nav ${styles.navLeft}`}>
            <li className="nav-item">
              <Link className={styles.navLink} to="/grouptrip" onClick={closeMenu}>
                Group Trips
              </Link>
            </li>
            <li className="nav-item">
              <Link className={styles.navLink} to="/plan-your-trip" onClick={closeMenu}>
                Plan Your Trip
              </Link>
            </li>
          </ul>

          <ul className={`navbar-nav ${styles.navRight}`}>
            <li className="nav-item">
              <Link className={styles.navLink} to="/our-story" onClick={closeMenu}>
                Our Story
              </Link>
            </li>
            <li className="nav-item">
              <Link className={styles.navLink} to="/faq" onClick={closeMenu}>
                FAQ
              </Link>
            </li>
            <li className="nav-item">
              <Link className={styles.navLink} to="/contact" onClick={closeMenu}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
