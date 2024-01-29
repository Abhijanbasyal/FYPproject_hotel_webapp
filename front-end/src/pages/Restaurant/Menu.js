import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Menu = () => {
  return (
    <div className='relative h-screen  '>
      {/* Background image */}
      <div className='bg-[#141414] flex flex-col w-full h-full '>
        <div>
          <div>
            MENU
          </div>
          <div className='flex'>
            <NavLink to='salad' activeClassName='text'><li>Salad menu</li></NavLink>
            <NavLink to='dish' activeClassName=''><li>Dish menu</li></NavLink>
            <NavLink to='drinks' activeClassName=''><li>Drinks menu</li></NavLink>
            <NavLink to='desert' activeClassName=''><li>Desert menu</li></NavLink>
            <NavLink to='beverage' activeClassName=''><li>Beverage menu</li></NavLink>
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
