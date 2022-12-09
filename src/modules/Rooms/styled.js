import styled from 'styled-components/macro';

const Wrappper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  button {
    margin-left: 4rem;
    margin-top: 2rem;
  }

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

const S = {
  Wrappper,
};

export default S;
