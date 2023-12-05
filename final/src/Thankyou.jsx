import React from 'react'
import NavBar from "./NavBar"
import './style.css'
import { Link } from 'react-router-dom'

function Thankyou() {
    return (
        <>
            <div className='text'>
                <h1>Thank for for your submission!</h1>
                <Link to="/">Click here to go back!</Link>
            </div>
        </>
    )
}

export default Thankyou
