import React from 'react';
import './Hero.css'
import image from '../../assets/heroimage.jpg'
const Hero = () => {
  
    return (
        // <div className='hero-container'>
        //     <img src={image} alt="" className='hero-image-main'/>
        //     <h1 className='header-slogan1'>Discover Your Design Potential</h1>
        //     <h1 className='header-slogan2'>Your Vision, Our Design</h1>
        // </div>

        <div class="main-image">
        <div class="container-hero">
            <h1 className='header-slogan1'>Discover Your Design Potential</h1>
            <h1 className='header-slogan2'>Your Vision, Our Design</h1>
            <button className='nav-btn-hero'>Start The Transformation</button>
        </div>
        </div>
    );
}

export default Hero;
