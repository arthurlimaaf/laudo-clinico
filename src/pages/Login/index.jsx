import React, { useState } from 'react'
import Input from '../../components/Input';
import Button from '../../components/Button';
import api from '../../api/api';
// import icct from '../../../src/icct-logo.png';
import * as C from "./styles";
import { useNavigate } from "react-router-dom";

const Signin = () => {

  const navigate = useNavigate();
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post('/login',
        JSON.stringify({ name, password }),
        {
          headers: { 'Content-Type': 'application/json' }
        }
      );

      navigate('/home')
      alert('Login Aceito!')

    } catch (error) {
      if (!error?.response) {
        setError('Erro ao acessar o servidor');
      } else if (error.response.status == 401) {
        setError('Usuario ou senha inválidos');
      }

    }
  };

  return (
    <C.Container>
        <div>
          <form>
            <C.Content >
              <C.Label>LAUDO CLÍNICO</C.Label>
              <Input
                type="text"
                placeholder="Nome"
                required
                onChange={(e) => setName(e.target.value)}
              />
              <Input
                type="password"
                placeholder="Senha"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button Text="Login" onClick={(e) => handleLogin(e)} />
              <p style={{ color: 'red' }}>{error}</p>
            </C.Content>
          </form>
        </div>
      
    </C.Container>
  );
};

export default Signin;