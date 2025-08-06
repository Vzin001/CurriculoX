# Currículo ATS Pro

Aplicação multiplataforma para criação de currículos compatíveis com sistemas ATS (Applicant Tracking Systems). Desenvolvida com Next.js, oferece validação automática, alertas inteligentes e exportação otimizada em formato DOCX.

## 🚀 Funcionalidades

### ✅ Principais Recursos
- **Criação de Currículo ATS-Friendly**: Editor intuitivo com validação em tempo real
- **Validador ATS**: Analise currículos existentes e receba sugestões de melhoria
- **Score de Compatibilidade**: Pontuação em tempo real (0-100%) da compatibilidade ATS
- **Exportação DOCX**: Geração automática em formato otimizado para sistemas ATS
- **Alertas Inteligentes**: Detecção automática de elementos problemáticos
- **Interface Limpa**: Design minimalista focado na funcionalidade

### 🎯 Validações ATS
- Detecção de emojis e símbolos especiais
- Verificação de formatação inadequada
- Análise de estrutura do conteúdo
- Validação de campos obrigatórios
- Sugestões de palavras-chave

### 📄 Exportação Otimizada
- Formato DOCX com máxima compatibilidade
- Fontes padrão (Arial, Calibri)
- Layout sem colunas ou elementos gráficos
- Nomenclatura automática: `Curriculo_[Nome]_[Ano].docx`

## 🛠️ Tecnologias

- **Frontend**: Next.js 14 + TypeScript
- **Styling**: Tailwind CSS
- **Componentes**: Componentes customizados com Radix UI
- **Exportação**: docx.js para geração de documentos
- **Validação**: Zod + React Hook Form
- **Ícones**: Lucide React
- **Backend**: Firebase (Auth + Firestore) - Configuração opcional

## 📦 Instalação

1. Clone o repositório:
```bash
git clone [repository-url]
cd curriculo-ats-pro
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente (opcional):
```bash
cp .env.local.example .env.local
# Edite .env.local com suas configurações do Firebase
```

4. Execute o projeto:
```bash
npm run dev
```

5. Acesse: `http://localhost:3000`

## 🎨 Estrutura do Projeto

```
src/
├── app/                    # App Router (Next.js 14)
│   ├── criar/             # Página de criação de currículo
│   ├── validador/         # Página de validação ATS
│   ├── ajuda/             # Central de ajuda e FAQ
│   └── page.tsx           # Página inicial
├── components/            # Componentes reutilizáveis
│   ├── ui/                # Componentes base da UI
│   ├── ATSScoreBar.tsx    # Barra de pontuação ATS
│   ├── LiveValidationAlerts.tsx # Alertas em tempo real
│   └── ExportButton.tsx   # Botão de exportação
├── lib/                   # Utilitários e configurações
│   ├── utils.ts           # Funções utilitárias
│   ├── firebase.ts        # Configuração Firebase
│   └── docx-generator.ts  # Gerador de documentos DOCX
└── types/                 # Definições de tipos TypeScript
    └── curriculum.ts      # Tipos do currículo
```

## 🔧 Configuração Firebase (Opcional)

Para habilitar sincronização na nuvem e autenticação:

1. Crie um projeto no [Firebase Console](https://console.firebase.google.com)
2. Ative Authentication e Firestore
3. Copie as configurações para `.env.local`
4. Configure as regras de segurança do Firestore

## 📱 Funcionalidades Detalhadas

### Criação de Currículo (`/criar`)
- Formulário estruturado com seções organizadas
- Validação ATS em tempo real
- Score de compatibilidade dinâmico
- Campos para experiências e formações múltiplas
- Exportação habilitada apenas com score ≥ 60%

### Validador ATS (`/validador`)
- Análise de conteúdo existente
- Checklist de compatibilidade
- Sugestões personalizadas de melhoria
- Score detalhado com explicações

### Central de Ajuda (`/ajuda`)
- FAQ completo sobre sistemas ATS
- Dicas de otimização
- Guia de uso da aplicação
- Informações de contato

## 🎯 Critérios ATS

### ✅ Elementos Recomendados
- Fontes padrão (Arial, Calibri, Times New Roman)
- Layout de coluna única
- Títulos de seção claros
- Bullet points simples
- Formato DOCX
- Palavras-chave relevantes

### ❌ Elementos a Evitar
- Emojis e símbolos especiais
- Imagens e gráficos
- Colunas múltiplas
- Caixas de texto
- Tabelas complexas
- Formatação excessiva

## 🚀 Deploy

### Vercel (Recomendado)
```bash
npm run build
# Deploy automático via GitHub integration
```

### Outros Provedores
```bash
npm run build
npm start
```

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 📞 Suporte

- **Email**: suporte@curriculoatspro.com
- **FAQ**: Acesse `/ajuda` na aplicação
- **Issues**: Use o sistema de issues do GitHub

---

**Currículo ATS Pro** - Maximize suas chances de passar pela triagem automatizada! 🎯