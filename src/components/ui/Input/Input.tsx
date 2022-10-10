import React from "react";
import "./Input.css";

export const Input = ({ type, placeholder, handleChange, isRequired }: any) => {
  return (
    <div className="webflow-style-input">
      <input
        className=""
        type={type}
        placeholder={placeholder}
        onChange={(e) => handleChange(e)}
        required={isRequired}
      ></input>
      {/* <button type="submit"><i className="icon ion-android-arrow-forward"></i></button> */}
    </div>
  );
};
