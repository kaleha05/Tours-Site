import React from 'react';
import heroImg from '../assets/hero.jpg';

const Hero = () => {
    return (
        <div className='w-full h-screen'>
            <img className='w-full' src={heroImg} alt=""/>
        </div>
    );
}

export default Hero;