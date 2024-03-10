import React, {useEffect, useState} from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/logo.png';
import { AiOutlineMenu } from "react-icons/ai";
import { IoCartSharp } from "react-icons/io5";
import { IoStar } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import './Navbar.css';

const Navbar = () => {
    const [mainnav, setMainNav] = useState(false)
    const [secondnav,setSecondNav] = useState(false)
    const [currentTime, setCurrentTime] = useState('');
    const [currentDate, setCurrentDate] = useState('');
    const [currentLocation, setCurrentLocation] = useState('');
    const [scrolling, setScrolling] = useState(false);

    if (typeof window !== "undefined") {
        window.addEventListener("scroll", function () {
          if (this.scrollY > 2) {
            setMainNav(false);
            setSecondNav(false);
          } 
        
        });
    
    
      }

    const handleMainNav = () => {
        setMainNav(!mainnav)
        setSecondNav(false)
    }

    const handleSecondNav = () => {
        setSecondNav(!secondnav)
        setMainNav(false)
    }

    useEffect(() => {
        const links = document.querySelectorAll('.nav_link');
    
        function activeLink(linkActive) {   
          links.forEach((link) => {
            link.classList.remove('active');
            
        });
        linkActive.classList.add('active');
        }
    
        links.forEach((link) => {     
               
          link.addEventListener('click', (event) => {
            activeLink(link);
          });
        });

       
        return () => {
            
        
            links.forEach((link) => {
            link.removeEventListener('click', (event) => {
            
              activeLink(link);
            });
          });
        };
    }, []);

    useEffect(() => {
        const updateDateTime = () => {
          const time = new Date();
          setCurrentTime(time.toLocaleTimeString());
          setCurrentDate(time.toLocaleDateString());
        };
    
        const updateLocation = () => {
          navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords;
            setCurrentLocation(`Latitude: ${latitude}, Longitude: ${longitude}`);
          }, (error) => {
            setCurrentLocation('Location unavailable');
          });
        };
    
        const intervalId = setInterval(() => {
          updateDateTime();
          updateLocation();
        }, 1000);
    
        return () => {
          clearInterval(intervalId);
        };
      }, []);

      useEffect(()=>{
        const handleScroll = () => {
            if (window.scrollY > 10 ) {
              setMainNav(false);
              setSecondNav(false);
              setScrolling(true);
            } else {
              setScrolling(false);
            }
          };
          window.addEventListener('scroll', handleScroll);
          return () => {
            
            window.removeEventListener('scroll', handleScroll);
          };
      })

    

  return (
     <div className={`absolute z-40 bg-black/60 w-full flex-col overflow-hidden  ${scrolling ? 'mini:h-[7.4rem] mini:sticky mini:top-0 ease-in-out duration-1000' : 'h-44'}`}>

        <div className={`flex justify-between items-center  ${scrolling ? 'bg-black' : 'bg-black/80'}`} >
           

            {/*link to home pagehome page */}
            <a href='/'>

                {/*title and logo*/}
                <div className='flex justify-between items-center w-40 py-8 '>
                    {/* Logo */}
                    <div className='ml-4'>
                        <img src={Logo}width ={50} alt='Hotel kewton logo'></img>
                    </div>
                    {/* Title */}
                    <div className = "Title font-extrabold"> 
                        <h2>KEWTON</h2>
                        <h2>KEWTON</h2>
                    </div>
                </div>
            </a>

            <div className='hidden mini:flex ml-20'>

                <div className='mini:nav'>
                    {/* linking to all page */}
                    <ul className=' mini:flex mini:nav_links '>
                        <NavLink to='/' className='nav_link p-4 text-[22px]  w-36 text-center font-bold hover:scale-150 ease-in-out duration-300  '>
                            <li className='pageName1'>Home</li>
                        </NavLink>
                        <NavLink to='/recreation' className='nav_link p-4 text-[22px]  w-36 text-center font-bold hover:scale-150 ease-in-out duration-300   '>
                            <li className='pageName2'>Recreation</li>
                        </NavLink>
                        <NavLink to='/room' className='nav_link p-4 text-[22px]  w-36 text-center font-bold hover:scale-150 ease-in-out duration-300 '>
                            <li className='pageName3'>Room</li>
                        </NavLink>
                        <NavLink to='/restaurant' replace={true} className='nav_link p-4 text-[22px] w-36  text-center font-bold hover:scale-150 ease-in-out duration-300   '>
                            <li className='pageName4'>Restaurant</li>
                        </NavLink>
                        <NavLink to='/contact' className='nav_link p-4 text-[22px] w-36  text-center font-bold hover:scale-150 ease-in-out duration-300  '>
                            <li className='pageName5'>Contact</li>
                        </NavLink>
                        
                        
                    </ul>
                    
                </div>
            </div>
            <div className='mt-2 flex h-14 space-x-2 p-2 mini:space-x-6 mini:mr-6'>
                <div className='text-4xl mini:text-4xl'>
                    <IoCartSharp className='' />
                </div>
                
                <div className='text-4xl mini:text-4xl '>
                    <NavLink  to ='/username'>
                        <CgProfile  className=' hover:text-yellow-400 ease-in-out duration-150 '/>
                    </NavLink> 
                </div>
            </div>
            
            
        </div>

        <div className='hidden mini:flex justify-between items-center h-14 '>
            <div className='w-[23rem] ml-5 flex items-center border-r-4 border-r-lime-600 mt-1 overflow-hidden'>
                <span className='text-orange-300 font-semibold w-52 p-3 uppercase'>
                    <span>Date:</span> {currentDate}
                </span>
                <span className='text-orange-300  font-semibold w-52 p-3 uppercase'>
                    <span>Time:</span> {currentTime}
                </span>
            </div>
            {/* Secondary menu */}
            <div className='mini:flex  mini:mt-1 overflow-hidden'>
                <ul className='flex font-semibold'>
                    <NavLink to='/blog'>
                        <li className='text-2xl px-10 py-2 border-r-2 border-r-white'>Blog</li>
                    </NavLink>
                    <NavLink to='/event'>
                        <li className=' text-2xl px-10 py-2 border-r-2 border-r-white'>Event</li>
                    </NavLink>
                    <NavLink to='/service'>
                    <li className=' text-2xl px-10 py-2'>Service</li>
                    </NavLink>
                </ul>
            </div>
            <div className='w-[24rem] flex items-center  mt-1 border-l-4 border-l-lime-600 overflow-hidden '>
                <span className='text-orange-300   font-semibold uppercase p-3 '>{currentLocation}</span>
            </div>
        </div>


        {/* for mobile responsive Navbar */}
        <div className='flex justify-center w-screen h-[60px] mini:hidden'>

            {/* for main menu */}
            <div className='flex space-x-2 pt-6 pl-4 w-[50%] border-r-2 border-r-white cursor-pointer mini:hidden' onClick={handleMainNav}>
                <AiOutlineMenu size={20}/><span className='font-bold'>Main Menu</span>
            </div>
            <div className= {mainnav ? 'fixed top-44 h-96 left-0 w-full bg-black/100 mini:hidden': 'fixed left-[-100%] mini:hidden'}>
                <ul className='pt-14 uppercase p-4'>
                    <NavLink to='/'>
                        <li className='p-4 border-b text-xl'>Home</li>
                    </NavLink>
                    <NavLink to='/recreation'>
                        <li className='p-4 border-b text-xl'>Recreation</li>
                    </NavLink>
                    <NavLink to='/room'>
                        <li className='p-4 border-b text-xl'>Room</li>
                    </NavLink>
                    <NavLink to='/restaurant'>
                        <li className='p-4 border-b text-xl'>Restaurant</li>
                    </NavLink>
                    <NavLink to='/contact'>
                        <li className='p-4 text-xl'>Contact</li>
                    </NavLink>

                </ul>
            </div>

        
            {/* for secondary menu */}
            <div className='flex space-x-2 pt-6 pl-2 w-[50%] mini:hidden' onClick={handleSecondNav}>
                <IoStar size={20}/><span className='font-bold'>Second Menu</span>
            </div>
            <div className={secondnav? 'fixed top-44 left-0 h-96 w-full bg-black/100 cursor-pointer  mini:hidden ' : 'fixed left-[30000rem] mini:hidden'}>
                <ul className='pt-20 uppercase p-4 '>
                    <li className='p-4 border-b-2 border-blue-700 text-xl text-center'>Blog</li>
                    <li className='p-4 border-b-2 border-blue-700 text-xl text-center'>Event</li>
                    <li className='p-4  text-xl text-center'>Service</li>
                </ul> 
                <p className=' p-2 text-center font-semibold  '>
                    Welcome to our Secondary Menu!
                    <br /> 
                    Your gateway to additional offerings and noteworthy updates.
                </p>
            </div>
        
        </div>
 
    </div>
  )
}

export default Navbar
