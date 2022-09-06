import { Link, useLocation } from "react-router-dom";
import styles from "./Result.module.css";
import { quizzes } from "../../res/data/quizzes";
import Button from "../../components/button/Button";
import { AiFillHome } from "react-icons/ai";
import { FaRegHandPointRight } from "react-icons/fa";
import { result } from "../../res/data/result";
import KakaoShareButton from "../../components/KakaoShareButton/KakaoShareButton";
import LoadingSpinner from "../../components/loadingSpinner/LoadingSpinner";
import { useEffect, useState } from "react";
const Result = () => {
  const location = useLocation();
  const len = quizzes.length;
  const state = location.state as { score: number };
  const score = state.score;
  const res = Math.trunc(((score / len) * 10) / 2);
  const { title, img, text } = result[res];

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeoutID = setTimeout(() => setIsLoading(false), 1000);
    return () => {
      clearTimeout(timeoutID);
    };
  }, []);
  return isLoading ? (
    <section className={styles.result_container}>
      <div>
        <LoadingSpinner />
      </div>
    </section>
  ) : (
    <section className={styles.result_container}>
      <Link to="/">
        <button className={styles.btn_home}>
          <AiFillHome size="3rem" />
        </button>
      </Link>

      <img src={img} alt="result" />
      <h1>분리수거 {title}!</h1>
      <span>{text}</span>
      <section className={styles.result_container__buttons}>
        <Link to="/answer" className={styles.result_container__button}>
          <Button>
            <FaRegHandPointRight size="2rem" />
            <span> 정답 보러가기</span>
          </Button>
        </Link>
        <div className={styles.result_container__button}>
          <KakaoShareButton />
        </div>
      </section>
    </section>
  );
};

export default Result;
