import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <div><div className=" bg-bluu py-16 px-[10%] text-white">
    <div className="grid grid-cols-3">
      <div className="col-span-1 border-l-4 border-l-white font-medium pl-5">About GIWOST</div>
      <div className="col-span-1 border-l-4 border-l-white font-medium pl-5">Corporate Office</div>
      <div className="col-span-1 border-l-4 border-l-white font-medium pl-5">Quick links</div>
    </div>
    <div className="grid grid-cols-3 mt-8">
      <div className="col-span-1 text-sm pr-5">
        <p>We are a leading British Safety Council UK and PECB courses training  provider and the largest in Nigeria with specialty in HSE courses  (Health, safety and environment), Quality and Project management  courses, Oil and gas courses and a business solution provider. </p>
      </div>
      <div className="col-span-1 text-sm pr-5">
        <p className="mb-5">Suite 25/26 longjohn plaza, beside market square, mile 4, rumueme, port harcourt, River state.</p>
        <p>48 allen road, opposite union bank, ikeja, lagos state. </p>

      </div>
      <div className="col-span-1 text-sm pr-5 flex-col flex gap-3">
        <Link href="/">
          Home
        </Link>
        <Link href="/">
          Home
        </Link>
        <Link href="/">
        FAQ</Link>
        <Link href="/">
        FAQ</Link>
      </div>
    </div>
  </div></div>
  )
}
