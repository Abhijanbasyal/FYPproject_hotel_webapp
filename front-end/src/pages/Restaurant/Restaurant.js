import React, { useEffect } from 'react';
import RestaurantImage from '../../assets/RestaurantImage/Restaurant.jpg';
import Footer from '../../components/Footer';
import AboutRestaurant from './AboutRestaurant';
import RestaurantSlider from './RestaurantSlider';
import Menu from './Menu';
import { useNavigate } from 'react-router-dom';


const Restaurant = () => {

  const navigate = useNavigate();

  useEffect(()=>{

    navigate('/restaurant/salad')

  },[])

  
  return (
    <div className='flex flex-col overflow-hidden' >
      <div className='w-full h-[20rem] mini:h-[24rem] '>
        <img src={RestaurantImage}  alt='' className='absolute  h-[20rem] w-full mini:h-[24rem]  object-cover z-0 top-0 opacity-90 '/>        
        <div className='absolute mt-[15rem] mini:mt-[18rem] w-full'>
          <div className='font-extrabold text-4xl mini:text-7xl drop-shadow-2xl text-center mini:text-left px-12 uppercase'>RESTAURANT</div>        
        </div>
      </div> 
      <AboutRestaurant />
      <RestaurantSlider />  
      <Menu />
      <div className='relative overflow-hidden'>
        <Footer />
      </div> 
    </div>
  )
}

export default Restaurant
