import React from 'react';
import styled from 'styled-components';
import { MenuClose } from '../UI/MenuClose/MenuClose';

const StyledMenu = styled.div`
  display: flex;
  width: 100%;
  background-color: ${(props) => props.theme.mainColor};
  padding: 15px 0;
  border-radius: 0 0 20px 20px;
  position: fixed;
  top: 0;
`;

export const AdaptiveMenu = () => {
  return (
    <StyledMenu>
      <dvi className="m-auto">
        <p className="text-white font-medium">Главная</p>
        <p className="text-white font-medium">Меню</p>
        <p className="text-white font-medium">Контакты</p>
        <p className="text-white font-medium">О нас</p>
        <p className="text-white font-medium">Войти</p>
      </dvi>
      <MenuClose className="absolute right-2 top-2 cursor-pointer" />
    </StyledMenu>
  );
};
