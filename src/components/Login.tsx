import { useState } from "react";
import Button from "./ui/Button";
import { Input } from "./ui/Input/Input";
import {
  BiCamera,
  BiMailSend,
  BiMobileAlt,
  BiQr,
  BiQrScan,
} from "react-icons/bi";
import Card from "./ui/Card/Card";

type LoginProps = {
  onLogin: (userMail: string) => void;
};

const Login = (props: LoginProps) => {
  const [userMail, setUserMail] = useState<string>("");

  function handleOnChange(e: any) {
    setUserMail(e.target.value);
  }

  return (
    <>
      <Card
        title={"Telefonun ile yaptığın işleri kayıt edebilirsin"}
        Icon={BiMobileAlt}
      />
      <Card title="Kamera izinlerini ver" Icon={BiCamera} />
      <Card
        title="Takip etmen gereken gereçlerde QR kod bulacaksın"
        Icon={BiQr}
      />
      <Card title="Qr kodunu okut" Icon={BiQrScan} />
      <Card
        title="Mail adresin ile giriş yap ve Mail olarak gönder"
        Icon={BiMailSend}
      />
      <form
        style={{ width: "100%" }}
        onSubmit={(e) => {
          e.preventDefault();
          props.onLogin(userMail);
        }}
      >
        <div className="flex card-container font">
          <Input
            className="flex card-container font"
            type="email"
            onChange={handleOnChange}
            placeholder="What's your email?"
            id="email"
            isRequired={true}
          />
        </div>
        <div className="flex card-container">
          <Button btnType={"submit"} title={"Giriş"} />
        </div>
      </form>
    </>
  );
};
export default Login;
