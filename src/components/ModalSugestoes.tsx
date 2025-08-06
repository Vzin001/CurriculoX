import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { X, Lightbulb, Target, Zap } from "lucide-react"

interface ModalSugestoesProps {
  isOpen: boolean
  onClose: () => void
  area?: string
  score: number
}

export function ModalSugestoes({ isOpen, onClose, area = "geral", score }: ModalSugestoesProps) {
  const [selectedCategory, setSelectedCategory] = useState("palavras-chave")

  if (!isOpen) return null

  const sugestoesPorArea = {
    "tecnologia": {
      "palavras-chave": [
        "JavaScript", "React", "Node.js", "Python", "SQL", "Git", "Docker", "AWS",
        "Agile", "Scrum", "API REST", "Microservices", "DevOps", "CI/CD"
      ],
      "habilidades": [
        "Desenvolvimento Full Stack", "Arquitetura de Software", "Banco de Dados",
        "Metodologias Ágeis", "Versionamento de Código", "Testes Automatizados"
      ],
      "verbos": [
        "Desenvolveu", "Implementou", "Otimizou", "Arquitetou", "Integrou",
        "Automatizou", "Liderou", "Colaborou", "Solucionou", "Entregou"
      ]
    },
    "marketing": {
      "palavras-chave": [
        "Marketing Digital", "SEO", "SEM", "Google Analytics", "Facebook Ads",
        "Instagram", "LinkedIn", "Content Marketing", "Email Marketing", "CRM"
      ],
      "habilidades": [
        "Gestão de Campanhas", "Análise de Métricas", "Criação de Conteúdo",
        "Estratégia Digital", "Automação de Marketing", "Growth Hacking"
      ],
      "verbos": [
        "Gerenciou", "Criou", "Aumentou", "Otimizou", "Analisou",
        "Desenvolveu", "Executou", "Coordenou", "Planejou", "Mensurou"
      ]
    },
    "geral": {
      "palavras-chave": [
        "Liderança", "Comunicação", "Trabalho em Equipe", "Resolução de Problemas",
        "Gestão de Projetos", "Análise de Dados", "Inglês", "Excel", "PowerPoint"
      ],
      "habilidades": [
        "Comunicação Interpessoal", "Pensamento Analítico", "Adaptabilidade",
        "Orientação a Resultados", "Gestão de Tempo", "Negociação"
      ],
      "verbos": [
        "Liderou", "Coordenou", "Gerenciou", "Desenvolveu", "Implementou",
        "Melhorou", "Organizou", "Supervisionou", "Treinou", "Apresentou"
      ]
    }
  }

  const sugestoes = sugestoesPorArea[area as keyof typeof sugestoesPorArea] || sugestoesPorArea.geral

  const dicasScore = score < 60 
    ? [
        "Complete todas as seções obrigatórias (nome, email, telefone)",
        "Adicione pelo menos uma experiência profissional",
        "Inclua um resumo profissional de pelo menos 50 caracteres",
        "Liste suas principais habilidades técnicas"
      ]
    : score < 80
    ? [
        "Adicione mais detalhes nas descrições das experiências",
        "Inclua palavras-chave específicas da sua área",
        "Adicione mais habilidades relevantes",
        "Revise a formatação para garantir compatibilidade ATS"
      ]
    : [
        "Seu currículo está excelente!",
        "Continue atualizando com novas experiências",
        "Personalize para cada vaga específica",
        "Mantenha o formato limpo e ATS-friendly"
      ]

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-2xl font-bold text-gray-900">Sugestões Inteligentes</h2>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>

        <div className="p-6">
          <div className="grid lg:grid-cols-4 gap-6">
            {/* Menu de Categorias */}
            <div className="lg:col-span-1">
              <div className="space-y-2">
                <button
                  onClick={() => setSelectedCategory("palavras-chave")}
                  className={`w-full text-left p-3 rounded-md transition-colors ${
                    selectedCategory === "palavras-chave" 
                      ? "bg-blue-100 text-blue-700 border border-blue-200" 
                      : "hover:bg-gray-100"
                  }`}
                >
                  <Target className="h-4 w-4 inline mr-2" />
                  Palavras-chave
                </button>
                <button
                  onClick={() => setSelectedCategory("habilidades")}
                  className={`w-full text-left p-3 rounded-md transition-colors ${
                    selectedCategory === "habilidades" 
                      ? "bg-blue-100 text-blue-700 border border-blue-200" 
                      : "hover:bg-gray-100"
                  }`}
                >
                  <Zap className="h-4 w-4 inline mr-2" />
                  Habilidades
                </button>
                <button
                  onClick={() => setSelectedCategory("verbos")}
                  className={`w-full text-left p-3 rounded-md transition-colors ${
                    selectedCategory === "verbos" 
                      ? "bg-blue-100 text-blue-700 border border-blue-200" 
                      : "hover:bg-gray-100"
                  }`}
                >
                  <Lightbulb className="h-4 w-4 inline mr-2" />
                  Verbos de Ação
                </button>
                <button
                  onClick={() => setSelectedCategory("dicas")}
                  className={`w-full text-left p-3 rounded-md transition-colors ${
                    selectedCategory === "dicas" 
                      ? "bg-blue-100 text-blue-700 border border-blue-200" 
                      : "hover:bg-gray-100"
                  }`}
                >
                  <Lightbulb className="h-4 w-4 inline mr-2" />
                  Dicas Personalizadas
                </button>
              </div>
            </div>

            {/* Conteúdo das Sugestões */}
            <div className="lg:col-span-3">
              {selectedCategory === "dicas" ? (
                <Card>
                  <CardHeader>
                    <CardTitle>Dicas Baseadas no Seu Score ({score}%)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {dicasScore.map((dica, index) => (
                        <div key={index} className="flex items-start gap-3 p-3 bg-blue-50 rounded-md">
                          <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                            {index + 1}
                          </div>
                          <p className="text-blue-700">{dica}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <Card>
                  <CardHeader>
                    <CardTitle>
                      {selectedCategory === "palavras-chave" && "Palavras-chave Recomendadas"}
                      {selectedCategory === "habilidades" && "Habilidades Sugeridas"}
                      {selectedCategory === "verbos" && "Verbos de Ação Impactantes"}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
                      {sugestoes[selectedCategory as keyof typeof sugestoes]?.map((item, index) => (
                        <div
                          key={index}
                          className="p-2 bg-gray-100 rounded-md text-sm hover:bg-blue-100 cursor-pointer transition-colors"
                          onClick={() => {
                            navigator.clipboard.writeText(item)
                            // Mostrar feedback visual
                          }}
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                    <p className="text-xs text-gray-500 mt-4">
                      💡 Clique em qualquer item para copiar para a área de transferência
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>

        <div className="border-t p-6 flex justify-end">
          <Button onClick={onClose}>
            Fechar
          </Button>
        </div>
      </div>
    </div>
  )
}