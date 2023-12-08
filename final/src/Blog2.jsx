import React from "react";
import "./style.css";
import NavBar from "./NavBar";
import { Link } from 'react-router-dom';

function Blog2() {
  return (
    <div className="blog">
      <NavBar />
      <img src="static/img/article1.png" className="hero-image" /> 
      <div className="text-block">
      <p className="title-text">33-year-old Italian restaurant beloved by Berkeley students is closing</p>
        <p className="name-text">Shaojie Zhang<br /> December 4, 2023</p>
        <p className="main-text">A 33-year-old Italian restaurant beloved by UC Berkeley students is closing.</p>
        <p className="main-text">PPizza Bene, a cherished Italian eatery frequented by students from the University of California, Berkeley, has announced its impending closure scheduled for December 15. This beloved establishment, with a rich history spanning over three decades, has been a staple in the Berkeley community for 13 years, following a successful 20-year stint in San Francisco.</p>
        <p className="main-text">The restaurant, renowned for its reasonably priced, generous portions, has become a go-to spot for hearty Italian classics such as spaghetti, meatballs, and a variety of pizzas. Pizza Bene has not only served delicious meals but also played a significant role in the lives of UC Berkeley students. The owners, Farhad Jalali and Ladan Sanjani, have been more than just restaurateurs; they have been a part of the university community, witnessing the evolution of the campus culture over the years. From welcoming wide-eyed freshmen to celebrating the achievements of 13 graduating classes, they have seen generations of students come and go, adding a unique personal touch to the dining experience. </p>
        <p className="main-text">A particular favorite among the students has been the restaurant's lunchtime offering of $10 pasta plates, a budget-friendly option that doesn't compromise on taste or quality. This closure marks the end of an era for both the owners and the numerous students who have walked through its doors, seeking a taste of home away from home.</p>
        <p className="source-text">
          This article is referenced from:
          <a href="https://www.sfchronicle.com/food/restaurants/article/pasta-bene-closing-18532610.php" target="_blank" rel="noopener noreferrer">
            San Francisco Chronicle
          </a>
        </p>
   
      </div>
      
    </div>
  );
};

export default Blog2;
