import React from 'react'
import NavBar from "./NavBar"
import './style.css'
import { Link } from 'react-router-dom'

function LoggedIn() {
    return (
        <>
            <div className='text'>
                <h1>Your logged in!</h1>
                <Link to="/">Click here to go back!</Link>
            </div>
        </>
    )
}

export default LoggedIn