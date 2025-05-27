"use client";
import Navbar from "@/components/navbar";
import Content from "@/components/content";
// import Menu from "@/components/menu";
import Contact from "@/components/contact";
import "@/app/globals.css"; 

import dynamic from 'next/dynamic';

const Menu = dynamic(() => import('@/components/menu'), {
  ssr: false
});

export default function Home() {
  return (
    <>
      <Navbar />
      <Content />
      <Menu />
      <Contact />
    </>
  );
}
