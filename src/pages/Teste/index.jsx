import React, { useState, useEffect } from 'react'
import Button from '../../components/Button';
import api from '../../api/api';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Dialog from '@mui/material/Dialog';
import ButtonExcluir from '../../components/ButtonExcluir';
import ButtonPDF from '../../components/ButtonPDF';
import ButtonEdit from '../../components/ButtonEdit';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import * as C from "./styles";
import { useNavigate, useParams } from "react-router-dom";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const Teste = () => {

    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);
    const [data, setDate] = useState([])
    const [nome, setNome] = useState(null)
    const [error, setError] = useState(false);
    const [fullWidth, setFullWidth] = React.useState(true);
    const [maxWidth, setMaxWidth] = React.useState('lg');

    // const columns = [
    //     {
    //         name: 'Paciente',
    //         selector: row => row.nome,
    //         // sortable: true
    //     },
    //     {
    //         name: "Idade",
    //         selector: row => row.idade,
    //         // sortable: true
    //     },
    //     {
    //         name: "Unidade",
    //         selector: row => row.unidade,
    //         // sortable: true
    //     },
    //     {
    //         name: "Data Coleta",
    //         selector: row => row.data_coleta,
    //         // sortable: true
    //     }
    // ];

    const EditLaudo = (nome, idade, registro, unidade, data_coleta, adequabilidade, epitelios, alteracoes_celulares, microbiologia, atipias_celulares, conclusao) => {
        navigate("/edit-laudo", { state: { nome, idade, registro, unidade, data_coleta, adequabilidade, epitelios, alteracoes_celulares, microbiologia, atipias_celulares, conclusao } });
    }

    const LaudoPDF = (nome, idade, registro, unidade, dataFormatada, adequabilidade, epitelios, alteracoes_celulares, microbiologia, atipias_celulares, conclusao) => {
        navigate("/laudo-pdf", { state: { nome, idade, registro, unidade, dataFormatada, adequabilidade, epitelios, alteracoes_celulares, microbiologia, atipias_celulares, conclusao } });
    }

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        api.get('listPaciente')
            .then(res => {
                // console.log("Teste...", res.data.result)
                setDate(res.data.result)
                setFilter(res.data.result)
            }).catch(err => console.log(JSON.stringify(err)))
    }, []);

    const nomeProps = {
        options: data.map((data) => data.nome, data.id_paciente),
    };

    const handleClickOpen = () => {
        try {
            api.get(`/list-paciente/${nome}`)
                .then(res => {
                    setOpen(true);
                })
                .catch(err => console.log(err))
        } catch (error) {
            if (!error?.res) {
                setError('Erro ao acessar o servidor');
            } else if (error.res.status == 405) {
                alert('Paciente não encontrado!')
            }
        }
    };

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

    const [filterRecords, setFilter] = useState([]);

    const handleFilter = (event) => {
        const newData = filterRecords.filter(TableRow => TableRow.nome.toLowerCase().includes(event.target.value.toLowerCase()))
        setDate(newData);
    }

    return (
        <C.Container>
            <div>
                <form>
                    <C.Content>
                        <C.Label>LAUDO CLÍNICO</C.Label>
                        <Autocomplete
                            {...nomeProps}
                            id="combo-box-demo"
                            value={nome}
                            onChange={(event, newValue) => {
                                setNome(newValue);
                            }}
                            sx={{ width: 440 }}
                            renderInput={(params) => <TextField {...params} label="Nome" />}
                        />
                        <Button onClick={() => handleClickOpen(nome)} Text="Buscar" />
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
                                    <TextField onChange={handleFilter} fullWidth label="Paciente" id="fullWidth" />
                                </Box>
                            </DialogTitle>
                            <DialogContent>

                                {/* <DataTable
                                        columns={columns}
                                        data={data}
                                        // selectableRows
                                        fixedHeader
                                        pagination
                                    ></DataTable> */}

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
                            </DialogContent>
                        </Dialog>
                    </C.Content>
                </form>
            </div>

        </C.Container>
    );
};

export default Teste;