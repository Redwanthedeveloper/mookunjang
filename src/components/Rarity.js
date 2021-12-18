import React from 'react';
import rarityImage from '../assets/images/rarity.png';
const Rarity = () => {
  return (
    <>
      <div className='rarity mt-24' id='rarity'>
        <div className='container mx-auto px-4'>
          <div className='rarity__top grid grid-cols-1 lg:grid-cols-3 lg:gap-6 px-6 items-center'>
            <div className='rarity__content lg:col-span-2'>
              <h1 className='font-normal text-4xl text-center pb-6 lg:pb-12 text-white lg:text-left lg:text-5xl'>
                Over 50 unique Flippie attributes
              </h1>
              <p className='text-center text-white text-base lg:text-left leading-8 lg:text-xl'>
                Each Flippie is unique and special! There are premium Flippies
                in the community as well. Flippies are generated from over 50
                attributes based on rarity, there is never the same Flippie.
                From hats, glasses, clothes, mouthpieces to even designer
                clothes! The rarer the attributes, the rarer your Flippie will
                be!
                <br />
                <br />
                <span>Check out the rarity list below!</span>
              </p>
            </div>
            <div className='rarity__image self-center lg:col-span-1 mx-auto'>
              <img src={rarityImage} alt='' className='max-w-full' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Rarity;
