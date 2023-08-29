import React, { useState } from 'react'
import Input from '../../components/Input';
import Button from '../../components/Button';
// import icct from '../../../src/icct-logo.png';
import * as C from "./styles";
import { useNavigate } from "react-router-dom";

const Signin = () => {

  const navigate = useNavigate();
  const [senha, setSenha] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    // console.log("submit");
    navigate('/home')
  }
  function handleKeyPress(event) {
    // console.log(event.key);
    if (event.key === "Enter") {
      event.preventDefault();
    }
  }

  return (
    <C.Container>
      {/* <img src={icct} alt="" /> */}
      <C.Label>LAUDO CLÍNICO</C.Label>
      <form onSubmit={handleSubmit}>
        <C.Content >

          <Input
            type="number"
            placeholder="SENHA"
            value={senha}
            onChange={(e) => [setSenha(e.target.value)]}
            onKeyPress={(event) => handleKeyPress(event)}
          />
          <Button Text="Login" onClick={() => navigate('/home')} />

        </C.Content>
      </form>
    </C.Container>
  );
};

export default Signin;