import React from "react";
import "./style.css";
import NavBar  from "./NavBar";
import { useState } from "react"; 
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import axios from "axios";



function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  function handleLogin() {
    axios.post("http://localhost:3003/login?email=" + email + "&password=" + password)
    .then(function (response) {
      console.log(response);
      navigate("/loggedin");
    })
    .catch(function (error) {
      console.log(error);
      setErrorMessage("incorrect email/password");
    })
  }
  
  function handleEmail(event) {
    setEmail(event.target.value);
  }

  function handlePassword(event) {
    setPassword(event.target.value);
  }

  return (
    <div className="login-page">
      <div className="div">
        <NavBar />
        <div className="overlap">
          <div className="overlap-2">
            <button onClick={handleLogin}>submit</button>
            <div className="text-wrapper-7">new here?</div>
            <p className="sign-up-and-unlock">
              sign up and
              <br />
              unlock hundreds
              <br />
              of recipes!
            </p>
            <div className="div-wrapper">
              <Link to="/signup" className="text-wrapper-8">sign up</Link>
            </div>
          </div>
          <div className="text-wrapper-9">login</div>
          <div className="overlap-3">
            <input onChange={handleEmail} id="email" size="30" placeholder="email" />
          </div>
          <div className="overlap-4">
            <input onChange={handlePassword} id="password" size="30" placeholder="password" />
          </div>
          <div className="text-wrapper-11">or</div>
          <img className="line" alt="Line" src="/static/img/line-7.svg" />
          <img className="img" alt="Line" src="/static/img/line-7.svg" />
          <div className="overlap-5">
            <div className="text-wrapper-12">sign in with facebook</div>
          </div>
          <div className="overlap-6">
            <div className="text-wrapper-13">sign in with google</div>
          </div>
          <div className="overlap-7">
            <div className="text-wrapper-14">sign in with twitter</div>
            <br />
            <p className="errormessage">{errorMessage}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login
