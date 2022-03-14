import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Navbar } from './Navbar';
import { Logo } from '../../assets/Logo';
import { Button } from '../UI/Button/Button';
import { AdaptiveMenu } from './AdaptiveMenu';
import MenuIcon from '../Icons/MenuIcon';

const StyledHeaedr = styled.div`
  display: flex;
  align-items: center;
  border-radius: 0 0 20px 20px;
  justify-content: space-between;
  background-color: ${(props) => props.theme.mainColor};
  width: 100%;
  height: 80px;
  padding: 0 25px;
  position: fixed;
  top: 0;
`;

export const Header = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowWidth > 768 ? (
    <StyledHeaedr>
      <div className="flex items-center">
        <Logo className="mr-10" />
        <Navbar />
      </div>
      <Button>Войти</Button>
    </StyledHeaedr>
  ) : (
    <>
      <StyledHeaedr>
        <Logo />
        <MenuIcon onClick={handleMenuOpen} />
      </StyledHeaedr>
      {isMenuOpen && <AdaptiveMenu handleMenuOpen={handleMenuOpen} />}
    </>
  );
};
