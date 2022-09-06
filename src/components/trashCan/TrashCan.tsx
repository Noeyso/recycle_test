import React, { useState } from "react";
import styles from "./TrashCan.module.css";
import { trashImgType, trashType } from "../../res/data/trash_type";

const TrashCan: React.FC<{
  dropTrash: (ans: number) => void;
  trashCan: number;
  state: boolean;
}> = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const type = props.trashCan;

  const drag = (event: React.DragEvent, state: boolean) => {
    event.preventDefault();
    setIsOpen(state);
  };
  const dropHandler = (event: React.DragEvent) => {
    drag(event, false);
    props.dropTrash(type);
  };

  return (
    <section
      className={styles.trash_can}
      draggable={false}
      onDragEnter={(e) => drag(e, true)}
      onDragLeave={(e) => drag(e, false)}
      onDragOver={(e) => {
        e.preventDefault();
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
