import React from "react";
import "./style.css";
import NavBar from "./NavBar";
import { Link } from 'react-router-dom';

function Blog1() {
  return (
    <div className="blog">
      <NavBar />
      <img src="static/img/o-2410807706.jpg" className="hero-image" />
      <div className="text-block">
        <p className="title-text">The Cheese Board: A Berkeley Institution for Pizza Lovers</p>
        <p className="name-text">Yehchan Yoo <br /> December 6, 2023</p>
        <p className="main-text">If you are looking for a delicious and affordable pizza place in Berkeley, you might want to check out The Cheese Board. This legendary spot has been serving vegetarian pizzas since 1985, and has a loyal following of locals and visitors alike.</p>
        <p className="main-text">The Cheese Board is not your typical pizza joint. It is a worker-owned cooperative, which means that everyone who works there is also an owner and has a say in how the business is run. The Cheese Board is also part of the Cheese Board Collective, which includes a cheese shop and a bakery next door.</p>
        <p className="main-text">The Cheese Board offers only one type of pizza per day, made with a sourdough crust and seasonal ingredients. The pizza changes every day, so you never know what you are going to get, but you can be sure that it will be fresh and tasty. Some examples of past pizzas are roasted garlic and onion with mozzarella and asiago, or corn and cilantro with feta and lime. The Cheese Board also has vegan and gluten-free options available.</p>
        <p className="main-text">The Cheese Board does not take reservations or orders, so you have to line up and hope for the best. The line can be long, especially during lunch and dinner hours, but it moves fast and the staff is friendly and efficient. You can order by the slice or by the pie, and you can also get salads, breads, and drinks to go with your pizza.</p>
        <p className="main-text">One of the best things about The Cheese Board is the live music. Every day, from 11:30 am to 3 pm and from 4:30 pm to 8 pm, local musicians play jazz, blues, folk, and other genres in front of the pizza place. The music adds to the lively and festive atmosphere, and makes the wait more enjoyable.</p>
        <p className="main-text">The Cheese Board is a Berkeley institution that has been serving delicious pizzas for over three decades. It is a place where you can enjoy a slice of pizza, a salad, and a drink, while listening to live music and supporting a local cooperative. If you are looking for a tasty restaurant in Berkeley, you should definitely give The Cheese Board a try!</p>
      </div>
    </div>
  );
};

export default Blog1