import React from "react";
import styles from "Assets/Stylesheets/SCSS/Components/Hero.module.scss";
import Navbar from "./Navbar";
import portrait from "Assets/Images/portrait.png";
import mail_icon from "Assets/Images/SVG/mail.svg";
import github_icon from "Assets/Images/SVG/github.svg";
import linkedin_icon from "Assets/Images/SVG/linkedin.svg";
export default function Hero() {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.main}>
        <div className={styles.info_container}>
          <div>
            <p>Hi, I am</p>
            <h1>Minh Quang</h1>
            <h2>Web Developer</h2>
            <div className={styles.socialContact}>
              <a href="mailto:qduongminh3@gmail.com">
                <img src={mail_icon} alt="mail" />
              </a>
              <a href="https://github.com/quang14github" target="_blank">
                <img src={github_icon} alt="github" />
              </a>
              <a href="" target="_blank">
                <img src={linkedin_icon} alt="linkedin" />
              </a>
            </div>
          </div>
        </div>
        <div className={styles.portrait_container}></div>
        <img src={portrait} alt="portrait" className={styles.portrait} />
      </div>
    </div>
  );
}
