import React from 'react';
import logo from '../assets/images/logo.png';
const Header = () => {
  return (
    <>
      <div className='header py-8 px-6 lg:px-12' id='header'>
        <div className='header__wrapper flex justify-between items-center'>
          <div className='logo w-36 lg:w-40'>
            <img src={logo} alt='' className='max-w-full' />
          </div>
          <div className='hidden lg:block main__nav '>
            <ul className='lg:flex lg:gap-16 uppercase font-bold text-white lg:items-center bg-[#7eaefb78] py-6 px-20 rounded-full'>
              <li>
                <a href='#about' className='hover:text-[#b2b0f2]'>
                  about
                </a>
              </li>
              <li>
                <a href='#attributes' className='hover:text-[#b2b0f2]'>
                  attributes
                </a>
              </li>
              <li>
                <a href='#roadmap' className='hover:text-[#b2b0f2]'>
                  roadmap
                </a>
              </li>
              <li>
                <a href='#team' className='hover:text-[#b2b0f2]'>
                  team
                </a>
              </li>
            </ul>
          </div>
          <div className='connect bg-[#7eaefb78] lg:py-4 lg:px-12 py-4 px-8 rounded-full hover:bg-[#b2b0f2] transition-all delay-100'>
            <button className='uppercase text-white'>connect</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
