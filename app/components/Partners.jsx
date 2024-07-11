import React from 'react'
import Image from 'next/image'

export default function Partners() {
  return (
    <div>
          <div className=" px-20 flex justify-center items-center py-12 gap-32">
        <Image
          src="/Logo.png"
          width={90}
          height={50}
          className="hidden md:block"
          alt="logo"
        />
        <Image
          src="/Logo.png"
          width={90}
          height={50}
          className="hidden md:block"
          alt="logo"
        />
        <Image
          src="/Logo.png"
          width={90}
          height={50}
          className="hidden md:block"
          alt="logo"
        />
        <Image
          src="/Logo.png"
          width={90}
          height={50}
          className="hidden md:block"
          alt="logo"
        />
        <Image
          src="/Logo.png"
          width={90}
          height={50}
          className="hidden md:block"
          alt="logo"
        />
      </div>
      <p className="pb-6 text-3xl italic font-semibold text-center">
        OUR PARTNERS
      </p>
    </div>
  )
}
