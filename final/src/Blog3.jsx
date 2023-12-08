import React from "react";
import "./style.css";
import NavBar from "./NavBar";
import { Link } from 'react-router-dom';

function Blog3() {
  return (
    <div className="blog">
      <NavBar />
      <img src="static/img/topdog.png" className="hero-image" /> 
      <div className="text-block">
      <p className="title-text">Berkeley institution Top Dog is on the ropes. But they still won’t take federal aid.</p>
        <p className="name-text">Shaojie Zhang <br /> December 2, 2023</p>
        <p className="main-text">The first visit to Top Dog is an experience that many UC Berkeley students remember fondly. This iconic Berkeley establishment, known for its quick-service grill, has become an integral part of the university experience, offering a variety of sausages until the late hours of 3 a.m. Alongside its culinary offerings, Top Dog is also recognized for its display of libertarian literature. Established in 1966, amidst the era of the Free Speech Movement, the restaurant has become a historic landmark in the area.</p>
        <p className="main-text">However, like many businesses, Top Dog has encountered significant hurdles during the coronavirus pandemic. The owners, Richard and Renie Riemann, advocates for minimal government intervention, have had to make tough decisions in response to the challenges posed by the pandemic. This has led to the regrettable closure of two out of their three locations, and a reduction in their workforce, affecting one-third of their 19 employees.</p>
        <p className="main-text"> Renie Riemann, a Cal alumna who graduated in 1967 and married Richard the following year, remains hopeful about the future of Top Dog. Despite the challenges, there's an air of optimism about sustaining the business at least until April. The primary concern for the couple is generating enough revenue to cover their overhead costs, such as rent and utilities, during these trying times. The survival of Top Dog is not just about preserving a business, but also maintaining a piece of Berkeley's history and a beloved tradition among Cal students. </p>

        <p className="source-text">
          This article is referenced from:
          <a href="https://www.sfgate.com/news/article/Top-Dog-Berkeley-libertarian-aid-coronavirus-15200903.php" target="_blank" rel="noopener noreferrer">
            SFGate
          </a>
        </p>
       
        
      </div>
      
    </div>
  );
};

export default Blog3;