import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Typography } from '../UI/Typography/Typography';
import { MenuCloseIcon } from '../Icons/MenuCloseIcon';

const StyledMenu = styled.div`
  display: flex;
  width: 100%;
  background-color: ${(props) => props.theme.mainColor};
  padding: 15px 0;
  border-radius: 0 0 20px 20px;
  position: fixed;
  top: 0;
`;

export const AdaptiveMenu = ({ handleMenuOpen }) => {
  return (
    <StyledMenu>
      <div className="m-auto">
        <Typography className="text-white">Главная</Typography>
        <Typography className="text-white">Меню</Typography>
        <Typography className="text-white">Контакты</Typography>
        <Typography className="text-white">О нас</Typography>
        <Typography className="text-white">Войти</Typography>
      </div>
      <MenuCloseIcon
        className="absolute right-4 top-4 cursor-pointer"
        onClick={handleMenuOpen}
      />
    </StyledMenu>
  );
};

AdaptiveMenu.propTypes = {
  handleMenuOpen: PropTypes.func,
};

AdaptiveMenu.defaultProps = {
  handleMenuOpen: undefined,
};
