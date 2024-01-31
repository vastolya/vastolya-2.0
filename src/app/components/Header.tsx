"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import IconCross from "../../../public/icons/icon_cross.svg";

const headerMenu = [
  { title: "ВЕБ ПРОЕКТЫ", link: "/web" },
  { title: "ВИДЕО ПРОЕКТЫ", link: "/video" },
  { title: "ОБО МНЕ", link: "/about" },
];

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

  return (
    <header
      className={`w-full fixed transition duration-250 ${
        isClick ? " bg-white" : "bg-gray-100 "
      }  duration-300 transition-transform transform z-[105] ${
        (scrolling && !isClick) || isClick
          ? "translate-y-0"
          : "-translate-y-full"
      }`}
    >
      <div className="relative">
        <div
          className={` z-[106] mx-5 md:mx-[12.5vw] py-5 md:py-[3.70vh] flex justify-between text-lg md:text-[1.85vh] md:leading-[2.22vh] `}
        >
          <Link href="/" onClick={() => isClick && setisClick(!isClick)}>
            <h1>VASTOLYA.ART</h1>
          </Link>
          {isClick ? (
            <div
              className=" animate-bounce"
              onClick={() => setisClick(!isClick)}
            >
              x
            </div>
          ) : (
            <div
              onClick={() => setisClick(!isClick)}
              className="flex md:hidden flex-col justify-center items-end gap-1"
            >
              <div className="border-[1px] w-4 border-black rounded-lg"></div>{" "}
              <div className="border-[1px] w-4 border-black rounded-lg"></div>{" "}
              <div className="border-[1px] w-3 border-black rounded-lg"></div>
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
        <section
          className={`absolute overflow-hidden ${
            isClick ? "" : "pointer-events-none"
          }`}
        >
          <div
            className={`text-lg gap-5 transition-transform transform duration-300 ${
              isClick ? "translate-y-0" : "-translate-y-[300px]"
            }`}
          >
            <div className={` bg-white w-screen pb-5`}>
              {headerMenu.map((item, index) => (
                <div className="py-2 px-5" key={index}>
                  <Link href={item.link} onClick={() => setisClick(!isClick)}>
                    {item.title}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* burger menu */}
      </div>
    </header>
  );
};

export default Header;
