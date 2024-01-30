import React, { useState, useTransition } from 'react';
import InstagramSlider from '../../assets/Contactimage/instagramslider.jpg';
import FacebookSlider from '../../assets/Contactimage/facebookslider.jpg';
import TwitterSlider from '../../assets/Contactimage/twitterslider.jpg';
import YoutubeSlider from '../../assets/Contactimage/youtubeSlider.png';


import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

import { EffectCube, Pagination } from 'swiper/modules';

const ContactusForm = () => {
    const [contactData, setContactData] = useState({
        Name: '',
        Email: '',
        Phone: '',
        Message: '',
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setContactData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    const mediaslides = [
        {
            image: InstagramSlider,
            description: <div>instagram</div>,
        },
        {
            image: FacebookSlider,
            description: <div>facebook</div>,
        },
        {
            image: TwitterSlider,
            description: <div>twitter</div>,
        },
        {
            image: YoutubeSlider,
            description: <div>youtube</div>,
        },
    ];
    
    return (
        <div className='relative w-full overflow-hidden'>
            <div className='bg-[#141414] h-full w-full flex justify-around p-1 mini:p-20'>
                <div className='bg-[#141414]   shadow-gray-100 shadow-inner   h-full w-full rounded-3xl p-2 flex flex-col '>
                    
                    
                    {/* title */}
                    <div className='text-center text-2xl mini:text-4xl text-[#c9c6c2] font-bold flex flex-col justify-center items-center p-8'>
                        <div className='uppercase'>Contact Hotel Kewton</div>
                        <div className='text-xl mini:text-2xl font-thin'>Where Kindness Answers Your Questions</div>
                    </div>
                    
                    {/* Main div for containing the content image slider and form */}
                    <div className='flex  flex-wrap  p-1 mini:p-12  '>
                        

                    
                        <div className='h-full flex flex-col  w-full mini:w-1/2 p-2 border-white/20 border-solid border-2 rounded-t-[7rem] mini:rounded-l-[7rem] shadow-lg shadow-white'>
                            <div className='text-center text-3xl font-bold text-gray-400 p-4 '>
                                SAY HELLO!
                            </div>
                            {/* for form */}
                            <div className=' '>
                                <div className='space-y-4 p-2  text-center '>
                                    <div className='relative flex text-center justify-around'>
                                        <input
                                            type='text'
                                            placeholder='Name'
                                            className=' w-80 h-full text-gray-800 peer placeholder-transparent focus:outline-none p-4 rounded-3xl  border-2xl '
                                            id='Name'
                                            value={contactData.Name}
                                            onChange={handleChange}
                                            />
                                        <label
                                            className={`absolute flex justify-center uppercase  top-[-0.2rem] text-[1.2rem] text-gray-500  peer-focus:top-[-0.2rem] peer-focus:text-[0.9rem] peer-placeholder-shown:top-[1rem] font-bold  transition-all duration-700   ${contactData.Name ? 'peer-focus:text-blue-700 lowercase' : 'peer-focus:text-green-700 lowercase '
                                        }` }
                                        htmlFor='Name'
                                        >
                                            Name
                                        </label>
                                    </div>
                                    <div className='relative flex text-center justify-around'>
                                        <input
                                            type='email'
                                            placeholder='Email'
                                            className=' w-80 h-full text-black peer placeholder-transparent focus:outline-none p-4 rounded-3xl border-[#] border-2xl '
                                            id='Email'
                                            value={contactData.Email}
                                            onChange={handleChange}
                                        />
                                        <label
                                            className={`absolute flex justify-center uppercase  top-[-0.2rem] text-[1.2rem] text-gray-500  peer-focus:top-[-0.2rem] peer-focus:text-[0.9rem] peer-placeholder-shown:top-[1rem] font-bold  transition-all duration-700   ${contactData.Email ? 'peer-focus:text-blue-700 lowercase' : 'peer-focus:text-green-700 lowercase '
                                         }` }
                                            htmlFor='Email'
                                        >
                                            email
                                        </label>
                                    </div>
                                    <div className='relative flex text-center justify-around'>
                                        <input
                                            type='text'
                                            placeholder='Phone'
                                            className=' w-80 h-full text-black peer placeholder-transparent focus:outline-none p-4 rounded-3xl border-[#] border-2xl '
                                            id='Phone'
                                            value={contactData.Phone}
                                            onChange={handleChange}
                                        />
                                        <label
                                            className={`absolute flex justify-center uppercase  top-[-0.2rem] text-[1.2rem] text-gray-500  peer-focus:top-[-0.2rem] peer-focus:text-[0.9rem] peer-placeholder-shown:top-[1rem] font-bold  transition-all duration-700   ${contactData.Phone ? 'peer-focus:text-blue-700 lowercase' : 'peer-focus:text-green-700 lowercase '
                                         }` }
                                            htmlFor='Phone'
                                        >
                                            Phone
                                        </label>
                                    </div>
                                    <div className='relative flex text-center justify-around'>
                                        <textarea
                                            type='text'
                                            placeholder='Message'
                                            className=' w-80 h-full text-black peer placeholder-transparent focus:outline-none p-4 rounded-3xl border-[#] border-2xl '
                                            id='Message'
                                            rows={4}
                                            value={contactData.Message}
                                            onChange={handleChange}
                                        />
                                        <label
                                            className={`absolute flex justify-center uppercase  top-[-0.2rem] text-[1.2rem] text-gray-500  peer-focus:top-[-0.2rem] peer-focus:text-[0.9rem] peer-placeholder-shown:top-[1rem] font-bold  transition-all duration-700   ${contactData.Message ? 'peer-focus:text-blue-700 lowercase' : 'peer-focus:text-green-700 lowercase '
                                         }` }
                                            htmlFor='Message'
                                        >
                                            Message
                                        </label>
                                    </div>
                                    <div className=''>
                                        <button className='px-8 py-4 uppercase bg-black rounded-[8rem] shadow-inner shadow-white transition duration-200 hover:bg-white/20 hover:scale-90'>Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* for image slider */}
                        <div className='overflow-hidden   w-full mini:w-1/2 flex flex-col border-white/20 border-solid border-2 rounded-b-[7rem] mini:rounded-r-[7rem]  mini:rounded-e-3xl shadow-lg shadow-white'>
                            <div className='text-center text-3xl font-bold text-gray-400 p-4 uppercase'>Connect with us</div>
                            <div className='pt-2 mini:p-12'>
                                <Swiper
                                    effect={'cube'}
                                    modules={[Pagination, EffectCube]}
                                    grabCursor={true}
                                    cubeEffect={{
                                        shadow: true,
                                        slideShadows: true,
                                        shadowOffset: 0,
                                        shadowScale: 20,
                                    }}
                                    loop
                                    autoplay={{ delay: 2000 }}
                                    slidesPerView={1}
                                    className="w-[15rem] h-[15rem] "
                                >
                                    {mediaslides.map((slide) => (
                                        <SwiperSlide key={slide} className=''>
                                            <div className='w-full h-full bg-[#141414] rounded-3xl shadow-gray-200 shadow-2xl opacity-80 hover:opacity-100 '>
                                                <img src={slide.image} alt='' className='object-fit w-full h-full absolute rounded-3xl ' />
                                                <div className='relative text-xl flex flex-col w-full h-full  justify-end text-center  font-bold uppercase text-yellow-300 '>{slide.description}</div>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                            <div className='font-thin  text-center p-12 mini:p-0'>
                                Connect with Hotel Kewton through our social media platforms, and let's share the joy of hospitality together.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactusForm;
