'use client';
import HTMLFlipBook from 'react-pageflip';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const pages = [
  '/menupg2.svg',
  '/menupg3.svg'
];

export default function MenuFlipbook() {
  const [size, setSize] = useState({ width: 398, height: 551 });

  useEffect(() => {
    function handleResize() {
      // Untuk mobile, gunakan lebar layar - padding, aspect ratio tetap
      const maxW = 398;
      const maxH = 551;
      const padding = 32;
      const isMobile = window.innerWidth < 430;
      if (isMobile) {
        const vw = window.innerWidth - padding;
        const width = Math.max(200, Math.min(vw, maxW));
        const height = Math.round((width * maxH) / maxW);
        setSize({ width, height });
      } else {
        setSize({ width: maxW, height: maxH });
      }
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="hidden md:flex justify-center items-center py-16 px-4" id='menu'>
      <HTMLFlipBook
        width={size.width}
        height={size.height}
        minWidth={200}
        maxWidth={398}
        minHeight={277}
        maxHeight={551}
        size="fixed"
        drawShadow
        showCover
        flippingTime={700}
        className="shadow-xl"
        style={{ backgroundColor: 'transparent' }}
        startPage={0}
        usePortrait={false}
        startZIndex={0}
        autoSize={false}
        maxShadowOpacity={0.5}
        mobileScrollSupport={true}
        clickEventForward={true}
        useMouseEvents={true}
        swipeDistance={30}
        showPageCorners={true}
        disableFlipByClick={false}
      >
        {pages.map((src, index) => (
          <div
            key={index}
            className="relative"
            style={{
              width: `${size.width}px`,
              height: `${size.height}px`,
              background: "transparent"
            }}
          >
            <Image
              src={src}
              alt={`Page ${index + 1}`}
              width={size.width}
              height={size.height}
              className="object-cover"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        ))}
      </HTMLFlipBook>
    </div>
  );
}
