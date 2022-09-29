import { useContext, useState } from "react";
import Button from "../ui/Button";
import { Context as JobContext } from "../hooks/JobContext";
import emailjs from "@emailjs/browser";

export const SendMail = ({ fromMail, message, isDisabled }: any | null) => {
  const EMAILJS_SERVICE_ID = "service_t4fz447";
  const EMAILJS_TEMPLATE_ID = "template_a7dcf8l";
  const EMAILJS_PUBLIC_KEY = "23wdYa-2Vn3XQr_Zi";
  const { clearJob } = useContext(JobContext);
  let [showFeedback, setShowFeedback] = useState(false);
  let [feedBackMessage, setFeedBackMessage] = useState("");

  //This object keys should be equal with template variables in emailjs webpage.
  let mailTemplateParams = {
    technician_email: fromMail,
    message: message,
  };

  function sendMail() {
    clearJob();
    emailjs
      .send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        mailTemplateParams,
        EMAILJS_PUBLIC_KEY
      )
      .then(
        function (response) {
          setFeedBackMessage("Send Mail Success");
          console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
          setFeedBackMessage("Send Mail Fail");
          console.log("FAILED...", error);
        }
      )
      .finally(() => {
        setShowFeedback(true);
        console.log(feedBackMessage);
        setTimeout(() => {
          setShowFeedback(false);
        }, 3000);
      });
  }
  return (
    <>
      {showFeedback === false ? (
        <Button
          handleClick={() => sendMail()}
          title={"Send Mail"}
          primary={false}
          isDisabled={isDisabled}
        />
      ) : (
        <h3 className="feedback-message">{feedBackMessage}</h3>
      )}
    </>
  );
};
