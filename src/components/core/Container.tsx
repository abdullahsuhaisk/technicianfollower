import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../ui/Header/Header";
import React from "react";

 const Container = (props :any) => {
  // const [userLogged, setUserlogged] = useState(false);
  // let navigate = useNavigate();

  // useEffect(() => {
  //   if (localStorage.getItem("username")) {
  //     setUserlogged(true)
  //   } else {
  //     navigate('/login');
  //   }
  // }, [])

  // const children = React.Children.map(props.children, (child, index) => {
  //   return React.cloneElement(child, {
  //     index,
  //     setUserlogged,
  //     login
  //   });
  // });

  return (
    <div className="container">
      {props.children}
    </div>
  );
};
export default Container;