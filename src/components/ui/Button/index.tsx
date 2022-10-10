import React from "react";
import "./Button.css";

const Button = ({ styles, handleClick, title, primary, isDisabled, red }: any) => (
  <button
    onClick={handleClick}
    type="button"
    className={red ? 'btn btn-red' : primary ? "btn btn-primary" : "btn btn-secondary"}
    disabled={isDisabled}
  >
    {title}
  </button>
);

export default Button;
