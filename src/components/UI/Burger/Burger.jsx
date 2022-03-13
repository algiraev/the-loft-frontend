import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

export const Burger = ({ ...props }) => {
  return <GiHamburgerMenu color="white" size={30} {...props} />;
};
