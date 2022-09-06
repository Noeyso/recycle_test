import { trashImgType, trashType } from "../../res/data/trash_type";
import { QUIZ_TYPE } from "../../res/data/quizzes";
import styles from "./AnswerItem.module.css";

const AnswerItem: React.FC<{ idx: number; trash: QUIZ_TYPE }> = (props) => {
  const { name, answer, detail } = props.trash;
  return (
    <section className={styles.answer_item_container}>
      <div className={styles.answer_item_container__top}>
        <span>
          {props.idx + 1}. {name}
        </span>
        <div className={styles.answer_item_container__trash_can}>
          <span style={{ color: trashImgType[answer].color }}>
            {trashType[answer]}
          </span>
          <div>
            <img src={trashImgType[answer].close} alt="trashcan" />
          </div>
        </div>
      </div>
      <div className={styles.answer_item_container__detail}>
        <p>{detail}</p>
      </div>
    </section>
  );
};

export default AnswerItem;
