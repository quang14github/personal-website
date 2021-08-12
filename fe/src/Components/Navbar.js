import React, { useState } from "react";
import styles from "Assets/Stylesheets/SCSS/Components/Navbar.module.scss";
import logo from "Assets/Images/logo.png";
import menu from "Assets/Images/SVG/menu.svg";
import closeMenu from "Assets/Images/SVG/closeMenu.svg";
function Navbar() {
  const [scroll, setScroll] = useState(false);
  const [menuDrop, setMenuDrop] = useState(false);
  window.onscroll = () => {
    if (window.scrollY <= 10) {
      setScroll(false);
    } else {
      setScroll(true);
    }
  };
  return (
    <nav
      className={`${styles.container} ${scroll ? styles.navbar__scrolled : ""}`}
      id="nav-bar"
    >
      <div className={styles.logo}>
        <a href="#hero"><img src={logo} alt="logo" onClick={() => setMenuDrop(false)}/></a>
      </div>
      <ul
        className={`${styles.nav_links} ${
          menuDrop ? styles.nav_links_drop : ""
        }`}
      >
        <li className={styles.link_normal} onClick={() => setMenuDrop(false)}>
          <a href="#aboutme">About me</a>
        </li>
        <li className={styles.link_normal} onClick={() => setMenuDrop(false)}>
          <a href="#skills">Skills</a>
        </li>
        <li className={styles.link_normal} onClick={() => setMenuDrop(false)}>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li className={styles.link_contact} onClick={() => setMenuDrop(false)}>
          <a href="#contact">Contact me</a>
        </li>
      </ul>
      <div className={styles.menu} onClick={() => setMenuDrop(!menuDrop)}>
        <img src={menuDrop ? closeMenu : menu} alt="menu" />
      </div>
    </nav>
  );
}

export default Navbar;
