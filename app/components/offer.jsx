'use client';

import { useState } from 'react';
import Image from 'next/image';

const Services = () => {
 

  const services = [
    {
      title: 'Healthcare Assistant',
      text: 'Healthcare assistants provide essential support to medical professionals and patients in various healthcare settings.',
      style: 'text-green-600',
      imgSrc: '/1pic.webp'
    },
    {
      title: 'Social Caregiver',
      text: 'Social caregivers offer vital care and support to individuals who need assistance with daily living activities.',
      style: 'text-yellow-600',
      imgSrc: '/2pic.webp'
    },
    {
      title: 'Forklift Operator',
      text: 'Forklift operators are responsible for operating and managing industrial forklifts, moving goods and materials efficiently.',
      style: 'text-red-600',
      imgSrc: '/3pic.webp'
    },
    {
      title: 'HSE 1, 2, 3',
      text: 'HSE (Health, Safety, and Environment) professionals ensure compliance with safety standards to maintain a safe working environment.',
      style: 'text-blue-600',
      imgSrc: '/4pic.webp'
    }
  ]

  const [activeService, setActiveService] = useState(services[0]);
  ;

  return (
    <>
    <div className="relative flex flex-col items-center">
      <div className="bg-bluu text-center w-full pt-12 text-white">
        <p className="lg:text-3xl text-2xl font-semibold mb-2">
          WHAT ARE WE OFFERING
        </p>
        <div className="flex justify-center pb-36 gap-2 items-center">
          <hr className="w-16 border border-red-500"></hr>
          <p className="relative z-10 text-sm">OUR SERVICES</p>
          <hr className="w-16 border border-red-500"></hr>
        </div>
      </div>
      <div className="flex absolute lg:flex-row flex-col px-12 top-[60%] gap-16 justify-center">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex relative justify-center cursor-pointer"
            onClick={() => setActiveService(service)}
          >
            <Image
              src={service.imgSrc}
              alt="service pic"
              className="w-full"
              height={100}
              width={1000}
            />
            <div className="absolute inset-0 bg-black opacity-10"></div>
            <div className={`bg-white px-4 shadow absolute py-4 min-w-44 text-center font-semibold border-r-8 rounded-lg -bottom-3 text-sm ${
              service.title === 'Healthcare Assistant' ? 'border-r-green-600' : 
              service.title === 'Social Caregiver' ? 'border-r-yellow-600' : 
              service.title === 'Forklift Operator' ? 'border-r-red-600' : 
              'border-r-blue-600'
            }`}>
              {service.title}
            </div>
          </div>
        ))}
      </div>
      
    </div>
    {activeService && (
        <div className={`mt-[240px] p-4 w-full  mx-auto bg-gray-100 border-l-4 border-blue-500 ${activeService.style}`}>
          <p className="text-center text-lg font-medium">{activeService.text}</p>
        </div>
      )}
      </>
  );
};

export default Services;
