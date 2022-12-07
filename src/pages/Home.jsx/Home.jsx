import React, { useState, useCallback } from "react";
import "./style.css";
import Header from "./components/header/Header";
import SideBar from "./components/sidebar/SideBar";
import VideoPlayerWithOptions from "../../components/videoWIthOptions/VideoPlayerWithOption";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const onClickHamburger = useCallback(() => {
    console.log("icon clicked ");
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
          {/* <div className="video-options-container"> */}
            <div className="parent-container">
              <div className="child-container">
                {[1, 2]?.map((item) => {
                  return <VideoPlayerWithOptions />;
                })}
              </div>
            </div>
          {/* </div> */}
          <div className="scroll-up-icon">
            <FontAwesomeIcon icon={faArrowUp} className="up-arrow"/> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
