import React from 'react'
import * as C from "./styles";

const ButtonEdit = ({ Text, onClick, Type = "buttonEdit" }) => {
  return (
    <C.ButtonEdit type={Type} onClick={onClick}>
        {Text}
    </C.ButtonEdit>
  );
}

export default ButtonEdit;