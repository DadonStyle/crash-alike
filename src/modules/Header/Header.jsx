import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import S from './styled';

const Header = () => {
  // eslint-disable-next-line no-unused-vars
  const [test, setTest] = useState(false);

  return (
    <S.HeaderContainer>
      <S.LinksContainer>
        <S.StyledLink to="/login">login</S.StyledLink>
        <S.StyledLink to="/register">register</S.StyledLink>
      </S.LinksContainer>
    </S.HeaderContainer>
  );
};

// Header.propTypes = {
//   headerName: PropTypes.string,
// };

export default Header;
