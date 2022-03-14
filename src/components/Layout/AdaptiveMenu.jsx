import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Typography } from '../UI/Typography/Typography';
import CloseIcon from '../Icons/CloseIcon';

const StyledMenu = styled.div`
  display: flex;
  width: 100%;
  background-color: ${(props) => props.theme.mainColor};
  padding: 15px 0;
  border-radius: 0 0 20px 20px;
  position: fixed;
  top: 0;

  @media ${(props) => props.theme.media.phone} {
    border-radius: 0;
  }
`;

export const AdaptiveMenu = ({ handleMenuOpen }) => {
  return (
    <StyledMenu>
      <div className="m-auto">
        <Link to="/">
          <Typography className="text-white">Главная</Typography>
        </Link>
        <Link to="/menu">
          <Typography className="text-white">Меню</Typography>
        </Link>
        <Link to="/contacts">
          <Typography className="text-white">Контакты</Typography>
        </Link>
        <Link to="/about">
          <Typography className="text-white">О нас</Typography>
        </Link>
        <Link to="/login">
          <Typography className="text-white">Войти</Typography>
        </Link>
      </div>
      <CloseIcon className="absolute right-4 top-4" onClick={handleMenuOpen} />
    </StyledMenu>
  );
};

AdaptiveMenu.propTypes = {
  handleMenuOpen: PropTypes.func,
};

AdaptiveMenu.defaultProps = {
  handleMenuOpen: undefined,
};
