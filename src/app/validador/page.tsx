"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { ATSScoreBar } from "@/components/ATSScoreBar"
import { LiveValidationAlerts } from "@/components/LiveValidationAlerts"
import { ArrowLeft, Upload, FileText } from "lucide-react"
import Link from "next/link"
import { validateATSContent, calculateATSScore } from "@/lib/utils"

export default function ValidadorATS() {
  const [content, setContent] = useState("")
  const [score, setScore] = useState(0)
  const [alerts, setAlerts] = useState<string[]>([])
  const [suggestions, setSuggestions] = useState<string[]>([])

  const analyzeContent = (text: string) => {
    const mockData = {
      nome: text.includes("Nome:") ? "Preenchido" : "",
      email: text.includes("@") ? "Preenchido" : "",
      telefone: text.includes("telefone") || text.includes("celular") ? "Preenchido" : "",
      resumoProfissional: text.length > 100 ? text.substring(0, 200) : "",
      experienciasProfissionais: text.includes("experiência") || text.includes("trabalho") ? ["mock"] : [],
      habilidades: text.includes("habilidades") || text.includes("skills") ? ["mock"] : []
    }

    const newScore = calculateATSScore(mockData)
    const newAlerts = validateATSContent(text)
    const newSuggestions = generateSuggestions(text, newScore)

    setScore(newScore)
    setAlerts(newAlerts)
    setSuggestions(newSuggestions)
  }

  const generateSuggestions = (text: string, currentScore: number): string[] => {
    const suggestions: string[] = []

    if (currentScore < 60) {
      suggestions.push("Adicione mais informações pessoais (nome, email, telefone)")
    }

    if (!text.includes("@")) {
      suggestions.push("Inclua um endereço de email válido")
    }

    if (!text.toLowerCase().includes("experiência") && !text.toLowerCase().includes("trabalho")) {
      suggestions.push("Adicione seção de experiência profissional")
    }

    if (!text.toLowerCase().includes("habilidades") && !text.toLowerCase().includes("skills")) {
      suggestions.push("Inclua uma seção de habilidades técnicas")
    }

    if (text.length < 200) {
      suggestions.push("Expanda o conteúdo - currículos muito curtos podem ser penalizados")
    }

    if (suggestions.length === 0) {
      suggestions.push("Seu currículo está bem estruturado para ATS!")
    }

    return suggestions
  }

  const handleContentChange = (value: string) => {
    setContent(value)
    if (value.trim()) {
      analyzeContent(value)
    } else {
      setScore(0)
      setAlerts([])
      setSuggestions([])
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center">
              <Link href="/">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Voltar
                </Button>
              </Link>
              <h1 className="text-2xl font-bold text-gray-900 ml-4">Validador ATS</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Área de Input */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="h-5 w-5 mr-2" />
                  Cole o conteúdo do seu currículo
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600 mb-2">
                      Cole o texto do seu currículo na área abaixo para análise
                    </p>
                    <p className="text-sm text-gray-500">
                      Ou copie e cole o conteúdo de um arquivo DOCX/PDF
                    </p>
                  </div>
                  
                  <Textarea
                    value={content}
                    onChange={(e) => handleContentChange(e.target.value)}
                    placeholder="Cole aqui o conteúdo completo do seu currículo...

Exemplo:
João Silva
joao@email.com | (11) 99999-9999
São Paulo, SP

RESUMO PROFISSIONAL
Desenvolvedor Full Stack com 5 anos de experiência...

EXPERIÊNCIA PROFISSIONAL
Empresa XYZ - Desenvolvedor Senior
Janeiro 2020 - Presente
- Desenvolvimento de aplicações web...

FORMAÇÃO ACADÊMICA
Ciência da Computação - Universidade ABC
Concluído em 2019

HABILIDADES
JavaScript, React, Node.js, Python..."
                    rows={15}
                    className="font-mono text-sm"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar - Resultados da Análise */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Score ATS</CardTitle>
              </CardHeader>
              <CardContent>
                <ATSScoreBar score={score} className="mb-4" />
                <p className="text-sm text-gray-600">
                  {score === 0 
                    ? "Cole o conteúdo do seu currículo para ver a análise"
                    : score >= 80 
                    ? "Excelente! Seu currículo está muito bem otimizado para ATS."
                    : score >= 60
                    ? "Bom! Algumas melhorias podem aumentar ainda mais a compatibilidade."
                    : "Seu currículo precisa de melhorias para passar pelos sistemas ATS."
                  }
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Alertas de Validação</CardTitle>
              </CardHeader>
              <CardContent>
                <LiveValidationAlerts alerts={alerts} />
              </CardContent>
            </Card>

            {suggestions.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>Sugestões de Melhoria</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {suggestions.map((suggestion, index) => (
                      <div key={index} className="flex items-start gap-2 p-3 bg-blue-50 border border-blue-200 rounded-md">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm text-blue-700">{suggestion}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            <Card>
              <CardHeader>
                <CardTitle>Checklist ATS</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className={`w-4 h-4 rounded-full ${content.includes("@") ? "bg-green-500" : "bg-gray-300"}`} />
                    <span className="text-sm">Email presente</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className={`w-4 h-4 rounded-full ${content.toLowerCase().includes("telefone") || content.toLowerCase().includes("celular") || /\(\d{2}\)/.test(content) ? "bg-green-500" : "bg-gray-300"}`} />
                    <span className="text-sm">Telefone presente</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className={`w-4 h-4 rounded-full ${content.toLowerCase().includes("experiência") || content.toLowerCase().includes("trabalho") ? "bg-green-500" : "bg-gray-300"}`} />
                    <span className="text-sm">Experiência profissional</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className={`w-4 h-4 rounded-full ${content.toLowerCase().includes("habilidades") || content.toLowerCase().includes("skills") ? "bg-green-500" : "bg-gray-300"}`} />
                    <span className="text-sm">Habilidades listadas</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className={`w-4 h-4 rounded-full ${!/[^\w\s@.-]/.test(content) ? "bg-green-500" : "bg-red-500"}`} />
                    <span className="text-sm">Sem caracteres especiais</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className={`w-4 h-4 rounded-full ${!/[\u{1F600}-\u{1F64F}]|[\u{1F300}-\u{1F5FF}]|[\u{1F680}-\u{1F6FF}]|[\u{1F1E0}-\u{1F1FF}]/u.test(content) ? "bg-green-500" : "bg-red-500"}`} />
                    <span className="text-sm">Sem emojis</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Próximos Passos</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Link href="/criar">
                    <Button className="w-full">
                      <FileText className="mr-2 h-4 w-4" />
                      Criar Novo Currículo ATS
                    </Button>
                  </Link>
                  <p className="text-xs text-gray-500 text-center">
                    Use nosso editor para criar um currículo otimizado desde o início
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}