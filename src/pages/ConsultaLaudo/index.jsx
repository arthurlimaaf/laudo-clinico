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
import { useNavigate } from "react-router-dom";

const ConsultLaudo = () => {

    const navigate = useNavigate();
    const [data, setDate] = useState([])

    const EditLaudo = (nome, idade, registro, unidade, data_coleta, adequabilidade, epitelios, alteracoes_celulares, microbiologia, atipias_celulares, conclusao) => {
        navigate("/edit-laudo", { nome, idade, registro, unidade, data_coleta, adequabilidade, epitelios, alteracoes_celulares, microbiologia, atipias_celulares, conclusao});
    }

    useEffect(() => {
        api.get('listPaciente')
            .then(res => {
                // console.log("Teste...", res.data.result)
                setDate(res.data.result)
            }).catch(err => console.log(err))
    }, []);

    const handleDelete = (nome) => {
        api.delete(`/del-paciente/${nome}`)
            .then(res => {
                // console.log('Deletado!!!', res.data.result)
                alert('Paciente Deletado!');
                navigate('/home');

            })
            .catch(err => console.log(err))
    };

    return (
        <C.Container>
            <C.Label>LAUDO CLÍNICO</C.Label>
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
                                    <TableCell align="right"><ButtonExcluir onClick={() => handleDelete(data.nome)} Text="Excluir" /></TableCell>
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