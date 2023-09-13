import React from 'react'
import * as C from "./styles";

const ButtonPDF = ({ Text, onClick, Type = "buttonPDF" }) => {
  return (
    <C.ButtonPDF type={Type} onClick={onClick}>
        {Text}
    </C.ButtonPDF>
  );
}

export default ButtonPDF;