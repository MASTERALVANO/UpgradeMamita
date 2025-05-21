"use client";
import React from "react";
import "@/app/globals.css";
import HTMLFlipBook from "react-pageflip";
import Image from "next/image";

function Book() {
  return (
    <div
      className="flex justify-center items-center min-h-screen"
      style={{ backgroundColor: "#F0BB78" }}
    >
      <HTMLFlipBook
        width={200}
        height={277}
        size="fixed"
        minWidth={200}
        maxWidth={200}
        minHeight={277}
        maxHeight={277}
        maxShadowOpacity={0.5}
        showCover={true}
        mobileScrollSupport={true}
        className="flipbook shadow-xl rounded-lg"
        startPage={0}
        drawShadow={true}
        flippingTime={1000}
        usePortrait={true}
        startZIndex={0}
        autoSize={false}
        clickEventForward={true}
        useMouseEvents={true}
        swipeDistance={30}
        showPageCorners={true}
        disableFlipByClick={false}
        style={{ width: 200, height: 277 }}
      >
        {/* Page 1 - Cover */}
        <div className="flex flex-col items-center justify-center w-full h-full bg-[#F0BB78]">
          <h1 className="text-2xl font-bold text-white">Our Menu</h1>
          <Image src="/logo.svg" alt="Menu Cover" width={150} height={150} />
        </div>

        {/* Page 2 */}
        <div className="w-full h-full bg-[#F0BB78] flex items-center justify-center">
          <Image src="/menupg2.svg" alt="Menu Page 2" width={180} height={260} />
        </div>

        {/* Page 3 */}
        <div className="w-full h-full bg-[#F0BB78] flex items-center justify-center">
          <Image src="/menupg3.svg" alt="Menu Page 3" width={180} height={260} />
        </div>

        {/* Page 4 - Optional closing */}
        <div className="w-full h-full bg-[#F0BB78] flex items-center justify-center">
          <span className="text-white">Thank you!</span>
        </div>
      </HTMLFlipBook>
    </div>
  );
}

export default function Menu() {
  return (
    <div className="bg-transparent flex ">
      <Book />
    </div>
  )
}
