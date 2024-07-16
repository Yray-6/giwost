'use client'

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import NavLinks from './Navlinks';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { // Adjust this value as needed
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`w-full absolute z-50 text-white ${isScrolled ? 'relative text-black' : 'bg-transparent'}`}>
      <div className='border-b border-b-white px-28 flex text-[13px] py-2 justify-between bg-transparent'>
        <div className='flex gap-7'>
          <p><FontAwesomeIcon icon={faEnvelope}/> info@giwost.com</p>
          <p><FontAwesomeIcon icon={faLocationDot}/> Port-harcourt, Lagos, Warri, Nigeria</p>
        </div>
      </div>
      <div className={`w-full flex pl-20 pr-28 py-2 z-50 justify-between items-center transition-colors duration-300 ${isScrolled ? 'fixed top-0 bg-white shadow text-black' : 'bg-transparent'}`}>
        <Link href="/" className='flex items-center'>
        <div>
        <Image
            src="/Logo.png"
            width={70}
            height={50}
            className="hidden md:block"
            alt="logo"
          />
        
        </div>
          
          <div className='text-[0.7rem]'>
            Global Institute Of <br />
            Workplace Skills Training
            <p className='italic pt-2'>success through skills</p>
          </div>
        </Link>
        <div>
          <NavLinks />
        </div>
      </div>
    </div>
  );
}
