import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Icon from './assets/Group 34304.png';
import './UpcomingAppointments.css';
import { CiLocationOn } from "react-icons/ci";
import { Pagination, Navigation } from 'swiper/modules';
import RightArrow from './assets/Vector.png';
import LeftArrow from './assets/Vector (1).png';

const UpcomingAppointments = ({ id }) => {
    const settings = {
        
        slidesPerView: 2,
        navigation: {
            nextEl: `#swiper-button-next-${id}`,
            prevEl: `#swiper-button-prev-${id}`,
        },
        breakpoints: {
            // when window width is >= 768px
            768: {
                slidesPerView: 1.5,
                spaceBetween: 10,
            },
            // when window width is >= 992px
            992: {
                slidesPerView: 3,
            },
        },
    };

    return (
        <div className="swiper-cont m-md-5 mt-5 mb-5 ms-3 me-3">

            <div className="swiper-header mb-5">
                <h4 className="swiper-title">Upcoming Appointments</h4>
                <div className="swiper-buttons">
                    <div id={`swiper-button-prev-${id}`} className="swiper-button-prev">
                        <img src={LeftArrow} alt="Left Arrow" />
                    </div>
                    <div id={`swiper-button-next-${id}`} className="swiper-button-next">
                        <img src={RightArrow} alt="Right Arrow" />
                    </div>
                </div>
            </div>
            <Swiper
                {...settings}
                spaceBetween={25}
                slidesPerView={1.5}
                className="mySwiper"
                modules={[Pagination, Navigation]}
                navigation={{
                    nextEl: `#swiper-button-next-${id}`,
                    prevEl: `#swiper-button-prev-${id}`,
                }}
            >
                {Array(10).fill(1).map((_, idx) => (
                    <SwiperSlide key={idx}>
                        <div className="card-wrapper">
                            <div className="card-container">
                                <div className="card-upper-content">
                                    <div className="card-image">
                                        <img src={Icon} alt={`Icon ${idx}`} />
                                    </div>
                                    <div className="card-header">
                                        <p>SERVICE STATUS</p>
                                        <h4>Relax Men's Parlour</h4>
                                    </div>
                                </div>
                                <div className="card-details">
                                    <div>
                                        <span className="location_icon"><CiLocationOn /></span>
                                        <p className="appointment-details">323 Sangamwadi Koregaon Park</p>
                                    </div>
                                    <div>
                                        <span className="location_icon"><CiLocationOn /></span>
                                        <p className="appointment-details">00/00/00 </p>
                                    </div>
                                    <div>
                                        <span className="location_icon"><CiLocationOn /></span>
                                        <p className="appointment-details">Monday 00 pm</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default UpcomingAppointments;
