import React, { useState, useEffect } from "react";
import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Laudo = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const [data, setDate] = useState(location.state)

    const [nome, setNome] = useState(data.nome)
    const [idade, setIdade] = useState(data.idade)
    const [registro, setRegistro] = useState(data.registro)
    const [unidade, setUnidade] = useState(data.unidade)
    const [data_coleta, setData] = useState(data.data_coleta)
    const [adequabilidade, setAdequabilidade] = useState(data.adequabilidade)
    const [epitelios, setEpitelios] = useState(data.epitelios)
    const [alteracoes_celulares, setAlteracoes] = useState(data.alteracoes_celulares)
    const [microbiologia, setMicrobiologia] = useState(data.microbiologia)
    const [atipias_celulares, setAtipias] = useState(data.atipias_celulares)
    const [conclusao, setConclusao] = useState(data.conclusao)

    // useEffect(() => {
    //     alert('PDF Gerado!');
    //     navigate('/consult-laudo');
    // }, []);

    // var image = 'data:image/jpeg;base64,public/assinat/assinatura.jpg';

    pdfMake.vfs = pdfFonts.pdfMake.vfs;

    const reportTitle = [
        {

        }
    ];

    const details = [
        {
            text: 'Conferido, assinado e liberado eletronicamente por Cíntia Nicácio Portela CRF AM 1646',
            margin: [0, 660, 15, 30],
            fontSize: 10,
            alignment: 'right',
        },

        {
            alignment: 'justify',
			columns: [
                {
                    text: `Paciente: ${nome}`,
                    fontSize: 12,
                    margin: [20, -600, 0, 30]
                },
                {
                    text: `Registro: ${data.registro}`,
                    fontSize: 12,
                    margin: [130, -600, 0, 30]
                },
            ]
        },

        {
            alignment: 'justify',
			columns: [
                {
                    text: `Idade: ${data.idade}`,
                    fontSize: 12,
                    margin: [20, -570, 0, 30]
                },
                {
                    text: `Data Coleta: ${data.data_coleta}`,
                    fontSize: 12,
                    margin: [130, -570, 0, 30]
                },
            ]
        },

        {
			text: 'LAUDO DO EXAME CITOPATOLÓGICO DO COLO DO ÚTERO',
			fontSize: 14,
            bold: true,
			alignment: 'center',
            margin: [0, -510, 0, 0]
		},

        {
			text: 'DIAGNÓSTICO DESCRITIVO',
			fontSize: 14,
            bold: true,
			alignment: 'center',
            margin: [0, 20, 0, 0]
		},

        {
			text: 'TIPOS DE AMOSTRA',
			bold: true,
            fontSize: 12,
            margin: [20, 10, 0, 0]
		},

        {
			text: 'CITOLOGIA CONVENCIONAL',
			bold: true,
            fontSize: 11,
            margin: [20, 2, 0, 0]
		},

        {
			text: '-------------------------------------------------------------------------------------------------------------------------',
			bold: true,
            margin: [20, 2, 0, 0]
		},

        {
			text: 'ADEQUABILIDADE DA AMOSTRA',
			bold: true,
            fontSize: 12,
            margin: [20, 10, 0, 0]
		},

        //RESPOSTA PERGUNTA 1
        {
			text: `${data.adequabilidade}`,
            fontSize: 12,
            bold: false,
            margin: [20, 10, 0, 0]
		},

        {
			text: 'EPITÉLIOS REPRESENTADOS NA AMOSTRA',
			bold: true,
            fontSize: 12,
            margin: [20, 10, 0, 0]
		},

        //RESPOSTA DA PERGUNTA 2
        {
			text: `${data.epitelios}`,
            fontSize: 12,
            bold: false,
            margin: [20, 10, 0, 0]
		},

        {
			text: 'ALTERAÇÕES CELULARES BENIGNAS REATIVAS OU REPARATIVAS',
			bold: true,
            fontSize: 12,
            margin: [20, 10, 0, 0]
		},

        //RESPOSTA DA PERGUNTA 3
        {
			text: `${data.alteracoes_celulares}`,
            fontSize: 12,
            bold: false,
            margin: [20, 10, 0, 0]
		},

        {
			text: 'MICROBIOLOGIA',
			bold: true,
            fontSize: 12,
            margin: [20, 10, 0, 0]
		},

        //RESPOSTA DA PERGUNTA 4
        {
			text: `${data.microbiologia}`,
            fontSize: 12,
            bold: false,
            margin: [20, 10, 0, 0]
		},

        {
			text: 'ATIPIAS CELULARES.',
			bold: true,
            fontSize: 12,
            margin: [20, 10, 0, 0]
		},

        //RESPOSTA DA PERGUNTA 5
        {
			text: `${data.atipias_celulares}`,
            fontSize: 12,
            bold: false,
            margin: [20, 10, 0, 0]
		},

        {
			text: 'CONCLUSÃO',
			bold: true,
            fontSize: 12,
            margin: [20, 10, 0, 0]
		},

        //RESPOSTA DA PERGUNTA 5
        {
			text: `${data.conclusao}`,
            fontSize: 12,
            bold: false,
            margin: [20, 10, 0, 0]
		},

        




        

        // {
        //     text: 'Teste', style: 'header',
        //     margin: [20, -600, 0, 30]
        // },

        // {
        //     image: image,
        //     // margin: [0, -70, 15, 10],
        //     width: 150,
		// 	// height: 150,
        // },

        // {
        //     image: 'assinatura.jpg',
        //     margin: [0, 660, 15, 30],
		// 	width: 150,
		// 	height: 150,
        // }
    ];

    function Rodape(){
        return [
            {
                text: 'Atenção: este laudo é uma análise subjetiva cuja colaboração é baseada em informações clínicas, laboratoriais e morfológicas, podendo o diagnóstico variar, na dependência dos dados obtidos, das técnicasempregadas, da evolução científica e do médico patologista. Tendo em vista que a sensibilidade e a especificidade da metodologia não são absolutas, discordâncias diagnósticas deverão serimediatamente comunicadas, postergando-se as medidas terapêuticas até que o caso seja efetivamente elucidado.',
                margin: [30, -60, 30, 30],  //left, top, right, bottom
                fontSize: 8,
                alignment: 'justify'
            }
        ]
    }

    const rodape = [];

    const docDefinitios = {
        pageSize: 'A4',
        pageMargins: [15, 50, 15, 40],

        header: [reportTitle],
        content: [details],
        // styles: {
        //     header: {
        //         bold: true,
        //         fontSize: 15
        //     }
        // },
        footer: Rodape
    }

    pdfMake.createPdf(docDefinitios).download();

}

export default Laudo;