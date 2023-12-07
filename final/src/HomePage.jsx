import React from "react";
import NavBar from "./NavBar.jsx";
import "./style.css";
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="home-page">
      <NavBar />
      <img style={{top: "110px", position: "absolute"}} src="/static/img/homepage_top_image.png"></img>
      <div className="overlap-6">
        <div className="text-blurb">
          <p className="paragraph-title">who are we?</p>
          <p className="paragraph-text"> Welcome to Berkeley Foodies—UC Berkeley&#39;s hub for food enthusiasts! We&#39;re a passionate group of students exploring the diverse culinary scene in Berkeley and beyond.</p>
          <button className="button">
            <div className="div-wrapper">
              <Link to="/about" className="text-wrapper-25">learn more</Link>
            </div>
          </button>
        </div>
        <div align="right">
          <img src="/static/img/image-6.png" />
        </div>
        <div>
          <img src="/static/img/image-7.png" />
        </div>
        <div classname="text-blurb" align="right">
          <p className="paragraph-title">for hungry students</p>
          <p className="paragraph-text">Discover quick, delicious tips tailored for busy UC Berkeley lifestyles! Let's nourish our bodies and savor every bite, even on the busiest days!</p>
          <button className="overlap-group-wrapper">
            <div className="div-wrapper">
              <Link to="/blog" className="text-wrapper-26">all posts</Link>
            </div>
          </button>
        </div>
        <div className="text-blurb">
          <p className="paragraph-title">join us!</p>
          <p className="paragraph-text"> Sign up today and join our website's growing group of Berkeley student members!</p>
          <button className="button">
            <div className="overlap-group-4">
              <Link to="/login" className="text-wrapper-27">login</Link>
            </div>
          </button>
        </div>
        <div align="right">
          <img src="/static/img/image-8.png" />
        </div>
      </div>
    </div>
  )
}

export default HomePage
