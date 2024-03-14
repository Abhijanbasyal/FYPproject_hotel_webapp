import React from 'react'

const BookingRoomEvent = () => {
  return (
    <div className='relative bg-[#141414] w-full overflow-hidden py-4'>
        <div className='flex flex-col w-full'>
            <div className='text-center py-4'>

                <div className='text-5xl text-white/80 font-bold uppercase p-2'>
                    Party Venue
                </div>
                <div className='text-white/60 text-xl'>
                    Say goodbye to the stress of party planning and let us help you create cherished memories on your special day!
                </div>
            </div>
            <div className='flex  flex-wrap  py-8 w-full justify-around '>

                {/* birthday celebration */}
                <div className='flex flex-col items-center p-2 space-y-3 border-2 border-white/20 rounded-2xl'>
                    <div className='uppercase font-semibold text-[#ad833f] text-2xl text-center'>
                        Book your <br />birthday celebration venue

                    </div>
                    <div className='text-center font-thin text-[#857e74] pt-2'>
                        Our platform offers a seamless booking experience for a variety of <br/>    venues equipped with everything you need for an unforgettable event.
                    </div>
                    <div className='w-full text-center pt-4'>
                        <button className='p-3 bg-[#aa824a] rounded-xl text-black font-semibold hover:bg-[#9f773f]'>
                            Book now
                        </button>
                    </div>

                </div> 

                
                {/* weeding celebration */}
                <div className='flex flex-col items-center p-2 space-y-3 border-2 border-white/20 rounded-2xl'>
                    <div className='uppercase font-semibold text-[#ad833f] text-2xl text-center'>
                        Book your <br />weeding celebration venue

                    </div>
                    <div className='text-center font-thin text-[#857e74]'>
                        Congratulations on your upcoming wedding! Here at our website, we offer<br /> a hassle-free solution for booking your dream wedding celebration.
                    </div>
                    <div className='w-full text-center pt-4'>
                        <button className='p-3 bg-[#aa824a] rounded-xl text-black font-semibold hover:bg-[#9f773f]'>
                            Book now
                        </button>
                    </div>

                </div> 
 
            </div>
            
        </div>
    </div>
  )
}

export default BookingRoomEvent
