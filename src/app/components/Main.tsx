"use client";
import React, { useEffect, useState } from "react";
import { webData, videoData } from "@/api/db";
import Link from "next/link";
import Image from "next/image";
import { montserrat } from "../font";

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
    <main className="mx-5 md:mx-[12.5vw] md:min-h-[91vh]">
      <div className="md:h-[9.8vh] h-[74px] "></div>
      <div className="hidden md:grid grid-cols-6 gap-x-0 rounded-lg overflow-hidden">
        {shuffledData.slice(0, 4).map((item, index) => (
          <div
            key={index}
            className="col-span-3 h-full overflow-hidden cursor-pointer"
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
            <Link
              href={`/${item.type}/${item.id}`}
              className="relative h-[41.29vh]"
            >
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
                preload="none" // Ленивая загрузка видео
                autoPlay
                loop
                muted
                playsInline
                src={item.videoCover}
                className={`scale-[101%] h-full] w-full object-cover object-top ${
                  hoverStates[index] ? "opacity-100" : "opacity-0"
                } transition-all duration-200 ${
                  imageLoaded ? "visible" : "hidden"
                }`}
              />
            </Link>
          </div>
        ))}
      </div>
      <div className="md:hidden flex flex-col gap-5">
        {shuffledData.slice(0, 4).map((item, index) => (
          <Link href={`/${item.type}/${item.id}`} key={index}>
            <div className="relative h-[256px] bg-slate-500 rounded-lg overflow-hidden shadow-lg">
              <Image
                src={item.cover}
                alt=""
                width={700}
                className="absolute h-full object-cover  inset-0"
              />
              <div className="absolute h-[256px] w-full bg-gradient-to-t from-black via-transparent to-transparent "></div>
              <div className="absolute bottom-5 right-5 text-white text-end">
                <h1 className="text-2xl">{item.title.toUpperCase()}</h1>
                <p className={`text-sm ${montserrat.className}`}>
                  {item.subtitle}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default Main;
