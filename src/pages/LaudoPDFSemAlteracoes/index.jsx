import React, { useState, useRef } from "react";
import * as C from "./styles";
import img_fundo from '../../../public/img_fundo.jpg';
import assinatura from '../../../public/assinat/assinatura.jpg'
import Box from '@mui/material/Box';
import { useReactToPrint } from "react-to-print";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const LaudoPDFSemAlteracoes = () => {
    const location = useLocation();
    const [data, setDate] = useState(location.state)
    const componentPDF = useRef();
    const navigate = useNavigate();

    const generatePDF = useReactToPrint({
        content: () => componentPDF.current,
        documentTitle: data.nome2,
        onAfterPrint: () => alert("Dados Salvos em PDF!"),
    });
    
    setTimeout(generatePDF)

    return (
        <div ref={componentPDF} >
            <C.Container>
                <form>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                        <div>
                            <C.ContainerNome>
                                <figure id="container">
                                    <img src={img_fundo} />
                                    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                                        <div>
                                            <a id="Nome">Paciente: {data.nome2}</a>
                                            <a id="Idade">Idade: {data.idade2}</a>
                                        </div>

                                        <div>
                                            <a id="Registro">Registro: {data.registro2}</a>
                                            <a id="Data">Data Coleta: {data.dataFormatada}</a>
                                        </div>

                                        <div>
                                            <h4 id="Titulo">LAUDO DO EXAME CITOPALÓGICOD DO COLO DO ÚTERO</h4>
                                        </div>

                                        <div>
                                            <h4 id="Titulo2">DIAGNÓSTICO DESCRITIVO</h4>
                                        </div>

                                        <div>
                                            <h5 id="Titulo3">TIPOS DE AMOSTRA</h5>
                                        </div>

                                        <div>
                                            <h5 id="Titulo4">CITOLOGIA CONVENCIONAL</h5>
                                        </div>

                                        <div>
                                            <a id="Titulo5">--------------------------------------------------------------------------------------------------------------------------</a>
                                        </div>

                                        <div>
                                            <h5 id="Adequabilidade">ADEQUABILIDADE DA AMOSTRA</h5>
                                        </div>

                                        <div>
                                            <a id="Adeq">{data.adequabilidade2}</a>
                                        </div>

                                        <div>
                                            <h5 id="Epitelios">EPITÉLIOS REPRESENTADOS NA AMOSTRA</h5>
                                        </div>

                                        <div>
                                            <a id="Epit">{data.epitelios2}</a>
                                        </div>

                                        <div>
                                            <h5 id="Alteracoes_Celulares">ALTERAÇÕES CELULARES BENIGNAS REATIVAS OU REPARATIVAS</h5>
                                        </div>

                                        <div>
                                            <a id="Alteracoes">{data.alteracoes_celulares2}</a>
                                        </div>

                                        <div>
                                            <h5 id="Microbiologia">MICROBIOLOGIA</h5>
                                        </div>

                                        <div>
                                            <a id="Micro">{data.microbiologia2}</a>
                                        </div>

                                        <div>
                                            <h5 id="Conclusao">CONCLUSÃO</h5>
                                        </div>

                                        <div>
                                            <a id="Conclu">{data.conclusao2}</a>
                                        </div>

                                        <div>
                                            <img id="imagem" src={assinatura} />
                                        </div>

                                        <div>
                                            <a id="Paragrafo2">Conferido, assinado e liberado eletronicamente por Cíntia Nicácio Portela CRF AM 1646</a>
                                        </div>

                                        <div>
                                            <a id="Paragrafo3">Atenção: este laudo é uma análise subjetiva cuja colaboração é baseada em informações clínicas, laboratoriais e morfológicas, podendo o diagnóstico variar, na dependência dos dados obtidos, das técnicasempregadas, da evolução científica e do médico patologista. Tendo em vista que a sensibilidade e a especificidade da metodologia não são absolutas, discordâncias diagnósticas deverão serimediatamente comunicadas, postergando-se as medidas terapêuticas até que o caso seja efetivamente elucidado.</a>
                                        </div>
                                    </Box>
                                </figure>
                            </C.ContainerNome>

                        </div>
                    </Box>
                </form>
                
            </C.Container>
            
        </div>
    );
}

export default LaudoPDFSemAlteracoes;