import React from 'react';

const Roadmap = () => {
  return (
    <>
      <div className='roadmap lg:mt-24 py-12' id='roadmap'>
        <div className='container mx-auto'>
          <div className='roadmap__inner  px-6'>
            <h1 className='font-bold text-3xl text-center pb-6 lg:pb-12 text-white lg:text-center lg:text-4xl uppercase'>
              Roadmap
            </h1>
            <div className='roadmap__item__wrapper lg:grid lg:grid-cols-2 relative gap-28'>
              <div className='item__content  after:rounded-t-xl mb-6 lg:mb-20'>
                <p
                  className='text-white lg:text-lg border-2 border-x-cyan-50 py-6 px-4 rounded-md'
                  data-aos='fade-up'
                  data-aos-anchor-placement='center-center'
                  data-aos-duration='1200'
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
                  data-aos='fade-up'
                  data-aos-anchor-placement='center-center'
                  data-aos-duration='1300'
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
                  data-aos='fade-up'
                  data-aos-anchor-placement='center-center'
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
                  data-aos='fade-up'
                  data-aos-anchor-placement='center-center'
                  data-aos-duration='1500'
                >
                  For the first 10,000 Toadlers from our first project will
                  automatically be whitelisted for our future project.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Roadmap;
