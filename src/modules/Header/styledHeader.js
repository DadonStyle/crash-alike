import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
  margin: auto;
  padding-right: 2rem;
`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
  align-self: flex-start;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: salmon;
`;

const LinksContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const S = {
  Title,
  StyledLink,
  HeaderContainer,
  LinksContainer,
};

export default S;
