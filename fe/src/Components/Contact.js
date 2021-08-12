import React from "react";
import styles from "Assets/Stylesheets/SCSS/Components/Contact.module.scss";
import SectionHeader from "./SectionHeader";
import Paragraph from "./Paragraph";
import Button from "./Button";
import seperator from "Assets/Images/SVG/seperator.svg";
export default function Contact() {
  return (
    <article className={styles.container} id="contact">
      <SectionHeader>Contact</SectionHeader>
      <Paragraph className={styles.contact_paragraph}>
        If you are interested in cooperation or would like to hire me for your
        project - please contact me by e-mail{" "}
        <strong>
          <a href="mailto:qduongminh3@gmail.com">(qduongminh3@gmail.com)</a>
        </strong>
        .
      </Paragraph>
      <img
        src={seperator}
        alt="seperator"
        className={styles.contact_seperator}
      />
      <div className={styles.formContainer}>
        <form action="/submit/" className={styles.form} id="contact-form">
          <input
            type="text"
            placeholder="ENTER YOUR NAME*"
            required
            name="name"
          />
          <input
            type="email"
            placeholder="ENTER YOUR MAIL*"
            required
            name="mail"
          />
          <textarea placeholder="YOUR MESSAGE*" required name="message" />
        </form>
        <p className={styles.warning}>
          Fields marked with an asterisk must be filled.
        </p>
        <Button className={styles.form_button}>
          <input type="submit" value="SUBMIT" form="contact-form" />
        </Button>
      </div>
    </article>
  );
}
