import React from 'react'
import HeroImg from '../assets/hero-img.webp'
import CRED from '../assets/cred-logo.png'

function Hero() {
  return (
    <div className='hero-container'>
        <div className='hero-upper-heading'>
            <h4>Smarter Finance for changemakers</h4>
        </div>
        <div className='hero-main-heading'>
            <h2>
                Finance that works <br></br>  as hard as you do
            </h2>
            <p>
                A seamless platform to track spending, set savings goals, and begin
                <br /> investing-all in one place. Take control today.
            </p>
        </div>
        <div className='hero-image'>
            <img src={HeroImg} alt="hero" />
        </div>
        <div className='hero-button'>
            <button className='get-started'>Get Started</button>
            <button className='explore'>Explore feautures</button>
        </div>

        <div className='hero-customers'>
            <h3>Built for everyday people, powered by smart finance</h3>
            <img src={CRED} alt="hero" />
            <img src={CRED} alt="hero" />
            <img src={CRED} alt="hero" />
        </div>
    </div>
  )
}

export default Hero