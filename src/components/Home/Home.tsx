import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Qrcode } from "../ui/Qrcode";
import { Context as JobContext } from '../hooks/JobContext';
import { Header } from "../ui/Header/Header";
import Button from "../ui/Button";
import Table from "../ui/Table/RCTable";
import { WorksAreDone } from "../worksAreDone/WorksAreDone";

interface jobsI {
  floor: string;
  name: string;
  isWorkingProperly: boolean;
}

const Home = () => {
  const [isQRcodeOpen, setIsQRcodeOpen] = useState<boolean>(false);
  const { state, approveNewJob, createNewJob, errorOnCreateJob, resetCreateJob, clearJob } = useContext(JobContext);
  const { jobs } = state;



  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("username")) {
      navigate('/login');
    }
  })

  function openOrCloseQrCode(boolVal: boolean): void {
    setIsQRcodeOpen(boolVal)
  }

  function mockAddData() {
    setIsQRcodeOpen(false);
    // const newValue = JSON.parse(data.text);
    createNewJob({
      floor: '3. kat',
      name: 'duş başlığı',
      isWorkingProperly: false
    })
    navigate(`/conf/`);
  }

  function handleScan(data: any) {
    // console.log(data)
    if (data && data.text) {
      // TODO: Covert string text to JSON
      // console.log("====> ", data.text)
      setIsQRcodeOpen(false);
      // const newValue = JSON.parse(data.text);
      createNewJob({
        floor: '3. kat',
        name: 'duş başlığı',
        isWorkingProperly: false
      })
      // console.log(state);
      navigate(`/conf/`);
    }
  }

  function handleError(err: any) {
    errorOnCreateJob(err)
    console.error(err)
  }

  // console.log(jobs)

  return (
    <div className="container">
      
      <Button handleClick={() => mockAddData()} title={'Open Qr code'} primary={true} />
      <Button handleClick={() => openOrCloseQrCode(false)} title={'Close Qr code'} primary={false} />
      <Qrcode isQRcodeOpen={isQRcodeOpen} setIsQRcodeOpen={setIsQRcodeOpen} handleScan={handleScan} handleError={handleError} />
      <WorksAreDone jobs={jobs} />
      <div>
      </div>
    </div>
  )
}
export default Home;

/* 
<button onClick={() => createNewJob({
        floor: '3. kat',
        name: 'duş başlığı',
        isWorkingProperly: false
      })} style={{margin:20}}>
        createNewJob
      </button>
      <button onClick={() => {
        approveNewJob(true)
      }} style={{margin:20}}>
        approve
      </button>
      <button onClick={() => {clearJob()}} style={{margin:20}}>
        reset
      </button> 
*/