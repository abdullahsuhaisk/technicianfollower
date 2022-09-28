import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { Context as JobContext } from '../hooks/JobContext';
import Button from '../ui/Button';
import './Confirmation.css'

const Confirmation = () => {
  let navigate = useNavigate();
  const { state, approveNewJob } = useContext(JobContext);

  function approveAndNavigate(bool: boolean) {
    approveNewJob(bool);
    navigate('/');
  }

  return (
    <>
      <div className="confirmation-container">
        <div className="card font">
          <div>
            {state.name}
          </div>
          <div>
            {state.floor}
          </div>
        </div>
        <div className="flex deside" >
          <div className="margin10x width100">
            <Button handleClick={() => approveAndNavigate(true)} title={'Sorun Yok'} primary={true} />
          </div>
          <div className="margin10x width100">
            <Button handleClick={() => approveAndNavigate(false)} title={'Sorun VAR !'} primary={false} />
          </div>
        </div>
      </div>
    </>


  )
}

export default Confirmation;