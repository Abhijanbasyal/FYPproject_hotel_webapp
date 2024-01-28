import React from 'react'

const ContactusForm = () => {
  return (
    <div className='relative w-full '>
        <div className='bg-[#141414] h-full w-full flex justify-around p-2 mini:p-20'>

            <div className='bg-[#141414]  shadow-gray-100 shadow-inner   h-full w-full rounded-3xl p-12'>
                {/* title */}
                <div className='text-center  text-4xl text-[#c9c6c2] font-bold flex flex-col justify-center items-center p-2'>
                    <div className='uppercase '>
                        Contact Hotel Kewton
                    </div>
                    <div className='text-2xl font-thin'>
                        Where Kindness Answers Your Questions
                    </div>                 
                </div>
                <div className='flex flex-wrap bg-[#141414] justify-around p-4 '>
                    
                    {/* for form */}
                    <div className='bg-[#141414] flex flex-wrap justify-around items center'>

                        <div className='space-y-4 p-4'>
                            <div className='relative flex p-2 '>
                                <input type='text' placeholder='Name' className=' w-full h-full text-black peer placeholder-transparent focus:outline-none p-4 ' id='id'/>
                                <label className='absolute flex justify-center mt-4 text-black peer-focus:text-orange-400 peer-focus:mt-0' htmlFor='id'>
                                    Name
                                </label>
                                
                            </div>
                            <div className='relative flex p-2 '>
                                <input type='email' placeholder='Name' className=' w-full h-full text-black peer placeholder-transparent focus:outline-none p-4 '/>
                                <label className='absolute flex justify-center mt-4 text-black z-10 peer-focus:text-orange-400 peer-focus:mt-0 '>
                                    email
                                </label>
                                
                            </div>
                            <div className='relative flex'>
                                <input type='text' className=' w-full h-full   text-black '/>
                                <label className='absolute text-black z-10 h-full'>
                                    Phone
                                </label>
                            </div>
                            <div>
                                <label>
                                    message
                                </label>
                                <textarea rows={4} />
                            </div>
                            <div>
                                <button>
                                    Submit
                                </button>
                            </div>


                        </div>
                    </div>
                    {/* for image slider */}
                    <div>
                        image slider
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default ContactusForm
