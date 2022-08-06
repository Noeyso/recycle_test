import React, { useState } from "react";
import styles from "./TrashCan.module.css";
import { trashImgType, trashType } from "../../res/data/trash_type";

const TrashCan: React.FC<{
  dropTrash: (ans: number) => void;
  trashCan: number;
}> = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const type = props.trashCan;

  const drag = (event: React.DragEvent<HTMLDivElement>, state: boolean) => {
    event.preventDefault();
    setIsOpen(state);
  };
  const dropHandler = (event: React.DragEvent<HTMLDivElement>) => {
    drag(event, false);
    props.dropTrash(type);
  };
  return (
    <div
      className={styles.trashCan}
      draggable={false}
      onDragOver={(e) => drag(e, true)}
      onDragLeave={(e) => drag(e, false)}
      onDrop={dropHandler}
    >
      <img
        draggable={false}
        src={isOpen ? trashImgType[type].open : trashImgType[type].close}
        alt="bin"
      />
      <span>{trashType[type]}</span>
    </div>
  );
};

export default TrashCan;
