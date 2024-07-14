import React from "react";
import Accordion from "../components/Accordion";
import Partners from "../components/Partners";
import Footer from "../components/Footer";

export default function Faq() {
  const faqs = [
    {
      question: "Q1.  What is GIWOST?",
      answer:
        "Global Institute of workplace skills training (GIWOST)  is an autonomous and independent body in Nigeria, to assess, accredit and  certify Trainees through professional training across the  world.",
    },
    {
      question: "Q2. How to register",
      answer: "You can track your order by logging into your account...",
    },
    {
      question: "Q2. How to register",
      answer: "You can track your order by logging into your account...",
    },
    {
      question: "Q2. How to register",
      answer: "You can track your order by logging into your account...",
    },
    {
      question: "Q2. How to register",
      answer: "You can track your order by logging into your account...",
    },
    {
      question: "Q2. How to register",
      answer: "You can track your order by logging into your account...",
    },
    // Add more FAQ items here
  ];
  return (
    <div>
      <div className="text-center text-white pt-12 flex-col flex items-center justify-center bghero h-[60vh]  relative">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <p className="font-bold relative z-10 lg:text-[4rem] text-[2rem] font-mono">
          Frequently Asked Questions
        </p>
        <div className="flex justify-center gap-2 items-center">
          <hr className="w-12 border border-red-500"></hr>
          <p className="relative z-10 text-sm">FAQs</p>
          <hr className="w-12 border border-red-500"></hr>
        </div>
      </div>
      <div className="max-w-2xl mx-auto my-12 px-4">
        <h1 className="lg:text-2xl text-xl font-bold mb-12 text-blackish">Frequently Asked Questions</h1>
        {faqs.map((faq, index) => (
          <Accordion key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
      <Partners />
      <Footer />
    </div>
  );
}
