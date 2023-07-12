import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import DataContext from "../../context/DataContext";
import { helpHttp } from "../../helpers/helpHttp";
import ErrorMsg from "../ErrorMsg";
import Loader from "../Loader";
import LoginForm from "../LoginForm";

const ajax = helpHttp();

const Login = () => {
  const { logIn } = useContext(AuthContext);
  const { getData } = useContext(DataContext);
  const [erroLog, setErrorLog] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const navigate = useNavigate();

  const checkLogin = async (form) => {
    setIsLoading(true);
    const data = await ajax.get(
      "https://62633b22c430dc560d2cf4d6.mockapi.io/users"
    );

    const user = await data.find(
      (user) =>
        user.userName === form.userName && user.password === form.password
    );

    if (typeof user !== "undefined") {
      setIsLoading(false);
      logIn(user);
      getData();
      user.role === "Admin" ? navigate("/admin") : navigate("/user");
    } else {
      setIsLoading(false);
      setErrorLog(true);
    }
  };

  useEffect(() => {
    const showMsg = () => {
      setTimeout(() => {
        setErrorLog(false);
      }, 2000);
    };
    showMsg();
    return () => {
      clearTimeout(showMsg);
    };
  }, [erroLog]);

  return (
    <div id="login">
      <h2>Iniciar Sesion</h2>
      <LoginForm checkLogin={checkLogin} />
      {isLoading && <Loader />}
      {erroLog && <ErrorMsg msg="Usuario y/o contraseña incorrecta" />}
    </div>
  );
};

export default Login;
