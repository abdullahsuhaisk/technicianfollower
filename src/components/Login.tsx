import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./ui/Button";
import { Input } from "./ui/Input/Input";
import {
  BiCamera,
  BiMailSend,
  BiMobileAlt,
  BiQr,
  BiQrScan,
} from "react-icons/bi";

const Login = (props: any) => {
  const [userMail, setUserMail] = useState("abc");
  // console.log(props)
  // let navigate = useNavigate();

  // useEffect(() => {
  //   if (localStorage.getItem("username")) {
  //     navigate('/');
  //   }
  // })

  function handleOnChange(e: any) {
    setUserMail(e.target.value);
  }

  return (
    <>
      <section className="welcome">
        <div className="content font">
          <BiMobileAlt
            style={{
              color: "rgb(255, 255, 255)",
              width: "55px",
              height: "55px",
            }}
          />
        </div>
        <div className="font content-text">
          Telefonun ile yaptığın işleri kayıt edebilirsin
        </div>
      </section>
      <section className="welcome">
        <div className="content font">
          <BiCamera
            style={{
              color: "rgb(255, 255, 255)",
              width: "55px",
              height: "55px",
            }}
          />
        </div>
        <div className="font content-text">Kamera izinlerini ver</div>
      </section>
      <section className="welcome">
        <div className="content font">
          <BiQr
            style={{
              color: "rgb(255, 255, 255)",
              width: "55px",
              height: "55px",
            }}
          />
        </div>
        <div className="font content-text">
          Takip etmen gereken gereçlerde QR kod bulacaksın
        </div>
      </section>
      <section className="welcome">
        <div className="content font">
          <BiQrScan
            style={{
              color: "rgb(255, 255, 255)",
              width: "55px",
              height: "55px",
            }}
          />
        </div>
        <div className="font content-text">Qr kodunu okut</div>
      </section>
      <section className="welcome">
        <div className="content font">
          <BiMailSend
            style={{
              color: "rgb(255, 255, 255)",
              width: "55px",
              height: "55px",
            }}
          />
        </div>
        <div className="font content-text">
          Mail adresin ile giriş yap ve Mail olarak gönder
        </div>
      </section>
      <div className="flex welcome font">
        <Input
          className="flex welcome font"
          type="email"
          handleChange={handleOnChange}
          placeholder="What's your email?"
        />
      </div>
      <div className="flex welcome">
        <Button handleClick={() => props.loginFun(userMail)} title={"Giriş"} />
      </div>
    </>
  );
};
export default Login;
