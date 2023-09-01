import React, { useState } from 'react'
import Button from '../../components/Button';
// import icct from '../../../src/icct-logo.png';
import * as C from "./styles";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
// import { useNavigate } from "react-router-dom";

const ConsultLaudo = () => {

    // const navigate = useNavigate();
    const [showElement3, setShowElement3] = useState(false);
    const showOrHide3 = () => setShowElement3(true);

    // function handleSubmit(event) {
    //     event.preventDefault();
    //     // console.log("submit");
    //     navigate('/cad-laudo')
    // }

    return (
        <C.Container>
            {/* <img src={icct} alt="" /> */}
            <C.Label>LAUDO CLÍNICO</C.Label>
            <C.Content >
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '38ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField id="outlined-basic" label="Paciente" variant="outlined" />
                </Box>
                {/* <Button Text="CADASTRAR LAUDO" onClick={() => navigate('/cad-laudo')} /> */}
                <Button Text="CONSULTAR LAUDO" onClick={showOrHide3} />
                {/* <Button Text="Login" onClick={() => navigate('/home')} /> */}
            </C.Content>

            {showElement3 ?

                <C.Content2>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>

                        <div>
                            <TextField
                                disabled
                                sx={{ m: 1, width: '20ch' }}
                                label="Paciente:"
                                id="standard-size-normal"
                                variant="standard"
                            />

                            <TextField
                                disabled
                                sx={{ m: 1, width: '20ch' }}
                                label="Registro:"
                                id="standard-size-normal"
                                variant="standard"
                            />

                            <TextField
                                disabled
                                sx={{ m: 1, width: '20ch' }}
                                label="Idade:"
                                id="standard-size-normal"
                                variant="standard"
                            />

                            <TextField
                                disabled
                                sx={{ m: 1, width: '20ch' }}
                                label="Registro:"
                                id="standard-size-normal"
                                variant="standard"
                            />

                            <TextField
                                disabled
                                sx={{ m: 1, width: '20ch' }}
                                label="Data Coleta:"
                                id="standard-size-normal"
                                variant="standard"
                            />
                        </div>
                    </Box>

                </C.Content2>

                : null}
        </C.Container>
    );
}

export default ConsultLaudo;