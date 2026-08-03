import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';
import banner1 from "../img/banner_Hero1.jpg";
import banner2 from "../img/banner_Hero2.jpg";
import banner3 from "../img/banner_Hero3.jpg";

const banners = [
  banner1,
  banner2,
  banner3
];

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function HeroSlider() {
    return (
        <>

            <div className="hero">
                <div className="container">
                    <Swiper loop={true} autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }} pagination={true} modules={[Autoplay, Pagination, Navigation]} className="mySwiper">
                        <SwiperSlide>
                            <div className="content">
                                <h4>Introducting the new</h4>
                                <h3>Microsoft Xbox <br />     360 Controller </h3>
                                <p>Windows Xp/10/7/8 Ps3, Tv Box</p>
                                <Link to="/" className='btn'>Shop Now</Link>
                            </div>
                            <img src={banner1} alt="hero" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="content">
                                <h4>MINI-X6U SPEAKER</h4>
                                <h3>Led Bluetooth <br /> Speaker Lamp </h3>
                                <p>upport 3.5 mm jack audio input</p>
                                <Link to="/" className='btn'>Shop Now</Link>
                            </div>
                            <img src={banner2} alt="hero" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="content">
                                <h4>NEW ARRIVAL</h4>
                                <h3>Xiaomi Air 75<br /> Earbuds </h3>
                                <p>AAC HD Sound Quality</p>
                                <Link to="/" className='btn'>Shop Now</Link>
                            </div>
                            <img src={banner3} alt="hero" />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>



        </>

    )
}

export default HeroSlider
