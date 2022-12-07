import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.css";

const IconWithName = ({ title, ...props }) => {
  const [isSelected, setIsSelected] = useState(false);
  const iconClickHandler = () => {
    setIsSelected(!isSelected);
  };
  return (
    <div className={`title-icon-container ${
        isSelected && "toggle-class-for-video-options"
      }`}   onClick={iconClickHandler} >
      <FontAwesomeIcon
        {...props}
        className={`video-menu-options ${
          isSelected && "toggle-class-for-video-options"
        }`}
      
      />
      {title && <p className="title">{title}</p>}
    </div>
  );
};

export default IconWithName;
