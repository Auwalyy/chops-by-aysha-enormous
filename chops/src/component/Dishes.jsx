import React from "react";
//import img1 from "../assets/img/img1.jpg";
//import img2 from "../assets/img/img2.jpg";
//import img3 from "../assets/img/img3.jpg";
//import img4 from "../assets/img/img4.jpg";
//import img5 from "../assets/img/img5.jpg";
//import img6 from "../assets/img/img6.jpg";
import DishesCard from "../layouts/DishesCard";

import img1 from '../assets/cake.jpg'
import img2 from '../assets/donut.jpg'
import img3 from '../assets/meatpie.webp'
import img4 from '../assets/samosa.jpg'
import img5 from '../assets/shawarma.jpg'
import img6 from '../assets/spring.jpg'


const Dishes = ({setCart}) => {

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  return (
    <div className=" min-h-screen flex flex-col justify-center items-center lg:px-32 px-5">
      <h1 className=" text-4xl font-semibold text-center pt-24 pb-10">
        Our Dishes
      </h1>

      <div className=" flex flex-wrap gap-8 justify-center">
        <DishesCard img={img1} title="Tasty Dish" price="N1000" />
        <DishesCard img={img2} title="Tasty Dish" price="N1000" />
        <DishesCard img={img3} title="Tasty Dish" price="N1000" />
        <DishesCard img={img4} title="Tasty Dish" price="N1000" />
        <DishesCard img={img5} title="Tasty Dish" price="N1000" />
        <DishesCard img={img6} title="Tasty Dish" price="N1000" />
      </div>
    </div>
  );
};

export default Dishes;