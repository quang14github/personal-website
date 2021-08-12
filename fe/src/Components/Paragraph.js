import React from "react";
import styles from "Assets/Stylesheets/SCSS/Components/Paragraph.module.scss";
export default function Paragraph({className, children}) {
  return <p className={`${styles.container} ${className}`}>{children}</p>;
}
