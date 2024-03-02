import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Icon from './assets/Group 34304.png'
import './deal.css'
import { CiLocationOn } from "react-icons/ci";
import { Pagination, Navigation } from 'swiper/modules';
import RightArrow from './assets/Vector.png'
import LeftArrow from './assets/Vector (1).png'



const Deals = ({ id }) => {
    const settings = {
        spaceBetween: 25,
        slidesPerView: 3,
        navigation: {
            nextEl: `#swiper-button-next-${id}`,
            prevEl: `#swiper-button-prev-${id}`,
        },
        breakpoints: {
            // when window width is >= 768px
            768: {
                slidesPerView: 3,
                spaceBetween: 10,
            },
            // when window width is >= 992px
            992: {
                slidesPerView: 5,
            },
        },
    };
    return (
        <div className="swiper-cont m-md-5 mt-5 mb-5 ms-3 me-3">
            <div className="swiper-header mb-5">
                    <p className="swiper-title">Hey, What's on your mind?</p>
                    <div className="swiper-buttons">
                        <div id={`swiper-button-prev-${id}`} className="swiper-button-prev">
                            <img src={LeftArrow}/>
                        </div>
                        <div  id={`swiper-button-next-${id}`} className="swiper-button-next">
                        <img src={RightArrow}/>
                        </div>
                    </div>
                </div>
                <Swiper
                {...settings}
                spaceBetween={50}
                slidesPerView={3}
                className="mySwiper"
                modules={[Pagination, Navigation]}
                navigation={{
                    nextEl: `#swiper-button-next-${id}`,
                    prevEl: `#swiper-button-prev-${id}`,
                }}
            >
            {Array(10).fill(1).map((_, idx) => (

                <SwiperSlide key={idx}>
                        <div className="card-container d-flex align-items-center flex-column justify-content-center">
                        <div className="card-image mb-3">
                            <img src={Icon} alt="Icon" />
                        </div>
                        <h4 className="ml-3">Hair Cut</h4>
                        </div>
                    

                </SwiperSlide>
            ))}
        </Swiper>
        </div>
    );
}

export default Deals