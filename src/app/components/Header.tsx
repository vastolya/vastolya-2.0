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
        className={`mx-5 md:mx-[12.5vw] my-5 md:my-[3.70vh] flex justify-between text-lg md:text-[1.85vh] md:leading-[2.22vh] `}
      >
        <Link href="/">
          <h1>VASTOLYA.ART</h1>
        </Link>

        {isClick ? (
          <p className="animate-bounce" onClick={() => setisClick(!isClick)}>
            x
          </p>
        ) : (
          <div
            onClick={() => setisClick(!isClick)}
            className="flex md:hidden flex-col justify-center items-end gap-1"
          >
            <div className="border-[1.5px] w-4 border-black rounded-lg"></div>{" "}
            <div className="border-[1.5px] w-4 border-black rounded-lg"></div>{" "}
            <div className="border-[1.5px] w-3 border-black rounded-lg"></div>
          </div>
        )}

        <div className="hidden md:flex gap-[2.08vw] ">
          {/* <p>RU - EN</p> */}
          <Link href="/web">
            <p>ВЕБ ПРОЕКТЫ</p>
          </Link>
          <Link href="/video">
            <p>ВИДЕО ПРОЕКТЫ</p>
          </Link>
          <Link href="/about">
            <p>ОБО МНЕ</p>
          </Link>
        </div>
      </div>
      {/* burger menu */}
      <section>
        {isClick ? (
          <div
            className={`   ${
              isClick ? "visible opacity-100" : "hidden opacity-0"
            } transition text-2xl w-screen bg-white gap-5`}
          >
            <Link href="/web" onClick={() => setisClick(!isClick)} className="py-5 px-2">
              <p>ВЕБ</p>
            </Link>
            <Link href="/video" onClick={() => setisClick(!isClick)}>
              <p>ВИДЕО</p>
            </Link>
            <Link href="/about" onClick={() => setisClick(!isClick)}>
              <p>CV</p>
            </Link>
          </div>
        ) : (
          <></>
        )}
      </section>
      {/* burger menu */}
    </header>
  );
};

export default Header;
