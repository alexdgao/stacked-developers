import React from 'react'
import { Link } from 'react-router-dom'
import './App.css'

function TopBar() {
    return (
        <div>
            <nav>
                <div className="header">
                    <button className="mainpagetitle">
                        <Link to='/' className="mainpagebutton">
                            <h1>Project 2 Website: Blog</h1>
                            <h3 className="subtitle">Alex Gao and Koa Lee</h3>
                        </Link>
                    </button>
                    <div className="topbutton">
                        <button><Link to="/about">About</Link></button>
                        <button><Link to="/blog">Blog</Link></button>
                        <button><Link to="/contact">Contact</Link></button>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default TopBar
