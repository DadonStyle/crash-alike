import styled from 'styled-components';

const Wrapper = styled.div`
    position: relative;
    min-height: 100%;
    box-sizing: border-box;
    background-color: aliceblue;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-bottom: unset;
    height: 100%;
`;

const Main = styled.div`
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    justify-content: center;
    width: 100%;
`;

const S = {
    Wrapper,
    Main,
}

export default S;