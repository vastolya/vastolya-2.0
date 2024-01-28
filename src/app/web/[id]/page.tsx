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
      <div className="h-[9.62vh]"></div>
      {data.map((item, index) => (
        <div
          key={index}
          className="mx-[12.5vw] my-[2.22vh] grid grid-cols-6 gap-x-[1.04vw] gap-y-[1.85vh] "
        >
          <div className="col-span-2">
            <h1 className=" pb-[1.85vh] text-[5.18vh] leading-[5.18vh]">
              {item.title.toUpperCase()}
            </h1>
            <p
              className={` text-[1.66vh] leading-[2.5vh] ${montserrat.className}`}
            >
              {item.description}
            </p>
          </div>

          {item.content.map((web, index: number) => (
            <Link
              href={web.youtubeId}
              target="_blank"
              key={index}
              className="col-start-4 group col-span-3 transition-transform transform duration-200 shadow-lg rounded-lg overflow-hidden "
            >
              <div className={`col-span-2 h-[33vh]  ${ imageLoaded ? "bg-black" : "bg-none"} relative  overflow-hidden cursor-pointer ease-in-out`}>
                <div className="">
                  <Image
                    onLoad={handleImageLoad}
                    src={web.cover}
                    alt={``}
                    fill
                    sizes="100"
                    className="object-cover object-top opacity-100 group-hover:opacity-20  transition-all duration-300 scale-[101%] group-hover:scale-[103%] ease-in-out"
                  />
                </div>
                <div className="text-white flex flex-col justify-start gap-y-[0.74vh] absolute opacity-0 group-hover:opacity-100  transition-all duration-300 ">
                  <div className="px-[1.25vw] py-[2.22vh] flex flex-col gap-[1.85vh]">
                    <h1 className="text-[2.22vh] leading-[2.22vh]">
                      {web.title.toUpperCase()}
                    </h1>
                    <p
                      className={`text-[1.66vh] leading-[2.5vh] ${montserrat.className}`}
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
