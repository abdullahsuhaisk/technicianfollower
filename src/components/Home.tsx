import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Qrcode } from "./ui/Qrcode";
import { Context as JobContext } from './hooks/JobContext';

interface jobs {
  floor: string;
  name: string;
  isWorkingProperly: boolean;
}

const Home = () => {
  const [jobs, setJobs] = useState([]);
  const [isQRcodeOpen, setIsQRcodeOpen] = useState<boolean>(false);
  const [newRead, setNewRead] = useState('');
  let { name, floor, isWorkingProperly } = useParams();

  const {state, addNewJob, clearErrorMsg, createNewJob} = useContext(JobContext);
  console.log(state);

  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("username")) {
      navigate('/login');
    }
  })

  function openOrCloseQrCode(boolVal: boolean): void{
    console.log(isQRcodeOpen)
    setIsQRcodeOpen(boolVal)
    // addNewJob({job:'asdasd'});
  }

  function handleScan(data: any) {
    // console.log(data)
    if(data && data.text) {
      // TODO: Covert string text to JSON
      // console.log("====> ", data.text)
      setNewRead(data.text)
      setIsQRcodeOpen(false);
      // const newValue = JSON.parse(data.text);
      // setJobs(newValue,...jobs)
      createNewJob({job:'newValue'});
      navigate(`/conf/`);
    }
  }

  function handleError(err: any) {
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
      <Qrcode isQRcodeOpen={isQRcodeOpen} setIsQRcodeOpen={setIsQRcodeOpen} handleScan={handleScan} handleError={handleError} newRead={newRead}/>
    </div>
  )
}
export default Home;