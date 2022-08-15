import React, { useEffect, useState } from "react";
import styles from "./TrashCan.module.css";
import { trashImgType, trashType } from "../../res/data/trash_type";

const TrashCan: React.FC<{
  dropTrash: (ans: number) => void;
  trashCan: number;
  state: boolean;
  isThrow: boolean;
}> = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const type = props.trashCan;

  useEffect(() => {
    if (props.isThrow) {
      props.dropTrash(type);
    }
  }, [props.isThrow]);

  const drag = (event: React.DragEvent, state: boolean) => {
    event.preventDefault();
    setIsOpen(state);
  };

  const dropHandler = (event: React.DragEvent) => {
    //event.preventDefault();
    console.log("왜안돼 ㅅㅂ");
    drag(event, false);
    props.dropTrash(type);
  };
  return (
    <section
      className={styles.container}
      draggable={false}
      onDragEnter={(e) => drag(e, true)}
      onDragLeave={(e) => drag(e, false)}
      onDragOver={(e) => {
        e.preventDefault();
        console.log("hello");
      }}
      onDrop={dropHandler}
    >
      <img
        draggable={false}
        src={
          isOpen || props.state
            ? trashImgType[type].open
            : trashImgType[type].close
        }
        alt="bin"
      />
      <span>{trashType[type]}</span>
    </section>
  );
};

export default TrashCan;
