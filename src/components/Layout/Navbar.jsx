import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledListItem = styled.div`
  margin-right: 20px;
  font-weight: 700;
  color: #fff;
  &:last-child {
    margin-right: 0;
  }
`;

export const Navbar = () => {
  return (
    <div className="flex">
      <StyledListItem>
        <Link to="/">Главная</Link>
      </StyledListItem>
      <StyledListItem>
        <Link to="/menu">Меню</Link>
      </StyledListItem>
      <StyledListItem>
        <Link to="/contacts">Контакты</Link>
      </StyledListItem>
      <StyledListItem>
        <Link to="/about">О нас</Link>
      </StyledListItem>
    </div>
  );
};
