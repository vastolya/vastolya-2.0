const ModalVideo = ({ video, onClose }: any) => {

  return (
    <div className="fixed z-[102] ">
      <div className="">
        <div className="fixed z-[103] flex mx-[29%] my-[10%] h-[720px] w-[1080px] rounded-lg overflow-hidden">
        <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${video}?rel=0`}
            title="Youtube Player"
            allowFullScreen
          />

        </div>
        <div
          onClick={onClose}
          className="fixed z-[101] bg-black w-screen h-screen opacity-75 box-content"
        ></div>
      </div>
    </div>
  );
};

export default ModalVideo;
