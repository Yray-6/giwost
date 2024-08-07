'use client'


import React, { useEffect, useState } from 'react';
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
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };

  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('https://giwost-server.onrender.com/admin/blog',{
            headers: {
              'Content-Type': 'application/json'
            }
          } );
          const result = await response.json();
          if (response.ok) {
            setBlogs(result.data);
          } else {
            setError(result.message || 'Failed to fetch blog posts.');
          }
        } catch (err) {
          setError('An error occurred while fetching the blog posts.');
        }
        setLoading(false);
      };
  
      fetchBlogs();
    }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="slider-container text-white news">
      <Slider {...settings}>

      {blogs.map((blog) => (
        
        <div
          key={blog.id}
          
        >
        <div className="relative bg-cover bg-center h-72 w-full rounded-md overflow-hidden shadow-md"
           style={{
              backgroundImage: `url(${blog.imageUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4">
            <h2 className="text-white text-2xl font-bold">{blog.topic}</h2>
            <p className="text-gray-300">{blog.description}</p>
          </div>
          </div>
        </div>
      ))}
      
  {/* <div className="newsbg relative min-h-[320px] px-[5%] py-2 flex flex-col">
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
      
       </div> */}
        
      </Slider>
    </div>
  );
}

export default SwipeN;
