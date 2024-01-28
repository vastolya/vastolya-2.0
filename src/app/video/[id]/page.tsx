"use client";
import { useParams } from "next/navigation";
import { videoData } from "../../../api/db";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import { montserrat } from "@/app/font";
import ModalVideo from "@/app/components/ModalVideo";

const VideoId = ({ params }: any) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const handleImageLoad = () => {
    setImageLoaded(true);
  };
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [isModal, setIsModal] = useState(false);
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isModal) {
        setSelectedVideo(null); // Сбрасываем выбранное видео
        setIsModal(false); // Закрываем модальное окно
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [isModal]); // Добавляем isModal в зависимости, чтобы обновлять обработчик при изменении состояния модального окна
  const handleVideoClick = (video: any) => {
    setSelectedVideo(video);
  };
  const closeModal = () => {
    setIsModal(!isModal);
  };

  const data = videoData.filter((item: { id: any }) => item.id == params.id);

  return (
    <div className="min-h-[91vh]">
      {isModal && selectedVideo && (
        <ModalVideo video={selectedVideo} onClose={closeModal} />
      )}
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
          {/* <div className="col-span-2"></div> */}

          {item.content.map((video, index: number) => (
            <div
              key={index}
              className="col-span-2 transition-transform transform duration-200"
            >
              <div
                onClick={(e) => {
                  handleVideoClick(video.youtubeId);
                  setIsModal(!isModal);
                }}
                className={`group col-span-2 h-full min-h-[33vh] ${ imageLoaded ? "bg-black" : "bg-none"} relative rounded-lg overflow-hidden cursor-pointer`}
              >
                <div className="">
                  <Image
                    onLoad={handleImageLoad}
                    src={video.cover}
                    alt={``}
                    priority
                    fill
                    sizes="100"
                    className="object-cover  opacity-100 group-hover:opacity-20 transition-all duration-300 group-hover:scale-[103%] ease-in-out"
                  />
                </div>
                <div className="text-white flex flex-col justify-start gap-y-[0.74vh] absolute opacity-0 group-hover:opacity-100  transition-all duration-300 ease-in-out">
                  <div className="px-[1.25vw] py-[2.22vh] flex flex-col gap-[1.85vh]">
                    <h1 className="text-[2.22vh] leading-[2.22vh]">
                      {video.title.toUpperCase()}
                    </h1>
                    <p
                      className={`text-[1.66vh] leading-[2.5vh] ${montserrat.className}`}
                    >
                      {video.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default VideoId;
