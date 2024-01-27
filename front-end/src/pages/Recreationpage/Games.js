import React from 'react'
import SnookerImage from '../../assets/Recreationimage/Snooker.jpg';

const Aboutrecreation = () => {
  return (
    <div className='relative bg-[#141414] w-full overflow-hidden '>
      {/* for whole */}
      <div className='flex flex-col'>
        {/* content 1 */}
        <div className='flex flex-col mini:flex-row'>
          {/* image */}
          <div className='mini:w-[50%]'>
            <div className='text-[#c9c6c2] text-center mini:text-left mt-2 pt-4 px-12 font-serif uppercase'>Lets start relaxing Now</div>
            <img src={SnookerImage} alt="" className='w-full p-8 opacity-70 hover:opacity-100'/>
          </div>

          {/* description */}
          <div className='flex flex-col flex-wrap mini:w-[50%] p-8'>
            
            <div className='text-2xl text-[#b1b1b1] font-bold font-serif uppercase text-center mini:text-left'>
              Games
            </div>
            <div className='text-4xl text-[#ffffff] font-bold uppercase text-center mini:text-left '>Snooker, Pool & Carromboard </div>
            <div className='text-xl text-[#ad833f] font-thin mt-8 text-center mini:text-left'>             
               Take a relaxing stroll around our hotel's games area, where the game of the pool, 
               carromboard, and snooker encourages visitors to relax and engage in friendly competition. 
               With its poised set of balls and green felt covering, the snooker table allows players to show 
               off their skills and strategies. Our pool tables are the ideal place for people to gather and 
               have an exciting game in a more casual setting. Carromboard's ageless appeal, on the other hand, 
               inspires nostalgia and builds moments of companionship as players strive for success with each 
               strike of the striker.
            </div>
            <div className='text-[#ad833f] font-thin mt-4 text-center mini:text-left'>
                We've created an atmosphere in this lively recreation area that goes beyond just gaming. 
                It's a sanctuary where visitors may interact, laugh, and make treasured memories. Our wide range
                of recreational options guarantees that there is something for everyone to enjoy, regardless of 
                experience level. Enter a world where the sound of balls hitting surfaces and triumphant cheers 
                blending together to create a genuine joy and pleasure.
            </div>
              
          </div>
        </div>
      </div>
    </div>
  )
}

export default Aboutrecreation
