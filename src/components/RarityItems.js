import React from 'react';
import skin1 from '../assets/images/skin/1.png';
import skin2 from '../assets/images/skin/2.png';
import skin3 from '../assets/images/skin/3.png';
import skin4 from '../assets/images/skin/4.png';
import skin5 from '../assets/images/skin/5.png';
import skin6 from '../assets/images/skin/6.png';
import skin7 from '../assets/images/skin/7.png';
import skin8 from '../assets/images/skin/8.png';
import skin9 from '../assets/images/skin/9.png';
import skin10 from '../assets/images/skin/10.png';

import bg1 from '../assets/images/background/1.png';
import bg2 from '../assets/images/background/2.png';
import bg3 from '../assets/images/background/3.png';
import bg4 from '../assets/images/background/4.png';
import bg5 from '../assets/images/background/5.png';

import outfit1 from '../assets/images/outfit/1.png';
import outfit2 from '../assets/images/outfit/2.png';
import outfit3 from '../assets/images/outfit/3.png';
import outfit4 from '../assets/images/outfit/4.png';
import outfit5 from '../assets/images/outfit/5.png';

import hat1 from '../assets/images/hat/1.png';
import hat2 from '../assets/images/hat/2.png';
import hat3 from '../assets/images/hat/3.png';
import hat4 from '../assets/images/hat/4.png';
import hat5 from '../assets/images/hat/5.png';
import hat6 from '../assets/images/hat/6.png';
import hat7 from '../assets/images/hat/7.png';
import hat8 from '../assets/images/hat/8.png';
import hat9 from '../assets/images/hat/9.png';
import hat10 from '../assets/images/hat/10.png';

import accessory1 from '../assets/images/accessory/1.png';
import accessory2 from '../assets/images/accessory/2.png';
import accessory3 from '../assets/images/accessory/3.png';
import accessory4 from '../assets/images/accessory/4.png';
import accessory5 from '../assets/images/accessory/5.png';
import accessory6 from '../assets/images/accessory/6.png';
import accessory7 from '../assets/images/accessory/7.png';
import accessory8 from '../assets/images/accessory/8.png';
import accessory9 from '../assets/images/accessory/9.png';
import accessory10 from '../assets/images/accessory/10.png';
import accessory11 from '../assets/images/accessory/11.png';

