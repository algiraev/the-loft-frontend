import React from 'react';

export const MenuCloseIcon = ({ ...props }) => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnslink="http://www.w3.org/1999/xlink"
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
          <use xlinkHref="#image0_14_16" transform="scale(0.0333333)" />
        </pattern>
        <image
          id="image0_14_16"
          width="30"
          height="30"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAAAzklEQVRIie3S0QqCMBTGce0Bs0Txwp69wMgKewOFfzcTlLaxc9Qg2ne7nfPj7CxJYmL+JkAJvIAbcBDUHYE70AGFFE1N4ZgeqALqKnN3TCeCTZMn83hxCwrw0MC5pZEVd6A9kIth07CwNByA0+RO6bhTq9AQfDN0grueMmgVS3Hb5NtMKsDF6E5op8ozfRwf6ePDrY1+/3M5Jh2A2rHz5ZP70MmddXEgC31KzyoyDXyV7M+BNxq4DUU9eKuBM6ABzpInM3UXU7sXwzExP5s3um/syN1W7JQAAAAASUVORK5CYII="
        />
      </defs>
    </svg>
  );
};