"use client";
import Image from "next/image";
import React, { useState } from "react";
import "@/app/globals.css";

function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative bg-[var(--bg-c-20)] w-[60px] h-[60px] flex flex-col justify-center items-center gap-2 mr-10 z-50"
      >
        <span
          className={`block h-0.5 w-7 bg-white transition-transform duration-300 ${
            isOpen ? "rotate-45 translate-y-2" : ""
          }`}
        />
        <span
          className={`block h-0.5 w-7 bg-white transition-all duration-300 ${
            isOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block h-0.5 w-7 bg-white transition-transform duration-300 ${
            isOpen ? "-rotate-45 -translate-y-3" : ""
          }`}
        />
      </button>

      {/* Transisi menu */}
      <div
        className={`fixed top-2 right-2 w-[240px] h-[258px] bg-[var(--color-dingley-600)] rounded-[30px] z-40 flex flex-col justify-end transition-all duration-500 ease-in-out
          ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}`}
      >
        <ul className="flex flex-col items-start text-white mb-5 ml-2 ">
          <li>
            <a className="font-freeman text-[32px] font-bold" href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="font-freeman text-[32px] font-bold" href="#menu">
              Menu
            </a>
          </li>
          <li>
            <a className="font-freeman text-[32px] font-bold" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default function Navbar() {
  return (
    <div
      className="flex items-center justify-between w-full px-2 py-2"
      style={{ background: "transparent" }}
    >
      <div className="flex-shrink-0">
        <Image
          src="/logo.svg"
          alt="NONE"
          width={200}
          height={161}
          className="w-[120px] h-auto md:w-[200px] transition-all duration-200"
          priority
        />
      </div>
      <Hamburger />
    </div>
  );
}