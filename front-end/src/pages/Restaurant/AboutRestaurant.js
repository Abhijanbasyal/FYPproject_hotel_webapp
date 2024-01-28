import React from 'react'
import AboutRestaurantImage from '../../assets/RestaurantImage/AboutRestaurant.jpg'

const AboutRestaurant = () => {
  return (
    <div className='relative bg-[#141414] w-full overflow-hidden '>
      {/* for whole */}
      <div className='flex flex-col'>
        {/* content 1 */}
        <div className='flex flex-col mini:flex-row'>
          {/* image */}
          <div className='mini:w-[50%]'>
            <div className='text-[#c9c6c2] text-center mini:text-left mt-2 pt-4 px-12 font-serif uppercase'>International Cuisine</div>
            <img src={AboutRestaurantImage} alt="" className='w-full p-8 opacity-70 hover:opacity-100'/>
          </div>

          {/* description */}
          <div className='flex flex-col flex-wrap mini:w-[50%] p-8'>
            
            <div className='text-2xl text-[#b1b1b1] font-bold font-serif uppercase text-center mini:text-left'>
              Restaurants
            </div>
            <div className='text-4xl text-[#ffffff] font-bold uppercase text-center mini:text-left '>Elevating Culinary Excellence: A Taste Journey at Hotel Kewton</div>
            <div className='text-xl text-[#ad833f] font-thin mt-8 text-center mini:text-left'>             
                Welcome to our beautiful culinary sanctuary, where every dish is a celebration of flavors and passion meets plate.
                We at Hotel Kewotn take great pleasure in creating dining experiences that are above and above the norm. Our 
                extensive menu, carefully selected by talented chefs, offers a culinary adventure over a range of flavors, starting 
                with delectable appetizers and ending with decadent desserts. Take in the warm and welcoming atmosphere that perfectly 
                creates the ideal backdrop for wonderful times spent with loved ones, friends, or that someone special. You're welcome
                to Hotel Kewton for a symphony of culinary pleasures and to enjoy the craftsmanship of our kitchen, whether 
                you're looking for a casual meal or a formal dining experience.
            </div>
            <div className='text-[#ad833f] font-thin mt-4 text-center mini:text-left'>
                Savor a gastronomic adventure at Hotel Kewton, where our dedication to excellence and farm-to-table
                concept ensures dishes that are fresh, sustainable, and superb. Our cuisine exhibits a commitment to culinary 
                quality with dishes ranging from inventive creations to signature classics. Come enjoy an incredible experience with us , 
                where every meal is a work of art.
            </div>
              
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutRestaurant
