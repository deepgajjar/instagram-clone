import React, { useState } from 'react';
import VideoPlayerWithOptions from '../../../../components/videoWIthOptions/VideoPlayerWithOption';
import './style.css';
const VideoSection = ({ videos }) => {
    const [isAllMuted,setIsAllMuted] = useState(true)
    return(
        <div className="parent-container">
        <div className="child-container">
          {videos?.map((item) => {
            return <VideoPlayerWithOptions videoUrl={item} {...{isAllMuted,setIsAllMuted}}/>;
          })}
        </div>
      </div>
    )
}

export default VideoSection;