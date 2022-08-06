import { Link, useLocation } from "react-router-dom";
import styles from "./Result.module.css";
import { quizzes } from "../../res/data/quizzes";
import Button from "../button/Button";
import { AiFillHome } from "react-icons/ai";
import { FaRegHandPointRight } from "react-icons/fa";
import { result } from "../../res/data/result";
import KakaoShareButton from "../KakaoShareButton/KakaoShareButton";
import { useEffect } from "react";
const Result = () => {
  const location = useLocation();
  const len = quizzes.length;
  const state = location.state as { score: number };
  const score = state.score;
  const res = Math.trunc(((score / len) * 10) / 2);
  const { title, img, text } = result[res];

  return (
    <section className={styles.container}>
      <Link to="/">
        <button className={styles.btn_home}>
          <AiFillHome size="3rem" />
        </button>
      </Link>

      <img src={img} alt="result" />
      <h1>분리수거 {title}!</h1>
      <span>{text}</span>
      <section className={styles.buttons}>
        <Link to="/answer" className={styles.button}>
          <Button>
            <FaRegHandPointRight size="2rem" />
            <span> 정답 보러가기</span>
          </Button>
        </Link>
        <div className={styles.button}>
          <KakaoShareButton />
        </div>
      </section>
    </section>
  );
};

export default Result;
