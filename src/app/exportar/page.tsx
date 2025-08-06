"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ExportButton } from "@/components/ExportButton"
import { ATSScoreBar } from "@/components/ATSScoreBar"
import { ArrowLeft, Eye, FileText } from "lucide-react"
import Link from "next/link"
import { CurriculumData } from "@/types/curriculum"

export default function ExportarCurriculo() {
  const [data, setData] = useState<CurriculumData>({
    nome: "",
    email: "",
    telefone: "",
    cidade_estado: "",
    linkedin: "",
    github: "",
    resumoProfissional: "",
    experienciasProfissionais: [],
    formacaoAcademica: [],
    habilidades: [],
    atsScore: 0,
    alertas: [],
    sugestoesMelhoria: []
  })

  // Carregar dados do localStorage ou contexto
  useEffect(() => {
    const savedData = localStorage.getItem('currentCurriculum')
    if (savedData) {
      setData(JSON.parse(savedData))
    }
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center">
              <Link href="/criar">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Voltar
                </Button>
              </Link>
              <h1 className="text-2xl font-bold text-gray-900 ml-4">Exportar Currículo</h1>
            </div>
            <ExportButton data={data} />
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Preview do Currículo */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Eye className="h-5 w-5 mr-2" />
                  Preview do Currículo
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-white border border-gray-300 p-8 rounded-lg ats-friendly">
                  {/* Cabeçalho */}
                  <div className="mb-6">
                    <h1 className="text-2xl font-bold text-black mb-2">{data.nome || "Seu Nome"}</h1>
                    <p className="text-black">
                      {data.email} {data.telefone && `| ${data.telefone}`}
                    </p>
                    {data.cidade_estado && <p className="text-black">{data.cidade_estado}</p>}
                    {data.linkedin && <p className="text-black">LinkedIn: {data.linkedin}</p>}
                    {data.github && <p className="text-black">GitHub: {data.github}</p>}
                  </div>

                  {/* Resumo Profissional */}
                  {data.resumoProfissional && (
                    <div className="mb-6">
                      <h2 className="text-lg font-bold text-black mb-2">RESUMO PROFISSIONAL</h2>
                      <p className="text-black">{data.resumoProfissional}</p>
                    </div>
                  )}

                  {/* Experiência Profissional */}
                  {data.experienciasProfissionais.length > 0 && (
                    <div className="mb-6">
                      <h2 className="text-lg font-bold text-black mb-2">EXPERIÊNCIA PROFISSIONAL</h2>
                      {data.experienciasProfissionais.map((exp, index) => (
                        <div key={index} className="mb-4">
                          <h3 className="font-bold text-black">{exp.cargo} - {exp.empresa}</h3>
                          <p className="text-black">{exp.periodo}</p>
                          <p className="text-black">{exp.descricao}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Formação Acadêmica */}
                  {data.formacaoAcademica.length > 0 && (
                    <div className="mb-6">
                      <h2 className="text-lg font-bold text-black mb-2">FORMAÇÃO ACADÊMICA</h2>
                      {data.formacaoAcademica.map((form, index) => (
                        <div key={index} className="mb-2">
                          <p className="text-black">{form.curso} - {form.instituicao}</p>
                          <p className="text-black">{form.conclusao}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Habilidades */}
                  {data.habilidades.length > 0 && (
                    <div className="mb-6">
                      <h2 className="text-lg font-bold text-black mb-2">HABILIDADES</h2>
                      <p className="text-black">{data.habilidades.join(', ')}</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar - Informações de Exportação */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Status da Exportação</CardTitle>
              </CardHeader>
              <CardContent>
                <ATSScoreBar score={data.atsScore} className="mb-4" />
                <p className="text-sm text-gray-600 mb-4">
                  {data.atsScore >= 60 
                    ? "✅ Currículo pronto para exportação!" 
                    : "⚠️ Complete mais campos para atingir o mínimo de 60%."
                  }
                </p>
                <ExportButton data={data} className="w-full" />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Informações do Arquivo</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Formato:</span>
                  <span className="text-sm font-medium">DOCX</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Fonte:</span>
                  <span className="text-sm font-medium">Arial, 11pt</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Layout:</span>
                  <span className="text-sm font-medium">Coluna única</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Nome do arquivo:</span>
                  <span className="text-sm font-medium">Curriculo_{data.nome?.replace(/[^a-zA-Z0-9]/g, '_') || 'Usuario'}_{new Date().getFullYear()}.docx</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Compatibilidade ATS</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-green-500" />
                    <span className="text-sm">Sem elementos gráficos</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-green-500" />
                    <span className="text-sm">Fonte padrão (Arial)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-green-500" />
                    <span className="text-sm">Layout de coluna única</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-green-500" />
                    <span className="text-sm">Sem tabelas ou caixas</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-green-500" />
                    <span className="text-sm">Caracteres ASCII padrão</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Próximos Passos</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link href="/historico">
                  <Button variant="outline" className="w-full">
                    <FileText className="mr-2 h-4 w-4" />
                    Ver Histórico
                  </Button>
                </Link>
                <Link href="/criar">
                  <Button variant="outline" className="w-full">
                    Editar Currículo
                  </Button>
                </Link>
                <p className="text-xs text-gray-500 text-center">
                  Seu currículo será salvo automaticamente no histórico após a exportação
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}