import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    width: 98vw;
    max-height: 350vh;
`;

export const Content = styled.div`
    gap: 25px;
    display: block;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    // height: 320vh;
    box-shadow: 0 1px 4px #0003;
    background-color: white;
    max-width: 800px;
    padding: 30px;
    border-radius: 5px;
`;

export const Label  = styled.label`
    font-size: 25px;
    font-weight: 600;
    color: #00BFFF;
`;

export const LabelSignup  = styled.label`
    font-size: 16px;
    color: #676767;
`;

export const LabelError  = styled.label`
    font-size: 14px;
    color: red;
`;

export const Strong  = styled.strong`
    cursor: pointer;

    a {
        text-decoration: none;
        color: #676767;
    }
`;
