import React, { useEffect, useState } from "react";
import styles from "./Quiz.module.css";
import { useNavigate } from "react-router-dom";
import Throw from "../../res/img/trash.png";
import TrashCan from "../trashCan/TrashCan";
import ProgressBar from "../progressBar/ProgressBar";
import { quizzes } from "../../res/data/quizzes";
import { characters } from "../../res/img/character/img";

const Quiz = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);
  let img = new Image(10, 10);
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
    event.dataTransfer.setDragImage(img, 100, 20);
  };
  return (
    <section className={styles.container}>
      <ProgressBar step={step} />
      <h1 className={styles.name}>{quizzes[step].name}</h1>
      <section className={styles.help}>
        <img src={character} alt="character" />
        <span>드래그해서 버려주세요!</span>
      </section>
      <section className={styles.trash_img}>
        <img
          src={quizzes[step].img}
          draggable={true}
          onDragStart={startDrag}
          alt="trash"
        />
      </section>
      <section className={styles.bins}>
        <TrashCan dropTrash={goNextStep} trashCan={quizzes[step].can1} />
        <TrashCan dropTrash={goNextStep} trashCan={quizzes[step].can2} />
      </section>
    </section>
  );
};

export default Quiz;
