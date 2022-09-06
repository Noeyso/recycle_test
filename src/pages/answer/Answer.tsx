import React from "react";
import { quizzes } from "../../res/data/quizzes";
import styles from "./Answer.module.css";
import AnswerItem from "./AnswerItem";
import { IoChevronBackOutline } from "react-icons/io5";

const Answer = () => {
  return (
    <section className={styles.answer_container}>
      <button onClick={() => window.history.back()}>
        <IoChevronBackOutline size="4rem" />
      </button>
      <h1>정답</h1>
      <section className={styles.answer_container__list}>
        {quizzes.map((quiz, idx) => (
          <AnswerItem idx={idx} trash={quiz} />
        ))}
      </section>
    </section>
  );
};

export default Answer;
