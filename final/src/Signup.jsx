import React from "react";
import "./style.css";
import NavBar  from "./NavBar";
import { useState } from "react"; 
import { useNavigate } from "react-router-dom";
import axios from "axios";



function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  function handleEmail(event) {
    setEmail(event.target.value);
  }

  function handlePassword(event) {
    setPassword(event.target.value);
  }

  function handleSubmit() {
    axios.post("http://localhost:3003/signup?email=" + email + "&password=" + password + "&name=Me")
      .then(function (response) {
        console.log(response);
        navigate("/thankyou");
      })
      .catch(function (error) {
        console.log(error);
        setErrorMessage("this email has already been registered");
      })
  }

  return (
    <div className="login-page">
      <div className="div">
        <NavBar />
        <div className="overlap">
          <div className="overlap-2">
            <div className="text-wrapper-7">register</div>
            <div className="div-wrapper">
              <button onClick={handleSubmit} className="text-wrapper-8">submit</button>
            </div>
          </div>
          <div className="text-wrapper-9">sign up</div>
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

export default Signup