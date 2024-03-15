import React from 'react'
import serviceHeaderimg from '../../assets/ServiceImage/headerservice.jpg';
import Footer from '../../components/Footer.js';
import ServiceCard from './ServiceCard.js';


const Service = () => {
  return (
    <div className='flex flex-col overflow-hidden' >
      <div className='w-full h-[20rem] mini:h-[24rem] '>
        <img src={serviceHeaderimg}  alt='' className='absolute  h-[20rem] w-full mini:h-[24rem]  object-cover z-0 top-0 opacity-90 '/>        
        <div className='absolute mt-[15rem] mini:mt-[18rem] w-full'>
          <div className='font-extrabold text-4xl mini:text-7xl drop-shadow-2xl text-center mini:text-left px-12 uppercase'>Service</div>        
        </div>
      </div> 
      <ServiceCard />
      <div className='relative overflow-hidden'>
        <Footer />
      </div> 
    </div>
  )
}

export default Service
