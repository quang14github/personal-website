import React, { useState } from "react";
import styles from "Assets/Stylesheets/SCSS/Components/Portfolio.module.scss";
import SectionHeader from "./SectionHeader";
import FilterBar from "./FilterBar";
import Button from "./Button";
import audio_store from "Assets/Images/projects/audio-store.png";
import mole_game from "Assets/Images/projects/mole-game.png";
import xanhhub from "Assets/Images/projects/xanhhub.png";
import shopify_layout from "Assets/Images/projects/shopify-layout.png";
import shopify_upload from "Assets/Images/projects/shopify-upload.png";
import todo_app from "Assets/Images/projects/todo-app.png";
const projects = {
  react: [
    {
      img: xanhhub,
      name: "XanhHub",
      des: "Green Purchasing Platform",
      link: "https://github.com/quang14github/XanhHub-client",
    },
    {
      img: audio_store,
      name: "Freelance work",
      des: "Fully functional electrical store web (Private)",
      link: "https://github.com/quang14github/ecommerce-freelance",
    },
  ],
  pureJS: [
    {
      img: shopify_layout,
      name: "Shopify home page",
      des: "Home page based on figma design",
      link: "https://github.com/quang14github/shopify-layout",
    },
    {
      img: mole_game,
      name: "Feed A Star Mole",
      des: "A game based on Whac A Mole",
      link: "https://github.com/quang14github/quang14github.github.io/tree/main/molegame",
    },
    {
      img: shopify_upload,
      name: "Shopify Upload",
      des: "Uploading images interface",
      link: "https://github.com/quang14github/shopify-media",
    },
    {
      img: todo_app,
      name: "Todo App",
      des: "Basic todo app",
      link: "https://github.com/quang14github/Todo-App",
    },
  ],
};
export default function Portfolio() {
  const [category, setCategory] = useState("all");
  projects.all = projects.react.concat(projects.pureJS);
  function renderProjects(arr) {
    return arr.map((e, id) => (
      <div
        className={styles.project}
        key={id}
        style={{ backgroundImage: `url('${e.img}')` }}
      >
        <div className={styles.project_info}>
          <h1>{e.name}</h1>
          <p>{e.des}</p>
          <Button className={styles.project_button}><a href={e.link} target="_blank" rel="noreferrer">Github</a></Button>
        </div>
      </div>
    ));
  }
  return (
    <article className={styles.container} id="portfolio">
      <header>
        <SectionHeader>Portfolio</SectionHeader>
      </header>
      <FilterBar selectCate={(type) => setCategory(type)} />
      <div className={styles.projects}>
        {category === "all"
          ? renderProjects(projects.all)
          : category === "react"
          ? renderProjects(projects.react)
          : renderProjects(projects.pureJS)}
      </div>
      <p className={styles.more}>And many more to come! 😊</p>
    </article>
  );
}
