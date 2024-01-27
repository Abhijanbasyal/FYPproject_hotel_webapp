import React from 'react'
import SwimmingPool from '../../assets/Recreationimage/SwimmingPool.jpg'

const Swimming = () => {
  return (
    <div className='relative bg-[#141414] w-full overflow-hidden '>
      {/* for whole */}
      <div className='flex flex-col'>
        {/* content 1 */}
        <div className='flex flex-col mini:flex-row'>
          {/* image */}
          <div className='mini:w-[50%]'>
            <div className='text-[#c9c6c2] text-center mini:text-left mt-2 pt-4 px-12 font-serif uppercase'>Lets start relaxing Now</div>
            <img src={SwimmingPool} alt="" className='w-full p-8 opacity-70 hover:opacity-100'/>
          </div>

          {/* description */}
          <div className='flex flex-col flex-wrap mini:w-[50%] p-8'>    
            
            <div className='text-2xl text-[#b1b1b1] font-bold font-serif uppercase text-center mini:text-left'>
              Water activities
            </div>
            <div className='text-4xl text-[#ffffff] font-bold uppercase text-center mini:text-left '>Swimming & water polo</div>
            <div className='text-xl text-[#ad833f] font-thin mt-8 text-center mini:text-left'>             
                Explore a world of aquatic pleasure in our cutting-edge pool. Located in a peaceful area of our hotel, the pool 
                provides the ideal combination of leisure and relaxation. Our swimming pool offers guests a tranquil retreat away 
                from the stress of everyday life with its appealing azure waves and cozy reclining places. The pool area, surrounded 
                by lush landscape and ornamented with tasteful design, creates an ideal setting for happy and peaceful moments. Every 
                visitor will have a worry-free swimming experience thanks to our dedication to safety and hygiene. Our pool is ready to 
                enhance your stay, whether you're a keen swimmer or just want to relax by the sea.
            </div>
            <div className='text-[#ad833f] font-thin mt-4 text-center mini:text-left'>
                Take in the revitalizing embrace of our pool, where every ripple speaks of a rejuvenating 
                experience. Our friendly staff makes sure that the area is kept tidy and welcoming, which makes
                it the perfect place for both energetic laps and relaxing swims. Make lasting memories by lounging 
                by the pool with a cool drink or taking in the warmth of the sun-drenched environment.
            </div>
              
          </div>
        </div>
      </div>
    </div>
  )
}

export default Swimming
