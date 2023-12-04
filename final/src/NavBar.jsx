import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function Navbar() {
    return (
        <div className="navigation-bar">
            <div className="navbar">
                <Link to="/login" className="text-wrapper">login</Link>
                <Link to="/blog" className="text-wrapper-2">blog</Link>
                <Link to="/about" className="text-wrapper-3">about</Link>
                <Link to="/" className="text-wrapper-4">home</Link>
                <div className="logo-text">
                    <div className="overlap-group">
                        <div className="text-wrapper-5">foodies</div>
                        <div className="text-wrapper-6">berkeley</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar