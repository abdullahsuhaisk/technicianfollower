import React from "react";
import "./Button.css";

const Button = ({ styles, handleClick, title, primary, isDisabled }: any) => (
  <button
    onClick={handleClick}
    type="button"
    className={primary ? "btn btn-primary" : "btn btn-secondary"}
    disabled={isDisabled}
  >
    {title}
  </button>
);

export default Button;
