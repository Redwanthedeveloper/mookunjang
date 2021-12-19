import React from 'react';
import banner from '../assets/images/banner.gif';

const Banner = () => {
  return (
    <>
      <div className='banner h-[28rem] relative'>
        <div className='container mx-auto'>
          <div className='banner__inner flex flex-col gap-6 justify-center items-center h-full absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 w-full px-6'>
            <div
              className='banner__image__wrapper flex'
              data-aos='fade-down'
              data-aos-duration='1200'
            >
              <img
                src={banner}
                alt=''
                className='max-w-full w-28 lg:w-40 rounded-lg transform -rotate-12'
              />
              <img
                src={banner}
                alt=''
                className='max-w-full w-28 lg:w-40 rounded-lg'
              />
              <img
                src={banner}
                alt=''
                className='max-w-full w-28 lg:w-40 rounded-lg transform rotate-12'
              />
            </div>
            <h2 className='font-bold text-4xl text-white lg:pt-12'>
              Mint a Doodle
            </h2>
            <p className='text-center text-base  text-white'>
              0/1000 Doodles left at 0.123 ETH each
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
