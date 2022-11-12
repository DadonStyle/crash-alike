import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
  margin: auto;
  padding-right: 2rem;
`;

// const Title = styled.h1`
//   font-size: 1.5em;
//   text-align: center;
//   color: palevioletred;
//   align-self: flex-start;
// `;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: ${({ theme }) =>
    theme.isLogin || theme.isRegister ? '13.5rem' : '0.5rem'};
  &::before {
    content: 'Crypto Tower';
    font-size: 8rem;
    font-weight: 100;
    font-style: normal;
  }
`;

const LinksContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const S = {
  StyledLink,
  HeaderContainer,
  LinksContainer,
};

export default S;
