import styled from 'styled-components';

const Wrappper = styled.div`
  display: flex;
  /* flex-direction: row; */
  justify-content: center;
  align-items: center;
  gap: 10rem;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

const S = {
  Wrappper,
};

export default S;
