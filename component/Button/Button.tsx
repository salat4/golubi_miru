import React from "react";
import s from "../Button/Button.module.css";
const Button = ({ text }: { text: string }) => {
  return <button className={s.button}>{text}</button>;
};
export default Button;
