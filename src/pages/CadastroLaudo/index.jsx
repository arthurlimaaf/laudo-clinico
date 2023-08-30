import React, { useState, useEffect } from "react";
import * as C from "./styles";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
// import TextField from '@mui/material/TextField';
// import icct from '../../../src/icct-logo.png';
// import alertify from 'alertifyjs';
// import 'alertifyjs/build/css/alertify.css';
// import 'alertifyjs/build/css/themes/semantic.css';
// import api from "../../api/api";
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

const CadastroLaudo = () => {

    const navigate = useNavigate();
    const [station, setStation] = useState('')
    const [model, setModel] = useState('')
    const [parte_number, setParteNumber] = useState('')
    const [line, setLine] = useState('')
    const [datamatrix, setDatamatrix] = useState('');

    return (
        <C.Container>
            {/* <img src={icct} alt="" /> */}
            <C.Label>LAUDO CLÍNICO</C.Label>
            <C.Content >
                <FormControl fullWidth sx={{ m: 1 }}>
                    <InputLabel htmlFor="outlined-adornment-amount">STATION</InputLabel>
                    <OutlinedInput
                        value={station} onChange={(e) => setStation(e.target.value)}
                    />
                </FormControl>

                <FormControl fullWidth sx={{ m: 1 }}>
                    <InputLabel htmlFor="outlined-adornment-amount">MODEL</InputLabel>
                    <OutlinedInput
                        value={model} onChange={(e) => setModel(e.target.value)}
                    />
                </FormControl>

                <FormControl fullWidth sx={{ m: 1 }}>
                    <InputLabel htmlFor="outlined-adornment-amount">PARTS NO</InputLabel>
                    <OutlinedInput
                        value={parte_number} onChange={(e) => setParteNumber(e.target.value)}
                    />
                </FormControl>

                <FormControl fullWidth sx={{ m: 1 }}>
                    <InputLabel htmlFor="outlined-adornment-amount">LINE</InputLabel>
                    <OutlinedInput
                        value={line} onChange={(e) => setLine(e.target.value)}
                    />
                </FormControl>

                {/* <Button type="submit" variant="outlined" size="large" onClick={showOrHide}>Submit</Button> */}

            </C.Content>
        </C.Container>
    );
}

export default CadastroLaudo;