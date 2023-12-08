import React from "react";
import "./style.css";
import NavBar from "./NavBar";
import { Link } from 'react-router-dom';

function Blog() {
  return (
    <div className="blog">
      <NavBar />
      <img src="static/img/berkeley-skyline.png" className="hero-image" />
      <div className="text-block">
        <p className="title-text">Blog Posts</p>
        <div className="main-text">
          <img src="static/img/o-2410807706.jpg" className="blog-pic"></img>
          <Link to="/blog1" className="blog-link">The Cheese Board: A Berkeley Institution for Pizza Lovers</Link>
        </div>
      </div>
    </div>
  );
};

export default Blog
