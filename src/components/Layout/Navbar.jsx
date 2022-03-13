import React from 'react';
import styled from 'styled-components';

const StyledList = styled.div`
  display: flex;
`;

const StyledListItem = styled.div`
  margin-right: 20px;
  font-weight: 700;
  color: #fff;
  &:last-child {
    margin-right: 0;
  }
`;

function Navbar() {
  return (
    <StyledList>
      <StyledListItem>Главная</StyledListItem>
      <StyledListItem>Меню</StyledListItem>
      <StyledListItem>Контакты</StyledListItem>
      <StyledListItem>О нас</StyledListItem>
    </StyledList>
  );
}

export default Navbar;
