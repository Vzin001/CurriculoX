import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Shield, Download, CheckCircle } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <FileText className="h-8 w-8 text-blue-600 mr-3" />
              <h1 className="text-2xl font-bold text-gray-900">Currículo ATS Pro</h1>
            </div>
            <nav className="flex space-x-4">
              <Link href="/criar">
                <Button variant="outline">Criar Currículo</Button>
              </Link>
              <Link href="/validador">
                <Button variant="outline">Validador ATS</Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Crie currículos que passam pelos robôs de recrutamento
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Aplicação especializada para criar currículos 100% compatíveis com sistemas ATS. 
            Validação automática, alertas inteligentes e exportação em formato DOCX otimizado.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/criar">
              <Button size="lg" className="w-full sm:w-auto">
                <FileText className="mr-2 h-5 w-5" />
                Criar Meu Currículo
              </Button>
            </Link>
            <Link href="/validador">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                <Shield className="mr-2 h-5 w-5" />
                Validar Currículo Existente
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Por que usar o Currículo ATS Pro?
            </h3>
            <p className="text-lg text-gray-600">
              Funcionalidades desenvolvidas especificamente para garantir compatibilidade com ATS
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Shield className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Validação ATS em Tempo Real</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Sistema inteligente que detecta automaticamente elementos que podem ser 
                  ignorados pelos robôs de recrutamento, com alertas e sugestões de correção.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Download className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle>Exportação Otimizada</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Geração automática em formato DOCX com formatação limpa, fontes padrão 
                  e layout sem colunas ou elementos gráficos que confundem os ATS.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CheckCircle className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle>Score de Compatibilidade</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Pontuação em tempo real que indica o nível de compatibilidade do seu 
                  currículo com sistemas ATS, garantindo máxima taxa de aprovação.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-white mb-4">
            Pronto para criar seu currículo ATS-friendly?
          </h3>
          <p className="text-xl text-blue-100 mb-8">
            Comece agora e aumente suas chances de passar pela primeira triagem automatizada
          </p>
          <Link href="/criar">
            <Button size="lg" variant="secondary">
              <FileText className="mr-2 h-5 w-5" />
              Começar Agora - É Grátis
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <FileText className="h-6 w-6 text-blue-400 mr-2" />
                <span className="text-lg font-bold">Currículo ATS Pro</span>
              </div>
              <p className="text-gray-400">
                A solução definitiva para currículos compatíveis com sistemas ATS.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Funcionalidades</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Criação de Currículo</li>
                <li>Validador ATS</li>
                <li>Exportação DOCX</li>
                <li>Score de Compatibilidade</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Recursos</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Histórico de Versões</li>
                <li>Sincronização na Nuvem</li>
                <li>Sugestões Inteligentes</li>
                <li>Modo Preto & Branco</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Suporte</h4>
              <ul className="space-y-2 text-gray-400">
                <li>FAQ</li>
                <li>Dicas ATS</li>
                <li>Contato</li>
                <li>Ajuda</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Currículo ATS Pro. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}