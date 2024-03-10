import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Menu = () => {
  return (
    <div className='relative  '>
      {/* Background image */}
      <div className='bg-[#141414] flex flex-col w-full h-full  '>
        <div className='shadow-white  shadow-inner space-y-4'>
          <div className='flex flex-col  ' >
            <div className='text-2xl text-[#b1b1b1] font-bold font-serif uppercase pt-8 text-center' >Menu</div>
            <div className='text-4xl text-[#ffffff] font-bold uppercase pt-2  text-center'>delicious food forever</div>
          </div>
          <div className='flex pt-4 justify-evenly  uppercase text-[#ad833f] font-bold  border-b border-white/10 '>
            <NavLink to='salad' activeClassName='' ><div>Salad </div></NavLink>
            <NavLink to='dish' activeClassName=''  ><div>Dish </div></NavLink>
            <NavLink to='drinks' activeClassName='' ><div>Drinks</div></NavLink>
            <NavLink to='desert' activeClassName='' ><div>Desert </div></NavLink>
            <NavLink to='beverage' activeClassName='' ><div>Beverage </div></NavLink>
          </div>
          <div>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
