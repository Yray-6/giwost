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
      <div className="flex justify-between bg-white px-6 py-7 z-30 relative items-center">
        <Link href="/">
          <Image src="/logo.svg" width={90} height={100} alt="logo" />
        </Link>
        <div className="w-7 cursor-pointer" onClick={toggleMenu}>
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
          <Link href="/" className={clsx("text-lg font-light",{"font-normal":pathname === "/"})} onClick={toggleMenu}>
            Invest in Tomorrow, Today
          </Link>
          {/* <div className="flex flex-col gap-2 pl-5 text-sm font-light">
            <Link href="/" className="hover:bg-black hover:text-white"><p>How to Own Gold Online</p></Link>
            <Link href="/buying" className="hover:bg-black hover:text-white"><p>Transparency in Buying</p></Link>
            <Link href="/insights" className="hover:bg-black hover:text-white"><p>Gold&apos;s Liquidity</p></Link>
            <Link href="/case" className="hover:bg-black hover:text-white"><p>Ease of Investment</p></Link>
            <Link href="/buying" className="hover:bg-black hover:text-white"><p>Gold&apos;s Role in Society </p></Link>
            <Link href="/insights" className="hover:bg-black hover:text-white"><p>How Gold is Different</p></Link>
          </div> */}
          <Link href="/case" className={clsx("text-lg font-light",{"font-normal":pathname === "/case"})} onClick={toggleMenu}>
            The Case for Gold
          </Link>
          <Link href="/buying" className={clsx("text-lg font-light",{"font-normal":pathname === "/buying"})} onClick={toggleMenu}>
            Buying Gold Safely
          </Link>
          <a href="#" className="text-lg font-light">
        EN | DE
      </a>
      <button onClick={toggleMenu} className=" bg-gradient-to-r from-gradf to-gradt py-3 px-7  w-full text-base rounded font-semibold text-black">
        <Link href="/login">Login/Signup</Link>
      </button>
        </nav>
      </div>
    </div>
  );
}

export default NavbarSmall;
