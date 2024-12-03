import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { CartContext } from '../../pages/CartContext';
import './Navbar.css';

const Navbar = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="navbar">
      <h1 className="logo">Chops</h1>
      <div className="navlinks">
        <Link to="/">Shop</Link>
      </div>
      <div className="cart-icon">
        <Link to="/cart">
          <FaShoppingCart size={24} />
          {cartItems.length > 0 && <span className="cart-count">{cartItems.length}</span>}
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
