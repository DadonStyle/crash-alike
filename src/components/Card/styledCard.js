import styled from 'styled-components';

const CardWrapper = styled.div`
  display: flex;
  background: #fff;
  width: 24em;
  border-radius: 0.6em;
  margin: 1em;
  border: 1px dotted black;
  /* overflow: hidden; */
  cursor: pointer;
  box-shadow: 0 13px 27px -5px hsla(240, 30.1%, 28%, 0.25),
    0 8px 16px -8px hsla(0, 0%, 0%, 0.3), 0 -6px 16px -6px hsla(0, 0%, 0%, 0.03);
  transition: all ease 200ms;

  p {
    color: #777;
  }

  :hover {
    transform: scale(1.03);
    box-shadow: 0 13px 40px -5px hsla(240, 30.1%, 28%, 0.12),
      0 8px 32px -8px hsla(0, 0%, 0%, 0.14),
      0 -6px 32px -6px hsla(0, 0%, 0%, 0.02);
  }
`;

//   h2, h5 {
//     margin: 0;
//   }

const H2Title = styled.h2`
  margin: 0;
  color: #222;
  margin-top: -0.2em;
  line-height: 1.4;
  font-size: 1.3em;
  font-weight: 500;
  font-family: 'Montserrat', sans-serif;
  transition: all ease-in 100ms;
`;

const H5Title = styled.h5`
  margin: 0;
  color: #bbb;
  font-weight: 700;
  font-size: 0.7em;
  letter-spacing: 0.04em;
  margin: 1.4em 0 0 0;
  text-transform: uppercase;
`;

const CardBody = styled.div`
  padding: 1.2em;
`;

const S = {
  CardWrapper,
  H2Title,
  H5Title,
  CardBody,
};

export default S;
