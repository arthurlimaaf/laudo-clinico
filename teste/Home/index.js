import React, { useState, useEffect } from "react";
import * as C from "./styles";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';
import icct from '../../../src/icct-logo.png';
import io from 'socket.io-client';
import alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';
import 'alertifyjs/build/css/themes/semantic.css';
import api from "../../api/api";
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

const socket = io('http://10.58.72.64:7500');
socket.on('connect', () => console.log('[IO] Connect => New Connection'));

function Home() {
  const navigate = useNavigate();
  const [station, setStation] = useState('')
  const [model, setModel] = useState('')
  const [parte_number, setParteNumber] = useState('')
  const [line, setLine] = useState('')
  const [datamatrix, setDatamatrix] = useState('');

  const [showElement, setShowElement] = useState(false)
  const showOrHide = () => setShowElement(true)

  function postData(e) {
    e.preventDefault();
    api.post('/data', {
      station,
      model,
      parte_number,
      line,
      datamatrix,
    }).then(res => console.log('Posting data', res), alertify.success(`Registered Successfully!`)).catch(err => console.log(err))
  }

  // function handleSubmit(event) {
  //   event.preventDefault();
  //   console.log("submit");

  // }
  function handleKeyPress(event) {
    // console.log(event.key);
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("botao").click();
      // alertify.success(`Registered Successfully!`);
    }
  }

  const sendMessage = () => {
    socket.emit("message", datamatrix);
  }

  useEffect(() => {
    socket.on("message", (data) => {
      setDatamatrix(data);
    });
  });

  return (
    <C.Container>
      <img src={icct} alt="" />
      <C.Label>AUTO LOADING SYSTEM</C.Label>
      {/* <form onSubmit={handleSubmit}> */}
      <C.Content>

        <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="outlined-adornment-amount">STATION</InputLabel>
          <OutlinedInput
            value={station} onChange={(e) => setStation(e.target.value)}
          />
        </FormControl>

        <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="outlined-adornment-amount">MODEL</InputLabel>
          <OutlinedInput
            value={model} onChange={(e) => setModel(e.target.value)}
          />
        </FormControl>

        <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="outlined-adornment-amount">PARTS NO</InputLabel>
          <OutlinedInput
            value={parte_number} onChange={(e) => setParteNumber(e.target.value)}
          />
        </FormControl>

        <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="outlined-adornment-amount">LINE</InputLabel>
          <OutlinedInput
            value={line} onChange={(e) => setLine(e.target.value)}
          />
        </FormControl>

        <Button type="submit" variant="outlined" size="large" onClick={showOrHide}>Submit</Button>
      </C.Content>

      {showElement ?

        <C.Content>
          <TextField disabled id="filled-basic" label="MODEL" variant="filled" value={model} onChange={(e) => setModel(e.target.value)} />
          <TextField disabled id="filled-basic" label="PARTS NO" variant="filled" value={parte_number} onChange={(e) => setParteNumber(e.target.value)} />

          <TextField fullWidth label=""
            autoFocus
            id="fullWidth"
            value={datamatrix}
            onChange={(e) => [setDatamatrix(e.target.value)]}
            onKeyPress={(event) => handleKeyPress(event)}
          />

          <Button type="submit" id="botao" value="Submit" variant="outlined" size="large" onClick={postData}>
            Submit
          </Button>
          <Button variant="contained" size="large" color="success" onClick={() => navigate('/')}>
            RESTART
          </Button>

        </C.Content>

        : null}

      {/* </form> */}

    </C.Container>

  );
}

export default Home;