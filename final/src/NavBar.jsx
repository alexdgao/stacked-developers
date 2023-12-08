import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function NavBar() {
    return (
        <div className="navbar">
            <div className="logo-text">
                <div className="overlap-group">
                    <div className="text-wrapper-5">foodies</div>
                    <div className="text-wrapper-6">berkeley</div>
                </div>
            </div>
            <ul className="nav-links">
                <li><Link to="/">home</Link></li>
                <li><Link to="/about">about</Link></li>
                <li><Link to="/blog">blog</Link></li>
                <li><Link to="/login">login</Link></li>
            </ul>
        </div>
    )
}

export default NavBar
