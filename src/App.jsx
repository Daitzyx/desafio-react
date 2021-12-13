import { BrowserRouter as Router,  Route, Switch } from "react-router-dom";
// import style from "styled-components";

import "./App.css";

import Layout from "./components/layout/Layout";
import Rectangle from "./components/rectangles/Rectangle";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ResetPassword from "./pages/ResetPassword";

function App() {
  return (
    <>
    <Router>
    <Layout>
      <div className="main">
        <Rectangle />
        </div>
          <Switch>
            <Route path="/" exact>  
              <Login />
            </Route>
            <Route path="/signup">
               <SignUp />
              </Route>
            <Route path="/resetpassword">
              <ResetPassword />
            </Route>
          </Switch>
        </Layout>
        </Router>
    </>
  );
}

export default App;
