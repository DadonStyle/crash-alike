import styled from 'styled-components/macro';

const BTN = styled.button`
  background: transparent;
  border-radius: 5px;
  color: #999;
  box-shadow: 0px 0px 2px 2px #999;
  padding: 1rem;
  border: 1px solid #999;
  font: 900 large/1.5 exo, ubuntu, 'segoe ui', helvetica, arial, sans-serif;
  min-width: 100px;

  :hover {
    background-color: #999;
    color: white;
    transition: 0.3s ease-in-out;
  }

  :active {
    background-color: #9992;
    color: #9992;
    transition: 0s ease-in-out;
  }
`;

const S = {
  BTN,
};

export default S;
