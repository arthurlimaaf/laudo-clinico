import React, { useState, useEffect } from 'react'
import Button from '../../components/Button';
import Button2 from '../../components/Button2';
import ButtonExcluir from '../../components/ButtonExcluir';
import ButtonPDF from '../../components/ButtonPDF';
import ButtonEdit from '../../components/ButtonEdit';
import Box from '@mui/material/Box';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import Table from '@mui/material/Table';
import TextField from '@mui/material/TextField';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import * as C from "./styles";
import { useNavigate } from "react-router-dom";
import api from '../../api/api';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const Home = () => {

    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const [data, setDate] = useState([])
    const [data2, setDate2] = useState([])
    const [error, setError] = useState(false);
    const [fullWidth, setFullWidth] = React.useState(true);
    const [maxWidth, setMaxWidth] = React.useState('lg');

    const EditLaudo = (nome, idade, registro, unidade, data_coleta, adequabilidade, epitelios, alteracoes_celulares, microbiologia, atipias_celulares, conclusao) => {
        navigate("/edit-laudo", { state: { nome, idade, registro, unidade, data_coleta, adequabilidade, epitelios, alteracoes_celulares, microbiologia, atipias_celulares, conclusao } });
    }

    const LaudoPDF = (nome, idade, registro, unidade, dataFormatada, adequabilidade, epitelios, alteracoes_celulares, microbiologia, atipias_celulares, conclusao) => {
        navigate("/laudo-pdf", { state: { nome, idade, registro, unidade, dataFormatada, adequabilidade, epitelios, alteracoes_celulares, microbiologia, atipias_celulares, conclusao } });
    }

    const EditLaudo2 = (nome2, idade2, registro2, unidade2, data_coleta2, adequabilidade2, epitelios2, alteracoes_celulares2, microbiologia2, conclusao2) => {
        navigate("/edit-sem-alteracoes", { state: { nome2, idade2, registro2, unidade2, data_coleta2, adequabilidade2, epitelios2, alteracoes_celulares2, microbiologia2, conclusao2 } });
    }

    const LaudoPDFSemAlteracoes = (nome2, idade2, registro2, unidade2, dataFormatada, adequabilidade2, epitelios2, alteracoes_celulares2, microbiologia2, conclusao2) => {
        navigate("/laudo-pdf-sem-alteracoes", { state: { nome2, idade2, registro2, unidade2, dataFormatada, adequabilidade2, epitelios2, alteracoes_celulares2, microbiologia2, conclusao2 } });
    }

    useEffect(() => {
        api.get('listPaciente')
            .then(res => {
                // console.log("Teste...", res.data.result)
                setDate(res.data.result)
                setFilter(res.data.result)
            }).catch(err => console.log(JSON.stringify(err))),

            api.get('listPaciente2')
                .then(res => {
                    // console.log("Teste...", res.data.result)
                    setDate2(res.data.result)
                    setFilter2(res.data.result)
                }).catch(err => console.log(err))
    }, []);

    const handleDelete = (id_paciente) => {
        api.delete(`/del-paciente/${id_paciente}`)
            .then(res => {
                // console.log('Deletado!!!', res.data.result)
                alert('Paciente Deletado!');
                window.location.reload();
            })
            .catch(err => console.log(err))
    };

    const handleDelete2 = (id_paciente2) => {
        api.delete(`/del-paciente2/${id_paciente2}`)
            .then(res => {
                // console.log('Deletado!!!', res.data.result)
                alert('Paciente Deletado!');
                window.location.reload();
            })
            .catch(err => console.log(err))
    };

    const handleLogout = async (e) => {
        e.preventDefault();
        navigate('/')
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleClickOpen2 = () => {
        setOpen2(true);
    };

    const handleClose2 = () => {
        setOpen2(false);
    };

    const [filterRecords, setFilter] = useState([]);

    const handleFilter = (event) => {
        const newData = filterRecords.filter(TableRow => TableRow.nome.toLowerCase().includes(event.target.value.toLowerCase()))
        setDate(newData);
    }

    const [filterRecords2, setFilter2] = useState([]);

    const handleFilter2 = (event) => {
        const newData2 = filterRecords2.filter(TableRow => TableRow.nome2.toLowerCase().includes(event.target.value.toLowerCase()))
        setDate2(newData2);
    }

    return (
        <C.Container>
            {/* <img src={icct} alt="" /> */}
            <C.Content >
                <C.Label>LAUDO CLÍNICO</C.Label>
                <Button Text="CADASTRAR LAUDO PACIENTE (COM ALTERAÇÕES CELULARES)" onClick={() => navigate('/cad-laudo')} />

                <Button2 Text="CONSULTAR LAUDO PACIENTE (COM ALTERAÇÕES CELULARES)" onClick={handleClickOpen} />
                <Dialog
                    open={open}
                    fullWidth={fullWidth}
                    maxWidth={maxWidth}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={handleClose}
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogTitle>
                        <Box
                            sx={{
                                width: 500,
                                maxWidth: '100%',
                            }}
                        >
                            <TextField onChange={handleFilter} fullWidth label="Nome do Paciente" id="fullWidth" />
                        </Box>
                    </DialogTitle>
                    <DialogContent>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="customized table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell><h4>PACIENTE</h4></TableCell>
                                        <TableCell align="right"><h4>IDADE</h4></TableCell>
                                        <TableCell align="right"><h4>REGISTRO</h4></TableCell>
                                        <TableCell align="right"><h4>UNIDADE</h4></TableCell>
                                        <TableCell align="right"><h4>DATA COLETA</h4></TableCell>
                                        <TableCell align="right"></TableCell>
                                        <TableCell align="right"></TableCell>
                                        <TableCell align="right"></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {data.map((data, index, dataInicial, dataCriada, dataFormatada) => (
                                        data.data_coleta = data.data_coleta.slice(0, 10),

                                        dataInicial = data.data_coleta,

                                        dataCriada = new Date(dataInicial),

                                        dataFormatada = dataCriada.toLocaleDateString('pt-BR', {
                                            timeZone: 'UTC',
                                        }),
                                        <TableRow key={index}>
                                            <TableCell component="th" scope="row">
                                                {data.nome}
                                            </TableCell>
                                            <TableCell align="right">{data.idade}</TableCell>
                                            <TableCell align="right">{data.registro}</TableCell>
                                            <TableCell align="right">{data.unidade}</TableCell>
                                            <TableCell align="right">{dataFormatada}</TableCell>
                                            <TableCell align="right"><ButtonEdit onClick={() => EditLaudo(data.nome, data.idade, data.registro, data.unidade, data.data_coleta, data.adequabilidade, data.epitelios, data.alteracoes_celulares, data.microbiologia, data.atipias_celulares, data.conclusao)} Text="Editar" /></TableCell>
                                            <TableCell align="right"><ButtonExcluir onClick={() => handleDelete(data.id_paciente)} Text="Excluir" /></TableCell>
                                            <TableCell align="right"><ButtonPDF Text="PDF" onClick={() => LaudoPDF(data.nome, data.idade, data.registro, data.unidade, dataFormatada, data.adequabilidade, data.epitelios, data.alteracoes_celulares, data.microbiologia, data.atipias_celulares, data.conclusao)} /></TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </DialogContent>
                </Dialog>

                <Button Text="CADASTRAR LAUDO PACIENTE (SEM ALTERAÇÕES CELULARES)" onClick={() => navigate('/cad-sem-alteracoes')} />

                <Button2 Text="CONSULTAR LAUDO PACIENTE (SEM ALTERAÇÕES CELULARES)" onClick={handleClickOpen2} />
                <Dialog
                    open={open2}
                    fullWidth={fullWidth}
                    maxWidth={maxWidth}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={handleClose2}
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogTitle>
                        <Box
                            sx={{
                                width: 500,
                                maxWidth: '100%',
                            }}
                        >
                            <TextField onChange={handleFilter2} fullWidth label="Nome do Paciente" id="fullWidth" />
                        </Box>
                    </DialogTitle>
                    <DialogContent>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="caption table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell><h4>PACIENTE</h4></TableCell>
                                        <TableCell align="right"><h4>IDADE</h4></TableCell>
                                        <TableCell align="right"><h4>REGISTRO</h4></TableCell>
                                        <TableCell align="right"><h4>UNIDADE</h4></TableCell>
                                        <TableCell align="right"><h4>DATA COLETA</h4></TableCell>
                                        <TableCell align="right"></TableCell>
                                        <TableCell align="right"></TableCell>
                                        <TableCell align="right"></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {data2.map((data, index2, dataInicial, dataCriada, dataFormatada) => (
                                        data.data_coleta2 = data.data_coleta2.slice(0, 10),

                                        dataInicial = data.data_coleta2,

                                        dataCriada = new Date(dataInicial),

                                        dataFormatada = dataCriada.toLocaleDateString('pt-BR', {
                                            timeZone: 'UTC',
                                        }),
                                        <TableRow key={index2}>
                                            <TableCell component="th" scope="row">
                                                {data.nome2}
                                            </TableCell>
                                            <TableCell align="right">{data.idade2}</TableCell>
                                            <TableCell align="right">{data.registro2}</TableCell>
                                            <TableCell align="right">{data.unidade2}</TableCell>
                                            <TableCell align="right">{dataFormatada}</TableCell>
                                            <TableCell align="right"><ButtonEdit onClick={() => EditLaudo2(data.nome2, data.idade2, data.registro2, data.unidade2, data.data_coleta2, data.adequabilidade2, data.epitelios2, data.alteracoes_celulares2, data.microbiologia2, data.conclusao2)} Text="Editar" /></TableCell>
                                            <TableCell align="right"><ButtonExcluir onClick={() => handleDelete2(data.id_paciente2)} Text="Excluir" /></TableCell>
                                            <TableCell align="right"><ButtonPDF Text="PDF" onClick={() => LaudoPDFSemAlteracoes(data.nome2, data.idade2, data.registro2, data.unidade2, dataFormatada, data.adequabilidade2, data.epitelios2, data.alteracoes_celulares2, data.microbiologia2, data.conclusao2)} /></TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </DialogContent>
                </Dialog>
                <Button Text="Sair" onClick={(e) => handleLogout(e)} />
            </C.Content>
        </C.Container>
    );
}

export default Home;