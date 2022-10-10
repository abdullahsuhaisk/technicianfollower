import React from "react";
import "./Label.css";

export const Label = ({ title }: any) => {
  return (
    <div className="webflow-style-label">
      <label className="">{title}</label>
    </div>
  );
};
