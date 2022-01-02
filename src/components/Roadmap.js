import React from 'react';
import v2Image1 from '../assets/images/v2_1.png';
import v2Image2 from '../assets/images/v2_2.png';
import v2Image3 from '../assets/images/v2_3.png';
import newYork from '../assets/images/newyork.mp4';
const Roadmap = () => {
  return (
    <>
      <div className='roadmap lg:mt-24 py-12' id='roadmap'>
        <div className='container mx-auto px-4 lg:px-0'>
          <div className='roadmap__inner  px-6'>
            <h1
              className='font-bold text-3xl text-center pb-6 lg:pb-12 text-white lg:text-center lg:text-4xl uppercase'
              data-aos='fade-up'
              data-aos-duration='1000'
            >
              Roadmap
            </h1>
            <div className='roadmap__item__wrapper lg:grid lg:grid-cols-2 relative gap-28'>
              <div className='item__content  after:rounded-t-xl mb-6 lg:mb-20'>
                <p
                  className='text-white lg:text-lg border-2 border-x-cyan-50 py-6 px-4 rounded-md'
                  data-aos='fade-right'
                  data-aos-duration='1000'
                >
                  10,00 NFT will be accessible altogether, split between the
                  pre-sale and public sale. <br /> <br />
                  NFT not redeemed in the pre-sale will be sent into the public
                  sale. <br /> <br />
                  All NFT has characteristics and traits will be created
                  randomly and uncovered later the public sale.
                </p>
              </div>
            </div>

            <div className='roadmap__item__wrapper lg:grid lg:grid-cols-2 relative gap-28'>
              <div className='item__content  col-start-2 mb-6 lg:mb-20'>
                <p
                  className='text-white lg:text-lg border-2 border-x-cyan-50 py-6 px-4 rounded-md'
                  data-aos='fade-left'
                  data-aos-duration='1200'
                >
                  Don't give up so early if you missed the premint- Follow our
                  Twitter and Discord for next public minting information.
                  <br /> <br />
                  There will be another chance for you to become a Toadler!
                </p>
              </div>
            </div>

            <div className='roadmap__item__wrapper lg:grid lg:grid-cols-2 relative gap-28'>
              <div className='item__content  mb-6 lg:mb-20'>
                <p
                  className='text-white lg:text-lg border-2 border-x-cyan-50 py-6 px-4 rounded-md'
                  data-aos='fade-right'
                  data-aos-duration='1400'
                >
                  75% completed minting will be donated to charities.
                </p>
              </div>
            </div>

            <div className='roadmap__item__wrapper lg:grid lg:grid-cols-2 relative gap-28'>
              <div className='item__content  col-start-2 after:rounded-b-xl '>
                <p
                  className='text-white lg:text-lg border-2 border-x-cyan-50 py-6 px-4 rounded-md'
                  data-aos='fade-left'
                  data-aos-duration='1600'
                >
                  For the first 10,000 Toadlers from our first project will
                  automatically be whitelisted for our future project.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='roadmap__v2 mt-20 py-20 text-white bg-gradient-to-bl from-[#810781dc] top-[#595ab9e3] '>
          <p className='text-center py-4 lg:text-lg'>
            Rule of thumb: 60% of funding will roll over to our future
            development and projects
            <br />
            <br />
            10,000 initial NFT minting
          </p>
          <div className='v2__items text-center py-4'>
            <div className='max-w-[12rem] w-full mx-auto'>
              <img src={v2Image1} alt='' className='max-w-full w-full' />
            </div>
            <p className='text-center lg:text-lg py-4 lg:py-8'>
              3D Image/Artist Collaborations
              <br />
              Selected artists can participate in creating more personalized
              Toadle.
            </p>
          </div>

          <div className='v2__items text-center py-4'>
            <div className='lg:flex-row items-center justify-center flex flex-col'>
              <img src={v2Image3} alt='' className='max-w-[16rem] w-full' />
              <img src={v2Image2} alt='' className='max-w-[16rem] w-full' />
            </div>
            <p className='text-center lg:text-lg'>
              Minime Voxel - Pick 1
              <br />
              We will vote on this on our Discord and Twitter.
              <br />
              Toadlers will be able to turn their Toadle into 3D Voxel.
              <br />
              Upgrade your Minime Voxel with the same generated traits.
            </p>
          </div>

          <div className='v2__items text-center py-4'>
            <div className='max-w-[12rem] w-full mx-auto'>
              <video controls autoPlay loop muted className='rounded-full'>
                <source src={newYork} type='video/mp4' />
              </video>
            </div>
            <p className='text-center lg:text-lg py-4 lg:py-8'>
              Animated Voxel
              <br />
              Every minime voxel you hold will allow you to claim an animated
              Toadle.
              <br />
              Bring you Toadle into life!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Roadmap;
