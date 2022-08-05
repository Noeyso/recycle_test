import { trashImgType, trashType } from "../../res/data/trash_type";
import { QUIZ_TYPE } from "../../res/data/quizzes";
import styles from "./AnswerItem.module.css";

const AnswerItem: React.FC<{ idx: number; trash: QUIZ_TYPE }> = (props) => {
  const { name, answer, detail } = props.trash;
  return (
    <section className={styles.container}>
      <div className={styles.top}>
        <span>
          {props.idx + 1}. {name}
        </span>
        <span style={{ color: trashImgType[answer].color }}>
          {trashType[answer]}
        </span>
        <div className={styles.trash_can}>
          <img src={trashImgType[answer].close} alt="trashcan" />
        </div>
      </div>
      <div className={styles.detail}>
        <p>{detail}</p>
      </div>
    </section>
  );
};

export default AnswerItem;
