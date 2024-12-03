import React from 'react'
import hero from '../../assets/hero.jpg'
import './Hero.css'

const Hero = () => {
  return (
    <div className="hero">
      <img src={hero} alt="" className='banner-img' />
       <div className="hero-caption">
          <h1 className="hero-title">Chops by chops </h1>
          <p>Discovering his ties a secret ancient order, a young
          man living in modern Istanbul embarks on a quest to save
          the city from an immortal enemy
          </p>
    </div>
    </div>
  )
}

export default Hero
