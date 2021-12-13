    
import style from "./ResetPassword.module.css";
import Button from "../components/layout/Button";

import Card from "../components/ui/Card";
import { HiOutlineMail } from "react-icons/hi";

function Login() {

    return(
    <>
    {/* <MainNavigation /> */}
        <h1> </h1>
        <Card className="cardResetPassword"> 
            <form className={style.signUp} id="resetpassword" method="post" action="/">
                <div>
                    <h2 className={style.title}>Esqueci a senha</h2>
                </div>
    
                <hr />
    
                <div className={style.inputSignUp} className={style.resetInputEmail}>
                    <HiOutlineMail />
                    <input className={style.inputcard} type="email" placeholder="Email" />
                </div>

                <Button className="btnCard">Redefinir senha</Button>

            </form>
        </Card>
    </>
    )
}

export default Login;