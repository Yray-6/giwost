import React from 'react'
import Image from 'next/image'

export default function Partners() {
  return (
    <div>
          <div className=" lg:px-20 flex justify-center items-center py-12 gap-6 lg:gap-32">
        <Image
          src="/Logo.png"
          width={90}
          height={50}
          className="block w-12 lg:w-20"
          alt="logo"
        />
        <Image
          src="/partner1.png"
          width={90}
          height={50}
          className="block w-12 lg:w-20"
          alt="logo"
        />
        <Image
          src="/partner2.png"
          width={90}
          height={50}
          className="block w-12 lg:w-20"
          alt="logo"
        />
        <Image
          src="/partner3.png"
          width={90}
          height={50}
          className="block w-12 lg:w-20"
          alt="logo"
        />
      </div>
      <p className="pb-6 lg:text-xl italic font-semibold text-center">
        OUR PARTNERS
      </p>
    </div>
  )
}
