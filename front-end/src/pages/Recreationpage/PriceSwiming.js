import React from 'react';
import Swimmingvideo from '../../assets/Recreationimage/Swimmingvideo.mp4';
import './Recreation.css';

const PriceSwiming = () => {
  return (
    <div className='relative  bg-[#141414]   w-full overflow-hidden '>
        <div className='absolute'>
            <video
            autoPlay
            loop
            muted
            className='object-cover h-full w-full  opacity-50'>
            <source src={Swimmingvideo} type='video/mp4' />
            </video>
        </div>
        
         {/* Price */}
        <div className='relative p-2 border-white/20  border-4'> 
            {/* title */}
            <div className='relative text-center text-4xl p-4 font-bold uppercase'>
                Click to view rates for water activities
            </div>
            <div className="pricecardcontainer flex  flex-wrap justify-around mini:justify-center mini:space-x-12">
                {/* card 1 for swimming */}
                <div className="pricecard relative">
                    <div className="face face1 ">
                        <div className="pricecontent">                    
                            <h3 className='uppercase'>Relax swimming</h3>
                        </div>
                    </div>
                    <div className="face face2 relative">
                        <div className="pricecontent w-full h-full space-y-4">
                            <h3 className='text-center pt-2 text-2xl font-bold text-[#333] uppercase underline'>Swimming Rates</h3>
                            <div className='flex flex-wrap'>
                               
                                <div className='text-[hsl(53,42%,29%)] w-full border-[#433f3a] border-2'>
                                    <table className='w-full '>

                                        <tr className='border-[#433f3a] border-2 border-opacity-25'>                                       
                                            <td>Swimming fee(for each)</td>
                                            <td className='text-left'>Rs 500</td>                                        
                                        </tr>
                                        <tr className='border-[#433f3a] border-2 border-opacity-25'>
                                            <td>Swiming accesories (include tube,glass,etc)</td>
                                            <td>Rs 2000</td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                            <div className='flex justify-center  '>
                                <button className="p-2   bg-[#333] text-white hover:bg-white hover:text-[#333] border border-[#333] rounded uppercase font-semibold ">
                                    Make reservation
                                </button>

                            </div>
                        </div>
                    </div>
                </div>   
                  {/* card 2 for waterpolo */}
                <div className="pricecard relative">
                    <div className="face face1 ">
                        <div className="pricecontent">                    
                            <h3 className='uppercase'>Water Polo</h3>
                        </div>
                    </div>
                    <div className="face face2 relative">
                        <div className="pricecontent w-full h-full space-y-4">
                            <h3 className='text-center pt-8 text-2xl font-bold text-[#333] uppercase underline'>Court Rates</h3>
                            <div className='flex flex-wrap'>
                               
                                <div className='text-[hsl(53,42%,29%)] w-full border-[#433f3a] border-2'>
                                    <table className='w-full '>

                                        <tr className='border-[#433f3a] border-2 border-opacity-25'>                                       
                                            <td>Court fee(per hour)</td>
                                            <td className='text-left'>Rs 800</td>                                        
                                        </tr>
                                        <tr className='border-[#433f3a] border-2 border-opacity-25'>
                                            <td>Tournaments</td>
                                            <td>Rs 3000</td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                            <div className='flex justify-center'>
                                <button className="p-2  bg-[#333] text-white hover:bg-white hover:text-[#333] border border-[#333] rounded uppercase font-semibold ">
                                    Make reservation
                                </button>

                            </div>
                        </div>
                    </div>
                </div>  
                  {/* card 3 for coach */}
                <div className="pricecard relative">
                    <div className="face face1 ">
                        <div className="pricecontent">                    
                            <h3 className='uppercase'>Swimming lesson</h3>
                        </div>
                    </div>
                    <div className="face face2 relative">
                        <div className="pricecontent w-full h-full space-y-4">
                            <h3 className='text-center pt-8 text-2xl font-bold text-[#333] uppercase underline'>Private teaching</h3>
                            <div className='flex flex-wrap'>
                               
                                <div className='text-[hsl(53,42%,29%)] w-full border-[#433f3a] border-2'>
                                    <table className='w-full '>

                                        <tr className='border-[#433f3a] border-2 border-opacity-25'>                                       
                                            <td>Teaching fee(one month)</td>
                                            <td className='text-left'>Rs 4000</td>                                        
                                        </tr>
                                        <tr className='border-[#433f3a] border-2 border-opacity-25'>
                                            <td>Teaching fee(3 month)</td>
                                            <td>Rs 8000</td>
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

export default PriceSwiming
