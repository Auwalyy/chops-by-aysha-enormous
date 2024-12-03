import React from 'react'
import './About.css'

const About = () => {
  return (
    <div>
      <div className="about">
        <h1 className="about-title">About us</h1>
        <p className='about-p'>
          We believe in offering more than treats-- we create 
          memobrable experience with every bite. From our freshly 
          backed donuts and cakes to our savory sancks like
          samosa and spring rolls, each item is crafted with the finest 
          ingredients.Every creation is made with care and pssion, ensuring a perfect
          balance of flavor. Whether you're in the mood for something sweet or savory, we
          have something to delight every taste. <span>Join us and 
          enjoy the art of indugence, served with warmth and dedication
          </span>
          <div className="about-btn">
            <button>ORDER NOW</button>
          </div>
        </p>
      </div>
    </div>
  )
}

export default About
