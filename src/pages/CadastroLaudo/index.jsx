import React, { useState, useEffect } from "react";
import * as C from "./styles";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import icct from '../../../src/icct-logo.png';
// import alertify from 'alertifyjs';
// import 'alertifyjs/build/css/alertify.css';
// import 'alertifyjs/build/css/themes/semantic.css';
// import api from "../../api/api";
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

const CadastroLaudo = () => {

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    const navigate = useNavigate();
    const [nome, setNome] = useState('')
    const [idade, setIdade] = useState('')
    const [registro, setRegistro] = useState('')
    const [unidade, setUnidade] = useState('')
    const [data_coleta, setData] = useState('');
    const [adequabilidade, setAdequabilidade] = useState('')
    const [epitelios, setEpitelios] = useState('')
    const [alteracoes, setAlteracoes] = useState('')
    const [microbiologia, setMicrobiologia] = useState('')
    const [atipias, setAtipias] = useState('');
    const [conclusao, setConclusao] = useState('');

    return (
        <C.Container>
            {/* <img src={icct} alt="" /> */}
            <C.Content >
                <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                    <div>
                        <TextField
                            sx={{ m: 1, width: '55ch' }}
                            label="Paciente:"
                            id="standard-size-normal"
                            variant="standard"
                        />

                        <TextField
                            sx={{ m: 1, width: '20ch' }}
                            label="Registro:"
                            id="standard-size-normal"
                            defaultValue="Colpocitologia"
                            variant="standard"
                        />
                    </div>

                    <div>
                        <TextField
                            sx={{ m: 1, width: '50ch' }}
                            label="Idade:"
                            id="standard-size-normal"
                            variant="standard"
                        />

                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker />
                        </LocalizationProvider>
                    </div>
                </Box>
                <C.Label>LAUDO DO EXAME CITOPATOLÓGICO DO COLO DO ÚTERO</C.Label>
                <C.Label>DIAGNÓSTICO DESCRITIVO</C.Label>
                <C.TiposAmostra>
                    TIPOS DE AMOSTRA
                </C.TiposAmostra>
                {/* <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 2, width: '35ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >   
                    <div>
                        <TextField label="Paciente" id="outlined-size-normal" defaultValue="" />
                        <TextField label="" id="outlined-size-normal" defaultValue="Colpocitologia" />
                    </div>
                </Box>

                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 2, width: '35ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >   
                    <div>
                        <TextField label="Paciente" id="outlined-size-normal" defaultValue="" />
                        <TextField label="" id="outlined-size-normal" defaultValue="Colpocitologia" />
                    </div>
                </Box> */}





                {/* <FormControl fullWidth sx={{ m: 1 }}>
                    Paciente:
                    <InputLabel htmlFor="outlined-adornment-amount"></InputLabel>
                    <OutlinedInput
                        value={nome} onChange={(e) => setNome(e.target.value)}
                    />
                </FormControl>

                <FormControl fullWidth sx={{ m: 1 }}>
                    Idade:
                    <InputLabel htmlFor="outlined-adornment-amount"></InputLabel>
                    <OutlinedInput
                        value={idade} onChange={(e) => setIdade(e.target.value)}
                    />
                </FormControl> */}

                {/* <FormControl fullWidth sx={{ m: 1 }}>
                    <InputLabel htmlFor="outlined-adornment-amount">PARTS NO</InputLabel>
                    <OutlinedInput
                        value={registro} onChange={(e) => setRegistro(e.target.value)}
                    />
                </FormControl>

                <FormControl fullWidth sx={{ m: 1 }}>
                    <InputLabel htmlFor="outlined-adornment-amount">LINE</InputLabel>
                    <OutlinedInput
                        value={line} onChange={(e) => setLine(e.target.value)}
                    />
                </FormControl> */}

                {/* <Button type="submit" variant="outlined" size="large" onClick={showOrHide}>Submit</Button> */}

            </C.Content>
        </C.Container>
    );
}

export default CadastroLaudo;