import React from "react";
import "./Input.css";

export const Input = ({ type, placeholder, onChange, isRequired, id }: any) => {
  return (
    <div className="webflow-style-input">
      <input
        className=""
        type={type}
        placeholder={placeholder}
        onChange={(e) => onChange(e)}
        required={isRequired}
        id={id}
      ></input>
      {/* <button type="submit"><i className="icon ion-android-arrow-forward"></i></button> */}
    </div>
  );
};
