import Image from "next/image";
import Swipe from "./components/Swiper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAward,
  faBuildingColumns,
  faEnvelope,
  faGlobe,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Partners from "./components/Partners";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <div className="text-center text-white pt-12 flex items-center justify-center bghero h-screen  relative">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative z-10">
          <p className="mb-6 font-bold">WELCOME TO</p>
          <p className="text-[34px] font-extrabold">
            GLOBAL INSTITUTE OF WORKPLACE SKILLS <br />
            TRAINING
          </p>
          <p className="mt-8 font-bold">
            Experience the power of knowledge. Gain the skills to lead your
            career.
          </p>
          <button className=" bg-blu py-2 px-4 text-lg rounded-xl mt-12">
            ENROLL NOW
          </button>
        </div>

        <div className="absolute bg-white -bottom-12 shadow-lg flex gap-32 px-7 text-blackish">
          <div className="flex gap-2 px-2">
            <div className=" border-r border-r-gray-400 text-[3rem] my-4 pr-5">
              <FontAwesomeIcon icon={faBuildingColumns} />
            </div>

            <div className="flex-col justify-center items-start flex gap-3">
              <p>FLEXIBLE</p>
              <p className=" font-semibold ">COURSES</p>
            </div>
          </div>
          <div className="flex gap-2 px-2">
            <div className=" border-r border-r-gray-400 text-[3rem] my-4 pr-5">
              <FontAwesomeIcon icon={faGlobe} />
            </div>

            <div className="flex-col justify-center items-start flex gap-3">
              <p>FLEXIBLE</p>
              <p className=" font-semibold ">ASSESMENTS</p>
            </div>
          </div>
          <div className="flex gap-2 px-2">
            <div className=" border-r border-r-gray-400 text-[3rem] my-4 pr-5">
              <FontAwesomeIcon icon={faAward} />
            </div>

            <div className="flex-col justify-center items-start flex gap-3">
              <p>VERIFIABLE</p>
              <p className=" font-semibold ">CERTIFICATION</p>
            </div>
          </div>
        </div>
      </div>
      <div className="py-[10%] px-[15%] h-screen flex">
        <Image
          src="/helmet.png"
          alt="image"
          width={500}
          height={100}
          className="w-full"
        />
        <div className=" py-5 flex items-center">
          <div className="bg-gray-100 px-8 flex-col flex gap-5 py-7">
          <div className='flex gap-7 items-center mb-5'>
            <p className=" text-xs font-semibold">About Us</p>
            <hr className='w-20 border border-red-500'></hr>
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
            <Link href='/About'>
            <button className="self-start bg-blu text-sm text-white px-4 py-2 rounded-xl">
              Learn More
            </button>
            </Link>
           
          </div>
        </div>
      </div>
      <div className="relative">
        <div className=" bg-bluu text-center pt-12 text-white">
          <p className="text-3xl font-semibold">WHAT ARE WE OFFERING</p>
          <div className='flex justify-center pb-36 gap-2 items-center'>
            <hr className='w-16 border border-red-500'></hr>
            <p className='relative z-10 text-sm'>OUR SERVICES</p>
            <hr className='w-16 border border-red-500'></hr>
            </div>
        </div>
        <div className="flex absolute px-12 top-[60%] gap-16 justify-center ">
          <div className="flex relative justify-center">
            <Image
              src="/1pic.webp"
              alt="service pic"
              className="w-full"
              height={100}
              width={1000}
            />
            <div className="absolute inset-0 bg-black opacity-10"></div>
            <div className="bg-white px-4 shadow absolute py-4 min-w-44 text-center font-semibold border-r-8 rounded-lg border-r-green-600 -bottom-3 text-sm">
              Healthcare Assistant
            </div>
          </div>
          <div className="flex relative justify-center">
            <Image
              src="/2pic.webp"
              alt="service pic"
              className="w-full"
              height={100}
              width={1000}
            />
            <div className="absolute inset-0 bg-black opacity-10"></div>
            <div className="bg-white px-4 shadow absolute py-4 min-w-44 text-center font-semibold border-r-8 rounded-lg border-r-yellow-600 -bottom-3 text-sm">
              Social Caregiver
            </div>
          </div>
          <div className="flex relative justify-center">
            <Image
              src="/3pic.webp"
              alt="service pic"
              className="w-full"
              height={100}
              width={1000}
            />
            <div className="absolute inset-0 bg-black opacity-10"></div>
            <div className="bg-white px-4 shadow absolute min-w-44 text-center py-4 font-semibold border-r-8 rounded-lg border-r-red-600 -bottom-3 text-sm">
              Forklift Operator
            </div>
          </div>
          <div className="flex relative justify-center">
            <Image
              src="/4pic.webp"
              alt="service pic"
              className="w-full"
              height={100}
              width={1000}
            />
            <div className="absolute inset-0 bg-black opacity-10"></div>
            <div className="bg-white px-4 shadow absolute min-w-44 text-center py-4 font-semibold border-r-8 rounded-lg border-r-blue-600 -bottom-3 text-sm">
              HSE 1, 2, 3
            </div>
          </div>
        </div>
      </div>
      <div className="video mt-80 px-[15%] grid grid-cols-2 relative">
        <div className="flex flex-col gap-5 relative z-20 py-10 col-span-1">
        <div className='flex gap-7 items-center mb-5'>
            <p className=" text-xs font-semibold">OUR SKILLS</p>
            <hr className='w-20 border border-red-500'></hr>
            </div>
          <p className=" text-2xl font-bold leading-7">
            Welcome to the best Assessment & certification company.
          </p>
          <p className="text-sm">
            Global Institute of Workplace Skills Training was established to
            intervene and provide Skills certifications & standards to
            Individuals worldwide. 
          </p>
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
        <div className="absolute z-40 -top-16 right-[15%]">
          {" "}
          <Image
            src="/fork.png"
            alt="service pic"
            className="w-full"
            height={100}
            width={100}
          />
        </div>
        <div className="absolute inset-0 bg-white opacity-80"></div>
      </div>
      <div className=" text-center py-20">
        <p className="text-3xl font-semibold">HOW IT WORKS</p>
        <div className='flex justify-center gap-2 items-center'>
            <hr className='w-12 border border-red-500'></hr>
            <p className='relative z-10 text-sm'>THE PROCESS FLOW</p>
            <hr className='w-12 border border-red-500'></hr>
            </div>
        <div className=" flex px-20 gap-16 justify-center items-center pt-12">
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
            <p className="mt-8 font-bold text-2xl">
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
            <p className="mt-8 font-bold text-2xl">
              Flexible <br />
              Assessments
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
            <p className="mt-8 font-bold text-2xl">
              {" "}
              Verifiable <br />
              Certificates
            </p>
          </div>
          <Image
            src="/arrow.png"
            alt="service pic"
            className="w-[70%] absolute"
            height={100}
            width={1000}
          />
        </div>
      </div>
      <div className=" grid font-serif text-white grid-cols-10 mt-12">
        <div className="col-span-6 bg-bluu pl-[15%] pr-20 flex flex-col gap-1 py-20 ">
        <div className='flex gap-7 items-center mb-5'>
            <p className="font-serif" >Testimonials</p>
            <hr className='w-20 border border-red-500'></hr>
            </div>
          <p className=" font-serif text-4xl mb-20">
            We are excited to share trainees review
          </p>
          <p className="text-xl">Mr Alphonus</p>
          <p className=" text-gray-400 mb-4">Port Hacourt</p>
          <p className="text-3xl ">
            “Lorem Ipsum, if you dont agree you are on your own”
          </p>
        </div>
        <div className="col-span-4 py-16">
          <div>
            <Image
              src="/testsim.png"
              alt="testimony"
              className="w-full"
              height={100}
              width={100}
            />
          </div>
        </div>
      </div>
      <div className=" text-center py-12">
        <p className="text-3xl font-semibold">Our News and Insights</p>
        <div className='flex justify-center gap-2 pb-36 items-center'>
            <hr className='w-12 border border-red-500'></hr>
            <p className='relative z-10 text-sm'>LATEST NEWS</p>
            <hr className='w-12 border border-red-500'></hr>
            </div>
      </div>
      <div className=" text-center py-12 px-24 bg-gray-100">
        <p className="text-4xl font-semibold">Get in touch</p>
        <div className='flex justify-center gap-2 pb-10 items-center'>
            <hr className='w-12 border border-red-500'></hr>
            <p className='relative z-10 text-sm'>CONTACT DETAILS</p>
            <hr className='w-12 border border-red-500'></hr>
            </div>

        <div className="flex px-16 gap-10 mb-8 py-4 bg-white">
          <FontAwesomeIcon icon={faEnvelope} className="text-blu text-[4rem]" />
          <div className="text-blu flex text-left flex-col gap-3">
            <p className="text-xl"> Reach us Via Email</p>
            <p className="text-2xl font-semibold">info@giwost.com</p>
          </div>
        </div>
        <div className="flex px-16 gap-10 py-4 bg-white">
          <FontAwesomeIcon
            icon={faLocationDot}
            className="text-blu text-[4rem]"
          />
          <div className="text-blu flex text-left flex-col gap-3">
            <p className="text-xl"> Office Address</p>
            <p className="text-2xl font-semibold">info@giwost.com</p>
          </div>
        </div>
      </div>
   <Partners/>
   <Footer/>
    </div>
  );
}
