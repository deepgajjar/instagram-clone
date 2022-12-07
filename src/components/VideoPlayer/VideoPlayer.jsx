import {
  faPlay,
  faPause,
  faVolumeDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react";
import PrimaryButton from "../buttons/PrimaryButton";
import "./style.css";

function VideoPlayer() {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [videoTime, setVideoTime] = useState(0);
  const [progress, setProgress] = useState(0);

  const videoHandler = (control) => {
    if (control === "play") {
      videoRef.current.play();
      setPlaying(true);
      var vid = document.getElementById("video1");
      setVideoTime(vid.duration);
    } else if (control === "pause") {
      videoRef.current.pause();
      setPlaying(false);
    }
  };

  const fastForward = () => {
    videoRef.current.currentTime += 5;
  };

  const revert = () => {
    videoRef.current.currentTime -= 5;
  };

  window.setInterval(function () {
    setCurrentTime(videoRef.current?.currentTime);
    setProgress((videoRef.current?.currentTime / videoTime) * 100);
  }, 1000);

  return (
    <div className="video-player-container">
      <video
        id="video1"
        ref={videoRef}
        className="video"
        src="/video/testingvideo.mp4"
      ></video>

      {/* newly maded controlls */}
      <div className="controll-columns">
        <div className="video-time-indicators">
          <p className="controlsTime">
            {Math.floor(currentTime / 60) +
              ":" +
              ("0" + Math.floor(currentTime % 60)).slice(-2)}
          </p>
          <p className="controlsTime">
            {Math.floor(videoTime / 60) +
              ":" +
              ("0" + Math.floor(videoTime % 60)).slice(-2)}
          </p>
        </div>

        <div className="time_progressbarContainer">
          <div
            style={{ width: `${progress}%` }}
            className="time_progressBar"
          ></div>
        </div>
        {/*  */}
        <div className="controlsContainer">
          <div className="controls">
            {playing ? (
              <FontAwesomeIcon
                icon={faPause}
                onClick={() => videoHandler("pause")}
                className="controlsIcon--small"
              />
            ) : (
              <FontAwesomeIcon
                icon={faPlay}
                onClick={() => videoHandler("play")}
                className="controlsIcon--small"
                alt=""
                src="/play.svg"
              />
            )}
            <FontAwesomeIcon
              icon={faVolumeDown}
              className="controlsIcon--small"
              onClick={fastForward}
            />
          </div>
        </div>
        {/*  */}
      </div>
      {/* end */}

      <div className="video-bottom-bar">
        <div className="video-bottom-inner">
          <p>I made quick edit of our italy roadtrip in september 2022. A trip of lifetime.</p>
          <div className="follow-btn-container">
            <div className="user-pic-container">
              <div className="user-pic"></div>
              <p>travel.wrld</p>
            </div>
            <PrimaryButton
            title="Follow"
            width="5rem"
            height="1.7rem"
            margin={0}
          />
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoPlayer;
