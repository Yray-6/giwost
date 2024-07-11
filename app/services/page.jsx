import React from "react";
import Partners from "../components/Partners";
import Footer from "../components/Footer";
import CourseCard from "../components/Course";

export default function Verification() {
    const courses = [
        {
          image: '/fork.png',
          name: 'Course 1',
          description: 'This is a brief description of Course 1.',
        },
        {
          image: '/fork.png',
          name: 'Course 2',
          description: 'This is a brief description of Course 2.',
        },
        {
          image: '/fork.png',
          name: 'Course 3',
          description: 'This is a brief description of Course 3.',
        },
        // Add more courses as needed
      ];
  return (
    <div>
      <div className="text-center text-white pt-12 flex-col flex items-center justify-center bghero h-[60vh]  relative">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <p className="font-bold relative z-10 text-[4rem] font-mono">
          Courses
        </p>
        <div className="flex justify-center gap-2 items-center">
          <hr className="w-12 border border-red-500"></hr>
          <p className="relative z-10 text-sm">Services</p>
          <hr className="w-12 border border-red-500"></hr>
        </div>
      </div>
      <div className="py-12">
      <p className="text-3xl text-center font-semibold">WHAT ARE WE OFFERING</p>
          <div className='flex justify-center gap-2 items-center'>
            <hr className='w-16 border border-red-500'></hr>
            <p className='relative z-10 text-sm'>OUR SERVICES</p>
            <hr className='w-16 border border-red-500'></hr>
            </div>
      </div>
      
      <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Our Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <CourseCard
            key={index}
            image={course.image}
            name={course.name}
            description={course.description}
          />
        ))}
      </div>
    </div>
      <Partners/>
      <Footer/>
    </div>
  );
}
