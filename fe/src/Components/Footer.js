import React from "react";
import styles from "Assets/Stylesheets/SCSS/Components/Footer.module.scss";
import to_top_arrow from "Assets/Images/SVG/to-top_arrow.svg";
import facebook from "Assets/Images/SVG/footer_facebook.svg";
import linkedin from "Assets/Images/SVG/footer_linkedin.svg";
import mail from "Assets/Images/SVG/footer_mail.svg";
export default function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.toTop}>
        <a href="#hero">
          <img src={to_top_arrow} alt="arrow" />
          <p>BACK TO TOP</p>
        </a>
      </div>
      <div className={styles.social}>
        <a href="https://www.facebook.com/RobustDev" target="_blank">
          <img src={facebook} alt="facebook" />
        </a>
        <a href="#">
          <img src={linkedin} alt="linkedin" />
        </a>
        <a href="mailto:qduongminh3@gmail.com">
          <img src={mail} alt="mail" />
        </a>
      </div>
      <p className={styles.copyright}>
        <strong>@2021 Duong Minh Quang</strong> All Rights Reserved. 🔥
      </p>
    </footer>
  );
}
