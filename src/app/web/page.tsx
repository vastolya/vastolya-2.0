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
      <div className="h-[9.62vh] "></div>
      <div className="mx-[12.5vw] grid grid-cols-6 gap-x-[1.04vw] gap-y-[1.85vh] ">
        <h1 className="col-span-6 text-[5.18vh] leading-[5.55vh] py-[1.85vh]">
          ВЕБ ПРОЕКТЫ
        </h1>
        {web.map((item, index) => (
          <Link
            href={`${item.type}/${item.id}`}
            className="col-span-2 "
            key={index}
          >
            <div className={`group relative group min-h-[24.35vh] ${ imageLoaded ? "bg-black" : "bg-none"} flex justify-end items-end text-end rounded-lg overflow-hidden shadow-lg`}>
              <Image
                onLoad={handleImageLoad}
                src={item.cover}
                priority
                alt={``}
                fill
                sizes="10%"
                className="object-cover opacity-100 group-hover:opacity-25 transition-all duration-200 scale-[101%] group-hover:scale-[103%] ease-in-out"
              />
              <div className="absolute bottom-[1.85vh] right-[1.04vw]">
                <div className="text-white px-[1.04vw] py-[1.85vh] rounded-lg opacity-0 group-hover:opacity-100 translate-y-[14.81vh] group-hover:translate-y-0 transition-all duration-200">
                  <p className="text-[2.22vh] leading-[2.22vh] pb-[0.74vh]">
                    {item.title.toUpperCase()}
                  </p>
                  <p className={`text-[1.48vh] leading-[2.22vh] font-medium ${montserrat.className}`}>
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
