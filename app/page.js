"use client";

import Image from "next/image";
import Swipe from "./components/Swiper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import {
  faAward,
  faBuildingColumns,
  faEnvelope,
  faGlobe,
  faLocationDot,
  faAngleDown,
  faAngleUp,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Partners from "./components/Partners";
import Footer from "./components/Footer";
import SimpleSlider from "./components/Swiper";
import Testimony from "./components/Testimony";
import SwipeN from "./components/SwipeN";
import FloatingWhatsApp from "./components/Floating";
import Services from "./components/offer";

export default function Home() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div>
      <div className="relative h-screen flex flex-col">
        <SimpleSlider />
        <div className="absolute bg-white -bottom-24 lg:-bottom-12 self-center shadow-lg  flex flex-col gap-3 lg:flex-row lg:gap-32 py-3 lg:py-0 px-8 lg:px-7 text-blackish">
          <div className="flex lg:gap-2 gap-2 px-2">
            <div className=" border-r border-r-gray-400 lg:text-[3rem] text-[1.5rem] lg:my-4 lg:pr-5 pr-2">
              <FontAwesomeIcon icon={faBuildingColumns} />
            </div>

            <div className="flex-col justify-center items-start flex lg:gap-3">
              <p>FLEXIBLE</p>
              <p className=" font-semibold ">COURSES</p>
            </div>
          </div>
          <div className="flex lg:gap-2 gap-2 px-2">
            <div className=" border-r border-r-gray-400 text-[1.5rem] lg:text-[3rem] lg:my-4 pr-2 lg:pr-5">
              <FontAwesomeIcon icon={faGlobe} />
            </div>

            <div className="flex-col justify-center items-start flex lg:gap-3">
              <p>FLEXIBLE</p>
              <p className=" font-semibold ">TRAINING</p>
            </div>
          </div>
          <div className="flex lg:gap-2 gap-2 px-2">
            <div className=" border-r border-r-gray-400 text-[1.5rem] lg:text-[3rem] lg:my-4 pr-2 lg:pr-5">
              <FontAwesomeIcon icon={faAward} />
            </div>

            <div className="flex-col justify-center items-start flex lg:gap-3">
              <p>VERIFIABLE</p>
              <p className=" font-semibold ">CERTIFICATION</p>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:py-[5%] pt-36 mb-24 px-[5%] lg:px-[15%] flex flex-col lg:flex-row">
        <Image
          src="/helmet.png"
          alt="image"
          width={500}
          height={100}
          className="w-full"
        />
        <div className=" py-5 flex items-center">
          <div className="bg-gray-100 px-8 flex-col flex gap-5 py-7">
            <div className="flex gap-7 items-center mb-5">
              <p className=" text-xs font-semibold">About Us</p>
              <hr className="w-20 border border-red-500"></hr>
            </div>
            <p className=" text-2xl font-bold leading-7">
              GIWOST is committed to drive skill training
            </p>
            <p className="text-xs">
              We launched with a vision to transform the training industry by
              offering a unique and internationally recognized awarding
              experience. Over the past year, we&apos;ve empowered Individuals
              locally, by providing standardized assessments and certifications
              that hold weight worldwide.
            </p>
            <Link href="/About">
              <button className="self-start bg-blu text-sm text-white px-4 py-2 rounded-xl">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className=" text-center pb-20">
      <div className="bg-bluu text-center w-full pt-12 mb-7 text-white">
          <p className="lg:text-3xl text-2xl font-semibold mb-2">
            WHAT ARE WE OFFERING
          </p>
          <div className="flex justify-center pb-10 gap-2 items-center">
            <hr className="w-16 border border-red-500"></hr>
            <p className="relative z-10 text-sm">OUR SERVICES</p>
            <hr className="w-16 border border-red-500"></hr>
          </div>
          </div>
        <p className="lg:text-3xl text-2xl font-semibold">HOW IT WORKS</p>
        <div className="flex justify-center gap-2 items-center">
          <hr className="w-12 border border-red-500"></hr>
          <p className="relative z-10 text-sm">THE PROCESS FLOW</p>
          <hr className="w-12 border border-red-500"></hr>
        </div>
        <div className=" flex lg:flex-row lg:hidden flex-col px-20 gap-8 lg:gap-16 justify-center items-center pt-12">
          <div className="rounded-full relative">
            <Image
              src="/round1.png"
              alt="service pic"
              className="w-full"
              height={100}
              width={1000}
            />
            <div className=" w-16 h-16 text-white absolute top-0 right-0 bg-bluu rounded-full text-xl font-bold flex items-center justify-center">
              01
            </div>
            <p className="mt-8 font-bold text-xl lg:text-2xl">
              Flexible <br />
              Courses
            </p>
          </div>
          <div className="rounded-full relative">
            <Image
              src="/round2.png"
              alt="service pic"
              className="w-full"
              height={100}
              width={1000}
            />
            <div className=" w-16 h-16 text-white absolute top-0 right-0 bg-bluu rounded-full text-xl font-bold flex items-center justify-center">
              02
            </div>
            <p className="mt-8 font-bold text-xl lg:text-2xl">
              Flexible <br />
              Training
            </p>
          </div>
          <div className="rounded-full relative">
            <Image
              src="/round3.png"
              alt="service pic"
              className="w-full"
              height={100}
              width={1000}
            />
            <div className=" w-16 h-16 text-white absolute top-0 right-0 bg-bluu rounded-full text-xl font-bold flex items-center justify-center">
              03
            </div>
            <p className="mt-8 font-bold text-xl lg:text-2xl">
              {" "}
              Verifiable <br />
              Certificates
            </p>
          </div>
          <Image
            src="/arrow.png"
            alt="service pic"
            className="w-[70%] hidden lg:block absolute"
            height={100}
            width={1000}
          />
        </div>

        <div className="mx-[15%] hidden lg:block mt-12 pb-12 border-b border-b-black ">
          <div className="grid grid-cols-10">
            <div className="rounded-full relative col-span-2">
              <Image
                src="/round1.png"
                alt="service pic"
                className="w-full"
                height={100}
                width={1000}
              />
              <div className=" w-16 h-16 text-white absolute top-0 right-0 bg-bluu rounded-full text-xl font-bold flex items-center justify-center">
                01
              </div>
            </div>
            <div className="col-span-8 text-left pl-6">
              <p className="font-bold text-xl pb-5 lg:text-2xl">
                Flexible Courses
              </p>
              <div className="text-sm">
                <p>
                  Global Institute of Workplace Skills Training is the largest
                  Caregiver and Health Care Assistant Training Institute in
                  Nigeria and Africa at large!
                </p>
                <p>
                  Our training holds in every state in Nigeria through Online
                  zoom and via our partnering Hospitals for internship/clinical
                  Training.
                </p>
                <p className="mb-2">
                  Our training is a 4 weeks comprehensive Training which is
                  divided into two sessions.
                </p>
                <p className="mb-2">
                  {" "}
                  <span className="font-bold">First Session:</span> one week
                  theory class held in our Port Harcourt Office, Lagos, Warri,
                  Asaba and Online interactive Class via zoom for those outside
                  these locations.
                </p>
                <p className="mb-2">
                  <span className="font-bold">Second session:</span>  Three
                  weeks clinical/internship training held in all our Hospitals
                  across Nigeria.
                </p>
                After the one week Online/classroom theory class, all our
                students are posted to our various Hospitals in their location
                for Practical hands-on experience.
                <p className="mb-4">
                  {" "}
                  <span className="font-bold">Note:</span> The internship is
                  optional, for those already having knowledge and experience
                  that don’t want internship or those that just wants the
                  documents At Giwost, we train you at your comfort zone giving
                  you the same quality Training and classroom Experience.
                </p>
                <p>
                  This option is for Interested persons that don’t have time to
                  attend our schedule physical or online classes. All our
                  training are recorded, the recorded Classes and Training
                  Materials will be made available to you after Registration and
                  Payment. You can watch and study the recorded classes at your
                  own time, After your study, you can also discuss with the
                  doctor at your Centre on what time you would like to be coming
                  for internship.
                </p>
                <p>
                  This option will enable you maintain your current job while
                  Building a successful career as a Caregiver or Health Care
                  Assistant. With Global Institute of Workplace Skills Training
                  study options, you don’t have any reasons not to pursue your
                  career and achieve it. … Education made Easy
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-3xl font-bold text-black">Our Healthcare Courses</h1>
          <div className="flex gap-5 flex-col lg:flex-row justify-center">
          <div className="flex my-5 lg:mx-0 mx-7 relative justify-center">
              <Image
                src="/1pic.webp"
                alt="service pic"
                className="w-full object-cover"
                height={100}
                width={1000}
              />
              <div className="absolute inset-0 bg-black opacity-10"></div>
              <div
                className={`bg-white px-4 shadow absolute py-4 min-w-44 text-center font-semibold border-r-8 text-black rounded-lg -bottom-3 text-sm border-r-green-600`}
              >
                Healthcare Assistant 
              </div>
            </div>
            <div className="flex my-5 lg:mx-0 mx-7 relative justify-center">
              <Image
                src="/2pic.webp"
                alt="service pic"
                className="w-full object-cover"
                height={100}
                width={500}
              />
              <div className="absolute inset-0 bg-black opacity-10"></div>
              <div
                className={`bg-white px-4 shadow absolute py-4 min-w-44 text-center font-semibold border-r-8 text-black rounded-lg -bottom-3 text-sm border-r-yellow-600`}
              >
                Social Caregiver
              </div>
            </div>
          
            <div className="flex relative my-5 lg:mx-0 mx-7 justify-center">
              <Image
                src="/3pic.webp"
                alt="service pic"
                className="w-full object-cover"
                height={100}
                width={500}
              />
              <div className="absolute inset-0 bg-black opacity-10"></div>
              <div
                className={`bg-white px-4 shadow absolute py-4 min-w-44 text-center font-semibold border-r-8 text-black rounded-lg -bottom-3 text-sm border-r-green-600`}
              >
                Forklift Operator
              </div>
            </div>
            <div className="flex relative my-5 lg:mx-0 mx-7 justify-center">
              <Image
                src="/3pic.webp"
                alt="service pic"
                className="w-full object-cover"
                height={100}
                width={500}
              />
              <div className="absolute inset-0 bg-black opacity-10"></div>
              <div
                className={`bg-white px-4 shadow absolute py-4 min-w-44 text-center font-semibold border-r-8 text-black rounded-lg -bottom-3 text-sm border-r-green-600`}
              >
                Forklift Operator
              </div>
            </div>
          </div>
        </div>
        <div className="mx-[15%] hidden lg:block mt-12 border-b border-b-black">
          <div className="grid grid-cols-10">
            <div className="col-span-8 text-left pr-6">
              <p className="font-bold text-xl pb-5 lg:text-2xl">
                Flexible Training
              </p>
              <div className="text-sm">
                <p>
                  We provide consulting services & corporate staff training that
                  conform to highest standards and professionalism. We take
                  pride in providing high quality QHSE training by ensuring the
                  priority of students’ success and assistance to find a job.
                </p>
                <p>
                  Our corporate training service is in two parts: first, we
                  analyze your staff to ascertain the specific areas where they
                  require training. Second, we design bespoke training that
                  suite your specific needs and we provide world recognized
                  certificates.
                </p>
                <p className="mb-2">
                  Training can be conducted at our ultra-modern facility or at
                  client’ site with 100% practical and field simulation that
                  meet industry best practice.
                </p>
                <button className="bg-bluu text-white px-2 rounded my-4 py-1">
                  Send Us a Mail
                </button>
                <p className="mb-2 font-medium">
                  Audit and Certification for Organizations
                </p>
                We provides audits and certification against management system
                standards which help organizations to implement international
                best practices in order to improve their business performance
                and achieve their objectives. Our audit and certification for
                organization is in line with ISO 9001, ISO 45001 & 14001
                standards.
                <p>Other Services</p>
                <ul class="list-disc pl-5 ">
                  <li>Staff Training Needs Assessment</li>
                  <li>Facility and systems HSE Audit</li>
                  <li>Company HSE policy development and documentation</li>
                  <li>Environmental Impact Assessment</li>
                  <li>Fire Risk Assessment</li>
                  <li>Project site HSE management</li>
                  <li>Fleet management and safety</li>
                  <li>Risk Assessment</li>
                  <li>
                    Accident Investigation, Root cause analysis and reporting
                  </li>
                  <li>Hazards and Effects Management Process</li>
                  <li>Corporate safety department development</li>
                  <li>
                    Corporate staff HSE training and re-training on: basic and
                    advanced fire fighting and rescue, confined space entry,
                    basic and advanced first aid and CPR, permit to work system,
                    working at height, etc
                  </li>
                  <li>
                    HSE Mile-stone celebrations and Safety week organizing
                  </li>
                  <li>Preparation of Occupational Health and Safety Manuals</li>
                  <li>
                    Preparation of Occupational Health and Safety Pocketbooks
                  </li>
                  <li>Contingency and Emergency plans and management</li>
                  <li>Supply of safety equipments</li>
                  <li>Supply of PPE</li>
                  <li>
                    Refilling, maintaining and servicing of fire fighting
                    equipments
                  </li>
                  <li>Installation of fire alarms and smoke detectors</li>
                </ul>
              </div>
            </div>
            <div className="rounded-full relative col-span-2">
              <Image
                src="/round2.png"
                alt="service pic"
                className="w-full"
                height={100}
                width={1000}
              />
              <div className=" w-16 h-16 text-white absolute top-0 right-0 bg-bluu rounded-full text-xl font-bold flex items-center justify-center">
                02
              </div>
            </div>
          </div>
          <div className="mx-[15%] hidden lg:block mt-12 pb-12  ">
            <div className="grid grid-cols-10">
              <div className="rounded-full relative col-span-2">
                <Image
                  src="/round3.png"
                  alt="service pic"
                  className="w-full"
                  height={100}
                  width={1000}
                />
                <div className=" w-16 h-16 text-white absolute top-0 right-0 bg-bluu rounded-full text-xl font-bold flex items-center justify-center">
                  03
                </div>
              </div>
              <div className="col-span-8 text-left pl-6">
                <p className="font-bold text-xl pb-5 lg:text-2xl">
                  Verifiable Certificates
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="relative flex flex-col items-center">
        <div className="bg-bluu text-center w-full pt-12 text-white">
          <p className="lg:text-3xl text-2xl font-semibold mb-2">
            WHAT ARE WE OFFERING
          </p>
          <div className="flex justify-center pb-10 gap-2 items-center">
            <hr className="w-16 border border-red-500"></hr>
            <p className="relative z-10 text-sm">OUR SERVICES</p>
            <hr className="w-16 border border-red-500"></hr>
          </div>
          <div className="lg:grid flex flex-col  justify-center lg:grid-cols-10 px-5 lg:px-[10%] pt-12 bg-gray-100">
            <div className="col-span-7 lg:pr-4 lg:text-left text-black">
              <p className="mb-2 font-semibold text-left">
                COMPLETE HEALTH AND SOCIAL CARE BUNDLE: SOCIAL CAREGIVER AND
                HEALTH CARE ASSISTANT; it has 5 Certificate diploma and 21
                Certificates listed below (suitable for all country)
              </p>
              <ul className="list-disc text-left list-inside text-sm">
                <li>Diploma in Health and Social Care at NVQ Level 3</li>
                <li>Diploma in Health Care Assistant at NVQ Level 3</li>
                <li>Diploma in Adult Social Care at NVQ Level 3</li>
                <li>Diploma in Support Worker at NVQ Level 3</li>
                <li>Diploma in Child Care at NVQ Level 3</li>
                <li>15 Care Standard Certificate</li>
                <li>Patients Care and Hygiene</li>
                <li>Care & Management of Dementia</li>
                <li>CPD Accredited First Aid and CPR Certificate</li>
                <li>BLS – Basic Life Support Certificate</li>
                <li>
                  Certificate in Health and Safety for Health Care Professionals
                </li>
                <li>Manual Handling Certificate</li>
                <li>Hospital Recommendation Letter</li>
                <li>900hrs Student Transcript</li>
                <li>FREE INTERNATIONAL CV TEMPLATE & JOB LINKS</li>
              </ul>
              <p className="py-3 text-xs text-left">
                Duration: One week Theory class & 3 Weeks clinical training (3
                times a week). Weekend/Part-time class: 12 weekends including
                clinical Training, 5 weekends without Clinical Training, class
                holds Every Saturdays 10am online only. Training Mode: Classroom
                or Online Instalmental Plan: to be paid in 2 or 3 instalments
              </p>
              <p className="font-bold text-left">PROMO PRICE: N200,000</p>
              <p className="font-bold text-left">
                ORIGINAL PRICE PRICE: N250,000
              </p>
        <Link href="https://forms.gle/TdZPNCvoYkCgTKRy7" target="blank"> <button className="bg-bluu px-4 text-white rounded my-7 py-2">ENROLL</button></Link>     
            </div>
            <div className="col-span-3">
            <div className="flex my-5 col-span-3 lg:mx-0 mx-7 relative justify-center">
              <Image
                src="/1pic.webp"
                alt="service pic"
                className="w-full object-cover"
                height={100}
                width={1000}
              />
              <div className="absolute inset-0 bg-black opacity-10"></div>
              <div
                className={`bg-white px-4 shadow absolute py-4 min-w-44 text-center font-semibold border-r-8 text-black rounded-lg -bottom-3 text-sm border-r-green-600`}
              >
                Healthcare Assistant and <br></br> Social Caregiver
              </div>
            </div>
            </div>
          </div>
          <div className="lg:grid flex flex-col-reverse justify-center lg:grid-cols-10 px-5 lg:px-[10%] py-12 bg-white">
            <div className=" col-span-3">
            <div className="flex col-span-3 my-5 lg:mx-0 mx-7 relative justify-center">
              <Image
                src="/2pic.webp"
                alt="service pic"
                className="w-full object-cover"
                height={100}
                width={500}
              />
              <div className="absolute inset-0 bg-black opacity-10"></div>
              <div
                className={`bg-white px-4 shadow absolute py-4 min-w-44 text-center font-semibold border-r-8 text-black rounded-lg -bottom-3 text-sm border-r-yellow-600`}
              >
                Healthcare Assistant
              </div>
            </div>
            </div>
            <div className="col-span-7 lg:text-left lg:pl-4 text-black">
              <p className="mb-2 font-semibold text-left">
                HEALTH CARE ASSISTANT BUNDLE (formerly known as Nurse
                Assistant): it has 2 Diploma and 5 other Certificates in this
                bundle
              </p>
              <ul className="list-disc text-left list-inside text-sm">
                <li>Diploma in Health Care Assistant at NVQ Level 3</li>
                <li>Diploma in Adult Social Care at NVQ Level 3</li>
                <li>The care certificate</li>
                <li>CPD Accredited First Aid and CPR Certificate</li>
                <li>Manual Handling Certificate</li>
                <li>
                  Certificate in Health and Safety for Health Care Professionals
                </li>
                <li>Child Care Certificate</li>
                <li>Hospital Recommendation Letter</li>
                <li>700hrs Student Transcript</li>
                <li>FREE INTERNATIONAL CV TEMPLATE & JOB LINKS</li>
              </ul>
              <p className="py-3 text-xs text-left">
                Weekday/Full Time class: One week Theory class & 3 Weeks
                clinical training (3 times a week). Training Mode: Classroom or
                Online Instalmental Plan: to be paid in 2 or 3 instalments
              </p>
              <p className="font-bold text-left">PROMO PRICE: N136,000</p>
              <p className="font-bold text-left">ORIGINAL PRICE: N170,000</p>
         <Link href="https://forms.gle/TdZPNCvoYkCgTKRy7" target="blank"><button className="bg-bluu px-4 text-white rounded my-7 py-2">ENROLL</button></Link>     
            </div>
          </div>
          <div className="lg:grid flex flex-col justify-center lg:grid-cols-10 px-5 lg:px-[10%] py-12 bg-gray-100">
            <div className="col-span-7 lg:text-left lg:pr-4 text-black">
              <p className="mb-2 font-semibold text-left">
                SOCIAL CAREGIVER BUNDLE: It has 2 Diploma and 5 Certificates in
                it.
              </p>
              <ul className="list-disc text-left list-inside text-sm">
                <li>Diploma in Health and Social Care at NVQ Level 3</li>
                <li>Diploma in Adult Social Care at NVQ Level 3</li>
                <li>Care & Management of Dementia</li>
                <li>CPD Accredited First Aid and CPR Certificate</li>
                <li>Certificate in Fundamentals of Health and Social Care</li>
                <li>Certificate in Caregiver Support Service Training</li>
                <li>Certificate in Health and Safety in Caregiving</li>
                <li>Hospital Recommendation Letter</li>
                <li>700hrs Student Transcript</li>
                <li>FREE INTERNATIONAL CV TEMPLATE & JOB LINKS</li>
              </ul>
              <p className="py-3 text-xs text-left">
                Weekday/Full Time class: One week Theory class & 3 Weeks
                clinical training (3 times a week). Training Mode: Classroom or
                Online Instalmental Plan: to be paid in 2 or 3 instalments
              </p>
              <p className="font-bold text-left">PROMO PRICE: N120,000</p>
              <p className="font-bold text-left">ORIGINAL PRICE: N150,000</p>
              <Link href="https://forms.gle/TdZPNCvoYkCgTKRy7" target="blank"><button className="bg-bluu px-4 text-white rounded my-7 py-2">ENROLL</button></Link>     
            </div>
            <div className="col-span-3">
            <div className="flex  my-5 lg:m-0 mx-7 relative justify-center">
              <Image
                src="/3pic.webp"
                alt="service pic"
                className="w-full object-cover"
                height={100}
                width={500}
              />
              <div className="absolute inset-0 bg-black opacity-10"></div>
              <div
                className={`bg-white px-4 shadow absolute py-4 min-w-44 text-center font-semibold border-r-8 text-black rounded-lg -bottom-3 text-sm border-r-red-600`}
              >
                Social Caregiver
              </div>
            </div>
            
          </div>
          </div>
          <div className="lg:grid flex flex-col-reverse lg:grid-cols-10 px-5 lg:px-[10%] py-12 bg-white">
            <div className="col-span-3">
            <div className="flex relative my-5 lg:mx-0 mx-7 justify-center">
              <Image
                src="/3pic.webp"
                alt="service pic"
                className="w-full object-cover"
                height={100}
                width={500}
              />
              <div className="absolute inset-0 bg-black opacity-10"></div>
              <div
                className={`bg-white px-4 shadow absolute py-4 min-w-44 text-center font-semibold border-r-8 text-black rounded-lg -bottom-3 text-sm border-r-green-600`}
              >
                Forklift Operator
              </div>
            </div>
            
            </div>
            <div className="col-span-7 pl-4 lg:text-left text-black">
              <p className="mb-2 font-semibold text-left">
                Course Introduction
              </p>
              <p className="text-left text-sm">
                This Forklift Operations & Maintenance (FOM) Training Course Is
                To Offer Professional Personnel, Newbies Trainee And Other
                Professionals Involved In Forklift Operations IADC, LEEA, DPR, &
                OSHA Standard Hands On Training And Technical Know How Involved
                In Various Safety Operating Procedures Using Forklift In
                Different Industrial Sectors As It Includes But Not Limited To
                Oil And Gas, Construction, Logistic & Warehouse And Maritime
                Etc.
              </p>
              <p className="text-left text-sm">
                This course aims to give candidates the necessary skills and
                knowledge to plan, prepare and operate a forklift safely and
                efficiently in accordance with Best International Standard for
                Licensing Persons Performing High Risk Work. On completion of
                this course candidates will be able to conduct routine checks;
                plan work; check, controls, operate, Tilling, shift OF various
                load types and shut down a forklift truck.
              </p>
              <p className="text-left text-sm">
                Our Forklift operation and maintenance training comes with
                additional training and certificates in HSE Level 1, 2 & 3 and
                warehouse/inventory management thus, making our students stand
                out among the crowd as each participant goes home with 6
                different Certificates at the end of the training.
              </p>

              <p className="mb-2 font-semibold text-left">
                Who should Attend our Forklift Class?
              </p>
              <p className="text-left text-sm">
                This Course Is for People with Little or No Operational
                Experience and Who Would Like to Obtain the Professional
                Required Level of Knowledge/Skill Needed to Safely Operate A
                Forklift (Class 1-6). This Course Complies With IADC, LEEA, DPR,
                WSO & OSHA standard for Training Forklift Operators. Included
                Will Be A Demonstration and Hands-On Training Portion. This Will
                Be Followed by A Proficiency Demonstration and An Operator
                Performance Evaluation. A Professional Certificate of Training
                Will Be Awarded Upon Successful Completion*.
              </p>
              <p className="text-left text-sm">
                As Part of Our Commitment to Forklift Safety our institute
                Offers Forklift Operations and Maintenance Training alongside
                with HSE level 1,2 & 3 and Warehouse Management training.
              </p>

              <p className="mb-2 font-semibold text-left">
                How Our Training Works!
              </p>
              <p className="text-left text-sm">
                Our program is comprised of one week theoretical
                classroom/online session and another one week test and practical
                forklift driver training component and upon successful
                completion the student receives their certificate to operate the
                specific classes of lift trucks that have been covered.
              </p>
              <p className="text-left text-sm">
                Our students can join our theory class online from the comfort
                of their home/office from wherever they are for the first one
                week, then resume practical class at our facility in the second
                week.
              </p>

              <p className="py-3 text-xs text-left">
                Duration: 2 weeks (1 week classroom/online theory training and 1
                week practical training)
              </p>
              <p className="font-bold text-left">Price: N150,000 naira only</p>
              <p className="font-bold text-left">Location: Port Harcourt</p>
              <Link href="https://forms.gle/TdZPNCvoYkCgTKRy7" target="blank"><button className="bg-bluu px-4 text-white rounded my-7 py-2">ENROLL</button></Link>     
            </div>
          </div>
        </div>
      </div> */}
      <div className="video lg:mt-20  px-5 lg:px-[15%] grid lg:grid-cols-2 relative">
        <div className="flex flex-col gap-5 relative z-20 py-10 col-span-1">
          <div className="flex gap-7 items-center mb-5">
            <p className=" text-xs font-semibold">OUR SKILLS</p>
            <hr className="w-20 border border-red-500"></hr>
          </div>
          <p className=" text-2xl font-bold leading-7">
            Welcome to the best Training & certification company.
          </p>
          <p className="text-sm">
            Global Institute of Workplace Skills Training was established to
            intervene and provide Skills certifications & standards to
            Individuals worldwide. 
          </p>
          <div>
            <p className="text-base font-semibold">Research-based Materials</p>
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
        {/* <div className="absolute z-40 -top-16 right-[15%]">
          {" "}
          <Image
            src="/fork.png"
            alt="service pic"
            className="w-full hidden lg:block"
            height={100}
            width={700}
          />
        </div> */}
        <div className="absolute inset-0 bg-white opacity-80"></div>
      </div>
 
      <div className=" lg:grid font-serif text-white lg:grid-cols-10 mt-12">
        <div className="lg:col-span-6 bg-bluu lg:pl-[15%] lg:pr-20 lg:flex lg:flex-col gap-1 py-12 lg:py-20 ">
          <div className="flex gap-4 px-5 lg:gap-7 items-center mb-3 lg:mb-5">
            <p className="font-serif">Testimonials</p>
            <hr className="w-20 border border-red-500"></hr>
          </div>
          <p className="px-5 font-serif text-2xl lg:text-4xl mb-20">
            We are excited to share trainees review
          </p>
          <div>
          <Testimony />
          </div>
         
        </div>
        <div className="col-span-4 py-5 lg:py-16">
          <div>
            <Image
              src="/testsim.png"
              alt="testimony"
              className="w-full hidden lg:block"
              height={100}
              width={100}
            />
          </div>
        </div>
      </div>
      <div className=" text-center py-12">
        <p className="lg:text-3xl text-2xl font-semibold">
          Our News and Insights
        </p>
        <div className="flex justify-center gap-2 pb-10 items-center">
          <hr className="w-12 border border-red-500"></hr>
          <p className="relative z-10 text-sm">LATEST NEWS</p>
          <hr className="w-12 border border-red-500"></hr>
        </div>
        <div className="px-[10%]">
          <SwipeN />
        </div>
      </div>
      <div className=" text-center py-12 px-4 lg:px-24 bg-gray-100">
        <p className="lg:text-3xl text-2xl font-semibold">Get in touch</p>
        <div className="flex justify-center gap-2 pb-10 items-center">
          <hr className="w-12 border border-red-500"></hr>
          <p className="relative z-10 text-sm">CONTACT DETAILS</p>
          <hr className="w-12 border border-red-500"></hr>
        </div>

        <div className="flex  lg:px-16 px-4 gap-10 mb-8 py-2 lg:py-4 bg-white">
          <FontAwesomeIcon
            icon={faEnvelope}
            className="text-blu text-[2rem] lg:text-[4rem]"
          />
          <div className="text-blu flex text-left flex-col gap-1 lg:gap-3">
            <p className="lg:text-xl">Reach us Via Email</p>
            <p className="lg:text-2xl font-semibold">info@giwost.com</p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto lg:p-6">
  <div className="relative flex flex-col items-center">
    <div className="w-full text-left">

      <div className="flex lg:px-16 px-4 gap-10 py-2 lg:py-4 bg-white w-full items-center">
        <FontAwesomeIcon
          icon={faLocationDot}
          className="text-blu text-[2rem] lg:text-[4rem]"
        />
        <div className="text-blu flex flex-col text-left gap-1 lg:gap-3 flex-grow">
          <p className="lg:text-xl">Head Office Address</p>
          <p className="lg:text-lg text-xs font-semibold">
            SUITES 25/26 LONGJOHN PLAZA, 34 AGIP ROAD BESIDES MARKET SQUARE MILE 4 RUMUEME PORT HARCOURT
          </p>
          <p className="lg:text-base text-xs font-semibold   text-red-600">Call: +234 708 959 7079</p>
          <p className="lg:text-base text-xs font-semibold text-red-600">Payment Confirmation: +234 907 295 9598</p>
        </div>
      </div>

      <div className="mt-4 bg-gray-100 rounded-lg shadow-lg w-full">
        <div className="flex lg:px-16 px-6 gap-10 py-4 bg-white">
          <FontAwesomeIcon
            icon={faLocationDot}
            className="text-blu lg:text-[2.5rem] text-[1.5rem]"
          />
          <div className="text-blu flex text-left flex-col gap-1 lg:gap-3">
            <p className="lg:text-xl">Branch Office 1 Lagos</p>
            <p className="lg:text-lg text-xs font-semibold">
              48 ALLEN AVENUE, 4TH FLOOR OPPOSITE UNION BANK, IKEJA, LAGOS STATE
            </p>
            <p className="lg:text-lg text-xs font-semibold text-red-500">Phone: +234 916 906 6562</p>
          </div>
        </div>

        <div className="flex lg:px-16 px-6 gap-10 py-4 bg-white">
          <FontAwesomeIcon
            icon={faLocationDot}
            className="text-blu lg:text-[2.5rem] text-[1.5rem]"
          />
          <div className="text-blu flex text-left flex-col gap-1 lg:gap-3">
            <p className="lg:text-xl">Branch Office 2 Warri</p>
            <p className="lg:text-lg text-xs font-semibold">
              FUTEB PLAZA OPPOSITTE REFINERY JUNCTION, EFFURUN-SAPELE ROAD, WARRI DELTA STATE.
            </p>
            <p className="lg:text-lg text-xs font-semibold text-red-600">Phone: +234 903 388 0926</p>
          </div>
        </div>

  
      </div>

    </div>
  </div>
</div>

      </div>
      <Partners />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
