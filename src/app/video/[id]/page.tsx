"use client";
import { useParams } from "next/navigation";
import { videoData } from "../../../api/db";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import { montserrat } from "@/app/font";
import ModalVideo from "@/app/components/ModalVideo";

const VideoId = ({ params }: any) => {

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
    <div className="">
      {isModal && selectedVideo && <ModalVideo video={selectedVideo} onClose={closeModal} />}
      <div className="h-[9.62vh]"></div>
      {data.map((item, index) => (
        <div
          key={index}
          className="mx-[12.5vw] grid grid-cols-6 gap-x-[1.04vw] gap-y-[3.70vh] "
        >
          <div className="col-span-6">
            <h1 className="pb-[1.85vh] text-[5.18vh] leading-[7.77vh]">
              {item.title.toUpperCase()}
            </h1>
            <p
              className={`text-[1.66vh] leading-[2.5vh] ${montserrat.className}`}
            >
              {item.description}
            </p>
          </div>
          <div className="col-span-6 flex flex-col gap-[3.70vh] ">
            {item.content.map((video, index: number) => (
              <div
                key={index}
                className="grid grid-cols-6 gap-x-[1.04vw] gap-y-[1.85vh] hover:scale-[102%] transition-transform transform duration-200"
              >
                <div
                  onClick={(e) => {
                    handleVideoClick(video.youtubeId);
                    setIsModal(!isModal)
                  }}
                  className="col-span-2 h-[24.44vh] bg-gray-100 relative rounded-lg overflow-hidden cursor-pointer "
                >
                  <Image src={video.cover} alt={``} fill sizes="100" className="object-cover " />
                </div>
                <div className=" col-span-4 flex flex-col justify-center gap-y-[1.85vh]">
                  <h1 className="text-[2.22vh] leading-[3.33vh]">
                    {video.title}
                  </h1>
                  <p
                    className={`text-[1.66vh] leading-[2.5vh] ${montserrat.className}`}
                  >
                    {video.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideoId;
