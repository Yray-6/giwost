'use client'

import { useState } from 'react';

const Accordion = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 pb-4 mb-4">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-medium text-gray-900">{question}</h3>
        <span
          className={`transform transition-transform duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'}`}
        >
          +
        </span>
      </div>
      {isOpen && (
        <div className="mt-4 text-gray-700">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default Accordion;
