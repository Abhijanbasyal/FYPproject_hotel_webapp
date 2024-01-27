import React from 'react'
import Snookervideo from '../../assets/Recreationimage/Snookervideo.mp4'
import '../Recreationpage/Recreation.css'

const PriceGames = () => {
  return (
    <div className='relative  bg-[#141414]  w-full overflow-hidden '>
        <div className='absolute'>
            <video
            autoPlay
            loop
            muted
            className='object-cover w-screen  opacity-50'>
            <source src={Snookervideo} type='video/mp4' />
            </video>
        </div>
         {/* Price */}
        <div className='relative p-12'> 
            <div className="pricecardcontainer  flex justify-between flex-wrap space-y-4  ">
                {/* card 1 for snooker */}
                <div className="pricecard relative">
                    <div className="face face1 ">
                        <div className="pricecontent">                    
                            <h3 className='uppercase'>Snooker</h3>
                        </div>
                    </div>
                    <div className="face face2  ">
                        <div className="pricecontent">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ab repudiandae,
                                explicabo voluptate et hic cum ratione a. Officia delectus illum perferendis
                                maiores quia molestias vitae fugiat aspernatur alias corporis?
                            </p>
                            <button className="inline-block mt-2 px-4 py-2 bg-[#333] text-white hover:bg-white hover:text-[#333] border border-[#333] rounded">
                                Read More
                            </button>
                        </div>
                    </div>
                </div>   
                  {/* card 1 for snooker */}
                  <div className="pricecard relative">
                    <div className="face face1 ">
                        <div className="pricecontent">                    
                            <h3 className='uppercase'>Snooker</h3>
                        </div>
                    </div>
                    <div className="face face2  ">
                        <div className="pricecontent">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ab repudiandae,
                                explicabo voluptate et hic cum ratione a. Officia delectus illum perferendis
                                maiores quia molestias vitae fugiat aspernatur alias corporis?
                            </p>
                            <button className="inline-block mt-2 px-4 py-2 bg-[#333] text-white hover:bg-white hover:text-[#333] border border-[#333] rounded">
                                Read More
                            </button>
                        </div>
                    </div>
                </div>  
                  {/* card 1 for snooker */}
                  <div className="pricecard relative">
                    <div className="face face1 ">
                        <div className="pricecontent">                    
                            <h3 className='uppercase'>Snooker</h3>
                        </div>
                    </div>
                    <div className="face face2  ">
                        <div className="pricecontent">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ab repudiandae,
                                explicabo voluptate et hic cum ratione a. Officia delectus illum perferendis
                                maiores quia molestias vitae fugiat aspernatur alias corporis?
                            </p>
                            <button className="inline-block mt-2 px-4 py-2 bg-[#333] text-white hover:bg-white hover:text-[#333] border border-[#333] rounded">
                                Read More
                            </button>
                        </div>
                    </div>
                </div>   
            </div>
        </div>

    </div>
  )
}

export default PriceGames
