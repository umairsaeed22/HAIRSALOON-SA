import React from 'react'
import MyNavbar from '../../components/navbar/navbar'
import Hero from '../../components/heroBanner/hero'
import FooterBanner from '../../components/footerBanner/footerBanner'
import Footer from '../../components/footer/footer'
import VideoImg from './assets/Mask group.png'

const Guides = () => {
  return (
    <div>
        <MyNavbar />
        <Hero />

        <div className="container my-5 col-sm-10 col-md-10 d-flex flex-column justify-content-center">
            <p className='mb-5' style={{color: '#000', fontSize: '24px', fontWeight: '500'}}>You might also like</p>

            <div className='container' style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((index) => (
                <div key={index} className='mb-4 col-md-4'>
                <img src={VideoImg} alt={`Video ${index}`} />
                <div className='ps-3 pe-3 py-2' style={{ boxShadow: '0px 2px 4px 0px #00000040', width: '327px' }}>
                    <h4 style={{ fontSize: '14px', fontWeight: '400', lineHeight: '25px' }}>Very easy U Hair cut </h4>
                    <span>How to U shape Haircut tutorial step by step</span>
                    <p style={{ fontSize: '12px', fontWeight: '300', lineHeight: '19.44px', letterSpacing: '2%', color: '#575757' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    tempor incididunt ut labore et dolore magnaaliqua.
                    </p>
                </div>
                </div>
            ))}
            </div>
        </div>

        <div className="container mx-auto mt-5 py-3 col-sm-10 col-md-10" >
        <FooterBanner/>
        </div>

        <Footer />

    </div>
  )
}

export default Guides