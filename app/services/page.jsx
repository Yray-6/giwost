import React from "react";
import Partners from "../components/Partners";
import Footer from "../components/Footer";
import CourseCard from "../components/Course";

export default function Verification() {
  const healthAndSafetyCourses = [
    {
      image: '/fork.png',
      name: 'Health and Safety Course 1',
      description: 'This is a brief description of Health and Safety Course 1.',
    },
    {
      image: '/fork.png',
      name: 'Health and Safety Course 2',
      description: 'This is a brief description of Health and Safety Course 2.',
    },
    {
      image: '/fork.png',
      name: 'Health and Safety Course 3',
      description: 'This is a brief description of Health and Safety Course 3.',
    },
  ];

  const businessManagementCourses = [
    {
      image: '/fork.png',
      name: 'Business Management Course 1',
      description: 'This is a brief description of Business Management Course 1.',
    },
    {
      image: '/fork.png',
      name: 'Business Management Course 2',
      description: 'This is a brief description of Business Management Course 2.',
    },
    {
      image: '/fork.png',
      name: 'Business Management Course 3',
      description: 'This is a brief description of Business Management Course 3.',
    },
  ];

  const oilAndGasCourses = [
    {
      image: '/fork.png',
      name: 'Oil and Gas Course 1',
      description: 'This is a brief description of Oil and Gas Course 1.',
    },
    {
      image: '/fork.png',
      name: 'Oil and Gas Course 2',
      description: 'This is a brief description of Oil and Gas Course 2.',
    },
    {
      image: '/fork.png',
      name: 'Oil and Gas Course 3',
      description: 'This is a brief description of Oil and Gas Course 3.',
    },
  ];

  const isoCertificatesCourses = [
    {
      image: '/fork.png',
      name: 'ISO Certificate Course 1',
      description: 'This is a brief description of ISO Certificate Course 1.',
    },
    {
      image: '/fork.png',
      name: 'ISO Certificate Course 2',
      description: 'This is a brief description of ISO Certificate Course 2.',
    },
    {
      image: '/fork.png',
      name: 'ISO Certificate Course 3',
      description: 'This is a brief description of ISO Certificate Course 3.',
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
          Health and Safety Courses
        </h2>
        <div className="pb-5">
        We offer a comprehensive suite of health and safety training and certification in health, safety and environmental management. We educate people all over the world to help them improve their knowledge and skills, reduce risks, increase their chance for jobs/promotion, make workplaces healthier and safer for everyone and improve long-term business performance.
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {renderCourses(healthAndSafetyCourses)}
        </div>

        <h2 className="lg:text-3xl text-xl font-bold my-8">
          Business Management Courses
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

        <h2 className="lg:text-3xl text-xl font-bold my-8">
          Oil and Gas Training Courses
        </h2>
        <div className="pb-5">
        <p className="mb-3">Our OIL AND GAS TRAINING COURSES are designed to provide participants with the basic knowledge, skills and certification needed to work in the oil and gas industry.</p>  
        <p>Many wants to work in the oil and gas industry, but only 15% of the aspiring candidates have attend required Oil and gas courses, skills and certifications needed in the oil and gas industry. The easiest and quickest way to secure an Oil & Gas role is by completing a specific practical certificate course in oil and gas, such as an oil rig training program. Our training courses are designed to supply HR and recruiters with a supply of certified employees, ready to work in the industry. </p>



        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {renderCourses(oilAndGasCourses)}
        </div>

        <h2 className="lg:text-3xl text-xl font-bold my-8">
          ISO Certificates
        </h2>
        <div>
            
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {renderCourses(isoCertificatesCourses)}
        </div>
      </div>

      <Partners />
      <Footer />
    </div>
  );
}
