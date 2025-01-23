import { memo, SVGProps } from 'react';

const GroupIcon1 = (props) => (
  <svg preserveAspectRatio='none' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M39.2 20.4546C39.2 19.0364 39.0727 17.6728 38.8364 16.3637H20V24.1H30.7636C30.3 26.6 28.8909 28.7182 26.7727 30.1364V35.1546H33.2364C37.0182 31.6728 39.2 26.5455 39.2 20.4546Z'
      fill='black'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M20 40C25.4 40 29.9273 38.2091 33.2364 35.1545L26.7727 30.1363C24.9818 31.3363 22.6909 32.0454 20 32.0454C14.7909 32.0454 10.3818 28.5273 8.8091 23.8H2.12728V28.9818C5.41819 35.5182 12.1818 40 20 40Z'
      fill='black'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M8.80909 23.8C8.40909 22.6 8.18182 21.3182 8.18182 20C8.18182 18.6818 8.40909 17.4 8.80909 16.2V11.0182H2.12727C0.772727 13.7182 0 16.7727 0 20C0 23.2273 0.772727 26.2818 2.12727 28.9818L8.80909 23.8Z'
      fill='black'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M20 7.95455C22.9364 7.95455 25.5727 8.96364 27.6455 10.9455L33.3818 5.20909C29.9182 1.98182 25.3909 0 20 0C12.1818 0 5.41819 4.48182 2.12728 11.0182L8.8091 16.2C10.3818 11.4727 14.7909 7.95455 20 7.95455Z'
      fill='black'
    />
  </svg>
);

const Memo = memo(GroupIcon1);
export { Memo as GroupIcon1 };
