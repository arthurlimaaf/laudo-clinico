import React from 'react'
import Button from '../../components/Button';
import Button2 from '../../components/Button2';
// import icct from '../../../src/icct-logo.png';
import * as C from "./styles";
import { useNavigate } from "react-router-dom";

const Home = () => {

    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        // console.log("submit");
        navigate('/cad-laudo')
    }

    function handleSubmit2(event) {
        event.preventDefault();
        // console.log("submit");
        navigate('/consult-laudo')
    }

    return (
        <C.Container>
            {/* <img src={icct} alt="" /> */}
            <C.Label>LAUDO CLÍNICO</C.Label>
            <C.Content >
                <Button Text="CADASTRAR LAUDO PACIENTE (COM ALTERAÇÕES CELULARES)" onClick={() => navigate('/cad-laudo')} />
                <Button2 Text="CONSULTAR LAUDO PACIENTE (COM ALTERAÇÕES CELULARES)" onClick={() => navigate('/consult-laudo')} />
                <Button Text="CADASTRAR LAUDO PACIENTE (SEM ALTERAÇÕES CELULARES)" onClick={() => navigate('/cad-sem-alteracoes')} />
                <Button2 Text="CONSULTAR LAUDO PACIENTE (SEM ALTERAÇÕES CELULARES)" onClick={() => navigate('/consult-sem-alteracoes')} />
            </C.Content>
        </C.Container>
    );
}

export default Home;