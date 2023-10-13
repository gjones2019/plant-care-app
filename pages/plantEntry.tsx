import React from "react";
import styles from "../styles/plantEntry.module.css";
import { PlantEntryProps } from "../types";

const PlantEntry: React.FC<PlantEntryProps> = ({ name, care, onClick }) => {
  return (
    <div className={styles["plant-entry"]}>
      <h3 className={styles["entry-title"]} onClick={onClick}>
        {name}
      </h3>
      <ul>
        {Object.keys(care).map((key) => (
          <li key={key}>
            {key}: {care[key]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlantEntry;
