import { Link } from "react-router-dom";
import { characters } from "../../res/img/character/img";
import Button from "../../components/button/Button";
import styles from "./Intro.module.css";
const Intro = () => {
  return (
    <div className={styles.container}>
      <h1>분리수거 테스트</h1>
      <p>당신은 지구를 위해 얼만큼 노력하고 있나요?</p>
      <div className={styles.characters}>
        {characters.map((url) => (
          <img src={url} alt="character" key={url} />
        ))}
      </div>
      <Link to="/quiz">
        <Button>테스트 시작!</Button>
      </Link>
    </div>
  );
};

export default Intro;
