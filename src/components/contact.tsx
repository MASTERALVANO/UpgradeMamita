import Image from 'next/image';
import { FaInstagram, FaTiktok } from 'react-icons/fa';

export default function ContactSection() {
  return (
    <section className="bg-transparent text-white py-16 px-8" id='contact'>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-5xl font-bold mb-4">
            Get <span className="text-gray-500">in Touch</span>
          </h2>
          <p className="text-xl text-gray-400">
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
        <div className="flex justify-center items-center">
          <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-white">
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
