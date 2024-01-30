import React from 'react'
import EventBgImage from '../../assets/EventImage/eventHeading.jpg';
import Footer from '../../components/Footer';
 

const Event = () => {
  return (
    <div className='flex flex-col' >
      <div className='w-full h-[20rem] mini:h-[24rem] '>
        <img src={EventBgImage}  alt='' className='absolute object-cover  h-[20rem] w-full mini:h-[24rem] z-0 top-0 '/>        
        <div className='absolute mt-[15rem] mini:mt-[18rem] w-full'>
          <div className='font-extrabold text-4xl mini:text-7xl drop-shadow-2xl text-center mini:text-left px-12 uppercase'>Event</div>        
        </div>
      </div>      
      <div className='relative overflow-hidden'>
        <Footer />
      </div> 
    </div>
  )
}

export default Event
