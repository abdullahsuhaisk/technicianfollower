import React from 'react'
import './Input.css'

export const Input = ({ type, placeholder, handleChange }: any) => {
  return (
    <div className="webflow-style-input">
      <input className="" type={type} placeholder={placeholder} onChange={(e) => handleChange(e)}></input>
      {/* <button type="submit"><i className="icon ion-android-arrow-forward"></i></button> */}
    </div>
  )
}
