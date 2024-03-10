import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


import SliderBackgroundImage from '../../assets/RestaurantImage/SliderBackground.jpg'
import BurgerImage from '../../assets/RestaurantImage/Burger.jpg';
import CoffeeImage from '../../assets/RestaurantImage/Coffee.jpg';
import PrawndishImage from '../../assets/RestaurantImage/Prawndish.jpg';
import CocktailImage from '../../assets/RestaurantImage/Cocktail.jpg';
import HalalChickenDishImage from '../../assets/RestaurantImage/Halalchickendish.jpg';
import WhiskyImage from '../../assets/RestaurantImage/Whisky.jpg';
import SalmonImage from '../../assets/RestaurantImage/salmon.jpg';

const RestaurantSlider = () => {
  const slides = [
    {
      image: BurgerImage,
      description: <div >Savor our delicious dinner! Burger</div>,
    },
    {
      image: CoffeeImage,
      description: <div>Spreading Happiness One Cup at a Time!</div>,
    },
    {
      image: PrawndishImage,
      description: <div>Enjoy our delicious food! Prawn dish</div>,
    },
    {
      image: CocktailImage,
      description: <div>Sipping on cocktails, living the highball life.</div>,
    },
    {
      image: HalalChickenDishImage,
      description: <div>Savor the Flavor of Halal</div>,
    },
    {
      image: WhiskyImage,
      description: <div>Enjoy luxury in a whisky</div>,
    },
    {
      image: SalmonImage,
      description: <div>Savor the delicious food! Solman </div>,
    },
  ];

  return (
    <div className='relative bg-[#141414]  w-full overflow-hidden'>
        <div className='absolute'>
           <img src={SliderBackgroundImage} alt='' className='object-cover w-full h-full opacity-25' />
        </div>
        <div className='p-4 mini:p-16'>

            <h2 className='text-white text-4xl font-bold mb-4 text-center p-12 uppercase'>Our Restaurants</h2>
            <Swiper
                modules={[Navigation, Pagination]}
                loop
                autoplay={{ delay: 2000 }}
                slidesPerView={1}
                pagination={{ clickable: true }}
                navigation={{ clickable: true }}
                className="h-[30rem]"
            >
                {slides.map((slide) => (
                <SwiperSlide key={slide} className=''>
                    <div className='w-full h-full bg-[#141414] opacity-80 hover:opacity-100 border-white border-2 '>
                        <img src={slide.image} alt='' className='object-cover w-full h-full absolute ' />
                        <div className='relative text-4xl flex flex-col w-full h-full  justify-center text-center  mini:text-8xl font-bold uppercase text-[#c9c6c2] '>{slide.description}</div>
                    </div>
                </SwiperSlide>
                ))}
            </Swiper>
        </div>
    </div>
  );
};

export default RestaurantSlider;
