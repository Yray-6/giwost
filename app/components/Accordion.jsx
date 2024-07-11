'use client'
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Accordion = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 pb-4 mb-4">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-medium text-gray-900">{question}</h3>
        <motion.span
          className="transform transition-transform text-xl font-semibold duration-300"
          animate={{ rotate: isOpen ? 45 : 0 }}
        >
          +
        </motion.span>
      </div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            className="mt-4 text-gray-700 overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className='bg-gray-100 p-4'>{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Accordion;
