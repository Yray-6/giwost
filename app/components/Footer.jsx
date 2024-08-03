import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div>
      <div className=" bg-bluu pt-2 lg:pt-10 pb-5 px-[10%] text-white">
        <div className="grid border-b border-b-white pb-8 lg:grid-cols-3 mt-8">
          <div className="col-span-1 text-sm lg:pr-5">
          {/* <div className=" border-l-4 border-l-red-500 font-medium pl-5 mb-8">
            About GIWOST
          </div> */}
          <div className="flex items-center py-5 lg:py-1 gap-2">
          <Image src="/Logo.png" alt="Logo" width={70} height={100}/>
          <p className='text-[0.7rem]'>
            Global Institute Of <br />
            Workplace Skills Training
          </p>
          </div>
         
            <p>
              We are a leading British Safety Council UK and PECB courses
              training provider and the largest in Nigeria with specialty in HSE
              courses (Health, safety and environment), Quality and Project
              management courses, Oil and gas courses and a business solution
              provider.{" "}
            </p>
          </div>
          <div className="col-span-1 text-sm lg:pr-5 pt-5">
          <div className=" border-l-4 border-l-red-500 font-medium pl-5 mb-8">
            Corporate Office
          </div>
         
            <p className="mb-5">
              Suite 25/26 longjohn plaza, beside market square, mile 4, rumueme,
              port harcourt, River state.
            </p>
            <p className="mb-5">48 allen road, opposite union bank, ikeja, lagos state. </p>
            <p>futeb plaza opposite refinery junction, effurun-sapele road, warri delta state.</p>
          </div>
          <div className="col-span-1 lg:pr-5 flex-col flex gap-3 pt-5">
          <div className="border-l-4 border-l-red-500 text-base font-medium pl-5 mb-3">
            Quick links
          </div>
            <Link href="/" className="hover:text-red-500">Home</Link>
            <Link href="/faq" className="hover:text-red-500">FAQS</Link>
            <Link href="/About" className="hover:text-red-500">About us</Link>
            <Link href="/hospital" className="hover:text-red-500">Hospital Partners</Link>
          </div>
        </div>
        <div className="text-center font-bold pt-4">
            GIWOST 2024 &copy; 
        </div>
      </div>
    </div>
  );
}
