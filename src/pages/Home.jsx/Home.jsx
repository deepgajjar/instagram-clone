import React, { useState, useCallback, useRef } from "react";
import "./style.css";
import Header from "./components/header/Header";
import SideBar from "./components/sidebar/SideBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import VideoSection from "./components/videoSection/VideoSection";

const videosUrls =["/video/testingvideo.mp4","/video/videoWithAudio.mp4","/video/videoWithAudio.mp4","/video/videoWithAudio.mp4"]
const Home = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const onClickHamburger = useCallback(() => {
    setIsSideBarOpen((prev) => !prev);
  }, []);

  return (
    <div className="main-container">
      <div className="inner-container">
        <SideBar
          isSideBarOpen={isSideBarOpen}
          onClickHamburger={onClickHamburger}
        />
        <div className="column-container">
          <Header onClickHamburger={onClickHamburger} />
          <VideoSection videos={videosUrls} />
          <div className="scroll-up-icon">
            <FontAwesomeIcon icon={faArrowUp} className="up-arrow"/> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
