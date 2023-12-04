import React from 'react'
import TopBar from "./TopBar"
import './App.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Contact() {
    const navigate = useNavigate();
    const [errorText, setErrorText] = useState("");
    const [inputName, setInputName] = useState("");
    const [inputEmail, setInputEmail] = useState("");

    function handleSubmit() {
        if (inputName === "" || inputEmail === "") {
            setErrorText("You did not input a name/email. Please try again.");
        } else {
            navigate("/thankyou");
        }
    }

    function handleNameChange(event) {
        setInputName(event.target.value);
    }

    function handleEmailChange(event) {
        setInputEmail(event.target.value);
    }

    return (
        <>
            <TopBar />
            <div className="text">
                <h1 className="centertext">Contact Us</h1>
                <div>
                    <label><h2>Sign up for my thing!</h2></label>
                    <label>Name: </label>
                    <input
                        type="text"
                        onChange={handleNameChange}
                        name="name"
                        placeholder="First Last"
                    /> <br/>
                    <label>Email: </label>
                    <input
                        type="text"
                        onChange={handleEmailChange}
                        name="email"
                        placeholder="abc@gmail.com"
                    /> <br/><br/>
                    <button onClick={handleSubmit}>Submit</button>
                    <p className="errormessage">{errorText}</p>
                </div>
            </div>
        </>
    )
}

export default Contact
