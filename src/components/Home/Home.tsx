import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BiQr, BiQrScan } from "react-icons/bi";

import { Qrcode } from "../ui/Qrcode";
import { Context as JobContext } from "../hooks/JobContext";
import Button from "../ui/Button";
import { WorksAreDone } from "../worksAreDone/WorksAreDone";
import "./Home.css";
import { SendMail } from "../ui/SendMail";

interface jobsI {
  floor: string;
  name: string;
  isWorkingProperly: boolean;
  // date: string
}
// new Date().toLocaleString('tr-TR')

const Home = () => {
  const [isQRcodeOpen, setIsQRcodeOpen] = useState<boolean>(false);
  const {
    state,
    approveNewJob,
    createNewJob,
    errorOnCreateJob,
    resetCreateJob,
    clearJob,
  } = useContext(JobContext);
  const { jobs } = state;
  const sendMailDisable = jobs.length >= 0 ? false : true;

  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("username")) {
      navigate("/login");
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
      // date: new Date().toLocaleString('tr-TR')
    });
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
        floor: "3. kat",
        name: "duş başlığı",
        isWorkingProperly: false,
        date: new Date().toLocaleString("tr-TR"),
      });
      // console.log(state);
      navigate(`/conf/`);
    }
  }

  function handleError(err: any) {
    errorOnCreateJob(err);
    console.error(err);
  }

  function convertJobsArrToMessage(jobs: any) {
    let message = "";
    jobs.forEach((job: any) => {
      let temp = "";
      temp = job.date + " tarihinde " + job.floor + " " + job.name;
      temp += job.isWorkingProperly
        ? " düzgün çalışıyor. "
        : " hatalı çalışıyor. ";
      message += temp + "<br>";
    });
    return message;
  }

  return (
    <div className="homeContainer">
      {!isQRcodeOpen ? (
        <>
          <div
            className="qrcode-icon"
            onClick={() => {
              mockAddData();
            }}
          >
            <BiQr
              style={{
                color: "#41b14f",
                width: "240px",
                height: "240px",
              }}
            />
          </div>
          <div className="qrcode qrcode-button">
            <Button
              handleClick={() => openOrCloseQrCode(true)}
              title={"Open Qr code"}
              primary={true}
            />
          </div>
        </>
      ) : (
        <>
          <Qrcode
            isQRcodeOpen={isQRcodeOpen}
            handleScan={handleScan}
            handleError={handleError}
          />
          <div className="qrcode qrcode-button">
            <Button
              handleClick={() => openOrCloseQrCode(false)}
              title={"Close Qr code"}
              primary={false}
            />
          </div>
        </>
      )}
      <WorksAreDone jobs={jobs} />
      <div>
        <SendMail
          fromMail={localStorage.getItem("username")}
          message={convertJobsArrToMessage(jobs)}
          isDisabled={sendMailDisable}
        />
      </div>
    </div>
  );
};
export default Home;
