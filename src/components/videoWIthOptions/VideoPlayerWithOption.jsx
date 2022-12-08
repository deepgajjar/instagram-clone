import React from "react";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import { faEllipsis, faShareNodes } from "@fortawesome/free-solid-svg-icons";
import {
  faCommentDots,
  faThumbsDown,
  faThumbsUp,
} from "@fortawesome/free-regular-svg-icons";
import IconWithName from "../otherComponents/IconWIthName";
import "./style.css";

const VideoPlayerWithOptions = (props) => {
  return (
    <div className="video-container">
      <VideoPlayer {...props} />
      <div className="video-options">
        <div className="options-two">
          <IconWithName icon={faEllipsis} className="options-two" />
        </div>
        <div className="video-bottom-icons-container">
          <div className="options-one">
            <IconWithName icon={faEllipsis} className="options-two" />
          </div>
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
