import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import style from "./Login.module.css";
import Button from "../components/layout/Button";

import Card from "../components/ui/Card";
import { HiOutlineMail, HiOutlineLockClosed } from "react-icons/hi";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const cript = btoa('3035teachapp : 3035teach-secret')
  
  

  const history = useHistory();
  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      history.push("");
    }
  }, []);
  async function loginIn(e) {
    e.preventDefault();
    const basicAuth = 'Basic 3035teachapp:3035teach-secret';
    const urlPost = `https://back-3035teach.herokuapp.com/oauth/token?username=${email}&password=${password}&grant_type=password`;
    

    // let result = await fetch(
    //     urlPost ,
    //   {
    //     method: "POST",
    //     mode: 'no-cors',
    //     headers: {
    //         "Content-Type": "application/json",
    //         Authorization: 'Basic ' + cript
    //     }

    //   }
    // );

    debugger
    axios.defaults.headers.common['Authorization'] = 'Basic ' + cript;
    axios.defaults.headers.common['Content-Type'] = "application/json";
    await axios.post(urlPost, {})
    
    debugger
  }

  // function submitLoginHandler(e){-
  //     e.preventDefault();

  // }

  // const onclickFunc = () => {
  //     debugger
  //     alert('aaa');
  // }

  return (
    <>
      {/* <MainNavigation /> */}
      <h1>Faça login em sua conta</h1>
      <Card>
        <form
          className={style.login}
          id="login"
          onSubmit={loginIn}
          // onSubmit={submitLoginHandler}
          // method="post" action="/"
        >
          <div>
            <h2>Login</h2>
          </div>

          <hr />

          <div className={style.loginInputEmail}>
            <HiOutlineMail />
            <input
              className={style.inputcard}
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={style.loginInputPassword}>
            <HiOutlineLockClosed />
            <input
              className={style.inputcard}
              type="password"
              placeholder="*******"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <Button type="submit" className="btnCard">
            Fazer Login
          </Button>

          <div className={style.endCard}>
            <div className={style.endDiv}>
              <input className={style.lembrarbutton} type="checkbox" />
              <label htmlFor="">Lembrar de mim</label>
            </div>
            <a href="/resetpassword">Esqueci a senha</a>
          </div>
        </form>
      </Card>
    </>
  );
}

export default Login;
