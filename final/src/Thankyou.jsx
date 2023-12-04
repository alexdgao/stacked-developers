import React from 'react'
import TopBar from "./TopBar"
import './App.css'
import { Link } from 'react-router-dom'

function Thankyou() {
    return (
        <>
            <TopBar />
            <div className="text">
                <h1 className="centertext">Thank for for your submission!</h1>
                <Link to="/" className="text">Click here to go back!</Link>
            </div>
        </>
    )
}

export default Thankyou
