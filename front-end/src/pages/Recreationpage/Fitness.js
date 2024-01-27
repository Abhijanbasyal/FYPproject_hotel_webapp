import React from 'react';
import FitnessImage from '../../assets/Recreationimage/FitnessImage.jpg'

const Fitness = () => {
  return (
    <div className='relative bg-[#141414] w-full overflow-hidden '>
      {/* for whole */}
      <div className='flex flex-col'>
        {/* content 1 */}
        <div className='flex flex-col mini:flex-row'>
          {/* image */}
          <div className='mini:w-[50%]'>
            <div className='text-[#c9c6c2] text-center mini:text-left mt-2 pt-4 px-12 font-serif uppercase'>Lets start relaxing Now</div>
            <img src={FitnessImage} alt="" className='w-full p-8 opacity-70 hover:opacity-100'/>
          </div>

          {/* description */}
          <div className='flex flex-col flex-wrap mini:w-[50%] p-8'>
            
            <div className='text-2xl text-[#b1b1b1] font-bold font-serif uppercase text-center mini:text-left'>
              Fitness
            </div>
            <div className='text-4xl text-[#ffffff] font-bold uppercase text-center mini:text-left '>Gym & yoga </div>
            <div className='text-xl text-[#ad833f] font-thin mt-8 text-center mini:text-left'>             
                Start a life-changing fitness adventure in our fully furnished gym, where individualized training 
                and state-of-the-art equipment collide. We provide a wide variety of contemporary exercise equipment in 
                our gym, such as functional training zones, weightlifting stations, and cardiovascular machines. You can 
                get guidance and motivation from certified fitness trainers, who will ensure that your training plan is 
                customized to meet your fitness goals. Our gym offers a range of fitness programs, from high-intensity interval 
                training to strength training, to suit the needs of all users. Take in a vibrant and dynamic environment that will
                help you on your journey to wellness by creating a sense of camaraderie and support.
            </div>
            <div className='text-[#ad833f] font-thin mt-4 text-center mini:text-left'>
                Enter our devoted yoga studio, a haven for complete wellbeing. It provides a calm haven for introspection
                and finding inner equilibrium. Take part in yoga sessions conducted by professionals to increase your 
                strength, flexibility, and mental clarity. Our studio is a retreat for a healthier body and mind, whether 
                you're looking for a strenuous workout or some downtime.
            </div>
              
          </div>
        </div>
      </div>
    </div>
  )
}

export default Fitness
