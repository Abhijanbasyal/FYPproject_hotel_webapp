import React from 'react'
import Snookervideo from '../../assets/Recreationimage/Snookervideo.mp4'
import '../Recreationpage/Recreation.css'

const PriceGames = () => {
  return (
    <div className='relative  bg-[#141414]   w-full overflow-hidden '>
        <div className='absolute w-full h-full'>
            <video
            autoPlay
            loop
            muted
            className='object-cover h-full w-full  opacity-50'>
            <source src={Snookervideo} type='video/mp4' />
            </video>
        </div>
        
         {/* Price */}
        <div className='relative p-2 border-white/20  border-4'> 
            {/* title */}
            <div className='relative text-center text-4xl p-4 font-bold uppercase'>
                Click to view the rates and book games
            </div>
            <div className="pricecardcontainer flex  flex-wrap justify-around mini:justify-center mini:space-x-12">
                {/* card 1 for snooker */}
                <div className="pricecard relative">
                    <div className="face face1 ">
                        <div className="pricecontent">                    
                            <h3 className='uppercase'>Snooker</h3>
                        </div>
                    </div>
                    <div className="face face2 relative">
                        <div className="pricecontent w-full h-full space-y-4">
                            <h3 className='text-center pt-8 text-2xl font-bold text-[#333] uppercase underline'>Snooker Rates</h3>
                            <div className='flex flex-wrap'>
                               
                                <div className='text-[hsl(53,42%,29%)] w-full border-[#433f3a] border-2'>
                                    <table className='w-full '>

                                        <tr className='border-[#433f3a] border-2 border-opacity-25'>                                       
                                            <td>Snooker fee(per hour)</td>
                                            <td className='text-left'>Rs 300</td>                                        
                                        </tr>
                                        <tr className='border-[#433f3a] border-2 border-opacity-25'>
                                            <td>Private Lesson</td>
                                            <td>Rs 600</td>
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
                  {/* card 2 for pool */}
                <div className="pricecard relative">
                    <div className="face face1 ">
                        <div className="pricecontent">                    
                            <h3 className='uppercase'>Pool</h3>
                        </div>
                    </div>
                    <div className="face face2 relative">
                        <div className="pricecontent w-full h-full space-y-4">
                            <h3 className='text-center pt-8 text-2xl font-bold text-[#333] uppercase underline'>Pool Rates</h3>
                            <div className='flex flex-wrap'>
                               
                                <div className='text-[hsl(53,42%,29%)] w-full border-[#433f3a] border-2'>
                                    <table className='w-full '>

                                        <tr className='border-[#433f3a] border-2 border-opacity-25'>                                       
                                            <td>Pool fee(per hour)</td>
                                            <td className='text-left'>Rs 150</td>                                        
                                        </tr>
                                        <tr className='border-[#433f3a] border-2 border-opacity-25'>
                                            <td>Private Lesson</td>
                                            <td>Rs 300</td>
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
                  {/* card 3 for carrom */}
                <div className="pricecard relative">
                    <div className="face face1 ">
                        <div className="pricecontent">                    
                            <h3 className='uppercase'>Carrom Board</h3>
                        </div>
                    </div>
                    <div className="face face2 relative">
                        <div className="pricecontent w-full h-full space-y-4">
                            <h3 className='text-center pt-8 text-2xl font-bold text-[#333] uppercase underline'>Board Rates</h3>
                            <div className='flex flex-wrap'>
                               
                                <div className='text-[hsl(53,42%,29%)] w-full border-[#433f3a] border-2'>
                                    <table className='w-full '>

                                        <tr className='border-[#433f3a] border-2 border-opacity-25'>                                       
                                            <td>Board fee(per hour)</td>
                                            <td className='text-left'>Rs 40</td>                                        
                                        </tr>
                                        <tr className='border-[#433f3a] border-2 border-opacity-25'>
                                            <td>Private Lesson</td>
                                            <td>Rs 80</td>
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
            </div>
        </div>

    </div>
  )
}

export default PriceGames
