"use client";
import { useParams } from "next/navigation";
import { webData } from "../../../api/db";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import { montserrat } from "@/app/font";
import ModalVideo from "@/app/components/ModalVideo";
import Link from "next/link";

const WebId = ({ params }: any) => {
  const data = webData.filter((item: { id: any }) => item.id == params.id);
  const [imageLoaded, setImageLoaded] = useState(false);
  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className="min-h-[91vh]">
      <div className="h-[68px] md:h-[9.62vh]"></div>
      {data.map((item, index) => (
        <div
          key={index}
          className="mx-5 gap-5 md:mx-[12.5vw] md:my-[2.22vh] grid md:grid-cols-6 md:gap-x-[1.04vw] md:gap-y-[1.85vh] "
        >
          <div className="md:col-span-2">
            <h1 className="text-2xl pb-5 md:pb-[1.85vh] md:text-[5.18vh] md:leading-[5.18vh]">
              {item.title.toUpperCase()}
            </h1>
            <p
              className={`text-base md:text-[1.48vh] md:leading-[2.2vh] md:font-medium ${montserrat.className}`}
            >
              {item.description}
            </p>
          </div>

          {item.content.map((web, index: number) => (
            <Link
              href={web.youtubeId}
              target="_blank"
              key={index}
              className="md:col-start-4 group md:col-span-3 transition-transform transform duration-200 shadow-lg rounded-lg overflow-hidden border-[1.5px] px-5 py-5 md:border-none md:px-0 md:py-0 bg-white"
            >
              <div
                className={`col-span-2 h-[33vh]  ${
                  imageLoaded ? "md:bg-black" : "bg-none"
                } relative  overflow-hidden cursor-pointer ease-in-out`}
              >
                <div className="hidden md:block">
                  <Image
                    onLoad={handleImageLoad}
                    priority
                    src={web.cover}
                    alt={``}
                    fill
                    sizes="100"
                    className="object-cover object-top opacity-100 group-hover:opacity-20  transition-all duration-300 scale-[101%] group-hover:scale-[103%] ease-in-out"
                  />
                </div>
                <div className="md:hidden block rounded-lg overflow-x-hidden mb-4">
                  <Image
                    onLoad={handleImageLoad}
                    priority
                    src={web.cover}
                    alt={``}
                    width={700}
                    sizes="100"
                    className="object-cover object-top w-full"
                  />
                </div>
                <div className="md:absolute md:text-white flex flex-col justify-start md:gap-y-[0.74vh] md:opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                  <div className="md:px-[1.25vw] md:py-[2.22vh] flex flex-col md:gap-[1.85vh]">
                    <h1 className="text-xl pb-2 mp:pb-0 md:text-[2.22vh] md:leading-[2.22vh]">
                      {web.title.toUpperCase()}
                    </h1>
                    <p
                      className={`text-base md:text-[1.48vh] md:leading-[2.22vh] md:font-medium ${montserrat.className}`}
                    >
                      {web.description}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default WebId;
