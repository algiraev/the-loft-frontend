import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 5px 15px;
  border-radius: 2px;

  ${(props) => {
    if (props.variant === 'contained') {
      return css`
        background-color: #fff;
        color: #000;
        font-weight: 500;
      `;
    }

    if (props.variant === 'outlined') {
      return css`
        background-color: transparent;
        color: #fff;
        border: 1px solid;
      `;
    }
  }}
`;

export const Button = ({ children, disabled, variant, ...props }) => {
  return (
    <StyledButton disabled={disabled} variant={variant} {...props}>
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  variant: PropTypes.string,
};

Button.defaultProps = {
  disabled: false,
  variant: 'outlined',
};
