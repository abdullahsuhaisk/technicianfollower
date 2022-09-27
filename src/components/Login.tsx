import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "./ui/Header/Header";

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
  <Header />
    <section className="welcome">
      <div className="content">
        Contet
      </div>
      <div className="orionLogo">
      </div>
    </section>
    <section className="getstarted welcome font">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa cupiditate, ad in ut eos quis culpa soluta cum repudiandae commodi consequuntur eveniet, non odio inventore totam itaque? Repellat, officiis voluptate.
    </section>

    <div className="font">
      <h1>
        Login Page
      </h1>
      <label htmlFor="Write username">Login</label>
      <input type="email" onChange={(e) => handleOnChange(e)} />
      <button onClick={() => handleLogin() }>Submit</button>
    </div>
    </>
}
export default Login;