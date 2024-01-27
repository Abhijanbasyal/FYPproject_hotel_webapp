import React from 'react'
import Badge1 from '../../assets/bestbadge.png'
import Badge2 from '../../assets/servicebadge.png'
import Badge3 from '../../assets/naturalbadg.png'

const Badge = () => {
  return (
    <div className='relative  bg-black/40 mini:h-screen flex-col'>
      <div className='flex flex-col items-center '>
          <div className='p-4 mini:p-12 text-4xl text-center mini:text-6xl font-bold text-amber-400'>
            THE KEWTON HOTEL RECOGNITION
          </div>
          <div className='text-center mini:px-60 mini:text-2xl mini:pt-2'>
            Welcome to The Kewton Hotel, a realm of distinction where excellence meets recognition. Our 
            commitment to unparalleled hospitality and exceptional service has earned us prestigious 
            accolades, symbolized with the distinguished badges: 
          </div>
      </div>
      <br />
      <div className='flex flex-col mini:flex-row mini:justify-between mini:pt-20 overflow-hidden mini:px-20 mini:space-x-14 mini:h-[35rem]'>
        
        {/* for best badge */}
        <div className='mini:relative mini:w-[40rem] mini:h-[17rem] group'>
          <div className='flex flex-col items-center justify-between p-4 bg-black/80 border-2 rounded-3xl group-hover:border-transparent'>
            <div className=''>
              <img src={Badge1} width={200} alt='' className='h-[12.5rem]'/>
            </div>
            <div className='p-6 text-3xl text-center'>
              BEST HOTEL OF THE YEAR 
              (2021)
            </div>
            <div className='hidden mini:absolute mini:h-full mini:w-full mini:flex mini:items-center mini:justify-center mini:rounded-3xl mini:-bottom-20 mini:bg-white/95 mini:border-8 mini:border-yellow-600 group-hover:-bottom-20 mini:opacity-0 group-hover:opacity-100  transition-all duration-300'>
                 
                 <p className='text-center p-3 text-lime-600 text-xl font-semibold'>

                    Presenting The Best Badge, our esteemed award that symbolizes our unwavering commitment to quality. This 
                    emblem stands for our unrelenting dedication to giving you the greatest possible experience in every way.
                    Come see for yourself why we are the best when it comes to quality and service.

                 </p>
            </div>   
          </div>
        </div>


        {/* for top service badge */}
        <div className='mini:relative mini:w-[40rem] mini:h-[17rem] group'>
          <div className='flex flex-col items-center justify-between p-4 bg-black/80 border-2 rounded-3xl group-hover:border-transparent'>
            <div className=''>
              <img src={Badge2} width={200} alt='' />
            </div>
            <div className='p-6 text-3xl text-center'>
              TOP SERVICE HOTEL OF THE YEAR 
              (2022)
            </div>
            <div className='hidden mini:absolute mini:h-full mini:w-full mini:flex mini:items-center mini:justify-center mini:rounded-3xl mini:-bottom-20 mini:bg-white/95 mini:border-8 mini:border-yellow-600 group-hover:-bottom-20 mini:opacity-0 group-hover:opacity-100  transition-all duration-300'>
                 
                 <p className='text-center p-3 text-lime-600 text-xl font-semibold'>
                  Presenting the experience with our Top Service Badge, a representation of our dedication to providing 
                  unmatched hospitality. Our committed team goes above and beyond to make sure you're satisfied, providing outstanding service 
                  that goes above and beyond. Come join us, where we promise greatness rather than just a standard.

                 </p>
            </div>   
          </div>
        </div>

        {/* for natural food badge */}
        <div className='mini:relative mini:w-[40rem] mini:h-[17rem] group'>
          <div className='flex flex-col items-center justify-between p-4 bg-black/80 border-2 rounded-3xl group-hover:border-transparent'>
            <div className=''>
              <img src={Badge3} width={200} alt='' />
            </div>
            <div className='p-6 text-3xl text-center'>
              NATURAL DELICIOUS FOOD OF THE YEAR
              (2023)
            </div>
            <div className='hidden mini:absolute mini:h-full mini:w-full mini:flex mini:items-center mini:justify-center mini:rounded-3xl mini:-bottom-20 mini:bg-white/95 mini:border-8 mini:border-yellow-600 group-hover:-bottom-20 mini:opacity-0 group-hover:opacity-100  transition-all duration-300'>
                 
                 <p className='text-center p-3 text-lime-600 text-xl font-semibold'>
                    Presenting our Natural Foods Badge which shows the goodness and freshness of natural foods. We take great 
                    pleasure in finding the best, regionally produced foods to craft a cuisine that showcases our commitment to sustainability
                    and good health. Savor a gastronomic adventure where each dish honors the abundance of nature.

                 </p>
            </div>   
          </div>
        </div>


      </div>
    </div>
  )
}

export default Badge
