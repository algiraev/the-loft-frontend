import React from 'react';

export const MenuRoundedIcon = ({ ...props }) => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <rect width="30" height="30" fill="url(#pattern0)" />
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_13_116" transform="scale(0.0333333)" />
        </pattern>
        <image
          id="image0_13_116"
          width="30"
          height="30"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAAANUlEQVRIie3TsQ0AIAwDwYj9t8pgoWIApJCGuwVeLhwBdKuqrPfy9Nb0vuEeX3MnaONOwK0NKrA4cwLOQUAAAAAASUVORK5CYII="
        />
      </defs>
    </svg>
  );
};
