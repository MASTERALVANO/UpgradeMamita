import Image from 'next/image';
import { FaInstagram, FaTiktok } from 'react-icons/fa';

export default function ContactSection() {
  return (
    <section className="bg-transparent text-white py-10 px-4 md:py-16 md:px-8" id='contact'>
      <div className="max-w-7xl mx-auto flex flex-col md:grid md:grid-cols-2 gap-8 items-center">
        <div className="w-full">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Get <span className="text-gray-500">in Touch</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400">
            We are happy to hear from you. Please contact us for more information.
          </p>
          <div className="flex space-x-4 mt-8">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 text-2xl">
              <FaInstagram />
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 text-2xl">
              <FaTiktok />
            </a>
          </div>
        </div>
        <div className="flex justify-center items-center w-full mt-8 md:mt-0">
          <div className="w-56 h-56 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white flex-shrink-0">
            <Image
              src="/maps.svg"
              alt="Map Location"
              width={320}
              height={320}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
