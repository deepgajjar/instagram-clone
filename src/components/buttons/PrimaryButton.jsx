import React from "react";
import "./style.css";

const PrimaryButton = ({
  backgroundColor,
  children,
  height,
  width,
  borderRadius,
  margin,
  title
}) => {
  return (
    <div
      className="add-btn"
      style={{ backgroundColor, height, width, borderRadius,margin }}
    >
      {!!children?children:title}
    </div>
  );
};
export default PrimaryButton;
