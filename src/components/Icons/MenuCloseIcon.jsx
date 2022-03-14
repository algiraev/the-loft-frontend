import React from 'react';

export const MenuCloseIcon = ({ ...props }) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M9 3L3 9" stroke="#FFF" strokeLinejoin="round" />
      <path d="M3 3L9 9" stroke="#FFF" strokeLinejoin="round" />
    </svg>
  );
};
