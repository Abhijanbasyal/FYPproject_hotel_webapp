import React from 'react'
import Aboutus1 from '../../assets/Homeimage/Aboutus1.jpg';
import Aboutus2 from '../../assets/Homeimage/Aboutus2.jpg';

const Aboutus = () => {
  return (
    <div className='relative bg-[#141414]  mini:flex-col'>

      <div className='flex flex-col'> 
        {/* for about us */}
        <div className='flex  flex-col mini:flex-row  bg-zinc-900'>
          <div className='flex flex-col pl-2  ' >
            <h1 className='text-center text-4xl font-bold font-serif p-2 mini:text-left '>About us</h1>
            <br />
            <div className='text-center font-thin mini:text-xl  p-2 mini:text-justify text-[#ad833f]'>
              In the Kewton Hotel, experience a seamless fusion of modern elegance and heartfelt hospitality. Our 
              goal is to deliver an experience that guests will never forget by providing elegant lodging, superb food, and a dedication to individualized 
              service. Everything about it, from the gastronomic treats to the stylish accommodations, is crafted to surpass your expectations. Come e
              njoy a stay that goes above and beyond the typical, where every minute is designed to ensure your pleasure and comfort. 

            </div>
          
          </div>

          <div className=''>
            <div className='p-8 mini:p-2 '>
              <img src={Aboutus1}  alt='' className=' mini:h-full object-cover ' />
            </div>
          </div>
        </div> 

        {/* for restaurant  introduce*/}
        <div className='flex flex-col mini:flex-row  '>
          <div className=''>
            <div className=''>
                <img src={Aboutus2}  alt='' className='pl-8 pt-2 pr-8 pb-12 h-[20rem] w-[66rem] mini:p-2  mini:h-[28rem] mini:w-[280rem] object-cover'/>
            </div>

          </div>

          <div className=' mini:pt-2 mini:pl-4'>
              <h1 className='text-4xl mini:mt-6 mini:text-4xl font-bold font-serif p-2 text-center mini:text-justify'> Delicious Food</h1>
              <div className='mt-1 font-thin text-center mini:text-left mini:text-xl p-2 text-[#ad833f]'>
                Experience a delicious voyage at Our Restaurant, where delectable tastes and friendly service come together. Savor a menu
                that our talented chefs have carefully chosen, providing a pleasant selection of perfectly prepared foods. Every mouthful, 
                from starters to main courses, demonstrates our dedication to providing an outstanding dining experience. Our warm atmosphere
                and helpful staff guarantee your pleasure, turning every visit into an unforgettable experience. 
              </div>

          </div>

        </div>
       
      </div>
      

    </div>
  )
}

export default Aboutus
