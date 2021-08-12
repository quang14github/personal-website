import React from "react";
import styles from "Assets/Stylesheets/SCSS/Components/Skills.module.scss";
import SectionHeader from "./SectionHeader";
import html5 from "Assets/Images/SVG/html5.svg";
import css3 from "Assets/Images/SVG/css3.svg";
import sass from "Assets/Images/SVG/sass.svg";
import js from "Assets/Images/SVG/js.svg";
import react from "Assets/Images/SVG/react.svg";
import git from "Assets/Images/SVG/git.svg";
import figma from "Assets/Images/SVG/figma.svg";
import redux_icon from "Assets/Images/SVG/redux.svg";
import cpp from "Assets/Images/SVG/cpp.svg";
import c from "Assets/Images/SVG/c.svg";

const usingSkills = [
  {
    img: html5,
    name: "HTML5",
  },
  {
    img: css3,
    name: "CSS3",
  },
  { img: sass, name: "SASS" },
  { img: js, name: "Javascript" },
  { img: react, name: "React" },
  { img: git, name: "Git" },
  { img: figma, name: "Figma" },
];
const learningSkills = [{ img: redux_icon, name: "Redux" }];
const otherSkills = [
  { img: cpp, name: "C++" },
  { img: c, name: "C" },
];
export default function Skills() {
  return (
    <article className={styles.container} id="skills">
      <SectionHeader>skills</SectionHeader>
      <div className={styles.skills_all}>
        <section className={styles.skills}>
          <h1>using now</h1>
          <div className={styles.skills_container}>
            {usingSkills.map((e, id) => (
              <div className={styles.skill}>
                <img src={e.img} alt={e.name} />
                <h3>{e.name}</h3>
              </div>
            ))}
          </div>
        </section>
        <section className={styles.skills}>
          <h1>learning</h1>
          <div className={styles.skills_container}>
            {learningSkills.map((e, id) => (
              <div className={styles.skill}>
                <img src={e.img} alt={e.name} />
                <h3>{e.name}</h3>
              </div>
            ))}
          </div>
        </section>
        <section className={styles.skills}>
          <h1>other skills</h1>
          <div className={styles.skills_container}>
            {otherSkills.map((e, id) => (
              <div className={styles.skill}>
                <img src={e.img} alt={e.name} />
                <h3>{e.name}</h3>
              </div>
            ))}
          </div>
        </section>
      </div>
    </article>
  );
}
