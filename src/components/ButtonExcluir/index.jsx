import React from 'react'
import * as C from "./styles";

const ButtonExcluir = ({ Text, onClick, Type = "buttonExcluir" }) => {
  return (
    <C.ButtonExcluir type={Type} onClick={onClick}>
        {Text}
    </C.ButtonExcluir>
  );
}

export default ButtonExcluir;