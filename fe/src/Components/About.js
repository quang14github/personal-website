import React from "react";
import styles from "Assets/Stylesheets/SCSS/Components/About.module.scss";
import SectionHeader from "./SectionHeader";
import Paragraph from "./Paragraph";
import Button from "./Button";
import seperator from "Assets/Images/SVG/seperator.svg";
import Service from "./Service";
import Skills from "./Skills";
export default function About() {
  return (
    <article className={styles.container} id="aboutme">
      <SectionHeader>about me</SectionHeader>
      <Paragraph className={styles.about_paragraph}>
        My name is <strong>Duong Minh Quang</strong> - a sophomore{" "}
        <strong>Computer Engineering</strong> at Hanoi University of Science and
        Technology. I have been learning Web Development for 6 months now and
        I'm keen on making cool things and pursuing technologies.
        <br />
        <br />
        Membership in a <strong>Social E-commerce Lab</strong> developed my
        programming skills, which quickly turned into my hobby. I can program
        all day long without getting tired. Apart from programming, I'm fond of
        singing and working out in my spare time.
      </Paragraph>
      <Button className={styles.about_button}>More</Button>
      <img src={seperator} alt="seperator" className={styles.about_seperator} />
      <Service />
      <img src={seperator} alt="seperator" className={styles.about_seperator} />
      <Skills/>
    </article>
  );
}
