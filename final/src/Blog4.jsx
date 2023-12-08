import React from "react";
import "./style.css";
import NavBar from "./NavBar";
import { Link } from 'react-router-dom';

function Blog4() {
  return (
    <div className="blog">
      <NavBar />
      <img src="static/img/La-Crepe.png" className="hero-image" /> 
      <div className="text-block">
      <p className="title-text">Francophiles will find much to love at Berkeley’s traditional creperie</p>
        <p className="name-text"> Shaojie Zhang<br /> December 4, 2023</p>
        <p className="main-text">In May 2020, amidst the challenging backdrop of the global pandemic, the owners of La Crepe a Moi, Rebecca and Dj Dahmani, fulfilled their dream by opening a brick-and-mortar establishment in Berkeley's Northside neighborhood. With a firm resolve, they are determined to persevere until the return of Cal students, upon whom much of their business relies. </p>
        <p className="main-text">The art of crepe-making at La Crepe a Moi is a captivating experience. Observing either Rebecca or Dj skillfully pour and spread the batter on the hot griddle is a mesmerizing process. The result is a perfect, golden-brown crepe, tantalizingly filled with ingredients like cheese, ham, or egg, and then expertly folded into a cone. The first bite reveals a delightful mix of textures and flavors, embodying the essence of French culinary tradition.</p>
        <p className="main-text">The couple's journey began in 2000 when Rebecca, a Francophile from Sonoma County working in Paris, met Dj, a French-Algerian with a passion for cooking. Dj's culinary journey started at 17, making crepes in Paris's vibrant La Villette. Over the years, he honed his skills in various Parisian eateries, including roles as a pastry chef and a sous chef in a renowned Moroccan restaurant. </p>
        <p className="main-text">In 2008, the couple relocated to Berkeley for their son's education at the Ecole Bilingue. After both worked at Eccolo, a well-respected Berkeley restaurant, they ventured into entrepreneurship. Launching La Crepe a Moi, they initially delighted festival and farmers market goers with their crepes, served under a distinctive blue and white tent.</p>
        <p className="main-text">However, the COVID-19 pandemic and subsequent shelter-in-place order in March 2020 severely disrupted their plans. Just before their official opening, the final inspection was halted, and their presence in farmers markets, a crucial part of their business strategy, faced substantial challenges. With market closures and restrictions, their plan to distribute flyers and discounts was upended.</p>
        <p className="main-text">The Northside of the Cal campus, where their new establishment is located, was particularly affected, as reported by Berkeleyside. For Dj and Rebecca, the situation was exacerbated as La Crepe a Moi was still unknown, making a pivot to takeout a less viable option.Rebecca laments their current situation, operating at only 10% of their potential. Adapting their expectations and business growth plans has been a significant challenge. They had envisioned expanding their menu to include espresso, Belgian waffles, salads, and special cultural nights featuring Algerian and Moroccan cuisines, along with a grand opening celebration. These plans, however, are on hold as they navigate the uncertain landscape, waiting for the right moment to fully realize their vision.</p>
        
        <p className="source-text">
          This article is referenced from:
          <a href="https://www.berkeleyside.org/2021/04/26/la-crepe-a-moi-berkeley-traditional-creperie#:~:text=Francophiles%20will%20find%20much%20to,on%20until%20Cal%20students%20return." target="_blank" rel="noopener noreferrer">
            Berkeleyside
          </a>
        </p>

      </div>
      
    </div>
  );
};

export default Blog4;