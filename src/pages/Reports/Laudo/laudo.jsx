import React, { useState } from "react";
import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'

function PacientePDF(){

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
                    text: 'Paciente:',
                    fontSize: 12,
                    margin: [20, -600, 0, 30]
                },
                {
                    text: 'Registro: Colpocitologia',
                    fontSize: 12,
                    margin: [130, -600, 0, 30]
                },
            ]
        },

        {
            alignment: 'justify',
			columns: [
                {
                    text: 'Idade:',
                    fontSize: 12,
                    margin: [20, -570, 0, 30]
                },
                {
                    text: 'Data Coleta: ',
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
			text: 'Satisfatória.',
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
			text: 'Escamoso, glandular.',
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
			text: 'Inflamação.',
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
			text: 'Lactobacilos, Bastonetes curtos.',
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
			text: 'Ausente.',
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
			text: 'Ausente.',
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

export default PacientePDF;