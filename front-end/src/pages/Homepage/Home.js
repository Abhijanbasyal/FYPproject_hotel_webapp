import React from 'react';
import Bghome from '../../assets/Homeimage/bghome.jpg';
import Aboutus from './Aboutus'
import Badge from './Badge';
import Slider from './Slider';
import Customerreviews from './Customerreviews';
import Gallery from './Gallery';
import Footer from '../../components/Footer'


const Home = () => {

 
  
  return (
    <div className='overflow-hidden '>
      <div className='w-full h-screen'>
        <img src={Bghome} alt='/' className=' absolute top-0 left-0 w-full z-0  h-screen ' />
        <div className='bg-black/60 absolute top-0 left-0 w-full h-screen '></div>
        <div className='absolute top-0 w-full h-full flex flex-col justify-center'>
          <div className='mt-16 mini:left-[10%] mini:max-w-[107rem] mini:m-auto absolute p-4 '>
            <p className='text-xl p-2 font-bold'>NAMASTE 🙏</p>
            <h1 className='font-extrabold text-4xl mini:text-7xl drop-shadow-2xl'>WELCOME TO KEWTON HOTEL</h1>
            <p className='max-w-[55rem] drop-shadow-2xl py-4 mini:text-xl font-semibold'>
              Where outstanding hospitality and modern elegance combine to create a seamless atmosphere of comfort and sophistication for a truly memorable stay.

            </p>
            <button className='btn w-44 uppercase mt-4 mini:p-5 mini:hover:scale-125 rounded-full mini:w-[15rem] font-bold mini:text-2xl ease-in-out duration-500'>
              Book now
            </button>
          </div>
        </div>
      </div>  
      <Aboutus />
      <Badge />        
      <Slider  />
      <Customerreviews />
      <Gallery />
      <div className='relative overflow-hidden'>
        <Footer />
      </div>  
    </div>
  
  )
}
export default Home
