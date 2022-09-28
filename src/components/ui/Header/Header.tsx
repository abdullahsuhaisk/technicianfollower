import React, { useEffect, useState } from 'react'
import { BiExit } from "react-icons/bi";


import './Header.css'

export const Header = ({userLogged, setUserlogged}: any) => {


  return (
    <div className='header'>
      <div className="flex-container-header">
        {
          !userLogged ? null : <div className="logout-button flex" onClick={() => {
            setUserlogged(false);
            localStorage.clear();
          }}>
            <BiExit style={{
              color: "rgb(255, 255, 255)",
              width: "55px",
              height: "55px"
            }} />
          </div>
        }
      </div>
    </div>
  )
}
