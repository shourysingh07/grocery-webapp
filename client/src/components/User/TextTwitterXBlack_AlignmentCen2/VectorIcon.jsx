import { memo } from 'react';

const VectorIcon = (props) => (
  <svg preserveAspectRatio='none' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M11.905 8.46953L19.3512 0H17.5869L11.1184 7.35244L5.95583 0H0L7.80863 11.1192L0 20H1.76429L8.59099 12.2338L14.0442 20H20L11.905 8.46953ZM9.48775 11.2168L8.69536 10.1089L2.40053 1.30146H5.11084L10.1925 8.41196L10.9815 9.51988L17.5861 18.7619H14.8758L9.48775 11.2168Z'
      fill='white'
    />
  </svg>
);

const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
