import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './style.css'
const TextField = ({ icons }) => {
    return(
        <div className="input-container">
        <span className="icon-container">
            {icons && <FontAwesomeIcon icon={icons} className="icon" /> }
        </span>
        <input className="input-field" type="text" placeholder="search" name="usrnm" />
      </div>
    )
}

export default TextField;