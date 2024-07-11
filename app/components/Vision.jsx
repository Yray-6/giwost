'use client'

import { useState } from 'react';

const ToggleContent = () => {
  const [activeTab, setActiveTab] = useState('vision');

  return (
    <div className="flex flex-col items-center p-8">
      <div className="flex space-x-4 mb-4">
        <button
          className={`px-4 py-2 font-semibold rounded-t ${
            activeTab === 'vision' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'
          }`}
          onClick={() => setActiveTab('vision')}
        >
          Vision
        </button>
        <button
          className={`px-4 py-2 font-semibold rounded-t ${
            activeTab === 'mission' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'
          }`}
          onClick={() => setActiveTab('mission')}
        >
          Mission
        </button>
        <button
          className={`px-4 py-2 font-semibold rounded-t ${
            activeTab === 'values' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'
          }`}
          onClick={() => setActiveTab('values')}
        >
          Values
        </button>
      </div>
      <div className="border border-blue-500 rounded-b p-4 w-full max-w-md bg-white shadow transition-all duration-300">
        {activeTab === 'vision' && <p>To offer a unique and authentic awarding experience for training  organizations globally, by providing the standardized assessment and  certification with international acceptance. </p>}
        {activeTab === 'mission' && <p>Our mission is to be a leader in the industry by providing quality products and services.</p>}
        {activeTab === 'values' && <p>Our values are integrity, innovation, and excellence.</p>}
      </div>
    </div>
  );
};

export default ToggleContent;
