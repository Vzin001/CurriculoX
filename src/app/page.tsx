import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Shield, Download, CheckCircle } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="header">
        <div className="header__container">
          <div className="header__content py-6">
            <div className="header__left">
              <FileText className="h-8 w-8 text-blue-600 mr-3" />
              <h1 className="text-2xl font-bold text-primary">CurrículoX</h1>
            </div>
            <nav className="header__nav">
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
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-primary mb-6">
            Currículos que passam pelos robôs de recrutamento
          </h2>
          <p className="text-xl text-secondary mb-8 max-w-2xl mx-auto">
            Aplicação multiplataforma para criar currículos 100% compatíveis com sistemas ATS. 
            Geração em .DOCX, validação automática, alertas inteligentes e exportação com 100% de compatibilidade.
          </p>
          <div className="flex flex-col gap-4 justify-center flex--md-row">
            <Link href="/criar">
              <Button size="lg" className="w-full">
                <FileText className="mr-2 h-5 w-5" />
                Criar Meu Currículo
              </Button>
            </Link>
            <Link href="/validador">
              <Button variant="outline" size="lg" className="w-full">
                <Shield className="mr-2 h-5 w-5" />
                Validar Currículo Existente
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-primary mb-4">
              Por que usar o CurrículoX?
            </h3>
            <p className="text-lg text-secondary">
              Plataforma completa desenvolvida especificamente para garantir compatibilidade com ATS
            </p>
          </div>
          
          <div className="grid grid--md-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Shield className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Validação ATS em Tempo Real</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-secondary">
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
                <p className="text-secondary">
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
                <p className="text-secondary">
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
        <div className="max-w-4xl mx-auto text-center px-4">
          <h3 className="text-3xl font-bold text-white mb-4">
            Pronto para criar seu currículo ATS-friendly?
          </h3>
          <p className="text-xl mb-8" style={{ color: '#dbeafe' }}>
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
        <div className="container">
          <div className="grid grid--md-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <FileText className="h-6 w-6 text-blue-400 mr-2" />
                <span className="text-lg font-bold">CurrículoX</span>
              </div>
              <p style={{ color: '#9ca3af' }}>
                A plataforma definitiva para currículos compatíveis com sistemas ATS.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Funcionalidades</h4>
              <ul className="space-y-2" style={{ color: '#9ca3af' }}>
                <li>Criação de Currículo</li>
                <li>Validador ATS</li>
                <li>Exportação DOCX</li>
                <li>Score de Compatibilidade</li>
                <li>Histórico de Versões</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Recursos</h4>
              <ul className="space-y-2" style={{ color: '#9ca3af' }}>
                <li>Sincronização na Nuvem</li>
                <li>Sugestões Inteligentes</li>
                <li>Modo Preto & Branco</li>
                <li>Versão Desktop</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Suporte</h4>
             <ul className="space-y-2" style={{ color: '#9ca3af' }}>
                <li>FAQ</li>
                <li>Dicas ATS</li>
                <li>Contato</li>
                <li>Perfil</li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center" style={{ borderColor: '#1f2937', color: '#9ca3af' }}>
            <p>&copy; 2025 CurrículoX. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}