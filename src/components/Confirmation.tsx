import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { Context as JobContext } from './hooks/JobContext';

const Confirmation = () => {
  let navigate = useNavigate();
  const {state} = useContext(JobContext);
  console.log(state)
  const isWorkingProperly = true;
  return (
    <>


      <button onClick={() => {
        navigate(`/`)
      }}> Set true
      </button>
    </>


  )
}

export default Confirmation;