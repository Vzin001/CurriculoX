import { Document, Packer, Paragraph, TextRun, HeadingLevel } from 'docx'
import { saveAs } from 'file-saver'
import { CurriculumData } from '@/types/curriculum'
import { formatFileName } from './utils'

export async function generateDOCX(data: CurriculumData) {
  const doc = new Document({
    sections: [{
      properties: {},
      children: [
        // Cabeçalho
        new Paragraph({
          children: [
            new TextRun({
              text: data.nome,
              bold: true,
              size: 32,
              font: "Arial"
            })
          ],
          heading: HeadingLevel.HEADING_1
        }),
        
        new Paragraph({
          children: [
            new TextRun({
              text: `${data.email} | ${data.telefone}`,
              font: "Arial",
              size: 22
            })
          ]
        }),
        
        new Paragraph({
          children: [
            new TextRun({
              text: `${data.cidade_estado}`,
              font: "Arial",
              size: 22
            })
          ]
        }),

        ...(data.linkedin ? [new Paragraph({
          children: [
            new TextRun({
              text: `LinkedIn: ${data.linkedin}`,
              font: "Arial",
              size: 22
            })
          ]
        })] : []),

        ...(data.github ? [new Paragraph({
          children: [
            new TextRun({
              text: `GitHub: ${data.github}`,
              font: "Arial",
              size: 22
            })
          ]
        })] : []),

        new Paragraph({ text: "" }), // Espaço

        // Resumo Profissional
        ...(data.resumoProfissional ? [
          new Paragraph({
            children: [
              new TextRun({
                text: "RESUMO PROFISSIONAL",
                bold: true,
                font: "Arial",
                size: 24
              })
            ]
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: data.resumoProfissional,
                font: "Arial",
                size: 22
              })
            ]
          }),
          new Paragraph({ text: "" })
        ] : []),

        // Experiência Profissional
        ...(data.experienciasProfissionais.length > 0 ? [
          new Paragraph({
            children: [
              new TextRun({
                text: "EXPERIÊNCIA PROFISSIONAL",
                bold: true,
                font: "Arial",
                size: 24
              })
            ]
          }),
          ...data.experienciasProfissionais.flatMap(exp => [
            new Paragraph({
              children: [
                new TextRun({
                  text: `${exp.cargo} - ${exp.empresa}`,
                  bold: true,
                  font: "Arial",
                  size: 22
                })
              ]
            }),
            new Paragraph({
              children: [
                new TextRun({
                  text: exp.periodo,
                  font: "Arial",
                  size: 22
                })
              ]
            }),
            new Paragraph({
              children: [
                new TextRun({
                  text: exp.descricao,
                  font: "Arial",
                  size: 22
                })
              ]
            }),
            new Paragraph({ text: "" })
          ]),
        ] : []),

        // Formação Acadêmica
        ...(data.formacaoAcademica.length > 0 ? [
          new Paragraph({
            children: [
              new TextRun({
                text: "FORMAÇÃO ACADÊMICA",
                bold: true,
                font: "Arial",
                size: 24
              })
            ]
          }),
          ...data.formacaoAcademica.flatMap(form => [
            new Paragraph({
              children: [
                new TextRun({
                  text: `${form.curso} - ${form.instituicao}`,
                  font: "Arial",
                  size: 22
                })
              ]
            }),
            new Paragraph({
              children: [
                new TextRun({
                  text: form.conclusao,
                  font: "Arial",
                  size: 22
                })
              ]
            }),
            new Paragraph({ text: "" })
          ])
        ] : []),

        // Habilidades
        ...(data.habilidades.length > 0 ? [
          new Paragraph({
            children: [
              new TextRun({
                text: "HABILIDADES",
                bold: true,
                font: "Arial",
                size: 24
              })
            ]
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: data.habilidades.join(', '),
                font: "Arial",
                size: 22
              })
            ]
          })
        ] : [])
      ]
    }]
  })

  const blob = await Packer.toBlob(doc)
  saveAs(blob, formatFileName(data.nome))
}