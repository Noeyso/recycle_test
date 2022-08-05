import React from "react";
import { quizzes } from "../../res/data/quizzes";

import styles from "./ProgressBar.module.css";
const ProgressBar: React.FC<{ step: number }> = (props) => {
  const total = quizzes.length;
  return (
    <div className={styles.container}>
      <p className={styles.step}>
        {props.step}/{total}
      </p>
      <div className={styles.gauge_container}>
        <div
          className={styles.gauge}
          style={{ width: (props.step / total) * 100 + "%" }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
