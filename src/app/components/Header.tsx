"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Header = () => {
  const [isClick, setisClick] = useState(false);
  const [scrolling, setScrolling] = useState(true);

  useEffect(() => {
    let prevScrollPos = window.scrollY; // Определяем prevScrollPos внутри компонента

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;


      setScrolling(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      prevScrollPos = currentScrollPos; // Обновляем prevScrollPos
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const toogleNavbar = (): void => {
    setisClick(!isClick);
  };

  return (
    <header
      className={`bg-gray-100 w-full fixed transition-transform transform  z-[101] ${
        (scrolling && !isClick) || isClick
          ? "translate-y-0"
          : "-translate-y-full"
      }`}
    >
      <div
        className={`mx-[12.5vw] my-[3.70vh] flex justify-between text-[1.85vh] leading-[2.22vh] `}
      >
        <Link href="/">
          <h1>VASTOLYA.ART</h1>
        </Link>

        <div className="flex gap-[2.08vw] ">
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
