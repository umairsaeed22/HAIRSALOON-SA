import React from 'react';
import heroBanner from './assets/Frame 607.png';
import './hero.css';

const hero = () => {
  return (
    <div className='hero_section d-none d-md-block'>
        <img src= {heroBanner} className='hero_image'/>
    </div>
  )
}

export default hero