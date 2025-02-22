import { memo } from 'react';

const GroupIcon1 = (props) => (
  <svg preserveAspectRatio='none' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M19.6 10.2273C19.6 9.51819 19.5364 8.83638 19.4182 8.18183H10V12.05H15.3818C15.15 13.3 14.4455 14.3591 13.3864 15.0682V17.5773H16.6182C18.5091 15.8364 19.6 13.2727 19.6 10.2273Z'
      fill='white'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M10 20C12.7 20 14.9636 19.1045 16.6182 17.5773L13.3864 15.0682C12.4909 15.6682 11.3455 16.0227 10 16.0227C7.39546 16.0227 5.19091 14.2636 4.40455 11.9H1.06364V14.4909C2.70909 17.7591 6.09091 20 10 20Z'
      fill='white'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M4.40455 11.9C4.20455 11.3 4.09091 10.6591 4.09091 10C4.09091 9.34092 4.20455 8.70001 4.40455 8.10001V5.5091H1.06364C0.386364 6.8591 0 8.38637 0 10C0 11.6136 0.386364 13.1409 1.06364 14.4909L4.40455 11.9Z'
      fill='white'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M10 3.97727C11.4682 3.97727 12.7864 4.48182 13.8227 5.47273L16.6909 2.60455C14.9591 0.990909 12.6955 0 10 0C6.09091 0 2.70909 2.24091 1.06364 5.50909L4.40455 8.1C5.19091 5.73636 7.39546 3.97727 10 3.97727Z'
      fill='white'
    />
  </svg>
);

const Memo = memo(GroupIcon1);
export { Memo as GroupIcon1 };
