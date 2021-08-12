import React from "react";
import styles from "Assets/Stylesheets/SCSS/Components/Hero.module.scss";
import Navbar from "./Navbar";
import portrait from "Assets/Images/portrait.png";
import mail_icon from "Assets/Images/SVG/mail.svg";
import github_icon from "Assets/Images/SVG/github.svg";
import linkedin_icon from "Assets/Images/SVG/linkedin.svg";
import hero_arrow from "Assets/Images/SVG/white-arrow.svg";
export default function Hero() {
  return (
    <article className={styles.container} id="hero">
      <Navbar />
      <div className={styles.main}>
          <div className={styles.info_container_sub}>
            <p>Hi, I am</p>
            <h1>Minh Quang</h1>
            <h2>Web Developer</h2>
            <div className={styles.socialContact}>
              <a href="mailto:qduongminh3@gmail.com">
                <img src={mail_icon} alt="mail" />
              </a>
              <a href="https://github.com/quang14github" target="_blank" rel="noreferrer">
                <img src={github_icon} alt="github" />
              </a>
              <a href="#hero">
                <img src={linkedin_icon} alt="linkedin" />
              </a>
            </div>
          </div>
        <div className={styles.portrait_container}></div>
        <img src={portrait} alt="portrait" className={styles.portrait} />
        <div className={styles.hero_arrow}>
          <img src={hero_arrow} alt="white-arrow" />
        </div>
      </div>
    </article>
  );
}
