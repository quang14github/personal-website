import React, { useEffect } from "react";
import styles from "Assets/Stylesheets/SCSS/Components/LoadingScreen.module.scss";

function LoadingScreen() {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
      document.body.style.overflowX = "hidden";
      document.body.style.overflowyY = "scroll";
    };
  });
  return (
    <div className={styles.loading__container}>
      <div className={styles.loading__wrapper}>
        <div className={styles.spinner}></div>
      </div>
    </div>
  );
}

export default LoadingScreen;
