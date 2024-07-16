import React from "react";
import Partners from "../components/Partners";
import Footer from "../components/Footer";
import CourseCard from "../components/Course";

export default function Verification() {
  const healthAndSafetyCourses = [
    {
      image: '/AB.webp',
      name: 'HSE LEVEL 1,2 3',
      description: 'HSE LEVEL 1,2 3 TRAINING HSE TRAINING: HSE is an acronym for Health, Safety and Environmental Management.It involves managing, controlling and handling all aspects of health',
    },
    {
      image: '/Banksman-course.webp',
      name: 'BANKSMEN TRAINING COURSE',
      description: 'BANKSMEN TRAINING COURSE OVERVIEW Banksmen training course will teach candidates how to communicate effectively with every crane operator. Both the riggers and the banksmen skill is highly needed to work.',
    },
    {
      image: '/forklift.webp',
      name: 'FORKLIFT OPERATIONS & MAINTENANCE',
      description: 'Course Introduction This Forklift Operations & Maintenance (FOM) Training Course Is To Offer Professional Personnel, Newbies Trainee And Other Professionals Involved.',
    },
  ];

  const businessManagementCourses = [
    {
      image: '/projectmgt.webp',
      name: 'PROJECT MANAGEMENT TRAINING',
      description: 'PROJECT MANAGEMENT TRAINING is designed to ensure that you clear the PMP® exam in the first attempt. Our hands-on training approach, entrusted by 2,000+ learners',
    },
    {
      image: '/QA.jpg',
      name: 'HUMAN RESOURCE MANAGEMENT',
      description: 'HUMAN RESOURCE MANAGEMENT is the strategic approach to the effective management of people in a company or organization such that they help their business gain a competitive advantage.',
    },
    {
      image: '/fork.png',
      name: 'Business Management Course 3',
      description: 'This is a brief description of Business Management Course 3.',
    },
  ];

  const oilAndGasCourses = [
    {
      image: '/oil1.webp',
      name: 'ADVANCE HSE PROFESSIONAL/SUPERVISORY LEVEL',
      description: ' On completion of the advance hse training, students will be certified as safety supervisors and receive the Advance HSE (Level 3) competence certificate.',
    },
    {
      image: '/rig.webp',
      name: 'RIGGING AND LIFTING TRAINING COURSE',
      description: 'Rigging and Lifting Training sometimes also referred to as hoisting, is an important step in the maneuvering of heavy objects in many workplaces.',
    },
    {
      image: '/safety2.webp',
      name: 'BOSIET – BASIC OFFSHORE SAFETY INDUCTION AND EMERGENCY TRAINING',
      description: 'BOSIET TRAINING course is designed to introduce delegates to the specific issues and regimes relevant to offshore installations.',
    },
  ];

  const isoCertificatesCourses = [
    {
      image: '/ISO.webp',
      name: 'ISO 9001:2015 (QMS) LEAD AUDITOR COURSE',
      description: 'Quality Management System Training (QMS) ISO 9001:2015 Lead Auditor course focuses on the knowledge and skills required to perform an audit of a quality management system based on ISO 9001 and report on the effective implementation and maintenance of the management system.',
    },
  ];

  const renderCourses = (courses) => {
    return courses.map((course, index) => (
      <CourseCard
        key={index}
        image={course.image}
        name={course.name}
        description={course.description}
      />
    ));
  };

  return (
    <div>
      <div className="text-center text-white pt-12 flex-col flex items-center justify-center bghero h-[60vh] relative">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <p className="font-bold relative z-10 text-[2.5rem] lg:text-[4rem] font-mono">
          Courses
        </p>
        <div className="flex justify-center gap-2 items-center">
          <hr className="w-12 border border-red-500"></hr>
          <p className="relative z-10 text-sm">Services</p>
          <hr className="w-12 border border-red-500"></hr>
        </div>
      </div>
      <div className="py-12">
        <p className="lg:text-3xl text-xl text-center font-semibold">
          WHAT ARE WE OFFERING
        </p>
        <div className="flex justify-center gap-2 items-center">
          <hr className="w-16 border border-red-500"></hr>
          <p className="relative z-10 text-sm">OUR SERVICES</p>
          <hr className="w-16 border border-red-500"></hr>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-6">
        <h2 className="lg:text-3xl text-xl font-bold mb-8">
        
          <div className="flex gap-4 lg:gap-7 relative z-20 items-center mb-3 lg:mb-5">
            <p className="">   Health and Safety Courses</p>
            <hr className="lg:w-64 border border-red-500"></hr>
          </div>
        </h2>
        <div className="pb-5">
        We offer a comprehensive suite of health and safety training and certification in health, safety and environmental management. We educate people all over the world to help them improve their knowledge and skills, reduce risks, increase their chance for jobs/promotion, make workplaces healthier and safer for everyone and improve long-term business performance.
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {renderCourses(healthAndSafetyCourses)}
        </div>

        <h2 className="lg:text-3xl text-xl font-bold mt-12 mb-8">
          <div className="flex gap-4 lg:gap-7 relative z-20 items-center mb-3 lg:mb-5">
            <p className=""> Business Management Courses</p>
            <hr className="lg:w-64  border border-red-500"></hr>
          </div>
        </h2>
        <p className="mb-3">Management and business training courses can be a real boost if you’re the kind of high-potential young manager who wants to take on greater responsibility and deliver more to your company.</p>
        <p className="mb-5">Want to excel at finance or managing people? Our business management courses will help. Further your career with communication, human, operations, networking and project management courses. Take leadership training with our institute and improve your career.</p>
        
      <div className="max-w-6xl mx-auto p-6 my5rounded-lg">
        <h2 className="lg:text-xl text-base font-bold mb-4">WHO SHOULD DO THIS COURSE?</h2>
        <p className=" mb-4">
          Management training Professional certification is an essential professional requirement across industries for senior project management roles. This certification is most suited for:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Project managers</li>
          <li>Associate/Asst. Manager – Projects</li>
          <li>Team leads/Managers</li>
          <li>Project Executives/Engineers</li>
          <li>Software Developers</li>
          <li>Any professional aspiring to be a Project Manager</li>
        </ul>
      </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {renderCourses(businessManagementCourses)}
        </div>

        <h2 className="lg:text-3xl text-xl font-bold mb-8 mt-12">
        <div className="flex gap-4 lg:gap-7 relative z-20 items-center mb-3 lg:mb-5">
            <p className=""> Oil and Gas Training Courses</p>
            <hr className="lg:w-64 border border-red-500"></hr>
          </div>

        </h2>
        <div className="pb-5">
        <p className="mb-3">Our OIL AND GAS TRAINING COURSES are designed to provide participants with the basic knowledge, skills and certification needed to work in the oil and gas industry.</p>  
        <p>Many wants to work in the oil and gas industry, but only 15% of the aspiring candidates have attend required Oil and gas courses, skills and certifications needed in the oil and gas industry. The easiest and quickest way to secure an Oil & Gas role is by completing a specific practical certificate course in oil and gas, such as an oil rig training program. Our training courses are designed to supply HR and recruiters with a supply of certified employees, ready to work in the industry. </p>



        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {renderCourses(oilAndGasCourses)}
        </div>

        <h2 className="lg:text-3xl text-xl font-bold my-8">
        <div className="flex gap-4 lg:gap-7 relative z-20 items-center mb-3 lg:mb-5">
            <p className="">ISO Certificates</p>
            <hr className="lg:w-64 border border-red-500"></hr>
          </div>
        </h2>
        <p className="my-5">Increases Trust for your Company, Useful for Tender. Get your certificate at the comfort of your home. Quality Management System. Authentic Service. Affordable Price. Fast Processing. Services: ISO 9001, ISO 14001, ISO 22000.</p>
        <div>

        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {renderCourses(isoCertificatesCourses)}
        </div>
      </div>
      

        <div className=" relative bgser text-white text-center px-4 lg:px-[15%] py-12">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="flex gap-4 lg:gap-7 relative z-20 items-center mb-3 lg:mb-5">
            <p className="font-serif">Services</p>
            <hr className="w-20 border border-red-500"></hr>
          </div>
            <p className="relative z-20 py-4 font-bold text-2xl">We have the best Training platforms and systems</p>
            <button className="bg-orange-600 relative z-20 py-2 px-2 rounded font-medium text-lg text-white">Get Started Now</button>
        </div>
      <Partners />
      <Footer />
    </div>
  );
}
