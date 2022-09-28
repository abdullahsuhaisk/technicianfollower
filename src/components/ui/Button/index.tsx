import React from "react";
import "./Button.css";

const Button = ({ styles, handleClick, title, primary }: any) => (
  <button onClick={handleClick} type="button" 
  className={primary ? 'btn btn-primary': 'btn btn-secondary'}>
    {title}
  </button>
);

export default Button;