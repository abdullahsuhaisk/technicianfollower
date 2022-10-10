import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BiQr } from "react-icons/bi";

import { Qrcode } from "../ui/Qrcode";
import { Context as JobContext } from "../hooks/JobContext";
import Button from "../ui/Button";
import { WorkList } from "../worksList/WorksList";
import "./Home.css";
import { SendMail } from "../ui/SendMail";
import { getJobsFromLocalStorage } from "../core/LocalStorageService";

export interface jobsI {
  floor: string;
  name: string;
  isWorkingProperly: boolean;
  date: Date
}

const Home = () => {
  const [isQRcodeOpen, setIsQRcodeOpen] = useState<boolean>(false);
  const [isMailButtonDisable, setIsMailButtonDisable] = useState<boolean>(true);

  const {
    state,
    createNewJob,
    errorOnCreateJob,
    getOldJobs
  } = useContext(JobContext);

  const { jobs } = state;
  const navigate = useNavigate();

  useEffect(() => {
    const sendMailDisable = jobs.length > 0 ? true : false;
    setIsMailButtonDisable(sendMailDisable);
  }, [jobs])


  useEffect(() => {
    if (!localStorage.getItem("username")) {
      navigate("/login");
    }
    if (state.jobs.length === 0) {
      // User can close browser, so we need to get prevJobs and set to reducer
      const prevJobs = getJobsFromLocalStorage();
      if (prevJobs && prevJobs.length > 0) {
        getOldJobs(prevJobs)
      }
    }
  });

  function openOrCloseQrCode(boolVal: boolean): void {
    setIsQRcodeOpen(boolVal);
  }

  function mockAddData() {
    setIsQRcodeOpen(false);
    // const newValue = JSON.parse(data.text);
    createNewJob({
      floor: "3. kat",
      name: "duş başlığı",
      isWorkingProperly: false,
      date: new Date().toLocaleString('tr-TR')
    });
    navigate(`/conf/`);
  }

  function handleScan(data: any) {
    if (data && data.text) {
      setIsQRcodeOpen(false);
      const newValue = JSON.parse(data.text);
      console.log("====> ", newValue)

      createNewJob({
        floor: newValue.floor,
        name: newValue.name,
        isWorkingProperly: false,
        date: new Date().toLocaleString("tr-TR"),
      });
      navigate(`/conf/`);
    }
  }

  function handleError(err: any) {
    errorOnCreateJob(err);
    console.error(err);
  }

  const QrCodeClose: React.FC = () =>
    <>
      <div
        className="qrcode-icon"
        onClick={() => {
          mockAddData();
        }}>
        <BiQr
          style={{
            color: "#41b14f",
            width: "240px",
            height: "240px",
          }} />
      </div>
      <div className="qrcode qrcode-button">
        <Button
          handleClick={() => openOrCloseQrCode(true)}
          title={"Open Qr code"}
          primary={true} />
      </div>
    </>

  const QrCodeOpen: React.FC = () => <>
    <Qrcode
      isQRcodeOpen={isQRcodeOpen}
      handleScan={handleScan}
      handleError={handleError}
    />
    <div className="qrcode qrcode-button">
      <Button
        handleClick={() => openOrCloseQrCode(false)}
        title={"Close Qr code"}
        primary={false} />
    </div>
  </>

  return (
    <div className="homeContainer">
      {!isQRcodeOpen ? <QrCodeClose /> : <QrCodeOpen />}
      <WorkList jobs={jobs} />
      <SendMail
        fromMail={localStorage.getItem("username")}
        jobs={jobs}
        isDisabled={isMailButtonDisable} />
    </div>
  );
};



export default Home;
