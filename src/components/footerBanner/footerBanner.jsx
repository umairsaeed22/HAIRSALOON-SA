import React from 'react'
import bannerImage from './assets/banner.png'
import './footerBanner.css'

const footerbanner = () => {
  return (
    <div className='footer_banner_container ms-md-5 me-md-5 ms-0 me-0'>
    <img src={bannerImage} className='footer_image' alt="Footer Banner" />
    </div>

  )
}

export default footerbanner