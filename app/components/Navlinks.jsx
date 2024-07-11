"use client";

import React, { useState } from "react";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";



const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About Us",
    href: "/About",
  },
  {
    name: "Services",
    href: "/services",
  },
  {
    name: "FAQs",
    href: "/Faq",
  },
  {
    name: "Verification",
    href: "/verification",
  },
  
];

const NavLink = ({ name, href, isActive }) => {
 

  return (
    <Link href={href} className="relative inline-block text-[15px] py-3">
      <div
        className="relative inline-block"
      >
        <span
          className={clsx("relative z-10 pb-4", {
            "font-semibold text-blue-500": isActive,
          })}
        >
          {name}
        </span>
        <motion.div
          className="absolute -bottom-4 left-1/2 h-[2px] bg-black"
        />
      </div>
    </Link>
  );
};

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <div className="flex gap-12">
      {links.map((link) => (
        <NavLink
          key={link.name}
          name={link.name}
          href={link.href}
          isActive={pathname === link.href}
        />
      ))}
    </div>
  );
}
