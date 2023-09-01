import React, { useState, useEffect } from "react";
import * as C from "./styles";
// import { Button } from "@mui/material";
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
// import icct from '../../../src/icct-logo.png';
// import alertify from 'alertifyjs';
// import 'alertifyjs/build/css/alertify.css';
// import 'alertifyjs/build/css/themes/semantic.css';
// import api from "../../api/api";
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';

const CadastroLaudo = () => {

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    const navigate = useNavigate();
    const [showElement, setShowElement] = useState(false)
    const showOrHide = () => setShowElement(true)
    const [showElement2, setShowElement2] = useState(false)
    const showOrHide2 = () => setShowElement2(true)

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
                            sx={{ m: 1, width: '48ch' }}
                            label="Idade:"
                            id="standard-size-normal"
                            variant="standard"
                        />

                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker />
                        </LocalizationProvider>
                    </div>
                    <C.Label>LAUDO DO EXAME CITOPATOLÓGICO DO COLO DO ÚTERO</C.Label>
                <C.Label>DIAGNÓSTICO DESCRITIVO</C.Label>

                    <div>
                        <br></br>
                        <h5>TIPOS DE AMOSTRA</h5>
                        <h5>CITOLOGIA CONVENCIONAL</h5>
                        <h5>___________________________________________________________________________________________________</h5><br></br>
                    </div>

                    <div>
                        <h5>* ADEQUABILIDADE DA AMOSTRA</h5>
                        <FormControl>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                            >
                                <FormControlLabel value="satisfatorio" control={<Radio />} label="Satisfatório" />
                                <FormControlLabel value="insastifatório" control={<Radio />} label="Insatisfatório" />
                            </RadioGroup><br></br>
                        </FormControl>

                        <h5>* EPITÉLIOS REPRESENTADOS NA AMOSTRA</h5>
                        <FormControl>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="female"
                                name="radio-buttons-group"
                            >
                                <FormControlLabel value="escamoso_ausencia" control={<Radio />} label="Escamoso, ausência de componente endocervical ou de zona de transformação" />
                                <FormControlLabel value="escamoso_glandular" control={<Radio />} label="Escamoso e Glandular" />
                                <FormControlLabel value="escamoso_meta" control={<Radio />} label="Escamoso, Glandular e Metaplásico" />
                                <FormControlLabel value="escamoso_metaplastico" control={<Radio />} label="Escamoso e Metaplásico" />
                            </RadioGroup><br></br>
                        </FormControl>

                        <h5>* ALTERAÇÕES CELULARES BENIGNAS REATIVAS OU REPARATIVAS</h5>
                        <FormControl>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                            >
                                <FormControlLabel value="sim" onClick={showOrHide} control={<Radio />} label="Sim" />
                                <FormControlLabel value="nao" onClick={showOrHide2} control={<Radio />} label="Não" />
                            </RadioGroup><br></br>
                        </FormControl>

                        {showElement ?
                            <FormControl>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue="female"
                                    name="radio-buttons-group"
                                >
                                    <FormControlLabel value="inflamacao" control={<Radio />} label="Inflamação" />
                                    <FormControlLabel value="cervite" control={<Radio />} label="Cervite Linfocítica / Folicular" />
                                    <FormControlLabel value="radiacao" control={<Radio />} label="Radiação" />
                                    <FormControlLabel value="reacao" control={<Radio />} label="Reação ao dispositivo intrauterino (DIU)" />
                                </RadioGroup><br></br>

                                <h5>* MICROBIOLOGIA</h5>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue="female"
                                    name="radio-buttons-group"
                                >
                                    <FormControlLabel value="1" control={<Radio />} label="Bacilos curtos" />
                                    <FormControlLabel value="2" control={<Radio />} label="Bacilos curtos, Lactobacillus sp" />
                                    <FormControlLabel value="3" control={<Radio />} label="Bacilos curtos, organismos fúngicos morfologicamente consistentes com Candida spp., Bacilos curtos" />
                                    <FormControlLabel value="4" control={<Radio />} label="Bacilos curtos, organismos fúngicos morfologicamente consistentes com Candida spp" />
                                    <FormControlLabel value="5" control={<Radio />} label="Desvio da flora sugestivo de vaginose bacteriana" />
                                    <FormControlLabel value="6" control={<Radio />} label="Organismos fúngicos morfologicamente consistentes com Candida spp." />
                                    <FormControlLabel value="7" control={<Radio />} label="De padrão cocobacilar" />
                                    <FormControlLabel value="8" control={<Radio />} label="Lactobacillus sp" />
                                    <FormControlLabel value="9" control={<Radio />} label="Lactobacillus sp. com citólise discreta" />
                                    <FormControlLabel value="10" control={<Radio />} label="Lactobacillus sp. com citólise moderada" />
                                    <FormControlLabel value="11" control={<Radio />} label="Lactobacillus sp. com citólise acentuada" />
                                    <FormControlLabel value="12" control={<Radio />} label="Trichomonas vaginalis" />
                                    <FormControlLabel value="13" control={<Radio />} label="Bactérias morfologicamente consistentes com Actinomyces spp" />
                                    <FormControlLabel value="14" control={<Radio />} label="Alterações celulares consistentes com vírus Herpes simples" />
                                    <FormControlLabel value="15" control={<Radio />} label="Alterações celulares consistentes com Citomegalovírus" />
                                </RadioGroup><br></br>

                                <h5>* ATIPIAS CELULARES</h5>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"
                                >
                                    <FormControlLabel value="presente" control={<Radio />} label="Presente" />
                                    <FormControlLabel value="ausente" control={<Radio />} label="Ausente" />
                                </RadioGroup><br></br>

                                <h5>* OBSERVAÇÃO</h5>
                                {/*VERIFICAR ESSA OBSERVAÇÃO  */}

                                <h5>* CONCLUSÃO</h5>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue="female"
                                    name="radio-buttons-group"
                                >
                                    <FormControlLabel value="citologia1" control={<Radio />} label="Citologia inflamatória discreta" />
                                    <FormControlLabel value="citologia2" control={<Radio />} label="Citologia inflamatória moderada" />
                                    <FormControlLabel value="citologia3" control={<Radio />} label="Citologia inflamatória acentuada" />
                                    <FormControlLabel value="citologia4" control={<Radio />} label="Citologia inflamatória discreta atrófica" />
                                    <FormControlLabel value="citologia5" control={<Radio />} label="Citologia inflamatória moderada atrófica" />
                                    <FormControlLabel value="citologia6" control={<Radio />} label="Citologia inflamatória acentuada atrófica" />
                                </RadioGroup><br></br>

                            </FormControl>
                            : null}

                        {/* CASO A RESPOSTA 3 FOR NÃO, ENTRAR NESSA CONDIÇÃO */}
                        {showElement2 ?
                            <FormControl>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue="female"
                                    name="radio-buttons-group"
                                >
                                    <FormControlLabel value="inflamacao" control={<Radio />} label="Dentro dos Limites da Normalidade" />
                                </RadioGroup><br></br>

                                <h5>* MICROBIOLOGIA</h5>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue="female"
                                    name="radio-buttons-group"
                                >
                                    <FormControlLabel value="1" control={<Radio />} label="Bacilos curtos" />
                                    <FormControlLabel value="2" control={<Radio />} label="Bacilos curtos, Lactobacillus sp" />
                                    <FormControlLabel value="3" control={<Radio />} label="Bacilos curtos, organismos fúngicos morfologicamente consistentes com Candida spp., Bacilos curtos" />
                                    <FormControlLabel value="4" control={<Radio />} label="Bacilos curtos, organismos fúngicos morfologicamente consistentes com Candida spp" />
                                    <FormControlLabel value="5" control={<Radio />} label="Desvio da flora sugestivo de vaginose bacteriana" />
                                    <FormControlLabel value="6" control={<Radio />} label="Organismos fúngicos morfologicamente consistentes com Candida spp." />
                                    <FormControlLabel value="7" control={<Radio />} label="De padrão cocobacilar" />
                                    <FormControlLabel value="8" control={<Radio />} label="Lactobacillus sp" />
                                    <FormControlLabel value="9" control={<Radio />} label="Lactobacillus sp. com citólise discreta" />
                                    <FormControlLabel value="10" control={<Radio />} label="Lactobacillus sp. com citólise moderada" />
                                    <FormControlLabel value="11" control={<Radio />} label="Lactobacillus sp. com citólise acentuada" />
                                    <FormControlLabel value="12" control={<Radio />} label="Trichomonas vaginalis" />
                                    <FormControlLabel value="13" control={<Radio />} label="Bactérias morfologicamente consistentes com Actinomyces spp" />
                                    <FormControlLabel value="14" control={<Radio />} label="Alterações celulares consistentes com vírus Herpes simples" />
                                    <FormControlLabel value="15" control={<Radio />} label="Alterações celulares consistentes com Citomegalovírus" />
                                </RadioGroup><br></br>

                                <h5>* CONCLUSÃO</h5>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue="female"
                                    name="radio-buttons-group"
                                >
                                    <FormControlLabel value="citologia1" control={<Radio />} label="NEGATIVO PARA LESÃO INTRAEPITELIAL OU MALIGNIDADE NO MATERIAL EXAMINADO." />
                                </RadioGroup><br></br>

                            </FormControl>
                            : null}
                    </div>
                </Box>

                <Stack direction="row" spacing={2}>
                    <Button variant="contained">CADASTRAR</Button>
                </Stack>

            </C.Content>
        </C.Container>
    );
}

export default CadastroLaudo;