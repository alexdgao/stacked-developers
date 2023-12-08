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

        <div className="horizontal-line"></div> 

        <div className="main-text">
          <img src="static/img/article1.png" className="blog-pic"></img>
          <Link to="/blog2" className="blog-link">33-year-old Italian restaurant beloved by Berkeley students is closing</Link>
        </div>

        <div className="horizontal-line"></div> 

        <div className="main-text">
          <img src="static/img/topdog.png" className="blog-pic"></img>
          <Link to="/blog3" className="blog-link">Berkeley institution Top Dog is on the ropes. But they still won’t take federal aid.</Link>
        </div>

        <div className="horizontal-line"></div> 

        <div className="main-text">
          <img src="static/img/La-Crepe.png" className="blog-pic"></img>
          <Link to="/blog4" className="blog-link">Francophiles will find much to love at Berkeley’s traditional creperie</Link>
        </div>

      </div>
    </div>
  );
};

export default Blog
