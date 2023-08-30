import React from 'react'
import Button from '../../components/Button';
// import icct from '../../../src/icct-logo.png';
import * as C from "./styles";

const Home = () => {
    return (
        <C.Container>
            {/* <img src={icct} alt="" /> */}
            <C.Label>LAUDO CLÍNICO</C.Label>
            <C.Content >
                <Button Text="CADASTRAR LAUDO" />
                <Button Text="CONSULTAR LAUDO PACIENTE" />
                {/* <Button Text="Login" onClick={() => navigate('/home')} /> */}
            </C.Content>
        </C.Container>
    );
}

export default Home;