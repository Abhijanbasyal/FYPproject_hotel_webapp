import React from 'react';
import Serviceevent from '../../assets/EventImage/secondevent.jpg';
import { TbPodium } from "react-icons/tb";
import { PiWineFill } from "react-icons/pi";
import { AiOutlineWifi } from "react-icons/ai";
import { PiCookingPotLight } from "react-icons/pi";

const ServiceEvents = () => {
  return (
    <div className='relative w-full overflow-hidden'>
      <div className='absolute w-full h-full'>
        <img src={Serviceevent} alt=''  className='object-cover w-full h-full'/>
      </div>
      <div className='relative bg-black/60 flex  justify-center items-center w-full h-full py-14'>
          <div className='flex flex-col justify-center items-center bg-black/70 p-2  rounded-xl'>

            <div className='flex flex-col py-8'> 
              <div className='uppercase text-5xl font-bold text-center pt-4 pb-1 w-full h-full '> 
                fully equiped
              </div>
              <div className='text-2xl uppercase font-semibold text-center pb-4  border-[#ad854d]'>
                Conference room
              </div>

            </div>

            <div className='flex flex-wrap py-3 w-full justify-around border-white/20 border-t-2'>
              <div className='flex flex-col justify-center items-center p-6'>
                {/* podium */}
                <div>
                  <TbPodium className='text-5xl text-[#ad854d] ' />
                </div>
                <div className='text-xl font-thin uppercase'>
                  podium
                </div>

              </div>

              {/* catering */}
              <div className='flex flex-col justify-center items-center p-6'>
                
                <div>
                  <PiCookingPotLight className='text-5xl text-[#ad854d] ' />
                </div>
                <div className='text-xl font-thin uppercase'>
                  Catering
                </div>

              </div>

              {/* open bar */}
              <div className='flex flex-col justify-center items-center  p-6'>
                
                <div>
                  <PiWineFill className='text-5xl text-[#ad854d] ' />
                </div>
                <div className='text-xl font-thin uppercase'>
                open bar
                </div>

              </div>

              {/* free wifi */}
              <div className='flex flex-col justify-center items-center  p-6'>
                
                <div>
                  <AiOutlineWifi className='text-5xl text-[#ad854d] ' />
                </div>
                <div className='text-xl font-thin uppercase'>
                  free wifi
                </div>

              </div>

            </div>
          </div>
      </div>
    </div>
  )
}

export default ServiceEvents
