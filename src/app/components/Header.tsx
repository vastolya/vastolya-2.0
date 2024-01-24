import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header>
      <div className="mx-[12.5vw] my-[3.70vh] flex justify-between text-xl leading-6">
        <Link href="/">
          <h1>VASTOLYA.ART</h1>
        </Link>

        <div className="flex gap-10 ">
          <p>RU - EN</p>
          <Link href="/web">
            <p>ВЕБ ПРОЕКТЫ</p>
          </Link>
          <Link href="/video">
            <p>ВИДЕО ПРОЕКТЫ</p>
          </Link>
          <p>ОБО МНЕ</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
