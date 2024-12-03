import React, { useContext } from 'react';
import { CartContext } from './CartContext'
import './Cart.css';

const Cart = () => {
  const { cartItems } = useContext(CartContext);

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <h3>{item.title}</h3>
              <p>Quantity: {item.quantity}</p>
              <p>Price: N{item.price * item.quantity}</p>
            </div>
          ))}
          <h2>Total: N{totalPrice}</h2>
          <button className="checkout-btn">Checkout</button>
        </>
      )}
    </div>
  );
};

export default Cart;
