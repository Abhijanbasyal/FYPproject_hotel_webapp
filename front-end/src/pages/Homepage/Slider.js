import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import SwiperCore from 'swiper';
import  { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


import Pool from '../../assets/Homeimage/pool.jpg';
import Swimming from '../../assets/Homeimage/swimming.jpg';
import Fooddeliever from '../../assets/Homeimage/fooddeliever.jpg';
import Freewifi from '../../assets/Homeimage/freewifi.jpg';

SwiperCore.use([Navigation, Pagination, Autoplay]);

const Slider = () => {
  const slides = [Pool, Swimming, Fooddeliever, Freewifi];
  const content = [
    { description: 
        <div className='flex flex-col'>
          <div className='text-2xl p-4  mini:text-4xl  mini:p-12 font-bold text-yellow-600'>
            Gaming Haven
          </div>
          <div className='text-xl p-2 mini:text-2xl mini:p-14 text-justify mini:text-justify mini:h-full'>
            <p>
              Enter a realm of relaxation and competitiveness with our vast array of gaming options. With activities like snooker and pool, 
              as well as in the carromboard, Kewton Hotel provides the ideal balance of fun and relaxation. Our gaming section is created 
              for your fun, whether you're a pool enthusiast, a strategic snooker player, or you just like the standard smoothness of carrom.
            </p>
          </div>
        </div> 
    },
    { description: 
      <div className='flex flex-col'>
        <div className='text-2xl p-4  mini:text-4xl  mini:p-12 font-bold text-yellow-600'>
          Swimming Paradise
        </div>
        <div className='text-xl p-2 mini:text-2xl mini:p-14 text-justify mini:text-justify mini:h-full'>
          <p >
          Slide into our warm, inviting pool for a revitalizing dip. Our pool offers the perfect environment for a morning workout or an 
          afternoon getaway. Immerse yourself in the pristine waters and feel at peace right in the middle of Kewton Hotel.
          </p>
        </div>
      </div> 
    },
    { description: 
      <div className='flex flex-col'>
        <div className='text-2xl p-4  mini:text-4xl  mini:p-12 font-bold text-yellow-600'>
          Delicious Food Delivered
        </div>
        <div className='text-xl p-2 mini:text-2xl mini:p-14 text-justify mini:text-justify mini:h-full'>
          <p >
          Savor the best food experiences without venturing from the comfort of your hotel. Our meal delivery services provide a wide 
          selection of delectable meals right to your door. Savor fine cuisine and mouthwatering flavors that are customized to 
          suit your taste buds.
          </p>
        </div>
      </div> 
    },
    { description: 
      <div className='flex flex-col'>
        <div className='text-2xl p-4  mini:text-4xl  mini:p-12 font-bold text-yellow-600'>
          Uninterrupted Connectivity
        </div>
        <div className='text-xl p-2 mini:text-2xl mini:p-14 text-justify mini:text-justify mini:h-full'>
          <p >
          Enjoy continuous connectivity with free high-speed Wi-Fi in every one of our rooms. Our free Wi-Fi makes it possible for you 
          to work effectively, stream your preferred material, and maintain uninterrupted communication with loved ones whether you're
            here for business or for pleasure.
          </p>
        </div>
      </div> 
    },
    
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  const handleSlideChange = (swiper) => {
    setCurrentSlide(swiper.activeIndex);
  };

  return (
    <div className='relative  w-screen overflow-hidden bg-[#141414]'>
      

      <div className='text-center text-5xl font-bold pt-6'>
        KEWTON HOTEL AWESOME FACILITIES
      </div>

      <div className='relative overflow-hidden h-full mt-2 mini:m-12 bg-gray-900 '>
        <Swiper
          navigation
          pagination={{ clickable: true }}
          loop
          autoplay={{ delay: 2000 }}
          onSlideChange={handleSlideChange}
          className=''
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className='flex flex-col mini:flex-row w-full h-full'>
                {/* image */}
                <div className='w-full p-2'>
                  <img src={slide} alt={`slide-${index}`} className='h-full w-full object-cover' />
                </div>
                {/* description */}
                <div className='w-full sm:w-1/2 p-4'>
                  {content[index].description}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Sliding button */}
        <div className='absolute flex h-full w-full justify-between items-center '>
          <div className=''>
            <button onClick={() => setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1)}>
              <FaArrowLeft />
            </button>
          </div>
          <div className=''>
            <button onClick={() => setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1)}>
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
