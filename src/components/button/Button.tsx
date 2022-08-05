import React from "react";
import styles from "./Button.module.css";
const Button: React.FC<{ text: string }> = (props) => (
  <button className={styles.button}>{props.text}</button>
);

export default Button;
