import React from "react";
import "./Button.css";

interface ButtonI {
  handleClick: () => {} | void,
  title: string,
  primary? : boolean,
  isDisabled?: boolean,
  red?: boolean,
  btnType?: "button" | "submit" | "reset" | undefined
}

const Button = ({
  handleClick,
  title,
  primary,
  isDisabled,
  red,
  btnType,
}: ButtonI) => (
  <button
    onClick={handleClick}
    type={btnType ? btnType : "button"}
    className={
      red ? "btn btn-red" : primary ? "btn btn-primary" : "btn btn-secondary"
    }
    disabled={isDisabled}
  >
    {title}
  </button>
);

export default Button;
