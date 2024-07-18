// components/FloatingWhatsApp.js
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
            <a
              href="https://wa.me/PHONENUMBER1"
              className="block px-4 py-2 text-black hover:bg-gray-200"
            >
              Lagos WhatsApp
            </a>
            <a
              href="https://wa.me/PHONENUMBER2"
              className="block px-4 py-2 text-black hover:bg-gray-200"
            >
              Warri WhatsApp
            </a>
            <a
              href="https://wa.me/PHONENUMBER3"
              className="block px-4 py-2 text-black hover:bg-gray-200"
            >
              PH WhatsApp
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default FloatingWhatsApp;
