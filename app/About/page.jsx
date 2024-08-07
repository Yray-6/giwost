import { DevBundlerService } from "next/dist/server/lib/dev-bundler-service";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ToggleContent from "../components/Vision";
import Partners from "../components/Partners";
import Footer from "../components/Footer";
import FloatingWhatsApp from "../components/Floating";

export default function About() {
  return (
    <div>
      <div className="text-center text-white pt-12 flex-col flex items-center justify-center bghero h-[60vh]  relative">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <p className="font-bold relative z-10 text-[2.5rem] lg:text-[4rem] font-mono">
          About Us
        </p>
        <div className="flex justify-center gap-2 items-center">
          <hr className="w-12 border border-red-500"></hr>
          <p className="relative z-10 text-sm">WHO WE ARE</p>
          <hr className="w-12 border border-red-500"></hr>
        </div>
      </div>
      <div className="lg:py-12 lg:px-[10%] px-4 lg:grid flex flex-col-reverse   lg:grid-cols-2">
        <div className="col-span-1 px-12">
          <Image
            src="/aboutus.webp"
            height={100}
            width={1000}
            alt="image"
            className="w-full"
          />
        </div>
        <div className="col-span-1 flex flex-col gap-3 lg:gap-5 lg:pr-24 py-12 lg:py-6">
          <div className="flex gap-4 lg:gap-7 items-center">
            <p className=" text-xs font-semibold">ABOUT US</p>
            <hr className="w-20 border border-red-500"></hr>
          </div>

          <p className=" text-3xl font-bold leading-7">
            Awarding authentic Certifications with Integrity
          </p>
          <p className="text-sm">
            We are a leading British Safety Council UK and PECB courses training
            provider and the largest in Nigeria with specialty in HSE courses
            (Health, safety and environment), Quality and Project management
            courses, Oil and gas courses and a business solution provider. We
            pride ourselves for being passionate in what we do because we
            understand that Health, Safety and Environment, Project
            Management and Quality Management is at the core of your business
            whatever and wherever you operate. With the right skills, and
            knowledge you can achieve anything.
          </p>
          <ToggleContent />
        </div>
      </div>

      <div className="relative mt-5">
        <div className=" bg-bluu text-center pt-12 text-white">
          <p className="lg:text-4xl text-2xl mb-2 font-serif px-3 lg:px-[25%]">
            We have been giving best Traning to Motivated Trainees.
          </p>
          <div className="flex justify-center gap-2 items-center">
            <hr className="w-16 border border-red-500"></hr>
            <p className="relative z-10 text-sm">OUR SERVICES</p>
            <hr className="w-16 border border-red-500"></hr>
          </div>
          <div className="py-7 lg:px-[10%] text-sm lg:text-base px-5 pb-20">
            <p className="lg:text-xl font-semibold pb-5">OUR BUSINESS AIM</p>
            Is to become the preferred workplace skills training center for
            globally recognized training, business solutions and certifications.
            At Giwost, our customer satisfaction, quality service and innovative
            delivery are the core values of our business excellence. In less
            than few years of operation we have attained the heights of sound
            business ethics and standard quality service. We seat as the most
            accredited training providers of HSE (Health, safety and
            environment) safety training course, ISO 9001, ISO 45001, PECB lead
            auditor course, oil and gas related courses, Project
            management related, Human resource management related course. We
            stay focus on our goal to remain an authentic training providers of
            courses which are verifiable and recognized globally.
          </div>
        </div>
        <div className=" absolute lg:mx-24 mx-5 py-12 bg-white shadow px-3 lg:px-16 top-[90%] gap-5 lg:gap-16 justify-center ">
          <div className="col-span-1 lg:pr-10">
            <p className=" text-xs font-semibold mb-3 lg:mb-6">ABOUT US</p>
            <p className=" text-3xl font-bold mb-3 lg:mb-5 leading-7">
              The best in skills certifications
            </p>
            <p className="text-sm hidden lg:block">
              Workplace Skills Training Institute was established as Cio-Insigth
              Consult Limited to carter for the skills and certification needs
              of the majority of the people but was later rebranded in order to
              build a global and trusted brand that will serve all interested
              parties globally. We are a registered education provider for most
              globally recognized professional certified courses and a Business
              developer, registered under the Laws of the Federal Republic of
              Nigeria with the Registration number RC 1777869 Giwost is a
              foremost professional leading training institute with a passion
              for adding value to the teaming youth population of our dearly
              beloved nation Nigeria and beyond. This is done through
              facilitating training by dynamic and seasoned the acquisition of
              professional certifications which increases entrepreneurial skill
              as well as employ-ability skills thus providing a major solution
              to the ever increasing high level unemployment. Other major
              achievements of our institute include her partnership and
              membership with some national and international bodies such as The
              British Safety Council BRITSAFE (UK), IOSH (UK), BISO (UK),
              Project Management Institute (PMI) U.S.A, Human Resource
              Certification Institute (HRCI) U.S.A. CIPM, CRCM, NYSC SAED,
              project people (Nigeria). The institute has also been able to
              train over thousands of students, ranging from reputable
              Companies, government parastatals, Federal and state Institutions,
              non-governmental organizations, foundations and corp members.
              e.t.c.
            </p>
            <p className="text-xs lg:hidden">
              Workplace Skills Training Institute was established as Cio-Insigth
              Consult Limited to carter for the skills and certification needs
              of the majority of the people but was later rebranded in order to
              build a global and trusted brand that will serve all interested
              parties globally. We are a registered education provider for most
              globally recognized professional certified courses and a Business
              developer, registered under the Laws of the Federal Republic of
              Nigeria with the Registration number RC 1777869 Giwost is a
              foremost professional leading training institute with a passion
              for adding value to the teaming youth population of our dearly
              beloved nation Nigeria and beyond. 
            </p>
          </div>
          <div className="col-span-1 flex lg:flex-row flex-col gap-5 w-full justify-center mt-5">
            <div className="flex flex-col w-full gap-5">
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
            </div>
            <div className="flex flex-col w-full gap-5">
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
      </div>
      <div className=" bgf mt-[600px] lg:mt-[600px] text-white py-12 px-5 lg:px-[15%]">
        <div className="grid lg:grid-cols-10">
          <div className="col-span-6 bg-bluu px-3 lg:px-10 py-8 flex flex-col gap-3 lg:gap-5">
            <div className="flex gap-7 items-center mb-2 lg:mb-5">
              <p className=" text-xs font-semibold">OUR SKILLS</p>
              <hr className="w-20 border border-red-500"></hr>
            </div>
            <p className="lg:text-2xl text-xl font-semibold">
              TRUSTED BY MORE THAN 1M CLIENTS
            </p>
            <p className="lg:text-sm text-xs">
              Join us to upgrade your institute with international
              certification. Our globally acclaimed systems in assessment &
              certification will help your trainees reach greater heights. The
              partnership with Global Institute of Workplace Skills Training will support
              you to constantly grow every year.
            </p>
            <Link href="/service">
              <button className="px-2 py-1 text-blu inline mx-16 mt-10 font-semibold bg-white">
                JOIN US
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Partners />
      <Footer />
      <FloatingWhatsApp/>
    </div>
  );
}
