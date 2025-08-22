import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mamita Jepun",
  description: "Smoothies lokal rasa juara!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-b from-[#ffd06a] to-[#fffabf] bg-no-repeat bg-cover bg-center w-full h-[3783px] overflow-x-hidden ">
        {children}
      </body>
    </html>
  );
} 
