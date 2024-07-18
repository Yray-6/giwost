'use client'

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SwipeN() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    centerPadding: '30px',
    centerMode: false,
  };

  
  return (
    <div className="slider-container text-white news">
      <Slider {...settings}>
      
  <div className="newsbg relative min-h-[320px] px-[5%] py-2 flex flex-col">
    <div className="absolute inset-0 bg-black opacity-50"></div>
    <div className="relative z-20 flex flex-col h-full">
      <p className="px-2 rounded text-sm bg-bluu">Disclaimer</p>
      <p className="text-left text-xs py-3 flex-grow">
        Unmasking Fraud: Lorem Ipsum lorem ipsum loremipsu ipsum psum hgdshsa dshvbjdsj djdgijd djbc dkjddknd
      </p>
      <div className="flex gap-2 mt-auto text-xs">
        <p className="border-r border-r-white text-bluu font-bold pr-2">GIWOST ph</p>
        <p>July 9th 2024</p>
      </div>
    </div>
  </div>

  <div className="newsbg relative min-h-[320px] px-[5%] py-2 flex flex-col">
    <div className="absolute inset-0 bg-black opacity-50"></div>
    <div className="relative z-20 flex flex-col h-full">
      <p className="px-2 rounded text-sm bg-bluu">Disclaimer</p>
      <p className="text-left text-xs py-3 flex-grow">
        Unmasking Fraud: Lorem Ipsum lorem ipsum loremipsu ipsum psum hgdshsa dshvbjdsj
      </p>
      <div className="flex gap-2 mt-auto text-xs">
        <p className="border-r border-r-white text-bluu font-bold pr-2">GIWOST ph</p>
        <p>July 9th 2024</p>
      </div>
    </div>
  </div>


       <div className="newsbg relative pt-[60%] pb-2 px-[5%]">
       <div className="absolute inset-0 bg-black opacity-50"></div>
       <div className="relative z-20">
       <p className=" px-2 rounded text-sm bg-bluu">Disclaimer</p>
        <p className="text-left text-xs py-3">Unmasking Fraud: Lorem Ipsum lorem ipsum
        loremipsu ipsum psum hgdshsa dshvbjdsj</p>
        <div className="flex gap-2 mt-3 text-xs">
            <p className="border-r border-r-white text-bluu font-bold pr-2">GIWOST ph</p>
            <p>July 9th 2024</p>
        </div>
       </div>
      
       </div>
        
      </Slider>
    </div>
  );
}

export default SwipeN;