const RarityItems = () => {
  return (
    <>
      <div className='py-12 lg:mt-24 rarity__items' id='attributes'>
        <div className='container mx-auto'>
          <div className='items__wrapper'>
            <h1 className='text-center text-white text-2xl lg:text-3xl pt-12 lg:pt-16 font-bold uppercase'>
              skins
            </h1>
            <div className='item__list grid grid-cols-3 lg:grid-cols-6 gap-3 lg:gap-6 px-6'>
              <div className='item flex flex-col items-center justify-center'>
                <img src={skin1} alt='' className='max-w-full' />
                <h2 className='text-center font-bold text-xl text-white'>
                  Solana
                </h2>
                <p className='text-center font-normal text-gray-200'>2.54%</p>
              </div>

              <div className='item flex flex-col items-center justify-center'>
                <img src={skin2} alt='' className='max-w-full' />
                <h2 className='text-center font-bold text-xl text-white'>
                  Solana
                </h2>
                <p className='text-center font-normal text-gray-200'>2.54%</p>
              </div>

              <div className='item flex flex-col items-center justify-center'>
                <img src={skin3} alt='' className='max-w-full' />
                <h2 className='text-center font-bold text-xl text-white'>
                  Solana
                </h2>
                <p className='text-center font-normal text-gray-200'>2.54%</p>
              </div>

              <div className='item flex flex-col items-center justify-center'>
                <img src={skin4} alt='' className='max-w-full' />
                <h2 className='text-center font-bold text-xl text-white'>
                  Solana
                </h2>
                <p className='text-center font-normal text-gray-200'>2.54%</p>
              </div>

              <div className='item flex flex-col items-center justify-center'>
                <img src={skin5} alt='' className='max-w-full' />
                <h2 className='text-center font-bold text-xl text-white'>
                  Solana
                </h2>
                <p className='text-center font-normal text-gray-200'>2.54%</p>
              </div>

              <div className='item flex flex-col items-center justify-center'>
                <img src={skin6} alt='' className='max-w-full' />
                <h2 className='text-center font-bold text-xl text-white'>
                  Solana
                </h2>
                <p className='text-center font-normal text-gray-200'>2.54%</p>
              </div>

              <div className='item flex flex-col items-center justify-center'>
                <img src={skin7} alt='' className='max-w-full' />
                <h2 className='text-center font-bold text-xl text-white'>
                  Solana
                </h2>
                <p className='text-center font-normal text-gray-200'>2.54%</p>
              </div>

              <div className='item flex flex-col items-center justify-center'>
                <img src={skin8} alt='' className='max-w-full' />
                <h2 className='text-center font-bold text-xl text-white'>
                  Solana
                </h2>
                <p className='text-center font-normal text-gray-200'>2.54%</p>
              </div>

              <div className='item flex flex-col items-center justify-center'>
                <img src={skin9} alt='' className='max-w-full' />
                <h2 className='text-center font-bold text-xl text-white'>
                  Solana
                </h2>
                <p className='text-center font-normal text-gray-200'>2.54%</p>
              </div>
              <div className='item flex flex-col items-center justify-center'>
                <img src={skin10} alt='' className='max-w-full' />
                <h2 className='text-center font-bold text-xl text-white'>
                  Solana
                </h2>
                <p className='text-center font-normal text-gray-200'>2.54%</p>
              </div>
            </div>
          </div>

          <div className='items__wrapper'>
            <h1 className='text-center text-white text-2xl lg:text-3xl py-12 lg:pt-16 font-bold uppercase'>
              Backgrounds
            </h1>
            <div className='item__list grid grid-cols-3 lg:grid-cols-5 gap-3 lg:gap-6 px-6'>
              <div className='item flex flex-col items-center justify-center'>
                <img src={bg1} alt='' className='max-w-full' />
                <h2 className='text-center font-bold text-xl text-white'>
                  Solana
                </h2>
                <p className='text-center font-normal text-gray-200'>2.54%</p>
              </div>

              <div className='item flex flex-col items-center justify-center'>
                <img src={bg2} alt='' className='max-w-full' />
                <h2 className='text-center font-bold text-xl text-white'>
                  Solana
                </h2>
                <p className='text-center font-normal text-gray-200'>2.54%</p>
              </div>

              <div className='item flex flex-col items-center justify-center'>
                <img src={bg3} alt='' className='max-w-full' />
                <h2 className='text-center font-bold text-xl text-white'>
                  Solana
                </h2>
                <p className='text-center font-normal text-gray-200'>2.54%</p>
              </div>

              <div className='item flex flex-col items-center justify-center'>
                <img src={bg4} alt='' className='max-w-full' />
                <h2 className='text-center font-bold text-xl text-white'>
                  Solana
                </h2>
                <p className='text-center font-normal text-gray-200'>2.54%</p>
              </div>

              <div className='item flex flex-col items-center justify-center'>
                <img src={bg5} alt='' className='max-w-full' />
                <h2 className='text-center font-bold text-xl text-white'>
                  Solana
                </h2>
                <p className='text-center font-normal text-gray-200'>2.54%</p>
              </div>
            </div>
          </div>

          <div className='items__wrapper'>
            <h1 className='text-center text-white text-2xl lg:text-3xl py-12 lg:pt-16 font-bold uppercase'>
              hats
            </h1>
            <div className='item__list grid grid-cols-3 lg:grid-cols-6 gap-3 lg:gap-6 px-6'>
              <div className='item flex flex-col items-center justify-center'>
                <img src={hat1} alt='' className='max-w-full' />
                <h2 className='text-center font-bold text-xl text-white'>
                  Solana
                </h2>
                <p className='text-center font-normal text-gray-200'>2.54%</p>
              </div>

              <div className='item flex flex-col items-center justify-center'>
                <img src={hat2} alt='' className='max-w-full' />
                <h2 className='text-center font-bold text-xl text-white'>
                  Solana
                </h2>
                <p className='text-center font-normal text-gray-200'>2.54%</p>
              </div>

              <div className='item flex flex-col items-center justify-center'>
                <img src={hat3} alt='' className='max-w-full' />
                <h2 className='text-center font-bold text-xl text-white'>
                  Solana
                </h2>
                <p className='text-center font-normal text-gray-200'>2.54%</p>
              </div>

              <div className='item flex flex-col items-center justify-center'>
                <img src={hat4} alt='' className='max-w-full' />
                <h2 className='text-center font-bold text-xl text-white'>
                  Solana
                </h2>
                <p className='text-center font-normal text-gray-200'>2.54%</p>
              </div>

              <div className='item flex flex-col items-center justify-center'>
                <img src={hat5} alt='' className='max-w-full' />
                <h2 className='text-center font-bold text-xl text-white'>
                  Solana
                </h2>
                <p className='text-center font-normal text-gray-200'>2.54%</p>
              </div>

              <div className='item flex flex-col items-center justify-center'>
                <img src={hat6} alt='' className='max-w-full' />
                <h2 className='text-center font-bold text-xl text-white'>
                  Solana
                </h2>
                <p className='text-center font-normal text-gray-200'>2.54%</p>
              </div>

              <div className='item flex flex-col items-center justify-center'>
                <img src={hat7} alt='' className='max-w-full' />
                <h2 className='text-center font-bold text-xl text-white'>
                  Solana
                </h2>
                <p className='text-center font-normal text-gray-200'>2.54%</p>
              </div>

              <div className='item flex flex-col items-center justify-center'>
                <img src={hat8} alt='' className='max-w-full' />
                <h2 className='text-center font-bold text-xl text-white'>
                  Solana
                </h2>
                <p className='text-center font-normal text-gray-200'>2.54%</p>
              </div>

              <div className='item flex flex-col items-center justify-center'>
                <img src={hat9} alt='' className='max-w-full' />
                <h2 className='text-center font-bold text-xl text-white'>
                  Solana
                </h2>
                <p className='text-center font-normal text-gray-200'>2.54%</p>
              </div>

              <div className='item flex flex-col items-center justify-center'>
                <img src={hat10} alt='' className='max-w-full' />
                <h2 className='text-center font-bold text-xl text-white'>
                  Solana
                </h2>
                <p className='text-center font-normal text-gray-200'>2.54%</p>
              </div>
            </div>
          </div>

          <div className='items__wrapper'>
            <h1 className='text-center text-white text-2xl lg:text-3xl py-12 lg:pt-16 font-bold uppercase'>
              outfit
            </h1>
            <div className='item__list grid grid-cols-3 lg:grid-cols-5 gap-3 lg:gap-6 px-6'>
              <div className='item flex flex-col items-center justify-center'>
                <img src={outfit1} alt='' className='max-w-full' />
                <h2 className='text-center font-bold text-xl text-white'>
                  Solana
                </h2>
                <p className='text-center font-normal text-gray-200'>2.54%</p>
              </div>

              <div className='item flex flex-col items-center justify-center'>
                <img src={outfit2} alt='' className='max-w-full' />
                <h2 className='text-center font-bold text-xl text-white'>
                  Solana
                </h2>
                <p className='text-center font-normal text-gray-200'>2.54%</p>
              </div>

              <div className='item flex flex-col items-center justify-center'>
                <img src={outfit3} alt='' className='max-w-full' />
                <h2 className='text-center font-bold text-xl text-white'>
                  Solana
                </h2>
                <p className='text-center font-normal text-gray-200'>2.54%</p>
              </div>

              <div className='item flex flex-col items-center justify-center'>
                <img src={outfit4} alt='' className='max-w-full' />
                <h2 className='text-center font-bold text-xl text-white'>
                  Solana
                </h2>
                <p className='text-center font-normal text-gray-200'>2.54%</p>
              </div>

              <div className='item flex flex-col items-center justify-center'>
                <img src={outfit5} alt='' className='max-w-full' />
                <h2 className='text-center font-bold text-xl text-white'>
                  Solana
                </h2>
                <p className='text-center font-normal text-gray-200'>2.54%</p>
              </div>
            </div>
          </div>

          <div className='items__wrapper'>
            <h1 className='text-center text-white text-2xl lg:text-3xl py-12 lg:pt-16 font-bold uppercase'>
              accessory
            </h1>
            <div className='item__list grid grid-cols-3 lg:grid-cols-6 gap-3 lg:gap-6 px-6'>
              <div className='item flex flex-col items-center justify-center'>
                <img src={accessory1} alt='' className='max-w-full' />
                <h2 className='text-center font-bold text-xl text-white'>
                  Solana
                </h2>
                <p className='text-center font-normal text-gray-200'>2.54%</p>
              </div>

              <div className='item flex flex-col items-center justify-center'>
                <img src={accessory2} alt='' className='max-w-full' />
                <h2 className='text-center font-bold text-xl text-white'>
                  Solana
                </h2>
                <p className='text-center font-normal text-gray-200'>2.54%</p>
              </div>

              <div className='item flex flex-col items-center justify-center'>
                <img src={accessory3} alt='' className='max-w-full' />
                <h2 className='text-center font-bold text-xl text-white'>
                  Solana
                </h2>
                <p className='text-center font-normal text-gray-200'>2.54%</p>
              </div>

              <div className='item flex flex-col items-center justify-center'>
                <img src={accessory4} alt='' className='max-w-full' />
                <h2 className='text-center font-bold text-xl text-white'>
                  Solana
                </h2>
                <p className='text-center font-normal text-gray-200'>2.54%</p>
              </div>

              <div className='item flex flex-col items-center justify-center'>
                <img src={accessory5} alt='' className='max-w-full' />
                <h2 className='text-center font-bold text-xl text-white'>
                  Solana
                </h2>
                <p className='text-center font-normal text-gray-200'>2.54%</p>
              </div>

              <div className='item flex flex-col items-center justify-center'>
                <img src={accessory6} alt='' className='max-w-full' />
                <h2 className='text-center font-bold text-xl text-white'>
                  Solana
                </h2>
                <p className='text-center font-normal text-gray-200'>2.54%</p>
              </div>

              <div className='item flex flex-col items-center justify-center'>
                <img src={accessory7} alt='' className='max-w-full' />
                <h2 className='text-center font-bold text-xl text-white'>
                  Solana
                </h2>
                <p className='text-center font-normal text-gray-200'>2.54%</p>
              </div>

              <div className='item flex flex-col items-center justify-center'>
                <img src={accessory8} alt='' className='max-w-full' />
                <h2 className='text-center font-bold text-xl text-white'>
                  Solana
                </h2>
                <p className='text-center font-normal text-gray-200'>2.54%</p>
              </div>

              <div className='item flex flex-col items-center justify-center'>
                <img src={accessory9} alt='' className='max-w-full' />
                <h2 className='text-center font-bold text-xl text-white'>
                  Solana
                </h2>
                <p className='text-center font-normal text-gray-200'>2.54%</p>
              </div>

              <div className='item flex flex-col items-center justify-center'>
                <img src={accessory10} alt='' className='max-w-full' />
                <h2 className='text-center font-bold text-xl text-white'>
                  Solana
                </h2>
                <p className='text-center font-normal text-gray-200'>2.54%</p>
              </div>
              <div className='item flex flex-col items-center justify-center'>
                <img src={accessory11} alt='' className='max-w-full' />
                <h2 className='text-center font-bold text-xl text-white'>
                  Solana
                </h2>
                <p className='text-center font-normal text-gray-200'>2.54%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RarityItems;
