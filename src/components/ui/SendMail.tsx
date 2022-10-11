import { useContext, useState } from "react";
import Button from "./Button/Button";
import { Context as JobContext } from "../hooks/JobContext";
import emailjs from "@emailjs/browser";
import { clearJobs } from "../core/LocalStorageService";
import { jobsI } from "../Home/Home";

const EMAILJS_SERVICE_ID = "service_t4fz447";
const EMAILJS_TEMPLATE_ID = "template_a7dcf8l";
const EMAILJS_PUBLIC_KEY = "23wdYa-2Vn3XQr_Zi";

export const SendMail = ({ fromMail, jobs, isDisabled }: any | null) => {
  const { clearJob } = useContext(JobContext);
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedBackMessage, setFeedBackMessage] = useState("");

  //This object keys should be equal with template variables in emailjs webpage.
  const mailTemplateParams = {
    technician_email: fromMail,
    message: convertJobsArrToMessage(jobs),
  };

  function convertJobsArrToMessage(jobs: Array<jobsI>) {
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

  function sendMail() {
    emailjs
      .send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        mailTemplateParams,
        EMAILJS_PUBLIC_KEY
      )
      .then(
        function (response) {
          setFeedBackMessage("Mail Gönderildi");
          console.log("SUCCESS!", response.status, response.text);
          clearJob();
        },
        function (error) {
          setFeedBackMessage("Mail Gönderilemedi !");
          console.log("FAILED...", error);
        }
      )
      .finally(() => {
        setShowFeedback(true);
        console.log(feedBackMessage);
        // clearJob();
        setTimeout(() => {
          setShowFeedback(false);
        }, 3000);
      });
  }
  return (
    <div>
      {showFeedback === false ? (
        <Button
          handleClick={() => sendMail()}
          title={"Send Mail"}
          primary={false}
          isDisabled={!isDisabled}
        />
      ) : (
        <h3 className="feedback-message">{feedBackMessage}</h3>
      )}
    </div>
  );
};
