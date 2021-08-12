import React from "react";
import styles from "Assets/Stylesheets/SCSS/Components/Service.module.scss";
import design from "Assets/Images/design.png";
import development from "Assets/Images/development.png";
export default function Service() {
  return (
    <section className={styles.container}>
      <section className={styles.service}>
        <img src={design} alt="design" />
        <h1>Design</h1>
        <p>
          I can design the website based on your needs and suggestions. I can
          also create it from scratch by consulting with you during my work.
        </p>
      </section>
      <section className={styles.service}>
        <img src={development} alt="development" />
        <h1>Development</h1>
        <p>
          Based on a project created by me (or any another one provided by you),
          I can code the website to be well functional and responsive.
        </p>
      </section>
    </section>
  );
}
