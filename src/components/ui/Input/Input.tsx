import React from "react";
import "./Input.css";

interface InputI {
  type?: React.HTMLInputTypeAttribute | undefined,
  placeholder?: string,
  onChange: React.ChangeEventHandler<HTMLInputElement>,
  isRequired?: boolean,
  id?: string
}

export const Input = ({ type, placeholder, onChange, isRequired, id }: InputI) => {
  return (
    <div className="webflow-style-input">
      <input
        type={type}
        placeholder={placeholder}
        onChange={(e) => onChange(e)}
        required={isRequired}
        id={id}
      ></input>
    </div>
  );
};
