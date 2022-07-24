import styled from 'styled-components';

const Wrappper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10rem;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  /* @media (max-width: 1000px) {
    flex-direction: column;
  } */
`;

const BombWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  /* @media (max-width: 1000px) {
    flex-direction: column;
  } */
`;

const ButtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  /* @media (max-width: 1000px) {
    flex-direction: column;
  } */
`;

const PlayersWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MainHeader = styled.h1`
  color: black;
`;

const MiniHeader = styled.h3`
  color: black;
  max-height: 25px;
`;

const S = {
  Wrappper,
  ListWrapper,
  BombWrapper,
  ButtnWrapper,
  PlayersWrapper,
  MainHeader,
  MiniHeader,
};

export default S;
