import React from 'react';
import image1 from '../assets/images/team/1.png';
import image2 from '../assets/images/team/2.png';
import image3 from '../assets/images/team/3.png';

const Team = () => {
  return (
    <>
      <div className='team lg:mt-24 py-12' id='team'>
        <div className='container mx-auto'>
          <div className='team__inner px-6'>
            <h1 className='font-bold text-2xl text-center pb-6 lg:pb-12 text-white lg:text-center lg:text-3xl uppercase '>
              Team
            </h1>
            <div className='team__wrapper grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-12'>
              <div
                className='team__content bg-[#7eaefb78] border-2 border-gray-300 py-8 px-4 rounded-2xl '
                data-aos='fade-up'
                data-aos-duration='1000'
              >
                <img
                  src={image1}
                  alt=''
                  className='max-w-full rounded-full w-52 mx-auto'
                />
                <h3 className='text-center text-lg lg:text-xl uppercase font-extrabold py-4 text-gray-300'>
                  Dr. Toadler
                </h3>
              </div>
              <div
                className='team__content bg-[#7eaefb78] border-2 border-gray-300 py-8 px-4 rounded-2xl '
                data-aos='fade-up'
                data-aos-duration='1200'
              >
                <img
                  src={image2}
                  alt=''
                  className='max-w-full rounded-full w-52 mx-auto'
                />
                <h3 className='text-center text-lg lg:text-xl uppercase font-extrabold py-4 text-gray-300'>
                  Nerd. toadler
                </h3>
              </div>
              <div
                className='team__content bg-[#7eaefb78] border-2 border-gray-300 py-8 px-4 rounded-2xl '
                data-aos='fade-up'
                data-aos-duration='1400'
              >
                <img
                  src={image3}
                  alt=''
                  className='max-w-full rounded-full w-52 mx-auto'
                />
                <h3 className='text-center text-lg lg:text-xl uppercase font-extrabold py-4 text-gray-300'>
                  Baby. toadler
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
