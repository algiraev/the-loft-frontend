import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import MenuClose from '../UI/MenuClose/MenuClose';

const StyledMenu = styled.div`
  display: flex;
  width: 100%;
  background-color: ${(props) => props.theme.mainColor};
  padding: 15px 0;
  border-radius: 0 0 20px 20px;
  position: fixed;
  top: 0;
`;

const StyledList = styled.div`
  margin: auto;
`;

const StyledListItem = styled.div`
  font-weight: 500;
  color: #fff;
`;

function AdaptiveMenu({ handleMenuOpen }) {
  return (
    <StyledMenu>
      <StyledList>
        <StyledListItem>Главная</StyledListItem>
        <StyledListItem>Меню</StyledListItem>
        <StyledListItem>Контакты</StyledListItem>
        <StyledListItem>О нас</StyledListItem>
        <StyledListItem>Войти</StyledListItem>
      </StyledList>
      <MenuClose
        className="absolute right-2 top-2 cursor-pointer"
        onClick={handleMenuOpen}
      />
    </StyledMenu>
  );
}

export default AdaptiveMenu;

AdaptiveMenu.propTypes = {
  handleMenuOpen: PropTypes.func,
};

AdaptiveMenu.defaultProps = {
  handleMenuOpen: undefined,
};
