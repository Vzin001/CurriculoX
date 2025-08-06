"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, User, Settings, Bell, Download, Trash2 } from "lucide-react"
import Link from "next/link"

export default function PerfilUsuario() {
  const [userData, setUserData] = useState({
    nome: "João Silva",
    email: "joao@email.com",
    telefone: "(11) 99999-9999",
    cidade: "São Paulo, SP"
  })

  const [preferences, setPreferences] = useState({
    autoSave: true,
    notifications: true,
    darkMode: false,
    defaultFont: "Arial",
    exportFormat: "DOCX"
  })

  const handleSaveProfile = () => {
    // Salvar perfil no Firebase
    alert("Perfil salvo com sucesso!")
  }

  const handleSavePreferences = () => {
    // Salvar preferências no Firebase
    alert("Preferências salvas com sucesso!")
  }

  const handleDeleteAccount = () => {
    if (confirm("Tem certeza que deseja excluir sua conta? Esta ação não pode ser desfeita.")) {
      // Excluir conta do Firebase
      alert("Conta excluída com sucesso!")
    }
  }

  const handleExportData = () => {
    // Exportar todos os dados do usuário
    const dataToExport = {
      profile: userData,
      preferences: preferences,
      curriculos: [] // Buscar do Firebase
    }
    
    const blob = new Blob([JSON.stringify(dataToExport, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `curriculo-x-dados-${new Date().toISOString().split('T')[0]}.json`
    a.click()
    URL.revokeObjectURL(url)
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
              <h1 className="text-2xl font-bold text-gray-900 ml-4">Meu Perfil</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Informações do Perfil */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <User className="h-5 w-5 mr-2" />
                  Informações Pessoais
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Nome Completo
                    </label>
                    <Input
                      value={userData.nome}
                      onChange={(e) => setUserData(prev => ({ ...prev, nome: e.target.value }))}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      E-mail
                    </label>
                    <Input
                      type="email"
                      value={userData.email}
                      onChange={(e) => setUserData(prev => ({ ...prev, email: e.target.value }))}
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Telefone
                    </label>
                    <Input
                      value={userData.telefone}
                      onChange={(e) => setUserData(prev => ({ ...prev, telefone: e.target.value }))}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Cidade/Estado
                    </label>
                    <Input
                      value={userData.cidade}
                      onChange={(e) => setUserData(prev => ({ ...prev, cidade: e.target.value }))}
                    />
                  </div>
                </div>
                <Button onClick={handleSaveProfile}>
                  Salvar Informações
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Settings className="h-5 w-5 mr-2" />
                  Preferências
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Salvamento Automático</p>
                    <p className="text-sm text-gray-600">Salvar automaticamente enquanto você digita</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={preferences.autoSave}
                    onChange={(e) => setPreferences(prev => ({ ...prev, autoSave: e.target.checked }))}
                    className="h-4 w-4"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Notificações</p>
                    <p className="text-sm text-gray-600">Receber alertas sobre atualizações</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={preferences.notifications}
                    onChange={(e) => setPreferences(prev => ({ ...prev, notifications: e.target.checked }))}
                    className="h-4 w-4"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Modo Escuro (Edição)</p>
                    <p className="text-sm text-gray-600">Tema escuro para edição (não afeta exportação)</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={preferences.darkMode}
                    onChange={(e) => setPreferences(prev => ({ ...prev, darkMode: e.target.checked }))}
                    className="h-4 w-4"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Fonte Padrão para Exportação
                  </label>
                  <select
                    value={preferences.defaultFont}
                    onChange={(e) => setPreferences(prev => ({ ...prev, defaultFont: e.target.value }))}
                    className="w-full p-2 border border-gray-300 rounded-md"
                  >
                    <option value="Arial">Arial</option>
                    <option value="Calibri">Calibri</option>
                    <option value="Times New Roman">Times New Roman</option>
                  </select>
                </div>

                <Button onClick={handleSavePreferences}>
                  Salvar Preferências
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar - Estatísticas e Ações */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Estatísticas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Currículos criados:</span>
                  <span className="text-sm font-medium">5</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Exportações:</span>
                  <span className="text-sm font-medium">12</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Score ATS médio:</span>
                  <span className="text-sm font-medium">78%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Membro desde:</span>
                  <span className="text-sm font-medium">Jan 2025</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Dados e Privacidade</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={handleExportData}
                >
                  <Download className="mr-2 h-4 w-4" />
                  Exportar Meus Dados
                </Button>
                <p className="text-xs text-gray-500">
                  Baixe todos os seus dados em formato JSON
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-red-600">Zona de Perigo</CardTitle>
              </CardHeader>
              <CardContent>
                <Button
                  variant="destructive"
                  className="w-full"
                  onClick={handleDeleteAccount}
                >
                  <Trash2 className="mr-2 h-4 w-4" />
                  Excluir Conta
                </Button>
                <p className="text-xs text-gray-500 mt-2">
                  Esta ação não pode ser desfeita. Todos os seus dados serão permanentemente removidos.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Suporte</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link href="/ajuda">
                  <Button variant="outline" className="w-full">
                    Central de Ajuda
                  </Button>
                </Link>
                <Button variant="outline" className="w-full">
                  <Bell className="mr-2 h-4 w-4" />
                  Contatar Suporte
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}