import * as React from 'react';

function IconTypography(props) {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
      height="22"
      width="22"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" />
      <path d="M4 20h3M14 20h7M6.9 15h6.9M10.2 6.3L16 20M5 20l6-16h2l7 16" />
    </svg>
  );
}

export default IconTypography;
