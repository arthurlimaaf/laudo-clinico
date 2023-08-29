import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    height: 100vh;
`;

export const Content = styled.div`
    gap: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    box-shadow: 0 1px 2px #0003;
    background-color: white;
    max-width: 1300px;
    padding: 200px;
    border-radius: 5px;
`;

export const Content2 = styled.div`
    gap: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 400px;
    height: 400px;
    border-width: 2.5px;
    border-color: white;
    border-style: solid;
    // position: fixed;
`;

export const textScroll = styled.div`
    color: #00FF7F;
    font-size: 22px;

`
export const Image = styled.div`
border-radius: 8px;

`

export const Label  = styled.label`
    font-size: 25px;
    font-weight: 600;
    color: white;
`;

export const LabelSignup  = styled.label`
    font-size: 16px;
    color: #676767;
`;

export const LabelError  = styled.label`
    font-size: 14px;
    color: red;
`;