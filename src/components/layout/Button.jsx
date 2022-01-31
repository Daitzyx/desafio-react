import React from "react";

import "./Button.css"

function Button(props) {
    const buttonClassName = `button ${props.className}`;
    
    return (
        <button className={buttonClassName} onClick={props.onclickFunc}>
            {props.children}
        </button>
    );
  }

export default Button;
