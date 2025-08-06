"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, FileText, Download, Edit, Trash2, Copy, Calendar } from "lucide-react"
import Link from "next/link"
import { CurriculumData } from "@/types/curriculum"

interface CurriculumHistoryItem extends CurriculumData {
  id: string
  createdAt: Date
  updatedAt: Date
  version: number
}

export default function HistoricoCurriculos() {
  const [curriculos, setCurriculos] = useState<CurriculumHistoryItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simular carregamento do histórico
    // Em produção, isso viria do Firebase
    const mockCurriculos: CurriculumHistoryItem[] = [
      {
        id: "1",
        nome: "João Silva",
        email: "joao@email.com",
        telefone: "(11) 99999-9999",
        cidade_estado: "São Paulo, SP",
        linkedin: "linkedin.com/in/joaosilva",
        github: "github.com/joaosilva",
        resumoProfissional: "Desenvolvedor Full Stack com 5 anos de experiência...",
        experienciasProfissionais: [
          {
            id: "1",
            empresa: "Tech Corp",
            cargo: "Desenvolvedor Senior",
            periodo: "2020 - Presente",
            descricao: "Desenvolvimento de aplicações web..."
          }
        ],
        formacaoAcademica: [
          {
            id: "1",
            curso: "Ciência da Computação",
            instituicao: "Universidade ABC",
            conclusao: "2019"
          }
        ],
        habilidades: ["JavaScript", "React", "Node.js", "Python"],
        atsScore: 85,
        alertas: [],
        sugestoesMelhoria: [],
        createdAt: new Date("2025-01-01"),
        updatedAt: new Date("2025-01-15"),
        version: 3
      },
      {
        id: "2",
        nome: "Maria Santos",
        email: "maria@email.com",
        telefone: "(11) 88888-8888",
        cidade_estado: "Rio de Janeiro, RJ",
        linkedin: "linkedin.com/in/mariasantos",
        github: "",
        resumoProfissional: "Designer UX/UI com foco em experiência do usuário...",
        experienciasProfissionais: [
          {
            id: "1",
            empresa: "Design Studio",
            cargo: "UX Designer",
            periodo: "2021 - Presente",
            descricao: "Design de interfaces e experiência do usuário..."
          }
        ],
        formacaoAcademica: [
          {
            id: "1",
            curso: "Design Gráfico",
            instituicao: "Universidade XYZ",
            conclusao: "2020"
          }
        ],
        habilidades: ["Figma", "Adobe XD", "Sketch", "Prototyping"],
        atsScore: 72,
        alertas: [],
        sugestoesMelhoria: [],
        createdAt: new Date("2025-01-10"),
        updatedAt: new Date("2025-01-10"),
        version: 1
      }
    ]

    setTimeout(() => {
      setCurriculos(mockCurriculos)
      setLoading(false)
    }, 1000)
  }, [])

  const handleEdit = (curriculo: CurriculumHistoryItem) => {
    // Salvar no localStorage para edição
    localStorage.setItem('currentCurriculum', JSON.stringify(curriculo))
    // Redirecionar para página de criação
    window.location.href = '/criar'
  }

  const handleDuplicate = (curriculo: CurriculumHistoryItem) => {
    const duplicated = {
      ...curriculo,
      id: Date.now().toString(),
      nome: `${curriculo.nome} (Cópia)`,
      createdAt: new Date(),
      updatedAt: new Date(),
      version: 1
    }
    setCurriculos(prev => [duplicated, ...prev])
  }

  const handleDelete = (id: string) => {
    if (confirm('Tem certeza que deseja excluir este currículo?')) {
      setCurriculos(prev => prev.filter(c => c.id !== id))
    }
  }

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date)
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Carregando histórico...</p>
        </div>
      </div>
    )
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
              <h1 className="text-2xl font-bold text-gray-900 ml-4">Histórico de Currículos</h1>
            </div>
            <Link href="/criar">
              <Button>
                <FileText className="mr-2 h-4 w-4" />
                Novo Currículo
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {curriculos.length === 0 ? (
          <Card>
            <CardContent className="text-center py-12">
              <FileText className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Nenhum currículo encontrado
              </h3>
              <p className="text-gray-600 mb-6">
                Você ainda não criou nenhum currículo. Comece criando seu primeiro!
              </p>
              <Link href="/criar">
                <Button>
                  <FileText className="mr-2 h-4 w-4" />
                  Criar Primeiro Currículo
                </Button>
              </Link>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-6">
            {curriculos.map((curriculo) => (
              <Card key={curriculo.id}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        <FileText className="h-5 w-5" />
                        {curriculo.nome}
                      </CardTitle>
                      <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          Criado: {formatDate(curriculo.createdAt)}
                        </span>
                        <span>Versão: {curriculo.version}</span>
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          curriculo.atsScore >= 80 
                            ? 'bg-green-100 text-green-800' 
                            : curriculo.atsScore >= 60 
                            ? 'bg-yellow-100 text-yellow-800' 
                            : 'bg-red-100 text-red-800'
                        }`}>
                          ATS: {curriculo.atsScore}%
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleEdit(curriculo)}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDuplicate(curriculo)}
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDelete(curriculo.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                    <div>
                      <p className="text-sm font-medium text-gray-700">Email</p>
                      <p className="text-sm text-gray-600">{curriculo.email}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700">Telefone</p>
                      <p className="text-sm text-gray-600">{curriculo.telefone}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700">Localização</p>
                      <p className="text-sm text-gray-600">{curriculo.cidade_estado}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700">Experiências</p>
                      <p className="text-sm text-gray-600">{curriculo.experienciasProfissionais.length} registros</p>
                    </div>
                  </div>
                  
                  {curriculo.resumoProfissional && (
                    <div className="mb-4">
                      <p className="text-sm font-medium text-gray-700 mb-1">Resumo</p>
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {curriculo.resumoProfissional}
                      </p>
                    </div>
                  )}

                  <div className="flex justify-between items-center">
                    <div className="flex gap-2">
                      {curriculo.habilidades.slice(0, 3).map((habilidade, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                        >
                          {habilidade}
                        </span>
                      ))}
                      {curriculo.habilidades.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                          +{curriculo.habilidades.length - 3} mais
                        </span>
                      )}
                    </div>
                    
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleEdit(curriculo)}
                      >
                        <Edit className="mr-2 h-4 w-4" />
                        Editar
                      </Button>
                      <Button
                        size="sm"
                        disabled={curriculo.atsScore < 60}
                      >
                        <Download className="mr-2 h-4 w-4" />
                        Exportar
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}