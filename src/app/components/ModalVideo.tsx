const ModalVideo = ({ video, onClose }: any) => {

  return (
    <div className="fixed z-[110] ">
      <div className="">
        <div className="fixed z-[103] flex my-[25vh] h-[400px] w-full md:mx-[25vw] md:my-[25vh] md:h-[50vh] md:w-[50vw] rounded-lg overflow-hidden">
        <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${video}?rel=0`}
            title="Youtube Player"
            allowFullScreen
          />

        </div>
        <div
          onClick={onClose}
          className="fixed z-[101] bg-black w-screen h-screen opacity-85 box-content"
        ></div>
      </div>
    </div>
  );
};

export default ModalVideo;
