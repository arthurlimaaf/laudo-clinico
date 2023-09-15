import React, { useState } from "react";
import * as C from "./styles";
import api from "../../api/api";
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

const CadastroSemAlteracoes = () => {

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    const navigate = useNavigate();

    const [nome2, setNome2] = useState('')
    const [idade2, setIdade2] = useState('')
    const [registro2, setRegistro2] = useState('')
    const [unidade2, setUnidade2] = useState('')
    const [data_coleta2, setData2] = useState(null)
    const [adequabilidade2, setAdequabilidade2] = useState('')
    const [epitelios2, setEpitelios2] = useState('')
    const [alteracoes_celulares2, setAlteracoes2] = useState('')
    const [microbiologia2, setMicrobiologia2] = useState('')
    const [conclusao2, setConclusao2] = useState('');

    const postData2 = (e) => {
        e.preventDefault();
        api.post('cad-paciente2', {
            nome2,
            idade2,
            registro2: "Colpocitologia",
            unidade2,
            data_coleta2,
            adequabilidade2,
            epitelios2,
            alteracoes_celulares2,
            microbiologia2,
            conclusao2
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

    return (
        <C.Container>
            <C.Content>
                <form>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                        <div>
                            <TextField
                                sx={{ m: 1, width: '55ch' }}
                                label="Paciente:"
                                id="standard-size-normal"
                                variant="standard"
                                value={nome2}
                                onChange={(e) => setNome2(e.target.value)}
                            />

                            <TextField
                                sx={{ m: 1, width: '18ch' }}
                                label="Idade:"
                                id="standard-size-normal"
                                variant="standard"
                                value={idade2}
                                onChange={(e) => setIdade2(e.target.value)}
                            />
                        </div>

                        <div>
                            <TextField
                                sx={{ m: 1, width: '20ch' }}
                                label="Registro:"
                                id="standard-size-normal"
                                // value="Colpocitologia"
                                variant="standard"
                                value="Colpocitologia"
                                onChange={(e) => setRegistro2(e.target.value)}
                            />
                        </div>

                        <div>
                            <Box sx={{ minWidth: 220 }}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Unidade</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={unidade2}
                                        label="Unidade"
                                        onChange={(e) => setUnidade2(e.target.value)}
                                    >
                                        <MenuItem value="Matriz">Matriz</MenuItem>
                                        <MenuItem value="Educandos">Educandos</MenuItem>
                                        <MenuItem value="Aparecida">Aparecida</MenuItem>
                                        <MenuItem value="Alvorada">Alvorada</MenuItem>
                                        <MenuItem value="Cidade Nova">Cidade Nova</MenuItem>
                                        <MenuItem value="Manoa">Manoa</MenuItem>
                                        <MenuItem value="Grande Circular">Grande Circular</MenuItem>
                                        <MenuItem value="Torquato">Torquato</MenuItem>
                                        <MenuItem value="Compensa">Compensa</MenuItem>
                                        <MenuItem value="Lírio do Vale">Lírio do Vale</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>{' '}
                        </div>

                        <div>
                            <FormControl fullWidth>
                                <LocalizationProvider dateAdapter={AdapterDayjs} >
                                    <DatePicker value={data_coleta2}
                                        onChange={(e) => setData2(e)} />
                                </LocalizationProvider>
                            </FormControl>
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
                                    value={adequabilidade2}
                                    onChange={(e) => setAdequabilidade2(e.target.value)}
                                >
                                    <FormControlLabel control={<Radio />} value="Satisfatório" label="Satisfatório" />
                                    <FormControlLabel control={<Radio />} value="Insatisfatório" label="Insatisfatório" />
                                </RadioGroup><br></br>
                            </FormControl>

                            <h5>* EPITÉLIOS REPRESENTADOS NA AMOSTRA</h5>
                            <FormControl>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue="female"
                                    name="radio-buttons-group"
                                    value={epitelios2}
                                    onChange={(e) => setEpitelios2(e.target.value)}
                                >
                                    <FormControlLabel value="Escamoso, Glandular" control={<Radio />} label="Escamoso, Glandular" />
                                    <FormControlLabel value="Escamoso, ausência de componente endocervical ou de zona de transformação" control={<Radio />} label="Escamoso, ausência de componente endocervical ou de zona de transformação" />
                                    <FormControlLabel value="Escamoso, Glandular e Metaplásico" control={<Radio />} label="Escamoso, Glandular e Metaplásico" />
                                    <FormControlLabel value="Escamoso e Metaplásico" control={<Radio />} label="Escamoso e Metaplásico" />
                                </RadioGroup><br></br>
                            </FormControl>

                            <h5>* ALTERAÇÕES CELULARES BENIGNAS REATIVAS OU REPARATIVAS</h5>
                            <FormControl>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue="female"
                                    name="radio-buttons-group"
                                    value={alteracoes_celulares2}
                                    onChange={(e) => setAlteracoes2(e.target.value)}
                                >
                                    <FormControlLabel value="Dentro dos Limites da Normalidade" control={<Radio />} label="Dentro dos Limites da Normalidade" />
                                </RadioGroup><br></br>

                                <h5>* MICROBIOLOGIA</h5>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue="female"
                                    name="radio-buttons-group"
                                    value={microbiologia2}
                                    onChange={(e) => setMicrobiologia2(e.target.value)}
                                >
                                    <FormControlLabel value="Bacilos curtos" control={<Radio />} label="Bacilos curtos" />
                                    <FormControlLabel value="Bacilos curtos, Lactobacillus sp" control={<Radio />} label="Bacilos curtos, Lactobacillus sp" />
                                    <FormControlLabel value="Bacilos curtos, organismos fúngicos morfologicamente consistentes com Candida spp., Bacilos curtos" control={<Radio />} label="Bacilos curtos, organismos fúngicos morfologicamente consistentes com Candida spp., Bacilos curtos" />
                                    <FormControlLabel value="Bacilos curtos, organismos fúngicos morfologicamente consistentes com Candida spp" control={<Radio />} label="Bacilos curtos, organismos fúngicos morfologicamente consistentes com Candida spp" />
                                    <FormControlLabel value="Desvio da flora sugestivo de vaginose bacteriana" control={<Radio />} label="Desvio da flora sugestivo de vaginose bacteriana" />
                                    <FormControlLabel value="Organismos fúngicos morfologicamente consistentes com Candida spp." control={<Radio />} label="Organismos fúngicos morfologicamente consistentes com Candida spp." />
                                    <FormControlLabel value="De padrão cocobacilar" control={<Radio />} label="De padrão cocobacilar" />
                                    <FormControlLabel value="Lactobacillus sp" control={<Radio />} label="Lactobacillus sp" />
                                    <FormControlLabel value="Lactobacillus sp. com citólise discreta" control={<Radio />} label="Lactobacillus sp. com citólise discreta" />
                                    <FormControlLabel value="Lactobacillus sp. com citólise moderada" control={<Radio />} label="Lactobacillus sp. com citólise moderada" />
                                    <FormControlLabel value="Lactobacillus sp. com citólise acentuada" control={<Radio />} label="Lactobacillus sp. com citólise acentuada" />
                                    <FormControlLabel value="Trichomonas vaginalis" control={<Radio />} label="Trichomonas vaginalis" />
                                    <FormControlLabel value="Bactérias morfologicamente consistentes com Actinomyces spp" control={<Radio />} label="Bactérias morfologicamente consistentes com Actinomyces spp" />
                                    <FormControlLabel value="Alterações celulares consistentes com vírus Herpes simples" control={<Radio />} label="Alterações celulares consistentes com vírus Herpes simples" />
                                    <FormControlLabel value="Alterações celulares consistentes com Citomegalovírus" control={<Radio />} label="Alterações celulares consistentes com Citomegalovírus" />
                                </RadioGroup><br></br>

                                <h5>* CONCLUSÃO</h5>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue="female"
                                    name="radio-buttons-group"
                                    value={conclusao2}
                                    onChange={(e) => setConclusao2(e.target.value)}
                                >
                                    <FormControlLabel value="NEGATIVO PARA LESÃO INTRAEPITELIAL OU MALIGNIDADE NO MATERIAL EXAMINADO." control={<Radio />} label="NEGATIVO PARA LESÃO INTRAEPITELIAL OU MALIGNIDADE NO MATERIAL EXAMINADO." />
                                </RadioGroup><br></br>
                            </FormControl>
                        </div>
                    </Box>
                    <Stack direction="row" spacing={2}>
                        <Button onClick={postData2} variant="contained">CADASTRAR</Button>
                        <Button onClick={Home} variant="contained">VOLTAR</Button>
                    </Stack>
                </form>
            </C.Content>
        </C.Container>
    );
}

export default CadastroSemAlteracoes;