import React, { useState } from "react";
import { PrimaryButton, TextField } from "../../../../components";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faMessage,
  faSquare,
} from "@fortawesome/free-regular-svg-icons";
import { faXmark, faSearch } from "@fortawesome/free-solid-svg-icons";

const sideBarOptions = [
  { title: "TownHall", icon: faSquare },
  { title: "RoundTable", icon: faMessage },
  { title: "Notification", icon: faBell },
];
const SideBar = ({ isSideBarOpen, onClickHamburger }) => {
  const [selectedItem, setSelectedItem] = useState(0);
  const onItemSelectHandler = (index) => {
    setSelectedItem(index);
  };
  return (
    <div
      className={`vertical-side-bar ${
        isSideBarOpen
          ? "vertical-side-bar-toggle1"
          : "vertical-side-bar-toggle2"
      }`}
    >
      <div className="sidebar-header">
        <h1 className="title title1">Snippets</h1>
        <h1 className="title title2">Logo</h1>
        <FontAwesomeIcon
          icon={faXmark}
          className="close-icon"
          onClick={onClickHamburger}
        />
      </div>
      <div className="searchbar-inside-sidebar">
        <TextField icons={faSearch} />
      </div>
      <div>
        <ul className="side-bar-options">
          {sideBarOptions?.map((item, index) => (
            <li onClick={() => onItemSelectHandler(index)}>
              <FontAwesomeIcon
                icon={item?.icon}
                className={`sidebar-icons ${
                  index === selectedItem && "toggled-on-item-select"
                }`}
              />
              <span
                className={index === selectedItem && "toggled-item-for-text"}
              >
                {item?.title}
              </span>
            </li>
          ))}
        </ul>
        <div className="new-post-btn">
          <PrimaryButton
            title="NEW POST"
            borderRadius="5px"
            width="85%"
            backgroundColor="black"
            height="2rem"
            margin={0}
          />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
