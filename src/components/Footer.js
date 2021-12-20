import React from 'react';

const Footer = () => {
  return (
    <>
      <div className='footer mt-12 border-t-[1px] pt-4' id='footer'>
        <div className='container mx-auto'>
          <div className='footer__inner px-6'>
            <div className='social__links flex justify-center items-center gap-8'>
              <a
                href='https://discord.com/invite/ykbG66ZG'
                target='_blank'
                rel='noreferrer'
              >
                <svg
                  width='32'
                  height='32'
                  viewBox='0 0 32 32'
                  className='text-white w-12 h-12'
                  fill='currentColor'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M27.0901 5.81392C25.0151 4.86165 22.8256 4.182 20.5761 3.79192C20.5557 3.78848 20.5348 3.79145 20.5162 3.8004C20.4975 3.80936 20.4821 3.82386 20.4721 3.84192C20.1901 4.34192 19.8781 4.99592 19.6601 5.50792C17.2353 5.13993 14.7689 5.13993 12.3441 5.50792C12.1009 4.93756 11.8258 4.38134 11.5201 3.84192C11.5098 3.82406 11.4944 3.80972 11.4758 3.8008C11.4573 3.79187 11.4365 3.78878 11.4161 3.79192C9.16609 4.17992 6.97609 4.85992 4.90209 5.81392C4.88435 5.82069 4.8695 5.83341 4.86009 5.84992C0.712094 12.0479 -0.425906 18.0939 0.132094 24.0639C0.134094 24.0919 0.152094 24.1199 0.174094 24.1379C2.58954 25.9272 5.29128 27.2932 8.16409 28.1779C8.18438 28.1843 8.20617 28.1841 8.22631 28.1773C8.24646 28.1704 8.26389 28.1573 8.27609 28.1399C8.89209 27.2999 9.44009 26.4139 9.91209 25.4819C9.92193 25.4627 9.9253 25.4409 9.9217 25.4196C9.91809 25.3983 9.90771 25.3788 9.89209 25.3639C9.88176 25.3542 9.8695 25.3467 9.85609 25.3419C8.99442 25.0108 8.15988 24.6129 7.36009 24.1519C7.33775 24.1393 7.32114 24.1185 7.31369 24.0939C7.30625 24.0693 7.30854 24.0428 7.32009 24.0199C7.3269 24.005 7.33719 23.992 7.35009 23.9819C7.51809 23.8559 7.68609 23.7239 7.84609 23.5919C7.86023 23.5806 7.87719 23.5732 7.89515 23.5708C7.91312 23.5683 7.93142 23.5708 7.94809 23.5779C13.1861 25.9699 18.8561 25.9699 24.0301 23.5779C24.0474 23.5704 24.0664 23.5678 24.085 23.5703C24.1037 23.5727 24.1213 23.5802 24.1361 23.5919C24.2961 23.7239 24.4641 23.8559 24.6321 23.9819C24.6457 23.9919 24.6566 24.005 24.6639 24.0202C24.6712 24.0355 24.6746 24.0522 24.6738 24.0691C24.673 24.0859 24.6681 24.1023 24.6594 24.1168C24.6507 24.1312 24.6386 24.1433 24.6241 24.1519C23.8261 24.6171 22.9905 25.0145 22.1261 25.3399C22.1123 25.3449 22.0998 25.3529 22.0894 25.3632C22.079 25.3736 22.0711 25.3861 22.0661 25.3999C22.0615 25.4133 22.0596 25.4274 22.0606 25.4415C22.0617 25.4556 22.0656 25.4694 22.0721 25.4819C22.5521 26.4119 23.1021 27.2999 23.7061 28.1399C23.7183 28.1573 23.7357 28.1704 23.7559 28.1773C23.776 28.1841 23.7978 28.1843 23.8181 28.1779C26.6957 27.296 29.4018 25.9297 31.8201 24.1379C31.8322 24.1295 31.8423 24.1185 31.8495 24.1057C31.8568 24.0929 31.8611 24.0786 31.8621 24.0639C32.5301 17.1619 30.7441 11.1659 27.1301 5.85192C27.1265 5.84314 27.121 5.83522 27.1141 5.82868C27.1072 5.82213 27.099 5.8171 27.0901 5.81392ZM10.6941 20.4279C9.11609 20.4279 7.81809 18.9799 7.81809 17.2039C7.81809 15.4259 9.09209 13.9779 10.6941 13.9779C12.3081 13.9779 13.5941 15.4379 13.5701 17.2039C13.5701 18.9799 12.2961 20.4279 10.6941 20.4279ZM21.3261 20.4279C19.7501 20.4279 18.4501 18.9799 18.4501 17.2039C18.4501 15.4259 19.7241 13.9779 21.3261 13.9779C22.9401 13.9779 24.2281 15.4379 24.2021 17.2039C24.2021 18.9799 22.9401 20.4279 21.3261 20.4279Z' />
                </svg>
              </a>
              <a
                href='https://twitter.com/ToadleToadle'
                target='_blank'
                rel='noreferrer'
              >
                <svg
                  width='32'
                  height='32'
                  viewBox='0 0 32 32'
                  className='text-white w-12 h-12'
                  fill='currentColor'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M26.1774 10.6629C26.1947 10.8962 26.1947 11.1282 26.1947 11.3602C26.1947 18.4602 20.7907 26.6416 10.9147 26.6416C7.87208 26.6416 5.04541 25.7602 2.66675 24.2296C3.09875 24.2789 3.51475 24.2962 3.96408 24.2962C6.3814 24.3021 8.73028 23.4937 10.6321 22.0016C9.51131 21.9813 8.42485 21.6115 7.5244 20.9439C6.62395 20.2762 5.95446 19.3441 5.60941 18.2776C5.94141 18.3269 6.27475 18.3602 6.62408 18.3602C7.10541 18.3602 7.58941 18.2936 8.03875 18.1776C6.82243 17.932 5.72871 17.2727 4.94357 16.3118C4.15843 15.3509 3.73034 14.1478 3.73208 12.9069V12.8402C4.44808 13.2389 5.27875 13.4882 6.15875 13.5216C5.42153 13.0317 4.81704 12.3669 4.3992 11.5866C3.98136 10.8063 3.76317 9.93469 3.76408 9.04955C3.76408 8.05222 4.02941 7.13755 4.49475 6.34022C5.84427 8.00025 7.52742 9.3583 9.4352 10.3264C11.343 11.2946 13.4328 11.8512 15.5694 11.9602C15.4867 11.5602 15.4361 11.1456 15.4361 10.7296C15.4357 10.0242 15.5744 9.32563 15.8442 8.67387C16.114 8.02212 16.5095 7.42992 17.0083 6.93114C17.5071 6.43236 18.0993 6.03677 18.7511 5.76699C19.4028 5.49721 20.1014 5.35854 20.8067 5.35889C22.3534 5.35889 23.7494 6.00689 24.7307 7.05489C25.9331 6.82238 27.0861 6.38345 28.1387 5.75755C27.738 6.99864 26.8984 8.05103 25.7774 8.71755C26.8438 8.59593 27.886 8.31549 28.8694 7.88555C28.1349 8.95635 27.2248 9.89535 26.1774 10.6629V10.6629Z' />
                </svg>
              </a>
            </div>
            <p className='text-center text-base text-white py-4'>
              2021 copyrights reserved by ToadleToadle
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
