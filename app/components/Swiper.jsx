'use client'

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

function SimpleSlider() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    centerPadding: '0px',
    centerMode: false,
  };

  
  return (
    <div className="slider-container overflow-hidden">
      <Slider {...settings}>
      <div className="text-center text-white pt-56 lg:pt-40 px-2 lg:px-0 flex items-center w-full justify-center bghero h-screen  relative">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative z-10">
          <p className="mb-6 lg:text-base text-sm font-bold">WELCOME TO</p>
          <p className="lg:text-[34px] text-3xl font-bold lg:font-extrabold">
            GLOBAL INSTITUTE OF WORKPLACE SKILLS <br />
            TRAINING
          </p>
          <p className="mt-8 lg:text-base text-sm font-bold">
            Experience the power of knowledge. Gain the skills to lead your
            career.
          </p>
          <Link href="https://forms.gle/TdZPNCvoYkCgTKRy7" target="blank">   <button className=" bg-blu py-2 px-4 lg:text-lg rounded-xl mt-12">
            GET ENROLLED
          </button></Link>
        </div>

    
      </div>
      <div className="text-center text-white pt-56 lg:pt-40 px-2 lg:px-0 flex items-center w-full justify-center bgho h-screen  relative">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative z-10">
          <p className="mb-6 lg:text-base text-sm font-bold">WE ARE</p>
          <p className="lg:text-[34px] hidden lg:block text-3xl font-bold lg:font-extrabold">
          THE BEST TRAINING INSTITUTE <br />
          IN AFRICA.
          </p>
          <p className="lg:text-[34px] text-3xl lg:hidden font-bold lg:font-extrabold">
          THE BEST TRAINING INSTITUTE 
          IN AFRICA.
          </p>
          <p className="mt-8 lg:text-base text-sm font-bold">
          Experience standard Certification and improove your skill set and become employable
          </p>
       <Link href="https://forms.gle/TdZPNCvoYkCgTKRy7" target="blank">   <button className=" bg-blu py-2 px-4 lg:text-lg rounded-xl mt-12">
            GET ENROLLED
          </button></Link>
        </div>
        

    
      </div>
      <div className="text-center text-white pt-56 lg:pt-40 px-2 lg:px-0 flex items-center w-full justify-center bghos h-screen  relative">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative z-10">
          <p className="mb-6 lg:text-base text-sm font-bold">WE ARE</p>
          <p className="lg:text-[34px] hidden lg:block text-3xl font-bold lg:font-extrabold">
          THE WORLD’S LARGEST CPD ACCREDITATED CENTRE
          </p>
          {/* <p className="lg:text-[34px] text-3xl lg:hidden font-bold lg:font-extrabold">
          THE BEST TRAINING INSTITUTE 
          IN AFRICA.
          </p> */}
          <p className="mt-8 lg:text-base text-sm font-bold">
          Gain valuable skills and knowledge through CPD courses from trusted providers.
          </p>
          <Link href="https://forms.gle/TdZPNCvoYkCgTKRy7" target="blank">   <button className=" bg-blu py-2 px-4 lg:text-lg rounded-xl mt-12">
            GET ENROLLED
          </button></Link>
        </div>
        

    
      </div>
        
      </Slider>
    </div>
  );
}

export default SimpleSlider;
