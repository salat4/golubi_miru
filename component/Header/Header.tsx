import React from "react";
import Image from "@/node_modules/next/image";
function Header() {
  return (
    <section>
      <div>{/* <Image></Image> */}</div>
      <ul>
        <li>Про фонд</li>
        <li>Проєкти</li>
        <li>Новини</li>
        <li>Контакти</li>
      </ul>
      <ul>
        <li>UA</li>
        <li>ENG</li>
      </ul>
      <button>Підтримка</button>
    </section>
  );
}

export default Header;
