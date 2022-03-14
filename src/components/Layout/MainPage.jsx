import React from 'react';
import styled from 'styled-components';
import { Typography } from '../UI/Typography/Typography';

const StyledHeader = styled.div`
  margin: 20px;
`;

export const MainPage = () => {
  return (
    <div className="main-container">
      <StyledHeader>
        <Typography variant="large">
          Добро пожаловать на сайт ресторана The-Loft
        </Typography>
        <Typography className="mt-8">
          Здесь вы сможете легко заказать для себя блюда без необходимости
          звонка
        </Typography>
      </StyledHeader>
    </div>
  );
};
