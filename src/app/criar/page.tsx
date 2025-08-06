"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ATSScoreBar } from "@/components/ATSScoreBar"
import { LiveValidationAlerts } from "@/components/LiveValidationAlerts"
import { ExportButton } from "@/components/ExportButton"
import { Plus, Trash2, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { CurriculumData, ExperienciaProfissional, FormacaoAcademica } from "@/types/curriculum"
import { calculateATSScore, validateATSContent } from "@/lib/utils"

export default function CriarCurriculo() {
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

  // Recalcular score e validações sempre que os dados mudarem
  useEffect(() => {
    const score = calculateATSScore(data)
    const allContent = JSON.stringify(data)
    const alerts = validateATSContent(allContent)
    
    setData(prev => ({
      ...prev,
      atsScore: score,
      alertas: alerts
    }))
  }, [data.nome, data.email, data.telefone, data.cidade_estado, data.linkedin, data.github, data.resumoProfissional, data.experienciasProfissionais, data.formacaoAcademica, data.habilidades])

  const addExperiencia = () => {
    const newExp: ExperienciaProfissional = {
      id: Date.now().toString(),
      empresa: "",
      cargo: "",
      periodo: "",
      descricao: ""
    }
    setData(prev => ({
      ...prev,
      experienciasProfissionais: [...prev.experienciasProfissionais, newExp]
    }))
  }

  const removeExperiencia = (id: string) => {
    setData(prev => ({
      ...prev,
      experienciasProfissionais: prev.experienciasProfissionais.filter(exp => exp.id !== id)
    }))
  }

  const updateExperiencia = (id: string, field: keyof ExperienciaProfissional, value: string) => {
    setData(prev => ({
      ...prev,
      experienciasProfissionais: prev.experienciasProfissionais.map(exp =>
        exp.id === id ? { ...exp, [field]: value } : exp
      )
    }))
  }

  const addFormacao = () => {
    const newForm: FormacaoAcademica = {
      id: Date.now().toString(),
      curso: "",
      instituicao: "",
      conclusao: ""
    }
    setData(prev => ({
      ...prev,
      formacaoAcademica: [...prev.formacaoAcademica, newForm]
    }))
  }

  const removeFormacao = (id: string) => {
    setData(prev => ({
      ...prev,
      formacaoAcademica: prev.formacaoAcademica.filter(form => form.id !== id)
    }))
  }

  const updateFormacao = (id: string, field: keyof FormacaoAcademica, value: string) => {
    setData(prev => ({
      ...prev,
      formacaoAcademica: prev.formacaoAcademica.map(form =>
        form.id === id ? { ...form, [field]: value } : form
      )
    }))
  }

  const updateHabilidades = (value: string) => {
    const habilidades = value.split(',').map(h => h.trim()).filter(h => h.length > 0)
    setData(prev => ({ ...prev, habilidades }))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="header">
        <div className="header__container">
          <div className="header__content">
            <div className="header__left">
              <Link href="/">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Voltar
                </Button>
              </Link>
              <h1 className="header__title">Criar Currículo</h1>
            </div>
            <div className="flex gap-2">
              <Link href="/exportar">
                <Button variant="outline" disabled={data.atsScore < 60}>
                  Visualizar
                </Button>
              </Link>
              <ExportButton data={data} />
            </div>
          </div>
        </div>
      </header>

      <div className="main">
        <div className="grid grid--lg-cols-3 gap-8">
          {/* Formulário Principal */}
          <div className="grid--lg-span-2 space-y-6">
            {/* Cabeçalho */}
            <Card>
              <CardHeader>
                <CardTitle>Informações Pessoais</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="form-row">
                  <div className="form-group">
                    <label className="label">
                      Nome Completo *
                    </label>
                    <Input
                      value={data.nome}
                      onChange={(e) => setData(prev => ({ ...prev, nome: e.target.value }))}
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div className="form-group">
                    <label className="label">
                      E-mail *
                    </label>
                    <Input
                      type="email"
                      value={data.email}
                      onChange={(e) => setData(prev => ({ ...prev, email: e.target.value }))}
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label className="label">
                      Telefone *
                    </label>
                    <Input
                      value={data.telefone}
                      onChange={(e) => setData(prev => ({ ...prev, telefone: e.target.value }))}
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                  <div className="form-group">
                    <label className="label">
                      Cidade/Estado
                    </label>
                    <Input
                      value={data.cidade_estado}
                      onChange={(e) => setData(prev => ({ ...prev, cidade_estado: e.target.value }))}
                      placeholder="São Paulo, SP"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label className="label">
                      LinkedIn
                    </label>
                    <Input
                      value={data.linkedin}
                      onChange={(e) => setData(prev => ({ ...prev, linkedin: e.target.value }))}
                      placeholder="linkedin.com/in/seuperfil"
                    />
                  </div>
                  <div className="form-group">
                    <label className="label">
                      GitHub
                    </label>
                    <Input
                      value={data.github}
                      onChange={(e) => setData(prev => ({ ...prev, github: e.target.value }))}
                      placeholder="github.com/seuusuario"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Resumo Profissional */}
            <Card>
              <CardHeader>
                <CardTitle>Resumo Profissional</CardTitle>
              </CardHeader>
              <CardContent>
                <label className="label">
                  Descreva brevemente sua experiência e objetivos profissionais
                </label>
                <Textarea
                  value={data.resumoProfissional}
                  onChange={(e) => setData(prev => ({ ...prev, resumoProfissional: e.target.value }))}
                  placeholder="Ex: Desenvolvedor Full Stack com 5 anos de experiência em React, Node.js e Python. Especialista em desenvolvimento de aplicações web escaláveis e APIs RESTful..."
                  rows={4}
                />
              </CardContent>
            </Card>

            {/* Experiência Profissional */}
            <Card>
              <CardHeader>
                <div className="form-section__header">
                  <CardTitle>Experiência Profissional</CardTitle>
                  <Button onClick={addExperiencia} size="sm">
                    <Plus className="h-4 w-4 mr-2" />
                    Adicionar
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {data.experienciasProfissionais.map((exp) => (
                  <div key={exp.id} className="form-item">
                    <div className="form-item__header">
                      <h4 className="form-item__title">Experiência</h4>
                      <Button
                        onClick={() => removeExperiencia(exp.id)}
                        variant="ghost"
                        size="sm"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="form-row mb-4">
                      <div className="form-group">
                        <label className="label">
                          Empresa
                        </label>
                        <Input
                          value={exp.empresa}
                          onChange={(e) => updateExperiencia(exp.id, 'empresa', e.target.value)}
                          placeholder="Nome da empresa"
                        />
                      </div>
                      <div className="form-group">
                        <label className="label">
                          Cargo
                        </label>
                        <Input
                          value={exp.cargo}
                          onChange={(e) => updateExperiencia(exp.id, 'cargo', e.target.value)}
                          placeholder="Seu cargo"
                        />
                      </div>
                    </div>
                    <div className="form-group mb-4">
                      <label className="label">
                        Período
                      </label>
                      <Input
                        value={exp.periodo}
                        onChange={(e) => updateExperiencia(exp.id, 'periodo', e.target.value)}
                        placeholder="Ex: Janeiro 2020 - Presente"
                      />
                    </div>
                    <div className="form-group">
                      <label className="label">
                        Descrição das atividades
                      </label>
                      <Textarea
                        value={exp.descricao}
                        onChange={(e) => updateExperiencia(exp.id, 'descricao', e.target.value)}
                        placeholder="Descreva suas principais responsabilidades e conquistas..."
                        rows={3}
                      />
                    </div>
                  </div>
                ))}
                {data.experienciasProfissionais.length === 0 && (
                  <div className="empty-state">
                    <p className="empty-state__description">
                    Nenhuma experiência adicionada. Clique em "Adicionar" para começar.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Formação Acadêmica */}
            <Card>
              <CardHeader>
                <div className="form-section__header">
                  <CardTitle>Formação Acadêmica</CardTitle>
                  <Button onClick={addFormacao} size="sm">
                    <Plus className="h-4 w-4 mr-2" />
                    Adicionar
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {data.formacaoAcademica.map((form) => (
                  <div key={form.id} className="form-item">
                    <div className="form-item__header">
                      <h4 className="form-item__title">Formação</h4>
                      <Button
                        onClick={() => removeFormacao(form.id)}
                        variant="ghost"
                        size="sm"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="form-row mb-4">
                      <div className="form-group">
                        <label className="label">
                          Curso
                        </label>
                        <Input
                          value={form.curso}
                          onChange={(e) => updateFormacao(form.id, 'curso', e.target.value)}
                          placeholder="Nome do curso"
                        />
                      </div>
                      <div className="form-group">
                        <label className="label">
                          Instituição
                        </label>
                        <Input
                          value={form.instituicao}
                          onChange={(e) => updateFormacao(form.id, 'instituicao', e.target.value)}
                          placeholder="Nome da instituição"
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="label">
                        Conclusão
                      </label>
                      <Input
                        value={form.conclusao}
                        onChange={(e) => updateFormacao(form.id, 'conclusao', e.target.value)}
                        placeholder="Ex: Dezembro 2020"
                      />
                    </div>
                  </div>
                ))}
                {data.formacaoAcademica.length === 0 && (
                  <div className="empty-state">
                    <p className="empty-state__description">
                    Nenhuma formação adicionada. Clique em "Adicionar" para começar.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Habilidades */}
            <Card>
              <CardHeader>
                <CardTitle>Habilidades</CardTitle>
              </CardHeader>
              <CardContent>
                <label className="label">
                  Liste suas principais habilidades (separadas por vírgula)
                </label>
                <Textarea
                  value={data.habilidades.join(', ')}
                  onChange={(e) => updateHabilidades(e.target.value)}
                  placeholder="Ex: JavaScript, React, Node.js, Python, SQL, Git, Scrum, Inglês Avançado"
                  rows={3}
                />
              </CardContent>
            </Card>
          </div>

          {/* Sidebar - Validação ATS */}
          <div className="sidebar">
            <Card>
              <CardHeader>
                <CardTitle>Compatibilidade ATS</CardTitle>
              </CardHeader>
              <CardContent>
                <ATSScoreBar score={data.atsScore} className="mb-4" />
                <p className="text-sm text-secondary">
                  {data.atsScore >= 60 
                    ? "Seu currículo está pronto para exportação!" 
                    : "Complete mais campos para atingir o mínimo de 60% necessário para exportar."
                  }
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Validação em Tempo Real</CardTitle>
              </CardHeader>
              <CardContent>
                <LiveValidationAlerts alerts={data.alertas} />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Dicas ATS</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-sm">
                  <h4 className="font-medium text-primary mb-2">✅ Recomendado:</h4>
                  <ul className="space-y-1 text-secondary">
                    <li>• Use fontes padrão (Arial, Calibri)</li>
                    <li>• Evite colunas e tabelas</li>
                    <li>• Inclua palavras-chave da vaga</li>
                    <li>• Use formato DOCX</li>
                  </ul>
                </div>
                <div className="text-sm">
                  <h4 className="font-medium text-primary mb-2">❌ Evite:</h4>
                  <ul className="space-y-1 text-secondary">
                    <li>• Emojis e símbolos especiais</li>
                    <li>• Imagens e gráficos</li>
                    <li>• Caixas de texto</li>
                    <li>• Formatação complexa</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}