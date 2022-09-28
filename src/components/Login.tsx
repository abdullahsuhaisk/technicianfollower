import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./ui/Button";
import { Input } from "./ui/Input/Input";

const Login = () => {
  const [userMail, setUserMail] = useState('abc');

  let navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("username")) {
      navigate('/');
    }
  })


  function handleOnChange(e: any) {
    setUserMail(e.target.value)
  }

  function handleLogin() {
    console.log(userMail)
    localStorage.setItem('username', userMail)
    navigate('/')
  }

  return <>
    <section className="welcome">
      <div className="content font">
        Contet
      </div>
      <div className="orionLogo">
      </div>
    </section>
    <section className="getstarted welcome font">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa cupiditate, ad in ut eos quis culpa soluta cum repudiandae commodi consequuntur eveniet, non odio inventore totam itaque? Repellat, officiis voluptate.
    </section>

    <div className="flex welcome font">
      <Input type="email" handleChange={handleOnChange} placeholder="What's your email?" />
    </div>
    <div className="flex welcome">
      <Button handleClick={() => handleLogin()} title={"Submit"} />
    </div>

  </>
}
export default Login;