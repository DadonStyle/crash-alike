import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  text-decoration: none;
  height: 90px;
  color: #E8E6E3;

  :hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

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
  min-height: 147px;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding-left: 1rem;
`;

const S = {
  StyledLink,
  HeaderContainer,
  LinksContainer,
};

export default S;
