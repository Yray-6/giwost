'use client'

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Testimony() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerPadding: '0px',
    centerMode: false,
  };

  
  return (
    <div className="slider-container px-5">
      <Slider {...settings}>
        <div>
        <p className="text-xl">Mr Alphonus</p>
          <p className=" text-gray-400 mb-4">Port Hacourt</p>
          <p className="text-3xl ">
            “Lorem Ipsum, if you dont agree you are on your own”
          </p>
        </div>
        <div>
        <p className="text-xl">Mr Alphonus</p>
          <p className=" text-gray-400 mb-4">Port Hacourt</p>
          <p className="text-3xl ">
            “Lorem Ipsum, if you dont agree you are on your own”
          </p>
        </div>
        
      </Slider>
    </div>
  );
}

export default Testimony;
