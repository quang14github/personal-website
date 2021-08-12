import React from "react";
import styles from "Assets/Stylesheets/SCSS/Components/SectionHeader.module.scss";
export default function SectionHeader({ children }) {
  return <h1 className={styles.container}>{children}</h1>;
}
