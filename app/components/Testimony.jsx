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
          <p className="text-xl italic">
          GIWOST was a game-changer for me. The hands-on approach and real-world examples helped solidify my learning. The support from the staff and fellow students was incredible, and I now feel confident in my abilities to tackle new challenges at work.
          </p>
        </div>
        <div>
        <p className="text-xl">Mr Ajibola Segun</p>
          <p className=" text-gray-400 mb-4">Lagos</p>
          <p className="text-xl italic">
          The training program exceeded my expectations! The instructors were knowledgeable and engaging, making complex topics easy to understand. I gained valuable skills that I could apply immediately in my job. Highly recommend this course to anyone looking to advance their career!
          </p>
        </div>
        <div>
        <p className="text-xl">Mrs Hannah Ogbu</p>
          <p className=" text-gray-400 mb-4">Warri</p>
          <p className="text-xl italic">
          I was impressed by the depth of the content and the expertise of the instructors. The interactive sessions kept me engaged, and the course materials were top-notch. I&apos;ve recommended this training to all my colleagues who are eager to enhance their skills.
          </p>
        </div>
        <div>
        <p className="text-xl">Mr Nnamdi Eze</p>
          <p className=" text-gray-400 mb-4">Port Hacourt</p>
          <p className="text-xl italic">
       The training provided practical knowledge and tools that I could apply immediately. The instructors were passionate and supportive, ensuring that every student understood the concepts. I left the course feeling inspired and equipped to excel in my field.
       </p>
        </div>
        
      </Slider>
    </div>
  );
}

export default Testimony;
