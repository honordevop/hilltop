import React from "react";
import { BsArrowUpCircle } from "react-icons/bs";
// import styles from "./Button.module.css"

const Button = (props) => {
  const classes = " text py-2";
  return (
    <button
      type={props.type}
      className={`${props.className} ${classes}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
