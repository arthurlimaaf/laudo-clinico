import React, { useState, useEffect } from 'react'
import api from "../../api/api";
// import PacientePDF from '../Reports/Laudo';
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

const ConsultaSemAlteracoes = () => {

    const navigate = useNavigate();
    const [data, setDate] = useState([])

    const EditLaudo2 = (nome2, idade2, registro2, unidade2, data_coleta2, adequabilidade2, epitelios2, alteracoes_celulares2, microbiologia2, conclusao2) => {
        navigate("/edit-sem-alteracoes", {state:{nome2, idade2, registro2, unidade2, data_coleta2, adequabilidade2, epitelios2, alteracoes_celulares2, microbiologia2, conclusao2}});
    }

    useEffect(() => {
        api.get('listPaciente2')
            .then(res => {
                // console.log("Teste...", res.data.result)
                setDate(res.data.result)
            }).catch(err => console.log(err))
    }, []);

    const handleDelete2 = (id_paciente2) => {
        api.delete(`/del-paciente2/${id_paciente2}`)
            .then(res => {
                // console.log('Deletado!!!', res.data.result)
                alert('Paciente Deletado!');
                navigate('/home');
            })
            .catch(err => console.log(err))
    };

    return (
        <C.Container>
            <C.Label>CONSULTA LAUDO CLÍNICO SEM ALTERAÇÕES CELULARES</C.Label>
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
                                        {data.nome2}
                                    </TableCell>
                                    <TableCell align="right">{data.idade2}</TableCell>
                                    <TableCell align="right">{data.registro2}</TableCell>
                                    <TableCell align="right">{data.unidade2}</TableCell>
                                    <TableCell align="right">{data.data_coleta2}</TableCell>
                                    <TableCell align="right"><ButtonEdit onClick={() => EditLaudo2(data.nome2, data.idade2, data.registro2, data.unidade2, data.data_coleta2, data.adequabilidade2, data.epitelios2, data.alteracoes_celulares2, data.microbiologia2, data.conclusao2)} Text="Editar" /></TableCell>
                                    <TableCell align="right"><ButtonExcluir onClick={() => handleDelete2(data.id_paciente2)} Text="Excluir" /></TableCell>
                                    {/* <TableCell align="right"><ButtonPDF Text="PDF" onClick={() => PacientePDF()}/></TableCell> */}
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </C.Content>
        </C.Container>
    );
}

export default ConsultaSemAlteracoes;