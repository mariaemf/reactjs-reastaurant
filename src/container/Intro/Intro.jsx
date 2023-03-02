import React, { useRef, useState } from "react";
import { BsFillPlayFill, BsGillPlayFill, BsPauseFill } from "react-icons/bs";
import { meal } from "../../constants";
import "./Intro.css";

const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const videRef = useRef();

  const handleVideo = () => {
    setPlayVideo((prevPlayVideo) => !prevPlayVideo);
    if (playVideo) {
      videRef.current.pause();
    } else {
      videRef.current.play();
    }
  };

  return (
    <div className="app__video">
      <video src={meal} type="video/mp4" loop controls={false} muted />
      {/*loop = indica se o video deve ser reproduzido novamente quando chegar ao fim 
 controls = adiaciona controles na reprodução do video, como play, pause, volume e etc.. 
 a tag muted significa que o video deve ser repoduzido silenciosamente (sem volume) */}
      <div className="app__video-overlay flex__center">
        <div
          className="app__video-overlay_circle flex__center"
          onClick={handleVideo}
        >
          {playVideo ? (
            <BsPauseFill color="#fff" fontSize={30} />
          ) : (
            <BsFillPlayFill color="#fff" fontSize={30} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Intro;
