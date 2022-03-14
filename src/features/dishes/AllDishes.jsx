import React from 'react';
import styled from 'styled-components';
import dishImg from '../../assets/dish.jpg';
import { DishCard } from './DishCard';

const StyledDishesList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  @media ${(props) => props.theme.media.phone} {
    flex-direction: column;
    flex-wrap: nowrap;
  }
`;

const dishes = [
  { id: 1, name: 'Pipperoni', price: 210, img: dishImg },
  { id: 2, name: 'Hamburger', price: 130, img: dishImg },
  { id: 3, name: 'Cheaseburger', price: 180, img: dishImg },
  { id: 4, name: 'Steak', price: 450, img: dishImg },
];

export const AllDishes = () => {
  return (
    <StyledDishesList className="menu-container">
      {dishes.map((dish) => {
        return <DishCard dishes={dish} />;
      })}
    </StyledDishesList>
  );
};
