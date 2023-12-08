import React from "react";
import "./style.css";
import NavBar from "./NavBar";
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="about">
      <NavBar />
      <img src="static/img/spencer-davis-vjsj-hgoeg0-unsplash-1.png" className="hero-image" />
      <div className="text-block">
        <p className="title-text">about us</p>
        <p className="main-text">Welcome to the Berkeley Foodies blog—where college life and food collide! We're a group of students on a mission to bring you easy recipes, dorm-friendly cooking tips, and reviews of the best local eats. From budget-friendly meals to indulgent treats, join us as we navigate the delicious intersection of student life and gastronomy. Cheers to good food, great friends, and the unforgettable memories we create around the table!</p>
        <p className="name-text">david liu</p>
        <p className="main-text">Hi! I’m David, a third year student at UC Berkeley studying computer science. I’m always looking out for my next favorite place to eat around town.</p>
        <p className="name-text">yehchan yoo</p>
        <p className="main-text">Hello! My name is Yehchan – I am a UC Berkeley undergraduate studying Statistics and Political Economy while exploring all the restaurants around the area. Great to meet y’all!</p>
        <p className="name-text">alex dupeng gao</p>
        <p className="main-text">Hello, my name is Alex. I’m a second year at UC Berkeley studying Applied Mathematics and Computer Science. I have a few places I frequently visit but I’d love to try out more!</p>
        <p className="name-text">shaojie zhang</p>
        <p className="main-text">Hi there! I'm Shaojie Zhang, currently embracing the vibrant academic life at UC Berkeley where I'm delving into the intricate world of Data Science. Excited to connect with you all!</p>
        <p className="name-text">haorui zhang</p>
        <p className="main-text">Greetings! I'm Haorui Zhang, marking my journey through the scholarly halls of UC Berkeley studying computer science. I'm an avid explorer of the local food spots.</p>
      </div>
    </div>
  );
};

export default About
