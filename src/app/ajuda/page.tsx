"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, HelpCircle, FileText, Shield, Download, Mail } from "lucide-react"
import Link from "next/link"

export default function Ajuda() {
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
              <h1 className="text-2xl font-bold text-gray-900 ml-4">Central de Ajuda</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          {/* FAQ */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <HelpCircle className="h-5 w-5 mr-2" />
                Perguntas Frequentes (FAQ)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">O que é um sistema ATS?</h3>
                <p className="text-gray-600">
                  ATS (Applicant Tracking System) são sistemas automatizados que empresas usam para filtrar currículos. 
                  Eles escaneiam documentos em busca de palavras-chave, formatação adequada e informações relevantes 
                  antes que um recrutador humano veja seu currículo.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Por que meu currículo precisa ser compatível com ATS?</h3>
                <p className="text-gray-600">
                  Mais de 90% das grandes empresas usam sistemas ATS. Se seu currículo não for compatível, 
                  pode ser rejeitado automaticamente antes mesmo de ser visto por um recrutador, 
                  independentemente de suas qualificações.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Qual é o score mínimo para exportar?</h3>
                <p className="text-gray-600">
                  Exigimos um score mínimo de 60% para garantir que seu currículo tenha as informações 
                  essenciais e formatação adequada. Isso aumenta significativamente suas chances de 
                  passar pela triagem automatizada.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Posso usar o currículo em formato PDF?</h3>
                <p className="text-gray-600">
                  Recomendamos fortemente o formato DOCX, pois é mais facilmente lido pelos sistemas ATS. 
                  PDFs podem ter problemas de compatibilidade, especialmente se contiverem elementos gráficos 
                  ou formatação complexa.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Como funcionam as validações em tempo real?</h3>
                <p className="text-gray-600">
                  O CurrículoX analisa continuamente o conteúdo que você digita, identificando elementos 
                  que podem causar problemas com sistemas ATS, como emojis, símbolos especiais, 
                  formatação inadequada e ausência de informações importantes.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Dicas ATS */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="h-5 w-5 mr-2" />
                Dicas para Otimização ATS
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">✅ O que FAZER:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Use fontes padrão como Arial, Calibri ou Times New Roman</li>
                  <li>• Mantenha formatação simples e limpa</li>
                  <li>• Inclua palavras-chave relevantes da descrição da vaga</li>
                  <li>• Use títulos de seção claros (EXPERIÊNCIA, FORMAÇÃO, HABILIDADES)</li>
                  <li>• Salve sempre em formato DOCX</li>
                  <li>• Use bullet points simples (• ou -)</li>
                  <li>• Inclua informações de contato completas</li>
                  <li>• Mantenha layout de uma coluna</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">❌ O que EVITAR:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Emojis e símbolos especiais (★, ♦, •, etc.)</li>
                  <li>• Imagens, gráficos ou elementos visuais</li>
                  <li>• Colunas múltiplas ou layouts complexos</li>
                  <li>• Caixas de texto ou elementos flutuantes</li>
                  <li>• Cabeçalhos e rodapés com informações importantes</li>
                  <li>• Tabelas para organizar informações</li>
                  <li>• Fontes decorativas ou muito estilizadas</li>
                  <li>• Cores de fundo ou texto colorido</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">🎯 Palavras-chave Estratégicas:</h3>
                <p className="text-gray-600 mb-2">
                  Analise a descrição da vaga e inclua palavras-chave relevantes naturalmente no seu currículo:
                </p>
                <ul className="space-y-1 text-gray-600">
                  <li>• Tecnologias específicas mencionadas na vaga</li>
                  <li>• Soft skills requisitadas</li>
                  <li>• Certificações e qualificações</li>
                  <li>• Metodologias de trabalho (Agile, Scrum, etc.)</li>
                  <li>• Idiomas e níveis de proficiência</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Como Usar */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="h-5 w-5 mr-2" />
                Como Usar o Currículo ATS Pro
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">1. Criar Novo Currículo</h4>
                  <p className="text-gray-600 text-sm">
                    Use o editor do CurrículoX para criar um currículo do zero com validação ATS em tempo real.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">2. Validar Currículo Existente</h4>
                  <p className="text-gray-600 text-sm">
                    Cole o conteúdo do seu currículo atual para análise e sugestões de melhoria.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">3. Monitorar Score ATS</h4>
                  <p className="text-gray-600 text-sm">
                    Acompanhe em tempo real a compatibilidade do seu currículo com sistemas ATS.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">4. Exportar DOCX</h4>
                  <p className="text-gray-600 text-sm">
                    Baixe seu currículo em formato DOCX otimizado para máxima compatibilidade.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">5. Gerenciar Histórico</h4>
                  <p className="text-gray-600 text-sm">
                    Acesse e gerencie todas as versões dos seus currículos no histórico.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">6. Sugestões Inteligentes</h4>
                  <p className="text-gray-600 text-sm">
                    Receba sugestões de palavras-chave e melhorias baseadas na sua área profissional.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contato */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                Precisa de Mais Ajuda?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center space-y-4">
                <p className="text-gray-600">
                  Não encontrou a resposta que procurava? Nossa equipe está aqui para ajudar!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="outline">
                    <Mail className="mr-2 h-4 w-4" />
                    Enviar E-mail
                  </Button>
                  <Button variant="outline">
                    <HelpCircle className="mr-2 h-4 w-4" />
                    Chat de Suporte
                  </Button>
                </div>
                <p className="text-sm text-gray-500">
                  Tempo médio de resposta: 2-4 horas úteis
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}