import React from "react";
import "./style.css";
import NavBar  from "./NavBar";
import { Link } from 'react-router-dom';


function Signup() {
  return (
    <div className="login-page">
      <div className="div">
        <NavBar />
        <div className="overlap">
          <div className="overlap-2">
            <div className="text-wrapper-7">Submit</div>
            <div className="div-wrapper">
              <Link to="/thankyou" className="text-wrapper-8">submit</Link>
            </div>
          </div>
          <div className="text-wrapper-9">sign up</div>
          <div className="overlap-3">
            <div className="text-wrapper-10">email</div>
          </div>
          <div className="overlap-4">
            <div className="text-wrapper-10">password</div>
            <div className="text-wrapper-10">password</div>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup