import React from 'react'
import Accordion from '../components/Accordion';

export default function Faq() {
    const faqs = [
        {
          question: 'What is your return policy?',
          answer: 'Our return policy lasts 30 days...'
        },
        {
          question: 'How do I track my order?',
          answer: 'You can track your order by logging into your account...'
        },
        // Add more FAQ items here
      ];
  return (
    <div>
      <div className="text-center text-white pt-12 flex-col flex items-center justify-center bghero h-[60vh]  relative">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <p className="font-bold relative z-10 text-[4rem] font-mono">
          Frequently Asked Questions
        </p>
        <div className="flex justify-center gap-2 items-center">
          <hr className="w-12 border border-red-500"></hr>
          <p className="relative z-10 text-sm">WHO WE ARE</p>
          <hr className="w-12 border border-red-500"></hr>
        </div>
      </div>
      <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Frequently Asked Questions</h1>
      {faqs.map((faq, index) => (
        <Accordion key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
      <Partners/>
      <Footer/>
    </div>
  )
}
