import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Qrcode } from "./ui/Qrcode";
import { Context as JobContext } from './hooks/JobContext';

interface jobsI {
  floor: string;
  name: string;
  isWorkingProperly: boolean;
}

const Home = () => {
  const [isQRcodeOpen, setIsQRcodeOpen] = useState<boolean>(false);

  const { state, approveNewJob, createNewJob, errorOnCreateJob, resetCreateJob, clearJob } = useContext(JobContext);
  const { jobs } = state;
  console.log(state)

  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("username")) {
      navigate('/login');
    }
  })

  function openOrCloseQrCode(boolVal: boolean): void {
    console.log(isQRcodeOpen)
    setIsQRcodeOpen(boolVal)
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

      navigate(`/conf/`);
    }
  }

  function handleError(err: any) {
    errorOnCreateJob(err)
    console.error(err)
  }

  return (
    <div className="container font">
      <button onClick={() => openOrCloseQrCode(true)}>
        Open Qr code
        {isQRcodeOpen}
      </button>
      <button onClick={() => openOrCloseQrCode(false)}>
        Close Qr code
        {isQRcodeOpen}
      </button>
      <Qrcode isQRcodeOpen={isQRcodeOpen} setIsQRcodeOpen={setIsQRcodeOpen} handleScan={handleScan} handleError={handleError} />
      <div>
        <ul>
          {jobs.map((job: jobsI) => (<>
            <li>{job.name}</li>
            <li>{job.floor}</li>
            <li>{(job.isWorkingProperly).toString()}</li>
          </>))}
        </ul>
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