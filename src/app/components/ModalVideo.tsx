const ModalVideo = ({ video, onClose }: any) => {

  return (
    <div className="fixed z-[102] ">
      <div className="">
        <div className="fixed z-[103] flex  my-[50%] h-[400px] w-full md:mx-[29%] md:my-[10%] md:h-[720px]  md:w-[1080px] rounded-lg overflow-hidden">
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
