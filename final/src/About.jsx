import React from "react";
import "./style.css";
import NavBar from "./NavBar";
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="about">
      <div className="div">
        <NavBar />
        <footer className="footer">
          <div className="overlap-group-wrapper">
            <div className="overlap-group">
              <div className="text-wrapper-5">foodies</div>
              <div className="text-wrapper-6">berkeley</div>
            </div>
          </div>
          <div className="footer-navigation">
            <div className="text-wrapper-7">foodies</div>
            <Link to="/" className="text-wrapper-8">home</Link>
            <Link to="/about" className="text-wrapper-9">about</Link>
            <Link to="/blog" className="text-wrapper-10">blog</Link>
            <Link to="login" className="text-wrapper-11">login</Link>
          </div>
          <div className="connect">
            <div className="text-wrapper-7">connect</div>
            <div className="text-wrapper-8">instagram</div>
            <div className="text-wrapper-9">twitter</div>
            <div className="text-wrapper-10">facebook</div>
            <div className="text-wrapper-11">linkedin</div>
          </div>
          <img className="vector" alt="Vector" src="/static/img/vector.png" />
        </footer>
        <img
          className="spencer-davis-vjsj"
          alt="Spencer davis vjsj"
          src="/static/img/spencer-davis-vjsj-hgoeg0-unsplash-1.png"
        />
        <div className="text-wrapper-12">about us</div>
        <div className="overlap">
          <div className="text-wrapper-13">yehchan yoo</div>
          <p className="p">
            Hi! I’m David, a third year student at UC Berkeley studying computer science. I’m always looking out for my
            next favorite place to eat around town.
          </p>
        </div>
        <p className="welcome-to-the">
          Welcome to the Berkeley Foodies blog—where college life and food collide! We&#39;re a group of students on a
          mission to bring you easy recipes, dorm-friendly cooking tips, and reviews of the best local eats. From
          budget-friendly meals to indulgent treats, join us as we navigate the delicious intersection of student life
          and gastronomy. Cheers to good food, great friends, and the unforgettable memories we create around the table!
        </p>
        <div className="overlap-2">
          <p className="p">
            Hello! My name is Yehchan – I am a UC Berkeley undergraduate studying Statistics and Political Economy while
            exploring all the restaurants around the area. Great to meet y’all!
          </p>
          <div className="text-wrapper-14">alex dupeng gao</div>
          <p className="text-wrapper-15">
            Hello, my name is Alex. I’m a second year at UC Berkeley studying Applied Mathematics and Computer Science.
            I have a few places I frequently visit but I’d love to try out more!
          </p>
        </div>
        <div className="text-wrapper-16">shaojie zhang</div>
        <p className="hi-there-i-m-shaojie">
          Hi there! I&#39;m Shaojie Zhang, currently embracing the vibrant academic life at UC Berkeley where I&#39;m
          delving into the intricate world of Data Science. Excited to connect with you all!
        </p>
        <div className="text-wrapper-17">haorui zhang</div>
        <p className="greetings-i-m-haorui">
          Greetings! I&#39;m Haorui Zhang, marking my journey through the scholarly halls of UC Berkeley studying
          computer science. I&#39;m an avid explorer of the local food spots.
        </p>
        <div className="text-wrapper-18">david liu</div>
      </div>
    </div>
  );
};

export default About
