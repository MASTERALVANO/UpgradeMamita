'use client';
import HTMLFlipBook from 'react-pageflip';
import Image from 'next/image';

const pages = [
  '/menupg2.svg',
  '/menupg3.svg'
];

export default function MenuFlipbook() {
  return (
   <div className="flex justify-center items-center py-16 px-4" id='menu'>
      <HTMLFlipBook
        width={398}
        height={551}
        minWidth={398}
        maxWidth={398}
        minHeight={551}
        maxHeight={551}
        size="fixed"
        drawShadow
        showCover
        flippingTime={700}
        className="shadow-xl"
        style={{ backgroundColor: 'transparent' }} // <== ini penting
        startPage={0}
        usePortrait={false}
        startZIndex={0}
        autoSize={false}
        maxShadowOpacity={0.5}
        mobileScrollSupport={false}
        clickEventForward={true}
        useMouseEvents={true}
        swipeDistance={30}
        showPageCorners={true}
        disableFlipByClick={false}
      >
        {pages.map((src, index) => (
          <div
            key={index}
            className="relative w-[398px] h-[551px] bg-transparent"
          >
            <Image
              src={src}
              alt={`Page ${index + 1}`}
              width={398}
              height={551}
              className="object-cover"
            />
          </div>
        ))}
      </HTMLFlipBook>
    </div>

  );
}
