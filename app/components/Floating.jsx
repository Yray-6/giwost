'use client'
import Link from 'next/link';
import { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const FloatingWhatsApp = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-4 right-4">
      <div className="relative flex items-center space-x-2">
        <span className="hidden sm:inline bg-white py-3 px-5 rounded text-black font-semibold">Chat with us</span>
        <button
          className="bg-green-500 text-white p-3 rounded-full shadow-lg flex items-center"
          onClick={toggleMenu}
        >
          <FaWhatsapp size={24} />
        </button>
        {isOpen && (
          <div className="absolute bottom-12 right-0 bg-white shadow-lg w-32 rounded-lg overflow-hidden">
            <Link
              href="https://wa.me/+2348153305108"
              target='blank'
              className="block px-4 py-2 text-black hover:bg-gray-200"
            >
             Chat with Lagos
            </Link>
            <Link
              href="https://wa.me/+2349033880926"
              target='blank'
              className="block px-4 py-2 text-black hover:bg-gray-200"
            >
              Chat with Warri
            </Link>
            <Link
              href="https://wa.me/+2347089597079"
              target='blank'
              className="block px-4 py-2 text-black hover:bg-gray-200"
            >
              Chat with PH
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default FloatingWhatsApp;
