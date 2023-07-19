import * as React from 'react';

function IconBellBadgeOutline(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="rgba(58, 53, 65, 0.87)"
      height="24"
      width="24"
      {...props}
    >
      <path d="M19 17v-5.2c-.5.1-1 .2-1.5.2H17v6H7v-7c0-2.8 2.2-5 5-5 .1-1.3.7-2.4 1.5-3.3-.3-.4-.9-.7-1.5-.7-1.1 0-2 .9-2 2v.3C7 5.2 5 7.9 5 11v6l-2 2v1h18v-1l-2-2m-9 4c0 1.1.9 2 2 2s2-.9 2-2h-4M21 6.5c0 1.9-1.6 3.5-3.5 3.5S14 8.4 14 6.5 15.6 3 17.5 3 21 4.6 21 6.5" />
      <circle cx="18" cy="6.5" r="3" fill="red" stroke="red" />
    </svg>
  );
}

export default IconBellBadgeOutline;
