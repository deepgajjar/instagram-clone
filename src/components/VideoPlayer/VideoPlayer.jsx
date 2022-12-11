import React, {
  useRef,
  useState,
  useEffect,
  useLayoutEffect,
  useCallback,
} from "react";
import {
  faPlay,
  faPause,
  faVolumeDown,
  faVolumeMute,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PrimaryButton from "../buttons/PrimaryButton";
import "./style.css";
import useElementOnScreen from "../../hooks/useElementOnScreen";

function VideoPlayer({ videoUrl, isAllMuted, setIsAllMuted }) {
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };

  const videoRef = useRef();
  const intervalRef = useRef();
  const isVisibile = useElementOnScreen(options, videoRef);
  const [videoStates, setVideoStates] = useState({
    currentTime: 0,
    videoTime: 0,
    progress: 0,
    playing: false,
  });
  const [isMuted, setIsMuted] = useState(false);
  const progressBarAndTimeAnimation = () => {
    let vid = videoRef?.current;
    setVideoStates((prevState) => ({
      ...prevState,
      currentTime: vid.currentTime,
      progress: (vid?.currentTime / vid?.duration) * 100,
    }));
    cancelAnimationFrame(intervalRef?.current);
    setTimeout(() => {
      if (!videoRef?.current?.paused)
        intervalRef.current = requestAnimationFrame(
          progressBarAndTimeAnimation
        );
    }, 1000 / 30);
  };
  useEffect(() => {
    !isAllMuted && setIsMuted(true);
  }, [isAllMuted]);
  useEffect(() => {
    let vid = videoRef?.current;
    setVideoStates((prevState) => ({
      ...prevState,
      videoTime: vid?.duration,
    }));
    if (isVisibile) {
      if (!videoStates?.playing) {
        videoRef?.current?.play();
        setVideoStates((prevState) => ({
          ...prevState,
          playing: !prevState?.playing,
        }));
        intervalRef.current = requestAnimationFrame(
          progressBarAndTimeAnimation
        );
      }
    } else {
      if (videoStates?.playing) {
        cancelAnimationFrame(intervalRef?.current);
        videoRef?.current?.pause();
        setVideoStates((prevState) => ({
          ...prevState,
          playing: !prevState?.playing,
        }));
      }
    }
  }, [isVisibile]);
  useLayoutEffect(() => {
    setVideoStates((prevState) => ({
      ...prevState,
      videoTime: videoRef?.current?.duration,
    }));
    if (
      Math.floor(videoStates?.currentTime) ===
      Math.floor(videoStates?.videoTime)
    ) {
      cancelAnimationFrame(intervalRef?.current);
      setVideoStates((prevState) => ({
        ...prevState,
        playing: false,
      }));
    }
  }, [videoStates?.currentTime]);

  const formattedTime = useCallback((time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60))?.slice(-2)
    );
  }, []);

  const onVideoClick = () => {
    if (videoStates?.playing) {
      cancelAnimationFrame(intervalRef?.current);
      videoRef.current.pause();
    } else {
      videoRef.current.play();
      intervalRef.current = requestAnimationFrame(progressBarAndTimeAnimation);
    }
    setVideoStates((prevState) => ({
      ...prevState,
      playing: !prevState?.playing,
    }));
  };

  const muteHandler = () => {
    isAllMuted && setIsAllMuted(false);
    setIsMuted((prev) => !prev);
  };
  return (
    <div className="video-player-container">
      <video
        id="video1"
        ref={videoRef}
        className="video"
        src={videoUrl}
        autoplay={true}
        muted={isAllMuted ? "muted" : !isMuted ? "muted" : ""}
        onClick={() => onVideoClick()}
      ></video>
      <div className="controll-columns">
        <div className="video-time-indicators">
          <p className="controlsTime">
            {formattedTime(videoStates?.currentTime)}
          </p>
          <p className="controlsTime">
            {videoStates?.videoTime
              ? formattedTime(videoStates?.videoTime)
              : "0:00"}
          </p>
        </div>
        <div className="time_progressbarContainer">
          <div
            style={{ width: `${videoStates?.progress}%` }}
            className="time_progressBar"
          ></div>
        </div>
        <div className="controlsContainer">
          <div className="controls">
            <FontAwesomeIcon
              icon={videoStates?.playing ? faPause : faPlay}
              onClick={() => onVideoClick()}
              className="controlsIcon--small"
            />
            <FontAwesomeIcon
              icon={
                isAllMuted
                  ? faVolumeMute
                  : !isMuted
                  ? faVolumeMute
                  : faVolumeDown
              }
              className="controlsIcon--small"
              onClick={muteHandler}
            />
          </div>
        </div>
      </div>

      <div className="video-bottom-bar">
        <div className="video-bottom-inner">
          <p>
            I made quick edit of our italy roadtrip in september 2022. A trip of
            lifetime.
          </p>
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
