"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import IconCross from "../../../public/icons/icon_cross.svg";
import IconTelegram from "../../../public/icons/icon_telegram.svg";
import IconLinkedin from "../../../public/icons/icon_linkedin.svg";

const social = [
  { src: IconTelegram, link: "https://t.me/vastolya" },
  { src: IconLinkedin, link: "https://www.linkedin.com/in/vastolya/" },
];

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
          className={` z-[106] mx-5 md:mx-[12.5vw] py-5 md:py-[3.70vh] flex justify-between text-2xl md:text-[1.85vh] md:leading-[2.22vh] `}
        >
          <Link href="/" onClick={() => isClick && setisClick(!isClick)}>
            <h1>VASTOLYA.ART</h1>
          </Link>
          {isClick ? (
            <div
              className="flex justify-center"
              onClick={() => setisClick(!isClick)}
            >
              <Image src={IconCross} alt="" width={24} />
            </div>
          ) : (
            <div
              onClick={() => setisClick(!isClick)}
              className="flex md:hidden flex-col justify-center items-end gap-2"
            >
              <div className="border-[1px] w-6 border-black rounded-lg"></div>{" "}
              <div className="border-[1px] w-6 border-black rounded-lg"></div>{" "}
              <div className="border-[1px] w-4 border-black rounded-lg"></div>
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
            <div className={` bg-white w-screen pb-5 flex flex-col`}>
              {headerMenu.map((item, index) => (
                <Link
                  href={item.link}
                  onClick={() => setisClick(!isClick)}
                  className="w-full py-2 px-5"
                  key={index}
                >
                  {item.title}
                </Link>
              ))}
              <div className="flex mx-5 gap-2 justify-end">
                {social.map((item, index) => (
                  <Link
                    href={item.link}
                    target="_blank"
                    className="relative h-10 w-10"
                    key={index}
                  >
                    <Image
                      src={item.src}
                      alt=""
                      fill
                      className=" object-cover"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* burger menu */}
      </div>
    </header>
  );
};

export default Header;
