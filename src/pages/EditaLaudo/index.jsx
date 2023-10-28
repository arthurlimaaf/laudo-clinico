import React, { useState } from "react";
import * as C from "./styles";
import api from "../../api/api";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import dayjs from "dayjs";

const EditaLaudo = () => {

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    const location = useLocation();
    const navigate = useNavigate();
    const [data, setDate] = useState(location.state)
    const [showElement, setShowElement] = useState(false)
    const showOrHide = () => setShowElement(true)
    const [showElement2, setShowElement2] = useState(false)
    const showOrHide2 = () => setShowElement2(true)
    const [nome, setNome] = useState(data.nome)
    const [idade, setIdade] = useState(data.idade)
    const [registro, setRegistro] = useState(data.registro)
    const [unidade, setUnidade] = useState(data.unidade)
    const [data_coleta, setData] = useState(data.data_coleta)
    const [adequabilidade, setAdequabilidade] = useState(data.adequabilidade)
    const [epitelios, setEpitelios] = useState(data.epitelios)
    const [alteracoes_celulares, setAlteracoes] = useState(data.alteracoes_celulares)
    const [microbiologia, setMicrobiologia] = useState(data.microbiologia)
    const [atipias_celulares, setAtipias] = useState(data.atipias_celulares)
    const [conclusao, setConclusao] = useState(data.conclusao)

    function EditLaudo(nome) {
        api.put(`put-paciente/${nome}`, {nome: nome, idade: idade, registro: registro, unidade: unidade, data_coleta: data_coleta,
         adequabilidade: adequabilidade, epitelios: epitelios, alteracoes_celulares: alteracoes_celulares, 
         microbiologia: microbiologia, atipias_celulares: atipias_celulares, conclusao: conclusao}, (res) => {
            console.log(res);
         })
        .then(res => {
            alert('Laudo Paciente Atualizado!')
            navigate('/home')
            // console.log(res);
    
        } ).catch((err) => {
          alert('Laudo Paciente não Atualizado!')
        })
      }

    function Home(){
        navigate('/home');
    }

    return (
        <C.Container>
            <C.Content >
                <form>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                        <div>
                            <TextField
                                sx={{ m: 1, width: '55ch' }}
                                label="Paciente:"
                                id="standard-size-normal"
                                variant="standard"
                                disabled={true}
                                value={data.nome} 
                                onChange={e => setNome(e.target.value)}
                            />

                            <TextField
                                sx={{ m: 1, width: '18ch' }}
                                label="Idade:"
                                id="standard-size-normal"
                                variant="standard"
                                value={idade} 
                                onChange={e => setIdade(e.target.value)}
                            />
                        </div>

                        <div>
                            <TextField
                                sx={{ m: 1, width: '20ch' }}
                                label="Registro:"
                                id="standard-size-normal"
                                disabled={true}
                                // value="Colpocitologia"
                                variant="standard"
                                value="Colpocitologia"
                                onChange={e => setRegistro(e.target.value)}
                            />
                        </div>

                        <div>
                        <Box sx={{ minWidth: 220 }}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Unidade</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={unidade}
                                        label="Unidade"
                                        onChange={e => setUnidade(e.target.value)}
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
                                    <DatePicker value={dayjs(data_coleta)}
                                        label="Data Coleta"
                                        format="DD-MM-YYYY"
                                        onChange={e => setData(e)} />
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
                                    value={adequabilidade}
                                    onChange={e => setAdequabilidade(e.target.value)}
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
                                    value={epitelios}
                                    onChange={e => setEpitelios(e.target.value)}
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
                                    value={alteracoes_celulares}
                                    onChange={e => setAlteracoes(e.target.value)}
                                >
                                    <FormControlLabel value="Inflamação" control={<Radio />} label="Inflamação" />
                                    <FormControlLabel value="Cervite Linfocítica / Folicular" control={<Radio />} label="Cervite Linfocítica / Folicular" />
                                    <FormControlLabel value="Radiação" control={<Radio />} label="Radiação" />
                                    <FormControlLabel value="Reação ao dispositivo intrauterino (DIU)" control={<Radio />} label="Reação ao dispositivo intrauterino (DIU)" />
                                </RadioGroup><br></br>

                                <h5>* MICROBIOLOGIA</h5>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue="female"
                                    name="radio-buttons-group"
                                    value={microbiologia}
                                    onChange={e => setMicrobiologia(e.target.value)}
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

                                <h5>* ATIPIAS CELULARES</h5>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"
                                    value={atipias_celulares}
                                    onChange={e => setAtipias(e.target.value)}
                                >
                                    <FormControlLabel value="Presente" control={<Radio />} label="Presente" />
                                    <FormControlLabel value="Ausente" control={<Radio />} label="Ausente" />
                                </RadioGroup><br></br>

                                {/* <h5>* OBSERVAÇÃO</h5> */}
                                {/*VERIFICAR ESSA OBSERVAÇÃO  */}

                                <h5>* CONCLUSÃO</h5>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue="female"
                                    name="radio-buttons-group"
                                    value={conclusao}
                                    onChange={e => setConclusao(e.target.value)}
                                >
                                    <FormControlLabel value="Citologia inflamatória discreta" control={<Radio />} label="Citologia inflamatória discreta" />
                                    <FormControlLabel value="Citologia inflamatória moderada" control={<Radio />} label="Citologia inflamatória moderada" />
                                    <FormControlLabel value="Citologia inflamatória acentuada" control={<Radio />} label="Citologia inflamatória acentuada" />
                                    <FormControlLabel value="Citologia inflamatória discreta atrófica" control={<Radio />} label="Citologia inflamatória discreta atrófica" />
                                    <FormControlLabel value="Citologia inflamatória moderada atrófica" control={<Radio />} label="Citologia inflamatória moderada atrófica" />
                                    <FormControlLabel value="Citologia inflamatória acentuada atrófica" control={<Radio />} label="Citologia inflamatória acentuada atrófica" />
                                </RadioGroup><br></br>
                            </FormControl>                            
                        </div>
                    </Box>
                    <Stack direction="row" spacing={2}>
                        <Button onClick={()=> EditLaudo(data.nome)} variant="contained">ATUALIZAR</Button>
                        <Button onClick={Home} variant="contained">VOLTAR</Button>
                    </Stack>
                </form>
            </C.Content>
        </C.Container>
    );
}

export default EditaLaudo;


//PAGINA 1
// import {Link, useNavigate} from 'react-router-dom';

// function ComponentA(props) {

//   const navigate = useNavigate();

//   const toComponentB=()=>{
// navigate('/componentB',{state:{id:1,name:'sabaoon'}});
//   }

//   return (
//    <>
// <div> <a onClick={()=>{toComponentB()}}>Component B<a/></div>
// </>
//   );


// }
// export default ComponentA;


// PAGINA 2
// import {useLocation} from 'react-router-dom';

//  function ComponentB() {

//     const location = useLocation();
   
//         return (

//             <>
               
// <div>{location.state.name}</div>

//             </>
//         )
//     }

// export default ComponentB;
