import React, { useState } from "react";
import styles from "./Quiz.module.css";
import { useNavigate } from "react-router-dom";
import Throw from "../../res/img/trash.png";
import TrashCan from "../trashCan/TrashCan";
import ProgressBar from "../progressBar/ProgressBar";
import { quizzes } from "../../res/data/quizzes";
import { characters } from "../../res/img/img";

const Quiz = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);
  const img = new Image();
  img.src = Throw;

  const character = characters[Math.floor(Math.random() * 5)];

  const goNextStep = (ans: number) => {
    if (quizzes[step].answer === ans) {
      setScore(score + 1);
    }
    setStep(step + 1);
    if (step + 1 === quizzes.length) {
      navigate("/result", { state: { score } });
    }
  };
  const startDrag = (event: React.DragEvent) => {
    //event.preventDefault();
    event.dataTransfer.setDragImage(img, 100, 20);
  };
  return (
    <div className={styles.container}>
      <ProgressBar step={step} />
      <h2 className={styles.name}>{quizzes[step].name}</h2>
      <div className={styles.img_container}>
        <div className={styles.help}>
          <img className={styles.character} src={character} alt="character" />
          <span>드래그해서 버려주세요!</span>
        </div>
        <div className={styles.trash_img}>
          <img
            src={quizzes[step].img}
            draggable={true}
            onDragStart={startDrag}
            alt="trash"
          />
        </div>
      </div>
      <div className={styles.bins}>
        <TrashCan dropTrash={goNextStep} trashCan={quizzes[step].can1} />
        <TrashCan dropTrash={goNextStep} trashCan={quizzes[step].can2} />
      </div>
    </div>
  );
};

export default Quiz;
