import React, { ReactNode } from "react";
import styles from "./Button.module.css";
const Button: React.FC<{
  children?: ReactNode;
  onClick?: () => void;
}> = (props) => (
  <button className={styles.button} onClick={props.onClick}>
    {props.children}
  </button>
);

export default Button;
