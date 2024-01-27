import React from 'react';
import RecreationMain from '../../assets/Recreationimage/RecreationImage.jpg'
import Aboutrecreation from './Games';
import Footer from '../../components/Footer'
import PriceGames from './PriceGames';

const Recreation = () => {
  return (
    <div className='flex flex-col' >
      <div className='w-full h-[20rem] mini:h-[24rem] '>
        <img src={RecreationMain}  alt='' className='absolute  h-[20rem] w-screen mini:h-[24rem] z-0 top-0 '/>        
        <div className='absolute mt-[15rem] mini:mt-[18rem] w-full'>
          <div className='font-extrabold text-4xl mini:text-7xl drop-shadow-2xl text-center mini:text-left px-12 uppercase'>Recreation</div>        
        </div>
      </div>
      <Aboutrecreation />
      <PriceGames />
      <div className='relative overflow-hidden'>
        <Footer />
      </div> 
    </div>
  )
}

export default Recreation
