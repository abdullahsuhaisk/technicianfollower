import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { saveJobsToLocalStorage } from '../core/LocalStorageService';
import { Context as JobContext } from '../hooks/JobContext';
import Button from '../ui/Button/Button';
import './Confirmation.css';

const Confirmation = () => {
  let navigate = useNavigate();
  const { state, approveNewJob, resetCreateJob } = useContext(JobContext);

  useEffect(() => {
    // If state's job object is empty navigate to home
    if (!state.name) {
      navigate('/');
    }
  }, []);
  
  function approveAndNavigate(bool: boolean) {
    approveNewJob(bool);
    console.log(state.jobs)
    navigate('/');
    saveJobsToLocalStorage(state.jobs);
  }

  function handleResetCreateJob() {
    resetCreateJob()
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
            <Button handleClick={() => approveAndNavigate(false)} title={'Sorun VAR !'} red={true}/>
          </div>
        </div>
        <div className="flex" style={{padding: "0px 30px"}}>
          <div className="margin10x width100">
            <Button handleClick={() => handleResetCreateJob()} title={'İptal Et'}  primary={false} />
          </div>
        </div>
      </div>
    </>


  )
}

export default Confirmation;