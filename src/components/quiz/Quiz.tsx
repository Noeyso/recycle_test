import React, { useEffect, useRef, useState } from "react";
import styles from "./Quiz.module.css";
import { useNavigate } from "react-router-dom";
import Throw from "../../res/img/trash.png";
import TrashCan from "../trashCan/TrashCan";
import ProgressBar from "../progressBar/ProgressBar";
import { quizzes } from "../../res/data/quizzes";
import { RiDragDropLine } from "react-icons/ri";

type POS_TYPE = { x: number; y: number };

const Quiz = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);
  const [position, setPosition] = useState<POS_TYPE>({
    x: 0,
    y: 0,
  });
  const [isTouch, setIsTouch] = useState(false);

  let img = new Image(10, 10);
  img.src = Throw;

  const [bin1State, setBin1State] = useState(false);
  const [bin2State, setBin2State] = useState(false);
  const [throwBin1, setThrowBin1] = useState(false);
  const [throwBin2, setThrowBin2] = useState(false);

  const [bin1Pos, setBin1Pos] = useState<POS_TYPE>({ x: 0, y: 0 });
  const [bin2Pos, setBin2Pos] = useState<POS_TYPE>({ x: 0, y: 0 });
  const [binSize, setBinSize] = useState<{ w: number; h: number }>({
    w: 0,
    h: 0,
  });

  const bin1 = useRef<HTMLDivElement>(null);
  const bin2 = useRef<HTMLDivElement>(null);

  const container = useRef<HTMLElement>(null);

  useEffect(() => {
    let b1 = bin1.current?.getBoundingClientRect();
    let b2 = bin2.current?.getBoundingClientRect();
    let containerSize = container.current?.getBoundingClientRect();

    let offSetX = containerSize!.x * (8 / 100);
    setBin1Pos({ x: b1!.x - offSetX, y: b1!.top });
    setBin2Pos({ x: b2!.x - offSetX, y: b2!.top });
    setBinSize({ w: b1!.width, h: b2!.height });
  }, [bin1Pos, throwBin1, throwBin2]);

  useEffect(() => {
    setThrowBin1(false);
    setThrowBin2(false);
    console.log(` *** bin1 X : ${bin1Pos.x}, Y : ${bin1Pos.y}`);
    console.log(` *** bin2 X : ${bin2Pos.x}, Y : ${bin2Pos.y}`);
    console.log(` *** bin Width : ${binSize.w}, Height : ${binSize.h}`);
  }, [bin1Pos, throwBin1, throwBin2]);

  const goNextStep = (ans: number) => {
    if (quizzes[step].answer === ans) {
      setScore(score + 1);
    }
    setStep(step + 1);
    if (step + 1 === quizzes.length) {
      navigate("/result", { state: { score } });
    }
  };
  const startDrag = (event: React.DragEvent) => {
    console.log("드래그시작ㄴ");
    event.dataTransfer.setDragImage(img, 100, 20);
  };

  const onTouchStart = (event: React.TouchEvent) => {
    setIsTouch(true);
  };

  const checkIsInside = (x: number, y: number, binPos: POS_TYPE) => {
    if (
      x < binPos!.x + binSize!.w &&
      x > binPos!.x &&
      y < binPos!.y + binSize!.h &&
      y > binPos!.y
    ) {
      return true;
    }
  };

  const onTouchMove = (event: React.TouchEvent) => {
    const movedX = event.changedTouches[0].clientX;
    const movedY = event.changedTouches[0].clientY;
    if (checkIsInside(movedX, movedY, bin1Pos)) {
      setBin1State(true);
    } else if (checkIsInside(movedX, movedY, bin2Pos)) {
      setBin2State(true);
    } else {
      setBin1State(false);
      setBin2State(false);
    }
    setPosition({
      x: movedX,
      y: movedY,
    });
  };

  const onTouchEnd = (event: React.TouchEvent) => {
    const movedX = event.changedTouches[0].clientX;
    const movedY = event.changedTouches[0].clientY;
    setIsTouch(false);
    if (checkIsInside(movedX, movedY, bin1Pos)) {
      setBin1State(false);
      setThrowBin1(true);
    } else if (checkIsInside(movedX, movedY, bin2Pos)) {
      setBin2State(false);
      setThrowBin2(true);
    }
  };

  return (
    <section className={styles.container} ref={container}>
      <div className={styles.progress_bar}>
        <ProgressBar step={step} />
      </div>
      <h1 className={styles.name}>{quizzes[step].name}</h1>
      <section
        className={styles.help}
        draggable={false}
        onDrop={() => {
          console.log("drag drop");
        }}
      >
        <RiDragDropLine />
        <span>드래그해서 버려주세요!</span>
      </section>
      <span>
        drag position x : {position.x} , y : {position.y}
      </span>
      <span>
        bin1 X : {bin1Pos.x}, Y : {bin1Pos.y}
      </span>
      <span>
        bin2 X : {bin2Pos.x}, Y : {bin2Pos.y}
      </span>
      <span>
        bin Width : {binSize.w}, Height : {binSize.h}
      </span>

      <img
        className={styles.throw_img}
        style={{
          display: isTouch ? "block" : "none",
          top: position.y,
          left: position.x,
        }}
        src={Throw}
        alt="throw"
      />
      <section className={styles.trash_img}>
        <img
          src={quizzes[step].img}
          draggable={true}
          onDragStart={startDrag}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          alt="trash"
        />
      </section>
      <section className={styles.bins}>
        <div ref={bin1}>
          <TrashCan
            dropTrash={goNextStep}
            trashCan={quizzes[step].can1}
            state={bin1State}
            isThrow={throwBin1}
          />
        </div>
        <div ref={bin2}>
          <TrashCan
            dropTrash={goNextStep}
            trashCan={quizzes[step].can2}
            state={bin2State}
            isThrow={throwBin2}
          />
        </div>
      </section>
    </section>
  );
};

export default Quiz;
