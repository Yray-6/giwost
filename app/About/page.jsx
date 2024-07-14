import { DevBundlerService } from 'next/dist/server/lib/dev-bundler-service'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ToggleContent from '../components/Vision'
import Partners from '../components/Partners'
import Footer from '../components/Footer'

export default function About() {
  return (
    <div>
         <div className="text-center text-white pt-12 flex-col flex items-center justify-center bghero h-[60vh]  relative">
        <div className="absolute inset-0 bg-black opacity-30"></div>
            <p className='font-bold relative z-10 text-[2.5rem] lg:text-[4rem] font-mono'>About Us</p>
            <div className='flex justify-center gap-2 items-center'>
            <hr className='w-12 border border-red-500'></hr>
            <p className='relative z-10 text-sm'>WHO WE ARE</p>
            <hr className='w-12 border border-red-500'></hr>
            </div>
          
        </div>
        <div className='lg:py-20 lg:px-[10%] px-4 lg:grid lg:h-screen flex flex-col-reverse   lg:grid-cols-2'>
            <div className="col-span-1 px-12">
                <Image
                src="/aboutus.webp"
                height={100}
                width={1000}
                alt="image"
                className="w-full"
                />
        </div>
        <div className="col-span-1 flex flex-col gap-3 lg:gap-5 lg:pr-24 py-16">
        <div className='flex gap-4 lg:gap-7 items-center mb-7'>
            <p className=" text-xs font-semibold">ABOUT US</p>
            <hr className='w-20 border border-red-500'></hr>
            </div>
      
            <p className=" text-3xl font-bold leading-7">
            Awarding authentic
            Certifications  with Integrity
            </p>
            <p className="text-sm">
              We launched with a vision to transform the training industry by
              offering a unique and internationally recognized awarding
              experience. Over the past year, we&apos;ve empowered Individuals
              locally, by providing standardized assessments and certifications
              that hold weight worldwide.
            </p>
            <ToggleContent/>
        </div>
    </div>

    <div className="relative mt-5">
        <div className=" bg-bluu text-center pt-12 text-white">
          <p className="lg:text-4xl text-2xl mb-2 font-serif px-3 lg:px-[25%]">We have been giving best Traning to Motivated Trainees.</p>
          <div className='flex justify-center pb-36 gap-2 items-center'>
            <hr className='w-16 border border-red-500'></hr>
            <p className='relative z-10 text-sm'>OUR SERVICES</p>
            <hr className='w-16 border border-red-500'></hr>
            </div>
        </div>
        <div className="grid lg:grid-cols-2 absolute lg:mx-24 mx-5 py-12 bg-white shadow px-3 lg:px-16 top-[60%] gap-5 lg:gap-16 justify-center ">
            <div className="col-span-1 lg:pr-10">
            <p className=" text-xs font-semibold mb-3 lg:mb-6">ABOUT US</p>
            <p className=" text-3xl font-bold mb-3 lg:mb-5 leading-7">
            The best in skills
            certifications
            </p>
            <p className="text-sm">
            Assessments and issuing an equivalent qualifications are the key to  identify the skill of any person.  Skill Development Council Canada was  launched by TVET experts across the globe to ensure that the assessment  and certifications are always supported with technology. We have an 100%  digital system with strict security measures
            </p>
            </div>
            <div className='col-span-1 flex flex-col gap-5 mt-5'>
            <div>
            <p className="text-base font-semibold">
              Research-based Materials
            </p>
            <div className="w-full bg-bluu text-xs px-1 text-white text-right rounded">
              100%
            </div>
          </div>
          <div>
            <p className="text-base font-semibold">Certifications</p>
            <div className="w-full bg-bluu text-xs px-1 text-white text-right rounded">
              100%
            </div>
            
          </div>
          <div>
            <p className="text-base font-semibold">In-Depth Analysis</p>
            <div className="w-full bg-bluu text-xs px-1 text-white text-right rounded">
              100%
            </div>
            
          </div>
          <div>
            <p className="text-base font-semibold">Customized Experience</p>
            <div className="w-full bg-bluu text-xs px-1 text-white text-right rounded">
              100%
            </div>
            
          </div>
            </div>
        </div>
      </div>
      <div className=' bgf mt-[600px] lg:mt-80 text-white py-12 px-5 lg:px-[15%]'>
        <div className="grid lg:grid-cols-10">
            <div className="col-span-6 bg-bluu px-3 lg:px-10 py-8 flex flex-col gap-3 lg:gap-5">
            <div className='flex gap-7 items-center mb-2 lg:mb-5'>
            <p className=" text-xs font-semibold">OUR SKILLS</p>
            <hr className='w-20 border border-red-500'></hr>
            </div>
                <p className='lg:text-2xl text-xl font-semibold'>TRUSTED BY MORE THAT 2K CLIENTS</p>
                <p className="lg:text-sm text-xs">Join us to upgrade your institute with international certification. Our  globally acclaimed systems in assessment & certification will help  your trainees reach greater heights. The partnership with Skill  Development Council Canada Inc will support you to constantly grow every  year.</p>
                <Link href='/service'>
                <button className='px-2 py-1 text-blu inline mx-16 mt-10 font-semibold bg-white'>JOIN US</button>
                </Link>
               
            </div>
        </div>
      </div>
          <Partners/>
    <Footer/>
    </div>
  )
}
