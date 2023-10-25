import React from "react";
import Image from "next/image";
import Logo from "@/public/svg/Logo";
import s from "./Header.module.css";
import Button from "../Button/Button";
import ArrowDown from "@/public/svg/ArrowDown";
const Header = () => {
  return (
    <section className={s.container__header}>
      <div className={s.header__logo}>
        <Logo />
        <p>Голуби миру</p>
      </div>
      <ul className={s.header__navbar}>
        <li>Про фонд</li>
        <li>
          Проєкти <ArrowDown />
        </li>
        <li>Новини</li>
        <li>Контакти</li>
      </ul>
      <ul className={s.header__language}>
        <li>UA</li>
        <li>ENG</li>
      </ul>
      <Button text="Підтримати" />
    </section>
  );
};

export default Header;
