import React from 'react'
import {  Link } from 'react-router-dom';

const Login = () => {

  return (
    <div className='relative h-screen w-screen bg-black/80 flex justify-center items-center pt-20 mini:p-0 overflow-hidden'  > 
        <div className='flex  flex-col bg-[#121212]  p-4 rounded-3xl shadow-lg shadow-gray-300'>
            {/* <div className='flex justify-end'>
                x
            </div> */}
            <div className='text-[#87888f] uppercase font-bold text-center p-4 text-4xl'>
                Login
            </div>

            <div className='p-4'>
                {/* <span className='text-[#505050] '>Username</span> */}
                <input type='text'  className='bg-[#1c1c1c] p-3 rounded border-white/20 border-2 w-full' placeholder='username'/>
               
            </div>
            <div className='p-4'>
                {/* <span className='text-[#505050] '>password</span> */}
                <input type='text'  className='bg-[#1c1c1c] p-3 rounded border-white/20 border-2 w-full' placeholder='password'/>
               
            </div>
            <div className='flex justify-center items-center pt-4'>

                <button className='bg-[#09ff5c] px-12 py-4 rounded-3xl transform  hover:scale-125 duration-700  ease-in-out hover:shadow-lg hover:shadow-slate-400'>
                    <b className='text-[#095216]'>login</b>
                </button>
            </div>
            <div className='text-[#4d4d4d] pt-4 text-center'> 
                Don't have any account ? <Link to='/signup' className='text-orange-400'>Sign UP</Link>
            </div>
        </div>
      
    </div>
  )
}

export default Login
