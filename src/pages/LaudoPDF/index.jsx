import React, { useState, useRef } from "react";
import * as C from "./styles";
import api from "../../api/api";
import img_fundo from '../../../public/img_fundo.jpg';
import ButtonPDF from "../../components/ButtonPDF";
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useReactToPrint } from "react-to-print";

const LaudoPDF = () => {

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    const componentPDF = useRef();
    const navigate = useNavigate();

    const [nome, setNome] = useState('')
    const [idade, setIdade] = useState('')
    const [registro, setRegistro] = useState('')
    const [unidade, setUnidade] = useState('')
    const [data_coleta, setData] = useState(null)
    const [adequabilidade, setAdequabilidade] = useState('')
    const [epitelios, setEpitelios] = useState('')
    const [alteracoes_celulares, setAlteracoes] = useState('')
    const [microbiologia, setMicrobiologia] = useState('')
    const [atipias_celulares, setAtipias] = useState('');
    const [conclusao, setConclusao] = useState('');

    const postData = (e) => {
        e.preventDefault();
        api.post('cad-paciente', {
            nome,
            idade,
            registro: "Colpocitologia",
            unidade,
            data_coleta,
            adequabilidade,
            epitelios,
            alteracoes_celulares,
            microbiologia,
            atipias_celulares,
            conclusao
        })
            .then(res => {
                alert('Laudo do Paciente Cadastrado!')
                navigate('/home')
                // console.log('Posting Data', res)

            }).catch((err) => {
                alert('Laudo do Paciente não Cadastrado!')
            })
    }

    function Home() {
        navigate('/home');
    }

    const generatePDF = useReactToPrint({
        content: () => componentPDF.current,
        documentTitle: "UserData",
        onAfterPrint: () => alert("Data saved in PDF")
    });

    return (
        <div ref={componentPDF} style={{ width: '100%' }}>
            <C.Container>

            <C.ContainerImg>
                <figure id="container">
                    <img src={img_fundo} />
                    <figcaption>Teste</figcaption>
                </figure>
            </C.ContainerImg>
                {/* <label id="texto">TESTE</label> */}


            </C.Container>
            <ButtonPDF Text="PDF" onClick={generatePDF} />
        </div>
    );
}

export default LaudoPDF;