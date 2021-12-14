
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import style from "./SignUp.module.css";

import Button from "../components/layout/Button";
import Card from "../components/ui/Card";
import PasswordStrength from "../components/ui/PasswordStrength";

import { HiOutlineMail,HiOutlineLockClosed } from "react-icons/hi";
import {FaUser} from "react-icons/fa"


function SignUpPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();
  useEffect(() => {
    if (localStorage.getItem("user-info")) {
    }
  }, []);
  async function register(e) {
    e.preventDefault();

    let item = { name, email, password };
    
    let result = await fetch(
      "https://back-3035teach.herokuapp.com/profile/sign-up",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(item)
      }
    );
    const resultJson = await result.json();
    if (result.status === 200) {
        localStorage.setItem("user-info",JSON.stringify(result));
        history.push("/");
    } else {
        //trata os erros
    }
  }
    return(
    <>
    <h1></h1>
        <Card className="cardSignUp"> 
            <form className={style.signUp} id="signup" onSubmit={register}
            method="post" action="/"
            >
                <div>
                    <h2 className={style.title}>Cadastre-se</h2>
                </div>
    
                <hr />

                
                <div className={style.spanMsg}>
                    <span>Insira um endereço de email válido.</span>
                </div>

                <div className={style.inputSignUp} className={style.loginInputNome}>
                <FaUser />
                    <input name="name" 
                    className={style.inputcard} 
                    type="text" 
                    placeholder="Nome completo" 
                    value={name}
                    onChange={(e)=> setName(e.target.value)}
                    />
                </div>
    
                <div className={style.inputSignUp} className={style.loginInputEmail}>
                    <HiOutlineMail />
                    <input name="email" 
                    className={style.inputcard} 
                    type="email" 
                    placeholder="Email" 
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                    />
                </div>
                <div className={style.inputSignUp} className={style.loginInputPassword}>
                    <HiOutlineLockClosed />
                    <input name="password" className={style.inputcard} type="password" placeholder="*******"
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)}
                    />
                </div>
                < PasswordStrength password={password} />

                <Button className="btnCard"  type='submit'
                >Fazer Login</Button>

                <div className={style.endCard}>
                    <span>Já tem uma conta? <a href="/">Fazer Login</a></span>
                </div>
            </form>
        </Card>
    </>
    )
}

export default SignUpPage;