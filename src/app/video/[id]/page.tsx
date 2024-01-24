import { useParams } from "next/navigation";
import { videoData } from "../../../api/db";
import React from "react";

const VideoId = ({ params }: any) => {
  const data = videoData.filter((item: { id: any }) => item.id == params.id);

  return (
    // <div>{params.id} {data.map(item => item.title)}</div>
    <div>
      {data.map((item, index) => (
        <div
          key={index}
          className="mx-[12.5vw] grid grid-cols-6 gap-x-[1.04vw] gap-y-[1.85vh]"
        >
          <h1 className="col-span-6 text-[5.18vh] leading-[5.55vh]">{item.title}</h1>
          <p className=" col-span-6 text-[1.66vh] leading-[1.85vh]"> {item.description}</p>
          <div className="col-span-6 flex flex-col gap-[1.85vh]">
            {item.content?.map((video, index: number) => (
              <div key={index} className="grid grid-cols-6 gap-x-[1.04vw] gap-y-[1.85vh]">
                <div className="col-span-2 h-[24.44vh] bg-gray-100"></div>
                <div className="col-start-3 col-span-4 flex flex-col gap-[1.85vh]">
                  <h1 className="text-[2.22vh] leading-[2.22vh]">{video.title}</h1>
                  <p className="text-[1.66vh] leading-[1.85vh]">{video.description}</p>
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
