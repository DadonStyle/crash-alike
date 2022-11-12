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
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MiniHeader = styled.h3`
  color: black;
  max-height: 25px;
`;

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  background-color: white;
  transition: background-color 0.3s ease-in-out;
  transition: outline 2s linear;
  outline: solid 1px #f5f5dc;
  :hover {
    background-color: #f9f6ee;
    outline: solid 20px #f9f6ee;
  }
`;

const ListHeader = styled.h1`
  color: black;
  font-weight: 700;
`;

const UserWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  font-size: 14px;
  font-weight: 900;

  img {
    height: 36px;
    width: 30px;
    margin-right: 10px;
  }
`;

const S = {
  Wrappper,
  BombWrapper,
  ButtnWrapper,
  PlayersWrapper,
  MainHeader,
  MiniHeader,
  ListWrapper,
  ListHeader,
  UserWrapper,
};

export default S;
