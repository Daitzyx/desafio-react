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
/*

const Button = ({children, onClick}) => {
    return (
        <button onClick={onClick} className="button">
            {children}
        </button>
    );
}
*/
export default Button;
