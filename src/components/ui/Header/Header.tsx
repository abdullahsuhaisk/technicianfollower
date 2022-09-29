import React, { useContext, useEffect, useState } from 'react'
import { BiExit } from "react-icons/bi";
import { Context as JobContext } from '../../hooks/JobContext';

import './Header.css'

export const Header = ({ userLogged, logout }: any) => {
  const { clearJob } = useContext(JobContext);

  return (
    <div className='header'>
      <div className="flex-container-header">
        {
          !userLogged ? null : <div className="logout-button flex" onClick={() => {
            logout();
            clearJob();
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
