import React, { useState } from "react";
import styles from "./TrashCan.module.css";
import TrashOpen from "../../res/img/trash-open.png";
import TrashClose from "../../res/img/trash-close.png";
import { imgType, type } from "../../res/data/classification";

const TrashCan: React.FC<{
  dropTrash: (ans: number) => void;
  trashCan: number;
}> = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const allowDrop = (event: React.DragEvent<HTMLImageElement>) => {
    event.preventDefault();
    setIsOpen(true);
  };

  const allowLeave = (event: React.DragEvent<HTMLImageElement>) => {
    event.preventDefault();
    setIsOpen(false);
  };

  const dropHandler = (event: React.DragEvent<HTMLImageElement>) => {
    event.preventDefault();
    setIsOpen(false);
    props.dropTrash(props.trashCan);
  };
  return (
    <div>
      <div
        className={styles.trashCan}
        draggable={false}
        onDragOver={allowDrop}
        onDragLeave={allowLeave}
        onDrop={dropHandler}
      >
        <img
          draggable={false}
          src={
            isOpen
              ? imgType[props.trashCan].open
              : imgType[props.trashCan].close
          }
          alt="bin"
        />
        <p>{type[props.trashCan]}</p>
      </div>
    </div>
  );
};

export default TrashCan;
