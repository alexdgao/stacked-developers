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
          </div>
          <div className="text-wrapper-9">sign up</div>
          <div className="overlap-3">
            <input onChange={handleEmail} id="email" size="30" placeholder="email" />
          </div>
          <div className="overlap-4">
            <input onChange={handlePassword} id="password" size="30" placeholder="password" />
          </div>
          <button onClick={handleSubmit} className="overlap-5">submit</button>
        </div>
      </div>
    </div>
  );
};

export default Signup
