import React from "react";
import "./style.css";
import NavBar  from "./NavBar";
import { useNavigate } from "react-router-dom";

// connect to database??
let db = new sqlite3.Database('../../backend/database.db', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the database.');
});

function Signup() {

  const navigate = useNavigate();
  db.run(`INSERT INTO Users (Id, Name, Age, Email) VALUES (1, 'Charlie', 55, 'charlie@yahoo.com')`);

  function handleSubmit() {
    navigate("/thankyou");
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
            <input id="email" size="30" placeholder="email" />
          </div>
          <div className="overlap-4">
            <input id="password" size="30" placeholder="password" />
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