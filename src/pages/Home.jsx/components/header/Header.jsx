import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faSearch, faBars } from "@fortawesome/free-solid-svg-icons";
import { PrimaryButton, TextField } from "../../../../components";
import "./style.css";

const Header = ({ onClickHamburger }) => {
  return (
    <>
      <div className="horizontal-header">
        <div className="hamburger-container">
          <FontAwesomeIcon
            icon={faBars}
            className="hamburger-icon"
            onClick={onClickHamburger}
          />
          <h1 className="title">Snippets</h1>
        </div>

        <div className="right-portion">
          <PrimaryButton>
            <>
              <span className="plus-icon">
                <FontAwesomeIcon icon={faPlus} className="iconStyle" />
              </span>
              Add
            </>
          </PrimaryButton>
          <div className="header-search-bar">
            <TextField icons={faSearch} />
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
