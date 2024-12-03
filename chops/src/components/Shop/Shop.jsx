import React, { useContext } from 'react';
import { CartContext } from '../../pages/CartContext';
import './Shop.css';
import cake  from '../../assets/cake.jpg'
import meatpie from '../../assets/meatpie.webp'
import samosa from '../../assets/samosa.jpg'
import spring from '../../assets/spring.jpg'
import shawarma from '../../assets/shawarma.jpg'
import donut from '../../assets/donut.jpg'
import cake2  from '../../assets/cake2.jpg'


const Shop = () => {
  const { addToCart } = useContext(CartContext);

  const shopItem = [
    { title: "Donuts", price: 1000, img: donut },
    { title: "Cakes", price: 1000, img: cake },
    { title: "Cookies", price: 1000, img: meatpie },
    { title: "Cupcakes", price: 1000, img: cake2 },
    { title: "Shawarma", price: 1000, img: shawarma },
    { title: "Meatpie", price: 1000, img: meatpie },
    { title: "Spring rolls", price: 1000, img: spring },
    { title: "Samosa", price: 1000, img: samosa },
  ];

  return (
    <div className="shop">
      <div className="shop_title">SHOP</div>
      <div className="main_shop">
        {shopItem.map((item, index) => (
          <div className="shop_content" key={index}>
            <h2>{item.title}</h2>
            <p>N{item.price}/pcs</p>
            <img src={item.img} alt={item.title} />
            <button onClick={() => addToCart(item)}>Add To Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
