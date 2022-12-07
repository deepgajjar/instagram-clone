import React from "react";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import { faEllipsis, faShareNodes } from "@fortawesome/free-solid-svg-icons";
import { faCommentDots, faThumbsDown, faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import IconWithName from "../otherComponents/IconWIthName";
import './style.css';

const VideoPlayerWithOptions = () => {
  return (
    <div className="video-container">
      <VideoPlayer />
      <div className="video-options">
        <IconWithName icon={faEllipsis} />
        <div className="video-bottom-icons-container">
          <IconWithName icon={faThumbsUp} title="Like" />
          <IconWithName icon={faThumbsDown} title="DisLike" />
          <IconWithName icon={faCommentDots} title="33" />
          <IconWithName icon={faShareNodes} />
        </div>
      </div>
    </div>
  );
};
export default VideoPlayerWithOptions;
