import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import About from "./component/About";
import Menu from "./component/Menu";
import Footer from "./component/Footer";
import Dishes from "./component/Dishes";
import CartPage from "./layouts/CartPage";

const App = () => {
  const [cart, setCart] = useState([]);

  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Main Pages */}
        <Route
          path="/"
          element={
            <>
              <main>
                <div id="home">
                  <Home />
                </div>
                <div id="dishes">
                  <Dishes cart={cart} setCart={setCart} />
                </div>
                <div id="about">
                  <About />
                </div>
                <div id="menu">
                  <Menu />
                </div>
              </main>
              <Footer />
            </>
          }
        />

        {/* Cart Page */}
        <Route
          path="/cart"
          element={
            <div id="cart">
              <CartPage cart={cart} />
            </div>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
