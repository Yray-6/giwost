import React from "react";
import Partners from "../components/Partners";
import Footer from "../components/Footer";

export default function Verification() {
  return (
    <div>
      <div className="text-center text-white pt-12 flex-col flex items-center justify-center bghero h-[60vh]  relative">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <p className="font-bold relative z-10 text-[4rem] font-mono">
          Verify Certificates
        </p>
        <div className="flex justify-center gap-2 items-center">
          <hr className="w-12 border border-red-500"></hr>
          <p className="relative z-10 text-sm">WHO WE ARE</p>
          <hr className="w-12 border border-red-500"></hr>
        </div>
      </div>
      <Partners/>
      <Footer/>
    </div>
  );
}
