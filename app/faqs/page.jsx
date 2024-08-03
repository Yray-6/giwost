import React from "react";
import Accordion from "../components/Accordion";
import Partners from "../components/Partners";
import Footer from "../components/Footer";
import FloatingWhatsApp from "../components/Floating";

export default function Faq() {
    const faqs = [
        {
          question: "Q1. HOW DO YOUR TRAINING WORK AND DURATION?",
          answer:
            "Our training is a one week classroom or Online Training via zoom and a three weeks internship or clinical Training in our Hospitals all over Nigeria which is four weeks total. Classroom Training holds in Port Harcourt, Lagos, Warri and Asaba while those outside these locations will join our interactive online zoom Training.",
        },
        {
          question: "Q2. DO YOU HAVE BRANCHES IN MY LOCATION?",
          answer:
            "Yes, our offices is in Port Harcourt, Lagos, Warri and Asaba respectively for now. We also have Hospitals across Nigeria that serves as our training centers for your clinical Training/internship. Over 150 hospitals across 26 states of Nigeria.",
        },
        {
          question: "Q3. AFTER MY ONLINE TRAINING, HOW ABOUT PRACTICAL?",
          answer:
            "Global Institute of Workplace Skills Training is the largest Caregiver and Health Care Assistant Training Institute in Nigeria and Africa at large. We have Hospitals across 26 states in Nigeria and more Hospitals added every day to make sure you have Hospital Experience after your training. After your classroom/online training, we post you directly to our Hospital in your area for your Practical clinical internship Training. Where our Hospital is far from you, you can do your internship in any Hospital of your choice in your location, we'll negotiate with them on your behalf.",
        },
        {
          question: "Q4. WHAT IF I DON'T WANT TO GO FOR INTERNSHIP?",
          answer:
            "Our internship program is not compulsory especially for those already working or Experienced, you only Complete your one week Training with us and pay less than those going for internship.",
        },
        {
          question: "Q5. WHY SHOULD I TRAIN WITH GLOBAL INSTITUTE OF WORKPLACE SKILLS TRAINING?",
          answer:
            "We provide you a combination of both theoretical and hands-on experience Training with globally recognized, verifiable and acceptable certificates. We are the only Institute with widest reach in Nigeria that provides our students with Hospitals in their location for Practical internship Training. This internship Training will boost your employment opportunity as we issue you a reference letter after your internship showing your experience. We also provide our students Opportunities to travel out if you want, this will be explained more by our traveling Consultant during your training with us.",
        },
        {
          question: "Q6. DO I HAVE TO PAY ANOTHER MONEY AFTER THE 5,000 NAIRA REGISTRATION?",
          answer:
            "YES, the 5,000 Naira Registration fee is just to indicate Interest in our training. Each different package has its prices attached to them. But you're not paying additional payment for your internship except the price stated for the training.",
        },
        {
          question: "Q7. CAN I PAY ON INSTALLMENTS?",
          answer:
            "Yes, our Institute provides you the opportunity to pay on Installments. After your Registration, you are required to pay at least 50% initial payment depending on the package you want. The remaining can be paid before your exam and internship.",
        },
        {
          question: "Q8. WHEN DO I GET MY CERTIFICATES AFTER TRAINING?",
          answer:
            "Your certificate is released during our Graduation ceremony after your training, but If students have urgent need for the Certificates, they can reach our program coordinator and their Certificates will be Processed and sent to them as of when needed provided they give us a week notice.",
        },
        {
          question: "Q9. HOW DO I GET MY CERTIFICATES AFTER OUR ONLINE TRAINING?",
          answer:
            "All Certificates are sent to the hospital you did your internship, so you can visit the hospital to pick your certificate or we can also waybill your certificate directly to you. For those outside Nigeria, you will pay additional waybill fee for your hard copy.",
        },
        {
          question: "Q10. HOW RECOGNIZED IS YOUR CERTIFICATES?",
          answer:
            "We issue Globally CPD ACCREDITED Diploma Certificates equivalent to NVQ level 3 diploma and it's verifiable Online. Our Certificates are used Globally and we have many students already working with our Certificates in different parts of the world.",
        },
        {
          question: "Q11. WHAT IF I DON'T WANT THE TRAINING BUT ONLY CERTIFICATE?",
          answer:
            "We understand that most people have been trained and experienced in caregiving, we issue certificate to trained and experienced individuals, if you want only the certificate you will take our simple quiz and pay 10% less of the original price.",
        },
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
      <p className="mt-6 text-sm lg:text-center">
        ANY OTHER QUESTIONS, PLEASE SEND TO THE PROGRAM COORDINATOR MR ISAAC ON WHATSAPP VIA 08135100764.
      </p>
      <Partners />
      <Footer />
      <FloatingWhatsApp/>
    </div>
  );
}
