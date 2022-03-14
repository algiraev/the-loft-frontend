import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledDishCard = styled.div`
  width: 200px;
  height: 300px;
  margin: 30px;
  border-radius: 20px;

  @media ${(props) => props.theme.media.phone} {
    width: 100%;
    height: 380px;
    margin: 0;
    border-radius: 0;
  }
`;

const StyledDishImg = styled.img`
  border-radius: 20px 20px 0 0;

  @media ${(props) => props.theme.media.phone} {
    border-radius: 0;
  }
`;

export const DishCard = ({ dishes }) => {
  return (
    <StyledDishCard key={dishes.id}>
      <StyledDishImg
        src={dishes.img}
        alt={`${dishes.name} - ${dishes.price}₽`}
      />
    </StyledDishCard>
  );
};

DishCard.propTypes = {
  dishes: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
  }).isRequired,
};
