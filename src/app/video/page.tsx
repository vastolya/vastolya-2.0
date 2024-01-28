'use client'
import React, { useState } from "react";
import { videoData } from "../../api/db";
import Link from "next/link";
import Image from "next/image";

const video = videoData;

const Video = () => {

  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };
  
  return (
    <main className="min-h-[91vh]">
      <div className="h-[9.62vh] "></div>
      <div className="mx-[12.5vw] grid grid-cols-6 gap-x-[1.04vw] gap-y-[1.85vh] ">
        <h1 className="col-span-6 text-[5.18vh] leading-[5.55vh] py-[1.85vh]">
          ВИДЕО ПРОЕКТЫ
        </h1>
        {video.map((item, index) => (
          <Link
            href={`video/${item.id}`}
            className="col-span-2 transition-all duration-300 group"
            key={index}
          >
            <div className={`relative h-[24.35vh] w-[24.32vw] ${ imageLoaded ? "bg-black" : "bg-none"} flex justify-end items-end text-end rounded-lg overflow-hidden shadow-lg`}>
              <Image
                 onLoad={handleImageLoad}
                src={item.cover}
                alt={``}
                priority
                fill
                sizes="100"
                className="object-cover opacity-100 group-hover:opacity-25 transition-all duration-300 hover:scale-[103%] ease-in-out"
              />
              <div className="absolute bottom-[1.85vh] right-[1.04vw]">
                <div className="text-white px-[1.04vw] py-[1.85vh] rounded-lg opacity-0 group-hover:opacity-100 translate-y-[14.81vh] group-hover:translate-y-0 transition-all duration-300">
                  <p className="text-[2.22vh] leading-[2.22vh] pb-[0.74vh]">
                    {item.title.toUpperCase()}
                  </p>
                  <p className=" text-[1.66vh] leading-[1.85vh]">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default Video;
