import React, { useState } from "react";
import styles from "Assets/Stylesheets/SCSS/Components/FilterBar.module.scss";
const categories = ["all", "react", "pure javascript"];
export default function FilterBar({ selectCate }) {
  const [selected, setSelected] = useState(0);
  return (
    <div className={styles.container}>
      {categories.map((e, id) => (
        <div
          className={id == selected ? styles.selectedCategory : ""}
          key={id}
          onClick={() => {
            setSelected(id);
            selectCate(e);
          }}
        >
          {e}
        </div>
      ))}
    </div>
  );
}
