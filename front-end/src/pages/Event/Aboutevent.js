import React from 'react';
import AboutEventImage from '../../assets/EventImage/abouteventimage.jpg'

const Aboutevent = () => {
  return (
    <div className='relative bg-[#141414] w-full overflow-hidden '>
      {/* for whole */}
      <div className='flex flex-col'>
        {/* content 1 */}
        <div className='flex flex-col mini:flex-row'>
          {/* image */}
          <div className='mini:w-[50%]'>
            <div className='text-[#c9c6c2] text-center mini:text-left mt-2 pt-4 px-12 font-serif uppercase'>Elegant Weddings and Lively Celebrations</div>
            <img src={AboutEventImage} alt="" className='w-full p-8 opacity-70 hover:opacity-100'/>
          </div>

          {/* description */}
          <div className='flex flex-col flex-wrap mini:w-[50%] p-8'>
            
            <div className='text-2xl text-[#b1b1b1] font-bold font-serif uppercase text-center mini:text-left'>
                ALWAYS READY TO HELP
            </div>
            <div className='text-4xl text-[#ffffff] font-bold uppercase text-center mini:text-left '>Host Your Dream Celebration at Hotel Kewton</div>
            <div className='text-xl text-[#ad833f] font-thin mt-8 text-center mini:text-left'>             
                Welcome to Hotel Kewton, the height of celebration, where your fantasies come true. Our
                event venues, which combine luxury and comfort, are expertly created to be the ideal blank canvas 
                for your most memorable occasions. Our halls offer the perfect setting for your celebrations, whether
                you're thinking of a vibrant birthday party or a fairy-tale wedding. Every area, from the opulence of 
                our wedding halls to the lively ambiance of our birthday party locations, is designed to surpass your 
                expectations.

            </div>
            <div className='text-[#ad833f] font-thin mt-4 text-center mini:text-left'>
                Our simplified booking procedure and individualized assistance make event planning enjoyable, 
                from the first questions to the last toast. Select Hotel Kewton to host your wedding or birthday party,
                and allow us to turn your aspirations into priceless recollections.
            </div>
              
          </div>
        </div>
      </div>
    </div>
  )
}

export default Aboutevent
