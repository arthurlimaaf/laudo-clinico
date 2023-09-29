import React, { useState, useEffect } from 'react'
import api from "../../api/api";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ButtonEdit from '../../components/ButtonEdit';
import * as C from "./styles";
import ButtonExcluir from '../../components/ButtonExcluir';
import ButtonPDF from '../../components/ButtonPDF';
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';

const ConsultLaudo = () => {

    const navigate = useNavigate();
    const [data, setDate] = useState([])

    const EditLaudo = (nome, idade, registro, unidade, data_coleta, adequabilidade, epitelios, alteracoes_celulares, microbiologia, atipias_celulares, conclusao) => {
        navigate("/edit-laudo", { state: { nome, idade, registro, unidade, data_coleta, adequabilidade, epitelios, alteracoes_celulares, microbiologia, atipias_celulares, conclusao } });
    }

    const LaudoPDF = (nome, idade, registro, unidade, dataFormatada, adequabilidade, epitelios, alteracoes_celulares, microbiologia, atipias_celulares, conclusao) => {
        navigate("/laudo-pdf", { state: { nome, idade, registro, unidade, dataFormatada, adequabilidade, epitelios, alteracoes_celulares, microbiologia, atipias_celulares, conclusao } });
    }

    useEffect(() => {
        api.get('listPaciente')
            .then(res => {
                // console.log("Teste...", res.data.result)
                setDate(res.data.result)
            }).catch(err => console.log(JSON.stringify(err)))
    }, []);

    const handleDelete = (id_paciente) => {
        api.delete(`/del-paciente/${id_paciente}`)
            .then(res => {
                // console.log('Deletado!!!', res.data.result)
                alert('Paciente Deletado!');
                navigate('/home');
            })
            .catch(err => console.log(err))
    };

    function Home() {
        navigate('/home');
    }

    return (
        <C.Container>
            <C.Content >
                <C.Label>CONSULTA LAUDO CLÍNICO COM ALTERAÇÕES CELULARES</C.Label>
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
            </C.Content>
            <Button onClick={Home} variant="contained" disableElevation>
                Voltar
            </Button>
        </C.Container>
    );
}

export default ConsultLaudo;