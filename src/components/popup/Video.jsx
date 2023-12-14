import { useState } from "react";
import ModalVideo from "react-modal-video";
import "../../../node_modules/react-modal-video/css/modal-video.css";

export default function Video({ text }) {
  const [isOpen, setOpen] = useState(false);

  const handleZindex = () => {
    const zIn = document.querySelector("#zIndex");
    zIn?.classList?.add("zIdex");

    setOpen(true);
  };

  const handleClose = () => {
    const zIn = document.querySelector("#zIndex");
    zIn?.classList?.remove("zIdex");
    setOpen(false);
  };

  return (
    <>
      <div onClick={() => handleZindex()} className="play-btn popup-video">
        <svg
          width="56"
          height="56"
          viewBox="0 0 56 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M27.5795 50.5623C40.2726 50.5623 50.5624 40.2725 50.5624 27.5794C50.5624 14.8863 40.2726 4.59656 27.5795 4.59656C14.8865 4.59656 4.59668 14.8863 4.59668 27.5794C4.59668 40.2725 14.8865 50.5623 27.5795 50.5623Z"
            fill="#EB4D4D"
          ></path>
          <path
            d="M20.9141 27.5794V24.1779C20.9141 19.7882 24.0167 18.0185 27.8089 20.2019L30.7507 21.9026L33.6925 23.6034C37.4847 25.7867 37.4847 29.3721 33.6925 31.5554L30.7507 33.2562L27.8089 34.9569C24.0167 37.1403 20.9141 35.3476 20.9141 30.9809V27.5794Z"
            fill="white"
          ></path>
        </svg>
        {text ? text : null}
      </div>

      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="1iIZeIy7TqM"
        onClose={() => handleClose()}
      />
    </>
  );
}
