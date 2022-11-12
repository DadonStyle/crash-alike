import React from 'react';
import PropTypes from 'prop-types';
import S from './styled';

const Button = ({ children, type, ...rest }) => (
  <S.BTN type={type === 'submit' ? 'submit' : 'button'} {...rest}>
    {children}
  </S.BTN>
);

Button.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
};

export default Button;
