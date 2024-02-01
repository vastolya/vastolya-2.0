"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { montserrat } from "@/app/font";
import ModalVideo from "@/app/components/ModalVideo";
import IconPlay from "../../../../public/icons/icon_play.svg";
import { webData } from "@/api/db";

const web = webData;

const Web = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <main className="min-h-[91vh] ">
      <div className="h-[68px] md:h-[9.62vh] "></div>
      <div className="mx-5 md:mx-[12.5vw] grid md:grid-cols-6 gap-y-5 md:gap-x-[1.04vw] md:gap-y-[1.85vh] ">
        <h1 className="text-2xl py-2 md:col-span-6 text-[5.18vh] leading-[5.55vh] md:py-[1.85vh]">
          ВЕБ ПРОЕКТЫ
        </h1>
        {web.map((item, index) => (
          <Link
            href={`${item.type}/${item.id}`}
            className="col-span-2 "
            key={index}
          >
            <div
              className={`group relative group h-[256px] md:min-h-[24.35vh] ${
                imageLoaded ? "bg-black" : "bg-none"
              } flex justify-end items-end text-end rounded-lg overflow-hidden shadow-lg`}
            >
              <Image
                onLoad={handleImageLoad}
                src={item.cover}
                priority
                alt={``}
                fill
                sizes="100"
                className="object-cover opacity-35 md:opacity-100 md:group-hover:opacity-25 transition-all duration-300 hover:scale-[103%] ease-in-out"
              />
                       <div className="absolute bottom-5 right-5 md:bottom-[1.85vh] md:right-[1.04vw] ">
                <div className="text-white md:px-[1.04vw] md:py-[1.85vh] rounded-lg md:opacity-0 md:group-hover:opacity-100 md:translate-y-[14.81vh] md:group-hover:translate-y-0 transition-all duration-300">
                  <p className="text-2xl md:text-[2.22vh] md:leading-[2.22vh] md:pb-[0.74vh]">
                    {item.title.toUpperCase()}
                  </p>
                  <p
                    className={`text-base md:text-[1.48vh] md:leading-[2.22vh] md:font-medium ${montserrat.className}`}
                  >
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

export default Web;
