import React, { useState, useEffect } from 'react'
import api from "../../api/api";
import Laudo from '../Reports/Laudo';
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
// import PacientePDF from '../Reports/Laudo';

const ConsultLaudo = () => {

    const navigate = useNavigate();
    const [data, setDate] = useState([])

    const EditLaudo = (nome, idade, registro, unidade, data_coleta, adequabilidade, epitelios, alteracoes_celulares, microbiologia, atipias_celulares, conclusao) => {
        navigate("/edit-laudo", {state:{nome, idade, registro, unidade, data_coleta, adequabilidade, epitelios, alteracoes_celulares, microbiologia, atipias_celulares, conclusao}});
    }

    const Laudo = (nome, idade, registro, unidade, data_coleta, adequabilidade, epitelios, alteracoes_celulares, microbiologia, atipias_celulares, conclusao) => {
        navigate("/laudo-pdf", {state:{nome, idade, registro, unidade, data_coleta, adequabilidade, epitelios, alteracoes_celulares, microbiologia, atipias_celulares, conclusao}});
    }

    useEffect(() => {
        api.get('listPaciente')
            .then(res => {
                // console.log("Teste...", res.data.result)
                setDate(res.data.result)
            }).catch(err => console.log(err))
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

    return (
        <C.Container>
            <C.Label>CONSULTA LAUDO CLÍNICO COM ALTERAÇÕES CELULARES</C.Label>
            <C.Content >
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="caption table">
                        <TableHead>
                            <TableRow>
                                <TableCell>PACIENTE</TableCell>
                                <TableCell align="right">IDADE</TableCell>
                                <TableCell align="right">REGISTRO</TableCell>
                                <TableCell align="right">UNIDADE</TableCell>
                                <TableCell align="right">DATA COLETA</TableCell>
                                <TableCell align="right"></TableCell>
                                <TableCell align="right"></TableCell>
                                <TableCell align="right"></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map((data, index) => (
                                <TableRow key={index}>
                                    <TableCell component="th" scope="row">
                                        {data.nome}
                                    </TableCell>
                                    <TableCell align="right">{data.idade}</TableCell>
                                    <TableCell align="right">{data.registro}</TableCell>
                                    <TableCell align="right">{data.unidade}</TableCell>
                                    <TableCell align="right">{data.data_coleta}</TableCell>
                                    <TableCell align="right"><ButtonEdit onClick={() => EditLaudo(data.nome, data.idade, data.registro, data.unidade, data.data_coleta, data.adequabilidade, data.epitelios, data.alteracoes_celulares, data.microbiologia, data.atipias_celulares, data.conclusao)} Text="Editar" /></TableCell>
                                    <TableCell align="right"><ButtonExcluir onClick={() => handleDelete(data.id_paciente)} Text="Excluir" /></TableCell>
                                    <TableCell align="right"><ButtonPDF Text="PDF" onClick={() => Laudo(data.nome, data.idade, data.registro, data.unidade, data.data_coleta, data.adequabilidade, data.epitelios, data.alteracoes_celulares, data.microbiologia, data.atipias_celulares, data.conclusao)}/></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </C.Content>
        </C.Container>
    );
}

export default ConsultLaudo;