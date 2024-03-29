import React from 'react';
import RecreationMain from '../../assets/Recreationimage/RecreationImage.jpg'
import AboutGames from './Games';
import Footer from '../../components/Footer'
import PriceGames from './PriceGames';
import AboutSwimming from './Swimming';
import PriceSwimming from './PriceSwiming';
import Fitness from './Fitness';
import PriceFitness from './PriceFitness';

const Recreation = () => {
  return (
    <div className='flex flex-col' >
      <div className='w-full h-[20rem] mini:h-[24rem] '>
        <img src={RecreationMain}  alt='' className='absolute  h-[20rem] w-full object-cover mini:h-[24rem] z-0 top-0 '/>        
        <div className='absolute mt-[15rem] mini:mt-[18rem] w-full'>
          <div className='font-extrabold text-4xl mini:text-7xl drop-shadow-2xl text-center mini:text-left px-12 uppercase'>Recreation</div>        
        </div>
      </div>
      <AboutGames />
      <PriceGames />
      <AboutSwimming />
      <PriceSwimming />
      <Fitness />
      <PriceFitness />
      <div className='relative overflow-hidden'>
        <Footer />
      </div> 
    </div>
  )
}

export default Recreation
