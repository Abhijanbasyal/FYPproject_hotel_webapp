import React from 'react';
import Fitnessvideo from '../../assets/Recreationimage/Fitnessvideo.mp4';
import './Recreation.css'

const PriceFitness = () => {
  return (
    <div className='relative  bg-[#141414]   w-full overflow-hidden '>
        <div className='absolute'>
            <video
            autoPlay
            loop
            muted
            className='object-cover h-full w-full  opacity-50'>
            <source src={Fitnessvideo} type='video/mp4' />
            </video>
        </div>
        
         {/* Price */}
        <div className='relative p-2 border-white/20  border-4'> 
            {/* title */}
            <div className='relative text-center text-4xl p-4 font-bold uppercase'>
                Click to view the rates for fitness activities
            </div>
            <div className="pricecardcontainer flex  flex-wrap justify-between mini:justify-center mini:space-x-12">
                {/* card 1 for gym */}
                <div className="pricecard relative">
                    <div className="face face1 ">
                        <div className="pricecontent">                    
                            <h3 className='uppercase'>Gym</h3>
                        </div>
                    </div>
                    <div className="face face2 relative">
                        <div className="pricecontent w-full h-full space-y-4">
                            <h3 className='text-center pt-8 text-2xl font-bold text-[#333] uppercase underline'>Gym Rates</h3>
                            <div className='flex flex-wrap'>
                               
                                <div className='text-[hsl(53,42%,29%)] w-full border-[#433f3a] border-2'>
                                    <table className='w-full '>

                                        <tr className='border-[#433f3a] border-2 border-opacity-25'>                                       
                                            <td>Gym fee(one month)</td>
                                            <td className='text-left'>Rs 2500</td>                                        
                                        </tr>
                                        <tr className='border-[#433f3a] border-2 border-opacity-25'>
                                            <td>Gym fee(3 month)</td>
                                            <td>Rs 6000</td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                            <div className='flex justify-center'>
                                <button className="p-2  bg-[#333] text-white hover:bg-white hover:text-[#333] border border-[#333] rounded uppercase font-semibold ">
                                    make reservation
                                </button>

                            </div>
                        </div>
                    </div>
                </div>   
                  {/* card 2 for yoga */}
                <div className="pricecard relative">
                    <div className="face face1 ">
                        <div className="pricecontent">                    
                            <h3 className='uppercase'>Yoga</h3>
                        </div>
                    </div>
                    <div className="face face2 relative">
                        <div className="pricecontent w-full h-full space-y-4">
                            <h3 className='text-center pt-8 text-2xl font-bold text-[#333] uppercase underline'>Yoga Class Rates</h3>
                            <div className='flex flex-wrap'>
                               
                                <div className='text-[hsl(53,42%,29%)] w-full border-[#433f3a] border-2'>
                                    <table className='w-full '>

                                        <tr className='border-[#433f3a] border-2 border-opacity-25'>                                       
                                            <td>Class fee(one month)</td>
                                            <td className='text-left'>Rs 1500</td>                                        
                                        </tr>
                                        <tr className='border-[#433f3a] border-2 border-opacity-25'>
                                            <td>Class fee(3 month)</td>
                                            <td>Rs 3000</td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                            <div className='flex justify-center'>
                                <button className="p-2  bg-[#333] text-white hover:bg-white hover:text-[#333] border border-[#333] rounded uppercase font-semibold ">
                                    make reservation
                                </button>

                            </div>
                        </div>
                    </div>
                </div>  
               
            </div>
        </div>

    </div>
  )
}

export default PriceFitness
