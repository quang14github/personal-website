import React from "react";
import styles from "Assets/Stylesheets/SCSS/Components/Button.module.scss";
export default function Button({className, children}) {
  return <button className={`${styles.container} ${className}`}>
       {children}
  </button>;
}
