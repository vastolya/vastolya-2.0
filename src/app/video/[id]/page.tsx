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
    <div className="md:min-h-[91vh]">
      {isModal && selectedVideo && (
        <ModalVideo video={selectedVideo} onClose={closeModal} />
      )}
      <div className="h-[68px] md:h-[9.62vh]"></div>
      {data.map((item, index) => (
        <div
          key={index}
          className="mx-5 md:mx-[12.5vw] md:my-[2.22vh] grid md:grid-cols-6 md:gap-x-[1.04vw] md:gap-y-[1.85vh] "
        >
          <div className="md:col-span-2">
            <h1 className="text-2xl pb-5 md:pb-[1.85vh] md:text-[5.18vh] md:leading-[5.18vh]">
              {item.title.toUpperCase()}
            </h1>
            <p
              className={`text-base pb-5 md:pb-0 md:text-[1.48vh] md:leading-[2.22vh] md:font-medium ${montserrat.className}`}
            >
              {item.description}
            </p>
          </div>
          {/* <div className="col-span-2"></div> */}

          {item.content.map((video, index: number) => (
            <div
              key={index}
              className="md:col-span-2 transition-transform transform duration-200"
            >
              <div
                onClick={(e) => {
                  handleVideoClick(video.youtubeId);
                  setIsModal(!isModal);
                }}
                className={`group md:col-span-2 h-full md:min-h-[33vh] pb-5 mdL:pb-0 ${
                  imageLoaded ? "md:bg-black" : "bg-none"
                } md:relative rounded-lg overflow-hidden cursor-pointer`}
              >
                <div className="hidden md:block">
                  <Image
                    onLoad={handleImageLoad}
                    priority
                    src={video.cover}
                    alt={``}
                    fill
                    sizes="100"
                    className="object-cover  opacity-100 group-hover:opacity-20 transition-all duration-300 group-hover:scale-[103%] ease-in-out"
                  />
                </div>
                <div className="md:hidden block rounded-lg overflow-x-hidden mb-4">
                  <Image
                    onLoad={handleImageLoad}
                    priority
                    src={video.cover}
                    alt={``}
                    width={720}
                    sizes="100"
                    className="object-cover  opacity-100 group-hover:opacity-20 transition-all duration-300 group-hover:scale-[103%] ease-in-out"
                  />
                </div>

                <div className="md:absolute md:text-white flex flex-col justify-start md:gap-y-[0.74vh] md:opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                  <div className="md:px-[1.25vw] md:py-[2.22vh] flex flex-col md:gap-[1.85vh]">
                    <h1 className="text-xl pb-2 mp:pb-0 md:text-[2.22vh] md:leading-[2.22vh]">
                      {video.title.toUpperCase()}
                    </h1>
                    <p
                      className={`text-base md:text-[1.48vh] md:leading-[2.22vh] md:font-medium ${montserrat.className}`}
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
