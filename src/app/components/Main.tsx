"use client";
import React, { useEffect, useState } from "react";
import { webData, videoData } from "@/api/db";
import HoverVideoPlayer from "react-hover-video-player";
import TestVideo from "@/../../public/videos/test_vid.webm";
import Link from "next/link";
import Image from "next/image";

const Main = () => {
  const [shuffledData, setShuffledData] = useState<any[]>([]); // Явно указываем тип
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

  return (
    <main className="mx-[12.5vw] min-h-[91vh] ">
      <div className="h-[9.62vh] "></div>
      <div className="grid grid-cols-6 gap-x-0">
        {shuffledData.slice(0, 4).map((item, index) => (
          <div className="relative col-span-3 h-[40.83vh]  bg-gray-200 overflow-hidden cursor-pointer" key={index}>
            <HoverVideoPlayer
             style={{
              // Make the image expand to cover the video's dimensions
              width: "100%",
              height: "100%",
              objectFit: "cover",
              
            }}
              videoSrc={TestVideo}
              pausedOverlay={
                <Image
                  src={item.cover}
                  alt="123"
         
                  style={{
                    // Make the image expand to cover the video's dimensions
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              }
              loadingOverlay={
                <div className="loading-overlay">
                  <div className="loading-spinner" />
                </div>
              }
            />
          </div>
        ))}
      </div>
    </main>
  );
};

export default Main;
