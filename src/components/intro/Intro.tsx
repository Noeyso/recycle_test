import React from "react";
import { Link } from "react-router-dom";
import { characters } from "../../res/img/img";
import styles from "./Intro.module.css";
const Intro: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1>분리수거 테스트</h1>
      <p>당신은 지구를 위해 얼만큼 노력하고 있나요?</p>
      <div className={styles.characters}>
        {characters.map((url) => (
          <img src={url} alt="character" />
        ))}
      </div>
      <Link to="/quiz">
        <button>테스트 시작!</button>
      </Link>
    </div>
  );
};

export default Intro;
