"use client";
import React, { useEffect, useState } from "react";
import { webData, videoData } from "@/api/db";
import Link from "next/link";
import Image from "next/image";

import TestPic from "../../../public/pics/aiCover.jpg";

const Main = () => {
  const [shuffledData, setShuffledData] = useState<any[]>([]);
  useEffect(() => {
    const shuffleArray = (array: any) => {
      const shuffledArray = [...array];
      for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [
          shuffledArray[j],
          shuffledArray[i],
        ];
      }
      return shuffledArray;
    };
    // Для примера используем какой-то массив данных
    const yourData = [...webData, ...videoData]; // Импортируйте ваши данные из нужного источника
    const shuffledResult = shuffleArray(yourData);
    setShuffledData(shuffledResult);
  }, []); // Передавайте пустой массив зависимостей, чтобы эффект выполнялся только при монтировании компонента
  const [hoverStates, setHoverStates] = useState(Array(4).fill(false)); // Создаем массив состояний hover для каждого блока
  const [imageLoaded, setImageLoaded] = useState(false); // Обработчик события загрузки изображения
  const handleImageLoad = () => {
    setImageLoaded(true);
  };
  return (
    <main className="mx-5 md:mx-[12.5vw] md:min-h-[91vh] ">
      <div className="md:h-[9.32vh] h-[68px] "></div>
      <div className="grid grid-cols-6 gap-x-0 rounded-lg overflow-hidden">
        {shuffledData.slice(0, 4).map((item, index) => (
          <div
            key={index}
            className="col-span-3 h-[40.83vh]   overflow-hidden cursor-pointer"
            onMouseEnter={() =>
              setHoverStates((prev) => [
                ...prev.slice(0, index),
                true,
                ...prev.slice(index + 1),
              ])
            } // Устанавливаем состояние hover только для текущего блока
            onMouseLeave={() =>
              setHoverStates((prev) => [
                ...prev.slice(0, index),
                false,
                ...prev.slice(index + 1),
              ])
            }
          >
            <Link href={`/${item.type}/${item.id}`} className="relative h-full">
              {" "}
              <Image
                src={item.cover}
                alt=""
                width={720}
                onLoad={handleImageLoad}
                priority
                className={`absolute object-cover h-full w-full scale-[100%] ${
                  hoverStates[index] ? "opacity-0" : "opacity-100"
                } transition-all duration-400`}
              />
              <video
                src={item.videoCover}
                preload="none" // Ленивая загрузка видео
                autoPlay
                loop
                muted
                className={`scale-[101%] h-full w-full object-cover object-top ${
                  hoverStates[index] ? "opacity-100" : "opacity-0"
                } transition-all duration-200 ${
                  imageLoaded ? "visible" : "hidden"
                }`}
              />
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Main;
