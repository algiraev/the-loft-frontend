import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const StyledTypography = styled.div`
  ${(props) => {
    if (props.variant === 'larger') {
      return css`
        font-size: 28px;
        font-weight: 700;
      `;
    }

    if (props.variant === 'large') {
      return css`
        font-size: 24px;
        font-weight: 600;
      `;
    }

    if (props.variant === 'medium') {
      return css`
        font-size: 18px;
        font-weight: 500;
      `;
    }

    if (props.variant === 'small') {
      return css`
        font-size: 16px;
        font-weight: 300;
      `;
    }

    if (props.variant === 'smaller') {
      return css`
        font-size: 12px;
        font-weight: 200;
      `;
    }
  }}
`;

export const Typography = ({ children, variant, ...props }) => {
  return (
    <StyledTypography variant={variant} {...props}>
      {children}
    </StyledTypography>
  );
};

Typography.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.string,
};

Typography.defaultProps = {
  variant: 'medium',
};
