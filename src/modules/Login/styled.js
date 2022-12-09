import styled from 'styled-components/macro';
import { Form } from 'react-bootstrap';

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

const FormEmail = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0rem 0rem 1rem 1rem;
  margin-right: 3rem;
  flex: 1;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

const FormPassword = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0rem 0rem 1rem 1rem;
  margin-left: 3rem;
  flex: 1;
  svg {
    align-self: center;
    margin-right: 12px;
  }

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

const FormLabelWrapper = styled(Form.Label)`
  display: flex;
  padding: 4px;
  font-weight: 900;
`;

const FormControlWrapper = styled(Form.Control)`
  display: flex;
  font-size: 22px;
  background: #9992;
  border-radius: 7px;
  margin-left: 2rem;
`;

const S = {
  Wrappper,
  FormControlWrapper,
  FormLabelWrapper,
  FormEmail,
  FormPassword,
};

export default S;
