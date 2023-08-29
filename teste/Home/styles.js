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
    gap: 15px;
    display: flex;
    // align-items: center;
    // justify-content: center;
    // flex-direction: column;
    width: 100%;
    box-shadow: 0 1px 2px #0003;
    background-color: white;
    max-width: 1200px;
    padding: 70px;
    border-radius: 10px;
`;

export const Image = styled.div`
border-radius: 8px;
`

export const Label  = styled.label`
    font-size: 18px;
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