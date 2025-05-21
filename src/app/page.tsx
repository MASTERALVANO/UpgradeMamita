import Navbar from "@/components/navbar";
import Content from "@/components/content";
import Menu from "@/components/menu";
import "@/app/globals.css"; 

export default function Home() {
  return (
    <>
      <Navbar />
      <Content />
      <Menu />
    </>
  );
}
