import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

function Burger({ ...props }) {
  return <GiHamburgerMenu color="white" size={30} {...props} />;
}

export default Burger;
