import React from 'react';
import FooterBG from '../assets/footerBG.jpg';
import { MdLocationOn, MdPhone, MdEmail } from 'react-icons/md';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaPaperPlane  } from 'react-icons/fa';
import KhaltiIcon from '../assets/Khaltiicon.png';
import FonepayIcon from '../assets/fonepayicon.png';

const Footer = () => {
  return (
    <div className="relative w-full h-[76rem] mini:h-[25rem] overflow-hidden">
      {/* Background image */}
      <div className="absolute w-full h-full">
        <img src={FooterBG} alt="" className="object-cover w-full h-full" />
      </div>
      <div className="reltaive w-full h-full absolute bg-black/80 border-white rounded border-2 border-double"></div>
      {/* for the content */}
      <div className="absolute flex flex-col w-full mini:p-14 h-full">
          
        {/* main div which contains the content */}
        <div className="flex flex-col mini:flex-row pt-6 px-8 mini:p-0 mini:px-0 space-y-10 mini:space-y-0">

          {/* Content 1 */}
          <div className="flex flex-col mb-4 mini:mb-0 mini:mr-8 w-full items-center mini:items-start">
            <div className="text-3xl text-[#e0e0e0] font-bold text-center mini:text-left mb-2">Hotel Kewton</div>
            <br />
            <div className="flex flex-col text-[#9C9C9C] ">
              <div className='text-center mini:text-left'>Your journey begins here at Kewton Hotel, where every moment is designed for your utmost delight.</div>
              <div className="flex items-center mt-2  mini:text-left">
                <div className='p-2'>
                  <MdLocationOn className="text-[#9C9C9C] text-2xl " />
                </div>
                <div>Omshanti Chowk, Shantinagar, Kathmandu, Nepal</div>
              </div>
            </div>
          </div>

          {/* Content 2 */}
          <div className="flex flex-col mb-4 mini:mb-0 mini:mr-8 w-full items-center mini:items-start">
            <div className="text-3xl text-[#e0e0e0] font-bold text-center mini:text-left mb-2">Get In Touch</div>
            <br />
            <div className="text-[#9C9C9C]">
              <div className="mb-1 flex">
                <div className='p-2'>
                  <FaPaperPlane  className="text-[#9C9C9C]  " />
                </div>
                <div className='p-1'>+977 9857023004</div>
              </div>
              <div className="mb-1 flex">
                <div className='p-2'>
                  <MdPhone className="text-[#9C9C9C] " />
                </div>
                <div className='p-1'>+977 9841098765</div>
              </div>
              <div className='flex'>
                <div className='p-2'>
                  <MdEmail className="text-[#9C9C9C] " />
                </div>
                <div className='p-1 '>info@kewtonhotel.com</div>
              </div>
              <div className='flex'>
                <div className='p-2'>
                  <MdEmail className="text-[#9C9C9C] " />
                </div>
                <div className='p-1'>info@kewtonhotel.com</div>
              </div>
            </div>
          </div>

          {/* Content 3 */}
          <div className="flex flex-col mb-4 mini:mb-0 mini:mr-8 w-full items-center mini:items-start">
            <div className="text-3xl text-[#e0e0e0] text-center mini:text-left mb-2  font-bold">Open Hours</div>
            <br />
            <div className="flex flex-col items-center mini:items-start text-[#9C9C9C]">
              <div className="mb-1">
                <span className="font-bold">Monday-Thursday:</span> <br /><span className='text-[#EFC300]'>8:00 AM - 8:00 PM</span>
              </div>
              <div className="mb-1">
                <span className="font-bold ">Friday-Sunday:</span> <br /><span className='text-[#EFC300]'>10:00 AM - 10:00 PM </span>
              </div>
              <div className="text-sm ">Note: Special events may affect opening hours.</div>
            </div>  
          </div>

          {/* Content -4 */}
          <div className="flex flex-col mb-4 mini:mb-0 mini:mr-8 w-full items-center mini:items-start">
            <div className="text-3xl text-[#e0e0e0]  text-center mini:text-left mb-2 font-bold">Useful Links</div>
            <br />
            <div className="text-[#9C9C9C] space-y-2">
              <div className="mb-1 uppercase font-bold">Blog</div>
              <div className="mb-1 uppercase font-bold">Event</div>
              <div className='uppercase font-bold'>Notice</div>
              <div className='uppercase font-bold'>Room</div>
            </div>
          </div>

          {/* Content-5 */}
          <div className="flex flex-col mb-4 mini:mb-0 mini:mr-8 w-full items-center mini:items-start">
            <div className="text-3xl text-[#e0e0e0]  text-center mini:text-left mb-2 font-bold">Payment Options</div>
            <br />
            <div className="text-white space-x-4 flex p-2 items-center">
              <a href='#'><div className=""><img src={KhaltiIcon} width={100} alt='' /></div></a>
              <a href='#'><div className=""><img src={FonepayIcon} width={110} alt='' /></div></a>
            </div>
          </div>
        </div>

        {/* the copyright and social media div */}
        <div className="flex border-t border-neutral-300 mt-6 pt-4 px-4 mini:px-8">
          <div className="flex-1 text-[#9C9C9C]">© 2024 Hotel Kewton. All Rights Reserved.</div>
          <div className="flex space-x-2  mini:space-x-3 ">
            <a href="#" className="text-white hover:text-blue-400">
              <FaFacebookF className="text-2xl mini:text-3xl" />
            </a>
            <a href="#" className="text-white hover:text-pink-500">
              <FaInstagram className="text-2xl mini:text-3xl" />
            </a>
            <a href="#" className="text-white hover:text-[#1DA1F2]">
              <FaTwitter className="text-2xl mini:text-3xl" />
            </a>
            <a href="#" className="text-white hover:text-red-600">
              <FaYoutube className="text-2xl mini:text-3xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
