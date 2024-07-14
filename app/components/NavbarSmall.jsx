"use client"
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import clsx from "clsx";
import { usePathname } from "next/navigation";

function NavbarSmall() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  const pathname = usePathname();
  return (
    <div className={clsx('fixed w-full bg-white z-50 shadow-md',{'hidden': pathname.startsWith('/dashboard')|| pathname.startsWith('/adminito69')})}>
      <div className="flex justify-between bg-white px-6 py-5 z-30 relative items-center">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/Logo.png" width={60} height={100} alt="logo" /> <p   className="font-bold text-sm">GIWOST</p>
        </Link>
        <div className="w-7 text-2xl cursor-pointer" onClick={toggleMenu}>
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
        </div>
      </div>
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 transition-all duration-300 ease-in-out ${
          menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMenu}
      />
      <div
        className={`fixed top-10 left-0 w-full px-7 h-screen z-10 bg-white transition-transform duration-300 ease-in-out ${
          menuOpen ? "transform translate-y-0" : "transform -translate-y-full"
        }`}
      >
        <nav className="flex flex-col  mt-20 space-y-6">
          <Link href="/About" className={clsx("text-lg border-b border-b-gray-500 pb-2 font-light",{"font-bold":pathname === "/"})} onClick={toggleMenu}>
            About Us
          </Link>
          <Link href="/services" className={clsx("text-lg border-b border-b-gray-500 pb-2 font-light",{"font-bold":pathname === "/About"})} onClick={toggleMenu}>
            Services
          </Link>
          <Link href="/faq" className={clsx("text-lg border-b border-b-gray-500 pb-2 font-light",{"font-bold":pathname === "/faq"})} onClick={toggleMenu}>
            FAQs
          </Link>
          <Link href="/verification" className={clsx("text-lg border-b border-b-gray-500 pb-2 font-light",{"font-bold":pathname === "/buying"})} onClick={toggleMenu}>
            Verify Certificates
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default NavbarSmall;
