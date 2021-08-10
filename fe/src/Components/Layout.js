import React from "react";
import Navbar from "./Navbar";
import styles from "Assets/Stylesheets/SCSS/Components/Layout.module.scss";
import Footer from "./Footer";
export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.mainContent}>{children}</div>
      <Footer />
    </div>
  );
}
